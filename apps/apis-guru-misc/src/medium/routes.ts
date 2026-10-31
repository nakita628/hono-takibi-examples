import { createRoute, z } from '@hono/zod-openapi'

const ApiHostSecurityScheme = { in: 'header', name: 'x-rapidapi-host', type: 'apiKey' }

const ApiKeySecurityScheme = { in: 'header', name: 'x-rapidapi-key', type: 'apiKey' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Welcome'],
  summary: 'Get Welcome',
  description: '**Test Endpoint**\nReturns the information about the Medium API\n',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              developer: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Full name of the API's developer",
                  example: 'Nishu Jain',
                }),
              documentation: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Link to the Medium API's documentation",
                  example: 'https://docs.mediumapi.com',
                }),
              email: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Email ID of the developer',
                  example: 'nishu@mediumapi.com',
                }),
              linkedin: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'LinkedIn Page URL',
                  example: 'https://www.linkedin.com/company/medium-api',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Full name of the API', example: 'Medium API' }),
              twitter: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Twitter Profile URL',
                  example: 'https://twitter.com/medium_api',
                }),
              website: z
                .string()
                .exactOptional()
                .openapi({
                  description: "Link to the Medium API's website",
                  example: 'https://mediumapi.com',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getArticleArticleIdRoute = createRoute({
  method: 'get',
  path: '/article/{article_id}',
  tags: ['Article'],
  summary: 'Get Article Info',
  description:
    'Returns the article related information such as *Title, Subtitle, Tags,  Topics* (assigned by Medium), *Publication, Published date and time,  Clap Count, Voter Count, Word Count, Reading Time, Language, etc…*\n',
  request: {
    params: z.object({
      article_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Article.",
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { example: 'f06086080568', type: 'string' },
          },
          example: 'f06086080568',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              author: z.string().exactOptional().openapi({ example: '1985b61817c3' }),
              claps: z.int32().exactOptional().openapi({ example: 53 }),
              id: z.string().exactOptional().openapi({ example: 'f06086080568' }),
              image_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://miro.medium.com/1*W0wM9xIeeIR3_Oo0E_thaA.png' }),
              is_locked: z.boolean().exactOptional().openapi({ example: true }),
              is_series: z.boolean().exactOptional().openapi({ example: false }),
              lang: z.string().exactOptional().openapi({ example: 'en' }),
              last_modified_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2021-05-28 04:22:48' }),
              publication_id: z.string().exactOptional().openapi({ example: 'e7040e67514c' }),
              published_at: z.string().exactOptional().openapi({ example: '2020-08-25 11:08:18' }),
              reading_time: z.number().exactOptional().openapi({ example: 3.5720125786164 }),
              responses_count: z.int32().exactOptional().openapi({ example: 10 }),
              subtitle: z
                .string()
                .exactOptional()
                .openapi({ example: 'Re-energize your relationship in the midst of a crisis' }),
              tags: z.array(z.string().openapi({ example: 'relationships' })).exactOptional(),
              title: z
                .string()
                .exactOptional()
                .openapi({ example: '4 Tips to Strengthen Your Bonds — Now' }),
              topics: z.array(z.string().openapi({ example: 'mental-health' })).exactOptional(),
              url: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'https://medium.com/age-of-awareness/re-energizing-your-relationship-in-the-midst-of-a-crisis-f06086080568',
                }),
              voters: z.int32().exactOptional().openapi({ example: 3 }),
              word_count: z.int32().exactOptional().openapi({ example: 845 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getArticleArticleIdContentRoute = createRoute({
  method: 'get',
  path: '/article/{article_id}/content',
  tags: ['Article'],
  summary: "Get Article's Content",
  description: 'Returns the content of an article/story, for the corresponding `article_id`\n',
  request: {
    params: z.object({
      article_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Article.",
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { example: '562c5821b5f0', type: 'string' },
          },
          example: '562c5821b5f0',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              content: z
                .string()
                .exactOptional()
                .openapi({ example: 'Article title\nArticle Subtitle\nArticle Content ....\n' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getArticleArticleIdFansRoute = createRoute({
  method: 'get',
  path: '/article/{article_id}/fans',
  tags: ['Article'],
  summary: 'Get Article Fans',
  description:
    'Returns a list of `user_ids` of the people who clapped on the article (a.k.a `voters`).\n',
  request: {
    params: z.object({
      article_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Article.",
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { example: '67fa62fc1971', type: 'string' },
          },
          example: '67fa62fc1971',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              article_id: z.string().exactOptional().openapi({ example: '67fa62fc1971' }),
              count: z.int32().exactOptional().openapi({ example: 145 }),
              voters: z.array(z.string().openapi({ example: 'fa40650a485' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getArticleArticleIdMarkdownRoute = createRoute({
  method: 'get',
  path: '/article/{article_id}/markdown',
  tags: ['Article'],
  summary: "Get Article's Markdown",
  description:
    'Returns the markdown of an article/story from Medium, for the corresponding `article_id`\n',
  request: {
    params: z.object({
      article_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Article.",
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { example: '67fa62fc1971', type: 'string' },
          },
          example: '67fa62fc1971',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              markdown: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    '# Article title\n## Article Subtitle\nArticle **Content** with lot of _markups_ ....\n![Images Alt](Image URL)\n',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getArticleArticleIdRelatedRoute = createRoute({
  method: 'get',
  path: '/article/{article_id}/related',
  tags: ['Article'],
  summary: 'Get Related Articles',
  description:
    'Returns a list of `article_ids` of the related posts. (Length = 5)\n\n**Note:** If the given article is self-published, related posts will belong to the same author,  else related posts will belong to the publication in which the article is published.\n',
  request: {
    params: z.object({
      article_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Article.",
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { example: '67fa62fc1971', type: 'string' },
          },
          example: '67fa62fc1971',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ example: '67fa62fc1971' }),
              related_articles: z
                .array(z.string().openapi({ example: 'f393206c6626' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getArticleArticleIdResponsesRoute = createRoute({
  method: 'get',
  path: '/article/{article_id}/responses',
  tags: ['Article'],
  summary: 'Get Article Responses',
  description:
    'Returns a list of responses (`response_ids`, same as `article_ids`) for a given article (`article_id`)\nNote: To see the content of the response, use the "Get Article\'s Content" endpoint\n',
  request: {
    params: z.object({
      article_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Article.",
            in: 'path',
            name: 'article_id',
            required: true,
            schema: { example: '67fa62fc1971', type: 'string' },
          },
          example: '67fa62fc1971',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ example: '67fa62fc1971' }),
              responses: z.array(z.string().openapi({ example: 'a9bbc22aa1e6' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getLatestpostsTopicSlugRoute = createRoute({
  method: 'get',
  path: '/latestposts/{topic_slug}',
  tags: ['Misc'],
  summary: 'Get Latest Posts',
  description:
    'Returns a list of latest posts (`article_ids`) for a topic/niche (as classified by the Medium platform). Example of a topic/niche can be:\n* blockchain\n* relationships\n* mental-health, etc …\n\nThese are known as `topic_slugs`. At any given moment, this endpoint will return a list of 25 articles (`article_ids`).\n',
  request: {
    params: z.object({
      topic_slug: z
        .string()
        .openapi({
          param: {
            description:
              "It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.",
            in: 'path',
            name: 'topic_slug',
            required: true,
            schema: { example: 'artificial-intelligence', type: 'string' },
          },
          example: 'artificial-intelligence',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              latestposts: z.array(z.string().openapi({ example: '67fa62fc1971' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListListIdRoute = createRoute({
  method: 'get',
  path: '/list/{list_id}',
  tags: ['List'],
  summary: 'Get List Info',
  description:
    'Returns the list-related information such as *id, name, author, description,  thumbnail image url, creation datetime, last article inserted datetime,  number of articles in the list, claps, voters, and comments/responses*.\n',
  request: {
    params: z.object({
      list_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium List.",
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { example: '38f9e0f9bea6', type: 'string' },
          },
          example: '38f9e0f9bea6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              author: z
                .string()
                .exactOptional()
                .openapi({ description: '`user_id` of the author', example: '1985b61817c3' }),
              claps: z.int32().exactOptional().openapi({ example: 48 }),
              count: z
                .int32()
                .exactOptional()
                .openapi({ description: 'Number of articles in the list', example: 18 }),
              created_at: z.string().exactOptional().openapi({ example: '2023-03-12 06:46:46' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example: 'Collections of all the articles and resources related to Medium API',
                }),
              id: z.string().exactOptional().openapi({ example: '38f9e0f9bea6' }),
              last_item_inserted_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2023-03-12 06:53:02' }),
              name: z.string().exactOptional().openapi({ example: 'Medium API' }),
              responses_count: z.int32().exactOptional().openapi({ example: 1 }),
              thumbnail: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Image URL',
                  example:
                    'https://miro.medium.com/0*8f634a2860234802375db89fbfcccb5cc717f3fd.jpeg',
                }),
              voters: z.int32().exactOptional().openapi({ example: 1 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListListIdArticlesRoute = createRoute({
  method: 'get',
  path: '/list/{list_id}/articles',
  tags: ['List'],
  summary: 'Get List Articles',
  description: 'Returns an array of `articles_ids` present in the given Medium List.\n',
  request: {
    params: z.object({
      list_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium List.",
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { example: '38f9e0f9bea6', type: 'string' },
          },
          example: '38f9e0f9bea6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ example: '38f9e0f9bea6' }),
              list_articles: z
                .array(z.string().openapi({ example: '90a01549d8db' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListListIdResponsesRoute = createRoute({
  method: 'get',
  path: '/list/{list_id}/responses',
  tags: ['List'],
  summary: 'Get List Responses',
  description:
    'Returns an array of `response_ids` of the comments (same as `article_ids`) on the given Medium List.\n',
  request: {
    params: z.object({
      list_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium List.",
            in: 'path',
            name: 'list_id',
            required: true,
            schema: { example: '38f9e0f9bea6', type: 'string' },
          },
          example: '38f9e0f9bea6',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ example: '38f9e0f9bea6' }),
              responses: z.array(z.string().openapi({ example: 'f31a257b42e8' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPublicationIdForPublicationSlugRoute = createRoute({
  method: 'get',
  path: '/publication/id_for/{publication_slug}',
  tags: ['Publication'],
  summary: 'Get Publication ID',
  description:
    "Returns the unique `publication_id` for the given `publication_slug`.\n\n**Note:** You can find the `publication_slug` from the publication's homepage URL.\n- medium.com/**publication_slug**\n",
  request: {
    params: z.object({
      publication_slug: z
        .string()
        .openapi({
          param: {
            description:
              "It's a lowercased hyphen-separated unique string alloted to each Medium Publication.",
            in: 'path',
            name: 'publication_slug',
            required: true,
            schema: { example: 'codex', type: 'string' },
          },
          example: 'codex',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              publication_id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Unique hash id of the publication.',
                  example: '29038077e4c6',
                }),
              publication_slug: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Same publication slug that you passed in the path parameters.',
                  example: 'codex',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPublicationPublicationIdRoute = createRoute({
  method: 'get',
  path: '/publication/{publication_id}',
  tags: ['Publication'],
  summary: 'Get Publication Info',
  description:
    'Returns the publication related information such as *Publication name, Tagline, Description, Tags, Followers Count, Twitter username, Instagram username, Facebook Page name, etc …*\n\n**Note:** If you don\'t know the `publication_id`, you can get it from any article published by it. Use endpoint "/article/{article_id}" to retrieve the `publication_id`.\n',
  request: {
    params: z.object({
      publication_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Publication.",
            in: 'path',
            name: 'publication_id',
            required: true,
            schema: { example: '98111c9905da', type: 'string' },
          },
          example: '98111c9905da',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              creator: z.string().exactOptional().openapi({ example: '8a819983d566' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    "Towards AI is the world's leading AI and technology publication. Publishing unbiased AI and technology-related articles. Read by thought-leaders and decision-makers around the world.",
                }),
              editors: z.array(z.string().openapi({ example: 'aea8a19ea239' })).exactOptional(),
              facebook_pagename: z.string().exactOptional().openapi({ example: 'towardsAl' }),
              followers: z.int32().exactOptional().openapi({ example: 25260 }),
              id: z.string().exactOptional().openapi({ example: '98111c9905da' }),
              instagram_username: z.string().exactOptional().openapi({ example: 'towards_ai' }),
              name: z.string().exactOptional().openapi({ example: 'Towards AI' }),
              slug: z
                .string()
                .exactOptional()
                .openapi({ example: 'towards-artificial-intelligence' }),
              tagline: z
                .string()
                .exactOptional()
                .openapi({ example: "The World's Leading AI and Technology Publication" }),
              tags: z
                .array(z.string().openapi({ example: 'ARTIFICIAL INTELLIGENCE' }))
                .exactOptional(),
              twitter_username: z.string().exactOptional().openapi({ example: 'towards_AI' }),
              url: z.string().exactOptional().openapi({ example: 'pub.towardsai.net' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPublicationPublicationIdArticlesRoute = createRoute({
  method: 'get',
  path: '/publication/{publication_id}/articles',
  tags: ['Publication'],
  summary: 'Get Publication Articles',
  description:
    'Returns the list of `articles_ids`, of the latest 25 articles, posted in that publication.\n',
  request: {
    params: z.object({
      publication_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Publication.",
            in: 'path',
            name: 'publication_id',
            required: true,
            schema: { example: '98111c9905da', type: 'string' },
          },
          example: '98111c9905da',
        }),
    }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To get the articles before specified date and time.',
            in: 'query',
            name: 'from',
            required: false,
            schema: { example: '2023-01-31T13:10:00', type: 'string' },
          },
          example: '2023-01-31T13:10:00',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              publication_articles: z
                .array(z.string().openapi({ example: '67fa62fc1971' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPublicationPublicationIdNewsletterRoute = createRoute({
  method: 'get',
  path: '/publication/{publication_id}/newsletter',
  tags: ['Publication'],
  summary: 'Get Publication Newsletter',
  description:
    'Returns the newsletter related information such as *id, name, description, slug, creator_id, subscribers, image_url, etc …*\n\n**Note:** If you don\'t know the `publication_id`, you can get it from any article published by it. Use endpoint "/article/{article_id}" to retrieve the `publication_id`.\n',
  request: {
    params: z.object({
      publication_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every Medium Publication.",
            in: 'path',
            name: 'publication_id',
            required: true,
            schema: { example: '98111c9905da', type: 'string' },
          },
          example: '98111c9905da',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              creator_id: z.string().exactOptional().openapi({ example: 'aea8a19ea239' }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'We have moved our newsletter. Subscribe → https://ws.towardsai.net/subscribe',
                }),
              id: z.string().exactOptional().openapi({ example: 'd710a73cd042' }),
              image: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://miro.medium.com/1*j2OVd7j2o2FHeE7T8TzpXw.png' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ example: 'This AI newsletter is all you need' }),
              slug: z
                .string()
                .exactOptional()
                .openapi({ example: 'this-ai-newsletter-is-all-you-need' }),
              subscribers: z.int32().exactOptional().openapi({ example: 6752 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRelatedTagsTagRoute = createRoute({
  method: 'get',
  path: '/related_tags/{tag}',
  tags: ['Misc'],
  summary: 'Get Related Tags',
  description: 'Returns a list of `related_tags` for the given `tag`.\n',
  request: {
    params: z.object({
      tag: z
        .string()
        .openapi({
          param: {
            description:
              "It's a unique string, usually hyphen-separated, representing a class of content.",
            in: 'path',
            name: 'tag',
            required: true,
            schema: { example: 'blockchain', type: 'string' },
          },
          example: 'blockchain',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              given_tag: z.string().exactOptional().openapi({ example: 'blockchain' }),
              related_tags: z
                .array(z.string().openapi({ example: 'cryptocurrency' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchArticlesQueryQueryRoute = createRoute({
  method: 'get',
  path: '/search/articles?query={query}',
  tags: ['Search'],
  summary: 'Search Articles',
  description:
    'Returns the list of `articles_ids` for the given search query results. (Max Length = 1000)\n',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'startup', type: 'string' },
          },
          example: 'startup',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              articles: z.array(z.string().openapi({ example: '6556feb21311' })).exactOptional(),
              search_query: z.string().exactOptional().openapi({ example: 'startup' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchListsQueryQueryRoute = createRoute({
  method: 'get',
  path: '/search/lists?query={query}',
  tags: ['Search'],
  summary: 'Search Lists',
  description:
    'Returns an array of `list_ids` for the given search query results. (Max Length = 1000)\n',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'artificial intelligence', type: 'string' },
          },
          example: 'artificial intelligence',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              lists: z.array(z.string().openapi({ example: 'a8266c175cda' })).exactOptional(),
              search_query: z
                .string()
                .exactOptional()
                .openapi({ example: 'artificial intelligence' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchPublicationsQueryQueryRoute = createRoute({
  method: 'get',
  path: '/search/publications?query={query}',
  tags: ['Search'],
  summary: 'Search Publications',
  description:
    'Returns the list of `publication_ids` for the given search query results. (Max Length = 1000)\n',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'mental health', type: 'string' },
          },
          example: 'mental health',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              publications: z
                .array(z.string().openapi({ example: '8d6b8a439e32' }))
                .exactOptional(),
              search_query: z.string().exactOptional().openapi({ example: 'mental health' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchTagsQueryQueryRoute = createRoute({
  method: 'get',
  path: '/search/tags?query={query}',
  tags: ['Search'],
  summary: 'Search Tags',
  description: 'Returns a list of `tags` for the given search query results. (Max Length = 1000)\n',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'blockchain', type: 'string' },
          },
          example: 'blockchain',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              search_query: z.string().exactOptional().openapi({ example: 'blockchain' }),
              tags: z
                .array(z.string().openapi({ example: 'blockchain-technology' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSearchUsersQueryQueryRoute = createRoute({
  method: 'get',
  path: '/search/users?query={query}',
  tags: ['Search'],
  summary: 'Search Users',
  description:
    'Returns a list of `user_ids` for the given search query results. (Max Length = 1000)\n',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Search query',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'data engineer', type: 'string' },
          },
          example: 'data engineer',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              search_query: z.string().exactOptional().openapi({ example: 'data engineer' }),
              users: z.array(z.string().openapi({ example: '1985b61817c3' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTopWriterTopicSlugRoute = createRoute({
  method: 'get',
  path: '/top_writer/{topic_slug}',
  tags: ['Misc'],
  summary: 'Get Top Writers',
  description:
    'Returns a list of top writers (`user_ids`) within a particular topic/niche (`topic_slug`). \ne.g. \n- blockchain\n- relationships\n- artificial-intelligence, etc ...\n\n**Note:** You can use optional `count` query parameter to limit the number of results.  The maximum number of top writers within a topic/niche will be 250.\n',
  request: {
    params: z.object({
      topic_slug: z
        .string()
        .openapi({
          param: {
            description:
              "It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.",
            in: 'path',
            name: 'topic_slug',
            required: true,
            schema: { example: 'relationships', type: 'string' },
          },
          example: 'relationships',
        }),
    }),
    query: z.object({
      count: z
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
            description: 'Limits the number of `article_ids` in the result.',
            in: 'query',
            name: 'count',
            required: false,
            schema: { example: 10, type: 'integer' },
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              top_writers: z.array(z.string().openapi({ example: '1985b61817c3' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTopfeedsTagModeRoute = createRoute({
  method: 'get',
  path: '/topfeeds/{tag}/{mode}',
  tags: ['Misc'],
  summary: 'Get Topfeeds',
  description: 'Returns a list of `article_ids` (length: 25) for the given `tag` and `mode`.\n',
  request: {
    params: z.object({
      tag: z
        .string()
        .openapi({
          param: {
            description:
              "It's a unique string, usually hyphen-separated, representing a class of content.",
            in: 'path',
            name: 'tag',
            required: true,
            schema: { example: 'artificial-intelligence', type: 'string' },
          },
          example: 'artificial-intelligence',
        }),
      mode: z
        .string()
        .openapi({
          param: {
            description:
              'Mode:\n\n  - `hot` : For getting trending articles\n  - `new` : For getting latest articles\n  - `top_year` : For getting best articles of the year\n  - `top_month` : For getting best articles of the month\n  - `top_week` : For getting best articles of the week\n  - `top_all_time`: For getting best article of all time\n',
            in: 'path',
            name: 'mode',
            required: true,
            schema: { example: 'new', type: 'string' },
          },
          example: 'new',
        }),
    }),
    query: z.object({
      after: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'To get the subsequent top feeds. (`after` &lt; 250)',
            in: 'query',
            name: 'after',
            required: false,
            schema: { default: 0, example: 10, type: 'integer' },
          },
          example: 10,
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'To limit the number of top feeds. (`count` &lt; 25)',
            in: 'query',
            name: 'count',
            required: false,
            schema: { default: 25, example: 20, type: 'integer' },
          },
          example: 20,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              topfeeds: z.array(z.string().openapi({ example: 'b2076afc4930' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserIdForUsernameRoute = createRoute({
  method: 'get',
  path: '/user/id_for/{username}',
  tags: ['User'],
  summary: 'Get User ID',
  description:
    "Returns the unique `user_id` for the given `username`.\n\n**Note:** You can find the `username` from the user's/author's profile page URL. \n- **username**.medium.com\n- medium.com/@**username**\n",
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description: "It's a unique string chosen by every single Medium user.",
            in: 'path',
            name: 'username',
            required: true,
            schema: { example: 'nishu-jain', type: 'string' },
          },
          example: 'nishu-jain',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Unique hash id of the user.', example: '1985b61817c3' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}',
  tags: ['User'],
  summary: 'Get User Info',
  description:
    "Returns user related information like *Full name, Bio, Followers count, Following count, Twitter username, Profile-image URL, User ID, etc...* \n\nIt takes `user_id` as the path parameter.\n\n**Note:** If you don't know the `user_id`, then you can get it from the endpoint\\\n'/user/id_for/{`username`}'.\n",
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: "It's a unique hash id assigned to every single Medium user.",
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '1985b61817c3', type: 'string' },
          },
          example: '1985b61817c3',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_notes: z.boolean().exactOptional(),
              bio: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'Obsessed with Tech Biz Arts &amp; Words; Does NOT dumb down the writing; Skilled Wordsmith; Delivers the best',
                }),
              followers_count: z.int32().exactOptional().openapi({ example: 450 }),
              following_count: z.int32().exactOptional().openapi({ example: 4 }),
              fullname: z.string().exactOptional().openapi({ example: 'Nishu Jain' }),
              has_list: z.boolean().exactOptional().openapi({ example: true }),
              id: z.string().exactOptional().openapi({ example: '1985b61817c3' }),
              image_url: z
                .string()
                .exactOptional()
                .openapi({ example: 'https://miro.medium.com/1*C92Hx7k9nRM7TPlrmhgW9w.jpeg' }),
              is_book_author: z.boolean().exactOptional().openapi({ example: false }),
              is_suspended: z.boolean().exactOptional().openapi({ example: false }),
              is_writer_program_enrolled: z.boolean().exactOptional(),
              medium_member_at: z
                .string()
                .exactOptional()
                .openapi({ example: '2020-06-24 16:05:46' }),
              top_writer_in: z
                .array(z.string().openapi({ example: 'programming' }))
                .exactOptional(),
              twitter_username: z.string().exactOptional().openapi({ example: 'one_anachronism' }),
              username: z.string().exactOptional().openapi({ example: 'nishu-jain' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdArticlesRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/articles',
  tags: ['User'],
  summary: "Get User's Articles",
  description: 'Returns the list of articles (`article_ids`) written by the user.\n',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '1985b61817c3', type: 'string' },
          },
          example: '1985b61817c3',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              associated_articles: z
                .array(z.string().openapi({ example: '562c5821b5f0' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdFollowersRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/followers',
  tags: ['User'],
  summary: 'Get User Followers',
  description:
    "Returns the list of `user_ids` of the user's followers.\n\n**Note:** The length of this followers' list might be different from what you get in  the \"Get User Info\" Endpoint. It's because, this list doesn't include Medium Users who  left the platform.\nIf you really need the exact followers' count, use this endpoint to get the followers'  list and take its length as the exact followers' count\n",
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '1985b61817c3', type: 'string' },
          },
          example: '1985b61817c3',
        }),
    }),
    query: z.object({
      count: z
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
            description: 'To limit the number of results. (count &lt; 1500)',
            in: 'query',
            name: 'count',
            required: false,
            schema: { example: 10, type: 'integer' },
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              followers: z.array(z.string().openapi({ example: '105e6602fb79' })).exactOptional(),
              id: z.string().exactOptional().openapi({ example: '14d5c41e0264' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdFollowingRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/following',
  tags: ['User'],
  summary: 'Get User Following',
  description:
    "Returns the list of `user_ids` of the user's followings.\n\n**Note:** Currently, this list does not contain the `publication_ids` of the publications that the user is following.\n",
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '14d5c41e0264', type: 'string' },
          },
          example: '14d5c41e0264',
        }),
    }),
    query: z.object({
      count: z
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
            description: 'To limit the number of results. (count &lt; 1500)',
            in: 'query',
            name: 'count',
            required: false,
            schema: { example: 10, type: 'integer' },
          },
          example: 10,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              following: z.array(z.string().openapi({ example: 'c61f93eeb8a5' })).exactOptional(),
              id: z.string().exactOptional().openapi({ example: '14d5c41e0264' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdInterestsRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/interests',
  tags: ['User'],
  summary: "Get User's Interests",
  description: 'Returns a list of tags that the given user follows.\n',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '1985b61817c3', type: 'string' },
          },
          example: '1985b61817c3',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              tags_followed: z
                .array(z.string().openapi({ example: 'software-engineering' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdListsRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/lists',
  tags: ['User'],
  summary: "Get User's Lists",
  description:
    'Returns an array of `list_ids` created by the user.\n\n**Note:** You can check whether the use has created lists or not beforehand. Check the  `has_list` attribute in the "Article Info" endpoint.\n',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '5142451174a3', type: 'string' },
          },
          example: '5142451174a3',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              lists: z.array(z.string().openapi({ example: '95b41261bee0' })).exactOptional(),
              user_id: z.string().exactOptional().openapi({ example: '5142451174a3' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdPublicationsRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/publications',
  tags: ['User'],
  summary: "Get User's Publications",
  description: 'Returns a list of `publication_ids` where the user is the editor and/or creator.\n',
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '14d5c41e0264', type: 'string' },
          },
          example: '14d5c41e0264',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              publications: z
                .array(z.string().openapi({ example: 'bff2346ccdf1' }))
                .exactOptional(),
              user_id: z.string().exactOptional().openapi({ example: '14d5c41e0264' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getUserUserIdTopArticlesRoute = createRoute({
  method: 'get',
  path: '/user/{user_id}/top_articles',
  tags: ['User'],
  summary: "Get User's Top Articles",
  description:
    "Returns a list of `article_ids` of the top 10 articles on the user's profile, for a given `user_id`.\n",
  request: {
    params: z.object({
      user_id: z
        .string()
        .openapi({
          param: {
            description: 'Unique hash id assigned to every single Medium user.',
            in: 'path',
            name: 'user_id',
            required: true,
            schema: { example: '1985b61817c3', type: 'string' },
          },
          example: '1985b61817c3',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              associated_articles: z
                .array(z.string().openapi({ example: '562c5821b5f0' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
