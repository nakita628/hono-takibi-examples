import { createRoute, z } from '@hono/zod-openapi'

const MediaSchema = z
  .object({
    account_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of your Nexmo account. This is the same as your API key.',
        example: 'abcd1234',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag)',
        example: 'aaaaaaaabbbbccccdddd0123456789ab',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A UUID representing the object.',
        example: 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab',
      }),
    max_downloads_allowed: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The maximum number of times the file may be downloaded.',
        example: 0,
      }),
    media_size: z
      .int()
      .exactOptional()
      .openapi({ description: 'The size of the file in bytes', example: 1234567 }),
    metadata_primary: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user set string containing metadata about the media file.' }),
    metadata_secondary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A user set string containing further metadata about the media file.',
      }),
    mime_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IETF MIME type of the file.', example: 'audio/vnd.wave' }),
    original_file_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The filename of the object as it was originally uploaded.',
        example: 'test.wav',
      }),
    public: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the item is available for download without authentication.',
        example: false,
      }),
    store_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An internal identifier of how the file is stored.', example: 's3' }),
    time_created: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A timestamp for the time that the file was created',
        example: '2020-01-01T14:00:00.000Z',
      }),
    time_last_updated: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A timestamp for the time that the file was last modified',
        example: '2020-01-01T14:00:00.000Z',
      }),
    times_downloaded: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of times the file has been downloaded.', example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('Media')

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  summary: 'List and search media items',
  description:
    'Retrieve information about multiple media items with the ability to search and paginate.',
  operationId: 'list-and-search-media-items',
  request: {
    query: z.object({
      order: z
        .enum(['ascending', 'descending'])
        .default('descending')
        .exactOptional()
        .openapi({
          param: {
            description: 'The order of search results.',
            in: 'query',
            name: 'order',
            schema: {
              default: 'descending',
              enum: ['ascending', 'descending'],
              example: 'ascending',
              type: 'string',
            },
            required: false,
          },
          example: 'ascending',
        }),
      page_index: z
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
            description: 'Which page to retrieve in pagination',
            in: 'query',
            name: 'page_index',
            schema: { default: 0, example: 1, type: 'integer' },
            required: false,
          },
          example: 1,
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'How many items at most per page',
            in: 'query',
            name: 'page_size',
            schema: { default: 20, example: 50, type: 'integer' },
            required: false,
          },
          example: 50,
        }),
      start_time: z
        .string()
        .default('1 week ago')
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve results created on or after this timestap.',
            in: 'query',
            name: 'start_time',
            schema: { default: '1 week ago', example: '2020-01-01T14:00:00.000Z', type: 'string' },
            'x-default-is-meta': true,
            required: false,
          },
          example: '2020-01-01T14:00:00.000Z',
        }),
      end_time: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve results created on or before this timestamp.',
            in: 'query',
            name: 'end_time',
            schema: { example: '2020-01-01T14:00:00.000Z', type: 'string' },
            required: false,
          },
          example: '2020-01-01T14:00:00.000Z',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: {
        'application/json': {
          schema: z
            .object({
              _embedded: z
                .object({ media: z.array(MediaSchema).exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields',
                  required: [],
                }),
              _links: z
                .object({
                  first: z
                    .object({
                      href: z
                        .string()
                        .default('')
                        .exactOptional()
                        .openapi({
                          example: '/v3/media?page_size=20&account_id=abcd1234&order=descending',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  last: z
                    .object({
                      href: z
                        .string()
                        .default('')
                        .exactOptional()
                        .openapi({
                          example: '/v3/media?page_size=20&account_id=abcd1234&order=descending',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  self: z
                    .object({
                      href: z
                        .string()
                        .default('')
                        .exactOptional()
                        .openapi({
                          example: '/v3/media?page_size=20&account_id=abcd1234&order=descending',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              count: z
                .int()
                .default(0)
                .exactOptional()
                .openapi({
                  description: 'The total number of records returned by your request.',
                  example: 1,
                }),
              page_index: z
                .int()
                .default(0)
                .exactOptional()
                .openapi({ description: 'The `page_index` used in your request.', example: 0 }),
              page_size: z
                .int()
                .default(0)
                .exactOptional()
                .openapi({
                  description: 'The amount of records returned in this response.',
                  example: 20,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteIdRoute = createRoute({
  method: 'delete',
  path: '/:id',
  summary: 'Delete a media item',
  description: 'Delete a previously created media item by ID.',
  operationId: 'delete-a-media-item',
  responses: { 204: { description: 'Successfully deleted' } },
})

export const getIdInfoRoute = createRoute({
  method: 'get',
  path: '/:id/info',
  summary: 'Retrieve a media item',
  description: 'Retrieve information about a single media item',
  operationId: 'retrieve-a-media-item',
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: { 'application/json': { schema: MediaSchema } },
    },
  },
})

export const putIdInfoRoute = createRoute({
  method: 'put',
  path: '/:id/info',
  summary: 'Update a media item',
  description: 'Update a previously created media item by ID.',
  operationId: 'update-a-media-item',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A description of the media file.',
                  example: 'This is a very important recording. Do not delete.',
                }),
              max_downloads_allowed: z
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
                  description:
                    'The maximum number of times the file may be downloaded. Unlimited when not provided.',
                  example: 100,
                }),
              metadata_primary: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string containing metadata about the media file.',
                  example: 'foo,bar',
                }),
              metadata_secondary: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string containing further metadata about the media file.',
                  example: '123',
                }),
              mime_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The MIME type of the media file.',
                  example: 'audio/vnd.wave',
                }),
              public: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether the item is publicly available without authentication.',
                  example: true,
                }),
              title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string containing a title for the media file.',
                  example: 'Very important recording',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'Successfully updated' } },
})
