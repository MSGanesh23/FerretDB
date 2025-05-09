db.books.insertMany([
  {
    _id: 'pride_prejudice_1813',
    title: 'Pride and Prejudice',
    authors: [{ name: 'Jane Austen', nationality: 'British' }],
    genres: ['Romance', 'Classic', 'Historical Fiction'],
    publication: {
      date: '1813-01-28T00:00:00Z',
      publisher: {
        name: 'T. Egerton',
        location: {
          city: 'London',
          country: 'United Kingdom',
          geolocation: { type: 'Point', coordinates: [-0.1276, 51.5072] }
        }
      }
    },
    languages: ['English', 'Spanish', 'French'],
    availability: [
      {
        country: 'United States',
        format: ['Paperback', 'Hardcover', 'E-book'],
        released: true,
        release_date: '2000-05-01T00:00:00Z'
      },
      { country: 'India', format: ['E-book'], released: true, release_date: '2010-01-01T00:00:00Z' }
    ],
    isbn: '978-0141439518',
    pages: 448,
    price: { value: 19.99, currency: 'USD' },
    keywords: ['Elizabeth Bennet', 'Mr. Darcy', '19th Century'],
    reviews: [
      { user: 'johnny_moe', rating: 5, comment: 'An all-time favorite!' },
      { user: 'jane_smith', rating: 4, comment: 'A classic tale with timeless lessons.' }
    ],
    textual_analysis: {
      description: 'A story of love and societal expectations in 19th-century England.',
      themes: ['Pride', 'Prejudice', 'Class', 'Marriage']
    },
    analytics: {
      average_rating: 4.5,
      ratings_count: 1500,
      sales: { units_sold: 1000000, countries: ['United States', 'United Kingdom', 'India'] }
    },
    digital_metadata: { download_link: 'https://www.gutenberg.org/ebooks/1342', formats: ['PDF', 'EPUB', 'MOBI'] },
    summary:
      'This novel portrays the life and challenges of Elizabeth Bennet as she navigates societal expectations, class prejudice, and romance. The book explores the evolving relationship between Elizabeth and Mr. Darcy, shedding light on the virtues of understanding and self-awareness.'
  },
  {
    _id: 'moby_dick_1851',
    title: 'Moby Dick',
    authors: [{ name: 'Herman Melville', nationality: 'American' }],
    genres: ['Adventure', 'Classic', 'Sea Story'],
    publication: {
      date: '1851-11-14T00:00:00Z',
      publisher: {
        name: 'Harper & Brothers',
        location: {
          city: 'New York',
          country: 'United States',
          geolocation: { type: 'Point', coordinates: [-74.006, 40.7128] }
        }
      }
    },
    languages: ['English'],
    availability: [
      {
        country: 'United States',
        format: ['Paperback', 'Hardcover', 'E-book'],
        released: true,
        release_date: '2001-05-01T00:00:00Z'
      }
    ],
    isbn: '978-1503280786',
    pages: 378,
    price: { value: 15.99, currency: 'USD' },
    keywords: ['Captain Ahab', 'Whaling', 'Revenge'],
    reviews: [{ user: 'sailor_sam', rating: 5, comment: 'A thrilling adventure on the high seas.' }],
    textual_analysis: {
      description: 'A thrilling tale of obsession and revenge at sea.',
      themes: ['Obsession', 'Revenge', 'Fate']
    },
    analytics: {
      average_rating: 4.3,
      ratings_count: 800,
      sales: { units_sold: 500000, countries: ['United States', 'United Kingdom'] }
    },
    digital_metadata: { download_link: 'https://www.gutenberg.org/ebooks/2701', formats: ['PDF', 'EPUB', 'MOBI'] },
    summary:
      'Ishmael recounts his journey aboard the whaling ship Pequod under the leadership of the obsessed Captain Ahab, who is driven to exact revenge on the legendary white whale, Moby Dick. The novel delves into themes of human struggle against nature and the destructive power of obsession.'
  },
  {
    _id: 'frankenstein_1818',
    title: 'Frankenstein',
    authors: [{ name: 'Mary Shelley', nationality: 'British' }],
    genres: ['Science Fiction', 'Horror', 'Classic'],
    publication: {
      date: '1818-01-01T00:00:00Z',
      publisher: {
        name: 'Lackington, Hughes, Harding, Mavor & Jones',
        location: {
          city: 'London',
          country: 'United Kingdom',
          geolocation: { type: 'Point', coordinates: [-0.1276, 51.5072] }
        }
      }
    },
    languages: ['English'],
    availability: [
      {
        country: 'United Kingdom',
        format: ['Paperback', 'Hardcover', 'E-book'],
        released: true,
        release_date: '1818-01-01T00:00:00Z'
      }
    ],
    isbn: '978-0199537150',
    pages: 336,
    price: { value: 10.99, currency: 'USD' },
    keywords: ['Victor Frankenstein', 'Monster', 'Creation'],
    reviews: [{ user: 'science_geek', rating: 5, comment: 'A chilling exploration of ambition and consequence.' }],
    textual_analysis: {
      description: 'A dark tale of scientific ambition and its unintended consequences.',
      themes: ['Ambition', 'Morality', 'Isolation']
    },
    analytics: {
      average_rating: 4.7,
      ratings_count: 1200,
      sales: { units_sold: 600000, countries: ['United Kingdom', 'United States'] }
    },
    digital_metadata: { download_link: 'https://www.gutenberg.org/ebooks/84', formats: ['PDF', 'EPUB', 'MOBI'] },
    summary:
      'Victor Frankenstein creates life through unorthodox scientific methods but is horrified by his creation. As his creature seeks acceptance, the novel explores themes of responsibility, alienation, and the ethical limits of scientific experimentation.'
  },
  {
    _id: 'database_systems_2001',
    title: 'Database Systems: The Complete Book',
    authors: [
      { name: 'Hector Garcia-Molina', nationality: 'American' },
      { name: 'Jeffrey D. Ullman', nationality: 'American' },
      { name: 'Jennifer Widom', nationality: 'American' }
    ],
    genres: ['Computer Science', 'Database Management'],
    publication: {
      date: '2001-01-01T00:00:00Z',
      publisher: {
        name: 'Prentice Hall',
        location: {
          city: 'Upper Saddle River',
          country: 'United States',
          geolocation: { type: 'Point', coordinates: [-74.097, 40.998] }
        }
      }
    },
    languages: ['English'],
    availability: [
      {
        country: 'United States',
        format: ['Hardcover', 'Paperback'],
        released: true,
        release_date: '2001-01-01T00:00:00Z'
      }
    ],
    isbn: '978-0131873254',
    pages: 1119,
    price: { value: 175.99, currency: 'USD' },
    keywords: ['Database Design', 'SQL', 'Data Storage', 'Query Processing'],
    reviews: [
      { user: 'tech_reader', rating: 5, comment: 'Comprehensive resource for database systems.' },
      { user: 'db_enthusiast', rating: 4, comment: 'In-depth coverage but quite dense.' }
    ],
    textual_analysis: {
      description:
        'An extensive guide covering database design, use, and implementation, suitable for both students and professionals.',
      themes: ['Database Design', 'SQL Standards', 'Data Storage', 'Transaction Management']
    },
    analytics: {
      average_rating: 4.5,
      ratings_count: 100,
      sales: { units_sold: 50000, countries: ['United States', 'Canada', 'United Kingdom'] }
    },
    digital_metadata: { download_link: null, formats: ['PDF', 'EPUB'] },
    summary:
      'This book offers a comprehensive exploration of database systems, focusing on both theoretical foundations and practical implementation aspects. It covers topics such as SQL standards, data storage, query processing, and transaction management, making it a valuable resource for understanding the complexities of database management systems.'
  },
  {
    _id: 'clean_code_2008',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authors: [{ name: 'Robert C. Martin', nationality: 'American' }],
    genres: ['Computer Science', 'Software Engineering', 'Programming'],
    publication: {
      date: '2008-08-01T00:00:00Z',
      publisher: {
        name: 'Prentice Hall',
        location: {
          city: 'Boston',
          country: 'United States',
          geolocation: { type: 'Point', coordinates: [-71.0598, 42.3601] }
        }
      }
    },
    languages: ['English'],
    availability: [
      {
        country: 'United States',
        format: ['Paperback', 'E-book'],
        released: true,
        release_date: '2008-08-01T00:00:00Z'
      }
    ],
    isbn: '978-0132350884',
    pages: 464,
    price: { value: 49.99, currency: 'USD' },
    keywords: ['Software Craftsmanship', 'Code Quality', 'Agile Development', 'Programming Best Practices'],
    reviews: [
      { user: 'dev_guru', rating: 5, comment: 'An essential guide for writing clean, maintainable code.' },
      {
        user: 'code_master',
        rating: 4,
        comment: 'Provides practical advice, though some examples are language-specific.'
      }
    ],
    textual_analysis: {
      description:
        'A comprehensive guide focusing on writing clean, readable, and maintainable code, emphasizing the principles of agile software craftsmanship.',
      themes: ['Code Quality', 'Best Practices', 'Software Maintenance', 'Agile Methodologies']
    },
    analytics: {
      average_rating: 4.7,
      ratings_count: 2500,
      sales: { units_sold: 150000, countries: ['United States', 'Canada', 'United Kingdom'] }
    },
    digital_metadata: { download_link: null, formats: ['PDF', 'EPUB'] },
    summary:
      'This book delves into the principles and practices of writing clean code. It offers insights into code readability, maintainability, and the importance of adhering to best practices in software development. Through real-world examples, it illustrates common pitfalls and how to avoid them, making it a valuable resource for both novice and experienced programmers.'
  }
])
