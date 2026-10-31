import { createRoute, z } from '@hono/zod-openapi'

const APIResponseSimilaritySchema = z
  .object({
    error: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the request was successfully processed or not.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message if the request was unsuccessful.' }),
    response: z
      .object({
        similarity_list: z
          .array(
            z
              .object({
                artist_name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: "Artist's song name." }),
                artist_url: z.string().exactOptional().openapi({ description: 'Artist URL.' }),
                id: z.int().exactOptional().openapi({ description: 'Song internal identifier.' }),
                index_id: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'Index internal identifier.' }),
                lyrics: z.string().exactOptional().openapi({ description: 'Song lyrics.' }),
                percentage: z
                  .float32()
                  .exactOptional()
                  .openapi({ description: 'Similarity percentage.' }),
                song_name: z.string().exactOptional().openapi({ description: 'Song name.' }),
                song_url: z.string().exactOptional().openapi({ description: 'Song URL.' }),
              })
              .openapi({ description: 'Song similarity item.', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Contains all the similarity items representing songs.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Contains the response data if the request was successful.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('APIResponseSimilarity')

const APIResponseSongSchema = z
  .object({
    error: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the request was successfully processed or not.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message if the request was unsuccessful.' }),
    response: z
      .object({
        results: z
          .array(
            z
              .object({
                id: z.int().exactOptional().openapi({ description: 'Song internal identifier.' }),
                name: z.string().exactOptional().openapi({ description: 'Song and Artist name.' }),
              })
              .openapi({ description: 'Song item.', required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'Contains all the songs.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Contains the response data if the request was successful.',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('APIResponseSong')

export const postSimilarityByContentRoute = createRoute({
  method: 'post',
  path: '/similarity/by_content',
  tags: ['similarity'],
  summary: 'API endpoint to search similarity using content',
  description:
    'Endpoint for an end-user client to search similarity by content.\n\nIf you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:\n\n```\nhttps://searchly.asuarez.dev/api/v1/similarity/by_content\n```\n',
  operationId: 'src.searchly.api.v1.controllers.similarity.by_content',
  request: {
    body: {
      description: 'Body wrapper for the request.',
      content: {
        'application/json': {
          schema: z
            .object({
              content: z
                .string()
                .exactOptional()
                .openapi({ description: 'Content for searching similarity.' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.',
      content: { 'application/json': { schema: APIResponseSimilaritySchema } },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/text': { schema: z.string().openapi({ description: 'Error description.' }) },
      },
    },
  },
})

export const getSimilarityBySongRoute = createRoute({
  method: 'get',
  path: '/similarity/by_song',
  tags: ['similarity'],
  summary: 'API endpoint to search similarity using a song identifier',
  description:
    'Endpoint for an end-user client to search similarity by song identifier.\n\nIf you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:\n\n```\nhttps://searchly.asuarez.dev/api/v1/similarity/by_song\n```\n',
  operationId: 'src.searchly.api.v1.controllers.similarity.by_song',
  request: {
    query: z.object({
      song_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Song identifier.',
            example: 234,
            in: 'query',
            name: 'song_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.',
      content: { 'application/json': { schema: APIResponseSimilaritySchema } },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/text': { schema: z.string().openapi({ description: 'Error description.' }) },
      },
    },
  },
})

export const getSongSearchRoute = createRoute({
  method: 'get',
  path: '/song/search',
  tags: ['song'],
  summary: 'API endpoint to search songs from the database given a query',
  description:
    'Endpoint for an end-user client to search songs from the database given a String query.\n\nIf you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:\n\n```\nhttps://searchly.asuarez.dev/api/v1/song/search\n```\n',
  operationId: 'src.searchly.api.v1.controllers.song.search',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query.',
            example: 'Miley Cyrus',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.',
      content: { 'application/json': { schema: APIResponseSongSchema } },
    },
    default: {
      description: 'Unexpected error.',
      content: {
        'application/text': { schema: z.string().openapi({ description: 'Error description.' }) },
      },
    },
  },
})
