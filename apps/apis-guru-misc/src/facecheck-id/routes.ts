import { createRoute, z } from '@hono/zod-openapi'

const InputImageSchema = z
  .strictObject({
    base64: z.string().nullable().exactOptional(),
    id_pic: z.string().nullable().exactOptional(),
    svg_anim: z.string().nullable().exactOptional(),
    url_source: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InputImage')

const SearchItemSchema = z
  .strictObject({
    base64: z.string().nullable().exactOptional(),
    group: z.int32().exactOptional(),
    guid: z.string().nullable().exactOptional(),
    index: z.int32().exactOptional(),
    indexDB: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    score: z.int32().exactOptional(),
    url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchItem')

const SearchResultsSchema = z
  .strictObject({
    demo: z.boolean().nullable().exactOptional(),
    face_per_sec: z.int32().nullable().exactOptional().openapi({ readOnly: true }),
    freeRam: z.float64().nullable().exactOptional(),
    images_in_bundle: z.int32().exactOptional(),
    items: z.array(SearchItemSchema).nullable().exactOptional(),
    max_score: z.int32().exactOptional().openapi({ readOnly: true }),
    performance: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    searchedFaces: z.int32().nullable().exactOptional(),
    tookSeconds: z.float64().nullable().exactOptional(),
    tookSecondsDownload: z.float64().nullable().exactOptional(),
    tookSecondsQueue: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResults')

const BrowserJsonResponseSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional(),
    error: z.string().nullable().exactOptional(),
    id_search: z.string().nullable().exactOptional(),
    input: z.array(InputImageSchema).nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
    output: SearchResultsSchema.exactOptional(),
    progress: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BrowserJsonResponse')

const InfoResponseSchema = z
  .strictObject({
    faces: z.int32().nullable().exactOptional().openapi({ example: 212417831 }),
    has_credits_to_search: z.boolean().exactOptional().openapi({ example: true }),
    is_online: z.boolean().exactOptional().openapi({ example: true }),
    remaining_credits: z.int32().exactOptional().openapi({ example: 12987 }),
  })
  .openapi({ required: [] })
  .openapi('InfoResponse')

const SearchDataSchema = z
  .strictObject({
    demo: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'true = searches only the first 100,000 faces, good for testing/debugging',
        example: false,
      }),
    id_captcha: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'captcha is not used', example: null }),
    id_search: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '', example: '3vdi8t-s_8DAAA7D5E784616' }),
    status_only: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: "true = don't submit a new search", example: false }),
    with_progress: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'true = return imediately with a progress. False waits until search is finished.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchData')

const BearerSecurityScheme = {
  description: 'Put **_ONLY_** your JWT Bearer token on textbox below!',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const postApiDeletePicRoute = createRoute({
  method: 'post',
  path: '/api/delete_pic',
  tags: ['FaceCheckAPI'],
  summary: 'Remove an image from a search request',
  request: {
    query: z.object({
      id_search: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id_search', schema: { type: 'string' }, required: false },
        }),
      id_pic: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'id_pic', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BrowserJsonResponseSchema } },
    },
  },
})

export const postApiInfoRoute = createRoute({
  method: 'post',
  path: '/api/info',
  tags: ['FaceCheckAPI'],
  summary:
    'Returns remaining search credits, search engine online status, and number of indexed faces',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InfoResponseSchema } },
    },
  },
})

export const postApiSearchRoute = createRoute({
  method: 'post',
  path: '/api/search',
  tags: ['FaceCheckAPI'],
  summary:
    'Submit a search request to the search engine and get back search results that contain URLs and all images in base64/webp format',
  request: {
    body: {
      content: {
        'application/*+json': { schema: SearchDataSchema },
        'application/json': { schema: SearchDataSchema },
        'text/json': { schema: SearchDataSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BrowserJsonResponseSchema } },
    },
  },
})

export const postApiUploadPicRoute = createRoute({
  method: 'post',
  path: '/api/upload_pic',
  tags: ['FaceCheckAPI'],
  summary:
    'Upload 1 to 3 images as multipart/form-data, and get back a search request that contains id_search and 1 to 3 preview thumbnails',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              id_search: z.string().exactOptional(),
              images: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.file().openapi({ type: 'string', format: 'binary' })),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          encoding: { id_search: {}, images: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BrowserJsonResponseSchema } },
    },
  },
})
