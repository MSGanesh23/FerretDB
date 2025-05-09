// Copyright 2021 FerretDB Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package handler

import (
	"context"

	"github.com/FerretDB/wire/wirebson"

	"github.com/FerretDB/FerretDB/v2/internal/handler/middleware"
	"github.com/FerretDB/FerretDB/v2/internal/util/lazyerrors"
	"github.com/FerretDB/FerretDB/v2/internal/util/must"
)

// msgGetCmdLineOpts implements `getCmdLineOpts` command.
//
// The passed context is canceled when the client connection is closed.
func (h *Handler) msgGetCmdLineOpts(connCtx context.Context, req *middleware.Request) (*middleware.Response, error) {
	spec, err := req.OpMsg.RawDocument()
	if err != nil {
		return nil, lazyerrors.Error(err)
	}

	if _, _, err = h.s.CreateOrUpdateByLSID(connCtx, spec); err != nil {
		return nil, err
	}

	return middleware.ResponseMsg(wirebson.MustDocument(
		"argv", must.NotFail(wirebson.NewArray("ferretdb")),
		"parsed", must.NotFail(wirebson.NewDocument()),
		"ok", float64(1),
	))
}
