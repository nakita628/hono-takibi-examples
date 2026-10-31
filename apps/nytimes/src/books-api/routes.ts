import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'query', name: 'api-key', type: 'apiKey' }

export const getListsFormatRoute = createRoute({
  method: 'get',
  path: '/lists.{format}',
  summary: 'Best Seller List',
  operationId: 'GET_lists-format',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'jsonp'])
        .openapi({
          param: {
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'jsonp'], type: 'string' },
            'x-consoleDefault': 'json',
          },
        }),
    }),
    query: z.object({
      list: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the Times best-seller list. To get valid values, use a list names request.\n\nBe sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)',
            in: 'query',
            name: 'list',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'weeks-on-list': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of weeks that the best seller has been on list-name, as of bestsellers-date',
            in: 'query',
            name: 'weeks-on-list',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'bestsellers-date': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DD\n\nThe week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).',
            in: 'query',
            name: 'bestsellers-date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)',
            in: 'query',
            name: 'date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isbn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'International Standard Book Number, 10 or 13 digits',
            in: 'query',
            name: 'isbn',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'published-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DD\n\nThe date the best-seller list was published on NYTimes.com (compare bestsellers-date)',
            in: 'query',
            name: 'published-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rank: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The rank of the best seller on list-name as of bestsellers-date',
            in: 'query',
            name: 'rank',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'rank-last-week': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The rank of the best seller on list-name one week prior to bestsellers-date',
            in: 'query',
            name: 'rank-last-week',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().multipleOf(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the starting point of the result set',
            in: 'query',
            name: 'offset',
            schema: { multipleOf: 20, type: 'integer' },
            required: false,
          },
        }),
      'sort-order': z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the sort order of the result set',
            in: 'query',
            name: 'sort-order',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              last_modified: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z
                .array(
                  z
                    .object({
                      amazon_product_url: z.string().exactOptional(),
                      asterisk: z.int().exactOptional(),
                      bestsellers_date: z.string().exactOptional(),
                      book_details: z
                        .array(
                          z
                            .object({
                              age_group: z.string().exactOptional(),
                              author: z.string().exactOptional(),
                              contributor: z.string().exactOptional(),
                              contributor_note: z.string().exactOptional(),
                              description: z.string().exactOptional(),
                              price: z.int().exactOptional(),
                              primary_isbn10: z.string().exactOptional(),
                              primary_isbn13: z.string().exactOptional(),
                              publisher: z.string().exactOptional(),
                              title: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      dagger: z.int().exactOptional(),
                      display_name: z.string().exactOptional(),
                      isbns: z
                        .array(
                          z
                            .object({
                              isbn10: z.string().exactOptional(),
                              isbn13: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      list_name: z.string().exactOptional(),
                      published_date: z.string().exactOptional(),
                      rank: z.int().exactOptional(),
                      rank_last_week: z.int().exactOptional(),
                      reviews: z
                        .array(
                          z
                            .object({
                              article_chapter_link: z.string().exactOptional(),
                              book_review_link: z.string().exactOptional(),
                              first_chapter_link: z.string().exactOptional(),
                              sunday_review_link: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      weeks_on_list: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                last_modified: '2016-03-11T13:09:01-05:00',
                num_results: 1,
                results: [
                  {
                    amazon_product_url:
                      'http://www.amazon.com/Girls-Guide-Moving-On-Novel-ebook/dp/B00ZNE17B4?tag=thenewyorktim-20',
                    asterisk: 0,
                    bestsellers_date: '2016-03-05',
                    book_details: [
                      {
                        age_group: '',
                        author: 'Debbie Macomber',
                        contributor: 'by Debbie Macomber',
                        contributor_note: '',
                        description:
                          'A mother and her daughter-in-law both leave unhappy marriages and take up with new men.',
                        price: 0,
                        primary_isbn10: '0553391925',
                        primary_isbn13: '9780553391923',
                        publisher: 'Ballantine',
                        title: "A GIRL'S GUIDE TO MOVING ON",
                      },
                    ],
                    dagger: 0,
                    display_name: 'Hardcover Fiction',
                    isbns: [{ isbn10: '0553391925', isbn13: '9780553391923' }],
                    list_name: 'Hardcover Fiction',
                    published_date: '2016-03-20',
                    rank: 5,
                    rank_last_week: 2,
                    reviews: [
                      {
                        article_chapter_link: '',
                        book_review_link: '',
                        first_chapter_link: '',
                        sunday_review_link: '',
                      },
                    ],
                    weeks_on_list: 2,
                  },
                ],
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getListsBestSellersHistoryJsonRoute = createRoute({
  method: 'get',
  path: '/lists/best-sellers/history.json',
  summary: 'Best Seller History List',
  operationId: 'GET_lists-best-sellers-history-json',
  request: {
    query: z.object({
      'age-group': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The target age group for the best seller.',
            in: 'query',
            name: 'age-group',
            schema: { type: 'string' },
            required: false,
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).\n\nWhen searching the author field, you can specify any combination of first, middle and last names.\n\nWhen sort-by is set to author, the results will be sorted by author's first name. ",
            in: 'query',
            name: 'author',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contributor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).\n\nWhen searching, you can specify any combination of first, middle and last names of any of the contributors.\n\nWhen sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed. ',
            in: 'query',
            name: 'contributor',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isbn: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'International Standard Book Number, 10 or 13 digits\n\nA best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).',
            in: 'query',
            name: 'isbn',
            schema: { type: 'string' },
            required: false,
          },
        }),
      price: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The publisher's list price of the best seller, including decimal point",
            in: 'query',
            name: 'price',
            schema: { type: 'string' },
            required: false,
          },
        }),
      publisher: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standardized name of the publisher',
            in: 'query',
            name: 'publisher',
            schema: { type: 'string' },
            required: false,
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The title of the best seller\n\nWhen searching, you can specify a portion of a title or a full title.',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z
                .array(
                  z
                    .object({
                      age_group: z.string().exactOptional(),
                      author: z.string().exactOptional(),
                      contributor: z.string().exactOptional(),
                      contributor_note: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      isbns: z
                        .array(
                          z
                            .object({
                              isbn10: z.string().exactOptional(),
                              isbn13: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      price: z.int().exactOptional(),
                      publisher: z.string().exactOptional(),
                      ranks_history: z
                        .array(
                          z
                            .object({
                              asterisk: z.int().exactOptional(),
                              bestsellers_date: z.string().exactOptional(),
                              dagger: z.int().exactOptional(),
                              display_name: z.string().exactOptional(),
                              list_name: z.string().exactOptional(),
                              primary_isbn10: z.string().exactOptional(),
                              primary_isbn13: z.string().exactOptional(),
                              published_date: z.string().exactOptional(),
                              rank: z.int().exactOptional(),
                              ranks_last_week: z.any().nullable().exactOptional(),
                              weeks_on_list: z.int().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      reviews: z
                        .array(
                          z
                            .object({
                              article_chapter_link: z.string().exactOptional(),
                              book_review_link: z.string().exactOptional(),
                              first_chapter_link: z.string().exactOptional(),
                              sunday_review_link: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      title: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                num_results: 28970,
                results: [
                  {
                    age_group: '',
                    author: 'Sophia Amoruso',
                    contributor: 'by Sophia Amoruso',
                    contributor_note: '',
                    description: 'An online fashion retailer traces her path to success.',
                    isbns: [{ isbn10: '039916927X', isbn13: '9780399169274' }],
                    price: 0,
                    publisher: 'Portfolio/Penguin/Putnam',
                    ranks_history: [
                      {
                        asterisk: 0,
                        bestsellers_date: '2016-02-27',
                        dagger: 0,
                        display_name: 'Business',
                        list_name: 'Business Books',
                        primary_isbn10: '1591847931',
                        primary_isbn13: '9781591847939',
                        published_date: '2016-03-13',
                        rank: 8,
                        ranks_last_week: null,
                        weeks_on_list: 0,
                      },
                    ],
                    reviews: [
                      {
                        article_chapter_link: '',
                        book_review_link: '',
                        first_chapter_link: '',
                        sunday_review_link: '',
                      },
                    ],
                    title: '#GIRLBOSS',
                  },
                ],
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getListsNamesFormatRoute = createRoute({
  method: 'get',
  path: '/lists/names.{format}',
  summary: 'Best Seller List Names',
  operationId: 'GET_lists-names-format',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'jsonp'])
        .openapi({
          param: {
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'jsonp'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      'api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'api-key', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z
                .array(
                  z
                    .object({
                      display_name: z.string().exactOptional(),
                      list_name: z.string().exactOptional(),
                      list_name_encoded: z.string().exactOptional(),
                      newest_published_date: z.string().exactOptional(),
                      oldest_published_date: z.string().exactOptional(),
                      updated: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                num_results: 53,
                results: [
                  {
                    display_name: 'Combined Print & E-Book Fiction',
                    list_name: 'Combined Print and E-Book Fiction',
                    list_name_encoded: 'combined-print-and-e-book-fiction',
                    newest_published_date: '2016-03-20',
                    oldest_published_date: '2011-02-13',
                    updated: 'WEEKLY',
                  },
                ],
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getListsOverviewFormatRoute = createRoute({
  method: 'get',
  path: '/lists/overview.{format}',
  summary: 'Best Seller List Overview',
  operationId: 'GET_lists-overview-format',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'jsonp'])
        .openapi({
          param: {
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'jsonp'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      published_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The best-seller list publication date. YYYY-MM-DD\n\nYou do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.\n\nIf you do not include a published_date, the current week's best-sellers lists will be returned.",
            in: 'query',
            name: 'published_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'api-key', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z
                .object({
                  bestsellers_date: z.string().exactOptional(),
                  lists: z
                    .array(
                      z
                        .object({
                          books: z
                            .array(
                              z
                                .object({
                                  age_group: z.string().exactOptional(),
                                  author: z.string().exactOptional(),
                                  contributor: z.string().exactOptional(),
                                  contributor_note: z.string().exactOptional(),
                                  created_date: z.string().exactOptional(),
                                  description: z.string().exactOptional(),
                                  price: z.int().exactOptional(),
                                  primary_isbn10: z.string().exactOptional(),
                                  primary_isbn13: z.string().exactOptional(),
                                  publisher: z.string().exactOptional(),
                                  rank: z.int().exactOptional(),
                                  title: z.string().exactOptional(),
                                  updated_date: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          display_name: z.string().exactOptional(),
                          list_id: z.int().exactOptional(),
                          list_image: z.string().exactOptional(),
                          list_name: z.string().exactOptional(),
                          updated: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  published_date: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                num_results: 210,
                results: {
                  bestsellers_date: '2016-03-05',
                  lists: [
                    {
                      books: [
                        {
                          age_group: '',
                          author: 'Clive Cussler and Justin Scott',
                          contributor: 'by Clive Cussler and Justin Scott',
                          contributor_note: '',
                          created_date: '2016-03-10 12:00:22',
                          description:
                            'In the ninth book in this series, set in 1906, the New York detective Isaac Bell contends with a crime boss passing as a respectable businessman and a tycoon’s plot against President Theodore Roosevelt.',
                          price: 0,
                          primary_isbn10: '0698406427',
                          primary_isbn13: '9780698406421',
                          publisher: 'Putnam',
                          rank: 1,
                          title: 'THE GANGSTER',
                          updated_date: '2016-03-10 17:00:21',
                        },
                      ],
                      display_name: 'Combined Print & E-Book Fiction',
                      list_id: 704,
                      list_image:
                        'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399175954.jpg',
                      list_name: 'Combined Print and E-Book Fiction',
                      updated: 'WEEKLY',
                    },
                  ],
                  published_date: '2016-03-20',
                },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getListsDateListJsonRoute = createRoute({
  method: 'get',
  path: '/lists/{date}/{list}.json',
  summary: 'Best Seller List by Date',
  operationId: 'GET_lists-date-list-json',
  request: {
    params: z.object({
      date: z
        .string()
        .openapi({
          param: { in: 'path', name: 'date', required: true, schema: { type: 'string' } },
        }),
      list: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the Best Sellers List. You can get the full list from /lists/names.json',
            in: 'path',
            name: 'list',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      isbn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'International Standard Book Number, 10 or 13 digits',
            in: 'query',
            name: 'isbn',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'list-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the Times best-seller list. To get valid values, use a list names request.\n\nBe sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)',
            in: 'query',
            name: 'list-name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'published-date': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DD\n\nThe date the best-seller list was published on NYTimes.com (compare bestsellers-date)',
            in: 'query',
            name: 'published-date',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      'bestsellers-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DD\n\nThe week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).',
            in: 'query',
            name: 'bestsellers-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'weeks-on-list': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of weeks that the best seller has been on list-name, as of bestsellers-date',
            in: 'query',
            name: 'weeks-on-list',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      rank: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The rank of the best seller on list-name as of bestsellers-date',
            in: 'query',
            name: 'rank',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'rank-last-week': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The rank of the best seller on list-name one week prior to bestsellers-date',
            in: 'query',
            name: 'rank-last-week',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().multipleOf(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the starting point of the result set',
            in: 'query',
            name: 'offset',
            schema: { multipleOf: 20, type: 'integer' },
            required: false,
          },
        }),
      'sort-order': z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.',
            in: 'query',
            name: 'sort-order',
            schema: { enum: ['ASC', 'DESC'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              last_modified: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z
                .object({
                  bestsellers_date: z.string().exactOptional(),
                  books: z
                    .array(
                      z
                        .object({
                          age_group: z.string().exactOptional(),
                          amazon_product_url: z.string().exactOptional(),
                          article_chapter_link: z.string().exactOptional(),
                          asterisk: z.int().exactOptional(),
                          author: z.string().exactOptional(),
                          book_image: z.string().exactOptional(),
                          book_review_link: z.string().exactOptional(),
                          contributor: z.string().exactOptional(),
                          contributor_note: z.string().exactOptional(),
                          dagger: z.int().exactOptional(),
                          description: z.string().exactOptional(),
                          first_chapter_link: z.string().exactOptional(),
                          isbns: z
                            .array(
                              z
                                .object({
                                  isbn10: z.string().exactOptional(),
                                  isbn13: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          price: z.int().exactOptional(),
                          primary_isbn10: z.string().exactOptional(),
                          primary_isbn13: z.string().exactOptional(),
                          publisher: z.string().exactOptional(),
                          rank: z.int().exactOptional(),
                          rank_last_week: z.int().exactOptional(),
                          sunday_review_link: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          weeks_on_list: z.int().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  corrections: z.array(z.object({})).exactOptional(),
                  display_name: z.string().exactOptional(),
                  list_name: z.string().exactOptional(),
                  normal_list_ends_at: z.int().exactOptional(),
                  published_date: z.string().exactOptional(),
                  updated: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                last_modified: '2015-12-25T13:05:20-05:00',
                num_results: 15,
                results: {
                  bestsellers_date: '2015-12-19',
                  books: [
                    {
                      age_group: '',
                      amazon_product_url:
                        'http://www.amazon.com/The-Martian-Novel-Andy-Weir-ebook/dp/B00EMXBDMA?tag=thenewyorktim-20',
                      article_chapter_link: '',
                      asterisk: 0,
                      author: 'Andy Weir',
                      book_image:
                        'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780804139038.jpg',
                      book_review_link: '',
                      contributor: 'by Andy Weir',
                      contributor_note: '',
                      dagger: 0,
                      description:
                        'Separated from his crew, an astronaut embarks on a quest to stay alive on Mars. The basis of the movie.',
                      first_chapter_link: '',
                      isbns: [{ isbn10: '0804139024', isbn13: '9780804139021' }],
                      price: 0,
                      primary_isbn10: '0553418025',
                      primary_isbn13: '9780553418026',
                      publisher: 'Broadway',
                      rank: 1,
                      rank_last_week: 0,
                      sunday_review_link: '',
                      title: 'THE MARTIAN',
                      weeks_on_list: 60,
                    },
                  ],
                  corrections: [],
                  display_name: 'Paperback Trade Fiction',
                  list_name: 'Trade Fiction Paperback',
                  normal_list_ends_at: 10,
                  published_date: '2016-01-03',
                  updated: 'WEEKLY',
                },
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})

export const getReviewsFormatRoute = createRoute({
  method: 'get',
  path: '/reviews.{format}',
  summary: 'Reviews',
  operationId: 'GET_reviews-format',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'jsonp'])
        .openapi({
          param: {
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'jsonp'], type: 'string' },
          },
        }),
    }),
    query: z.object({
      isbn: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.',
            in: 'query',
            name: 'isbn',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      title: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.',
            in: 'query',
            name: 'title',
            schema: { type: 'string' },
            required: false,
          },
        }),
      author: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.',
            in: 'query',
            name: 'author',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'api-key': z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'api-key', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              copyright: z.string().exactOptional(),
              num_results: z.int().exactOptional(),
              results: z
                .array(
                  z
                    .object({
                      book_author: z.string().exactOptional(),
                      book_title: z.string().exactOptional(),
                      byline: z.string().exactOptional(),
                      isbn13: z.array(z.string()).exactOptional(),
                      publication_dt: z.string().exactOptional(),
                      summary: z.string().exactOptional(),
                      url: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            response: {
              value: {
                copyright: 'Copyright (c) 2016 The New York Times Company.  All Rights Reserved.',
                num_results: 2,
                results: [
                  {
                    book_author: 'Haruki Murakami',
                    book_title: '1Q84',
                    byline: 'JANET MASLIN',
                    isbn13: ['9780307476463'],
                    publication_dt: '2011-11-10',
                    summary:
                      'In “1Q84,” the Japanese novelist Haruki Murakami writes about characters in a Tokyo with two moons.',
                    url: 'http://www.nytimes.com/2011/11/10/books/1q84-by-haruki-murakami-review.html',
                  },
                ],
                status: 'OK',
              },
            },
          },
        },
      },
    },
  },
  security: [{ 'api-key': [] }],
})
