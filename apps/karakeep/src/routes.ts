import { createRoute, z } from '@hono/zod-openapi'

const BookmarkIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the bookmark.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('BookmarkId')

const ListIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the list.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('ListId')

const TagIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the tag.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('TagId')

const HighlightIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the highlight.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('HighlightId')

const AssetIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the asset.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('AssetId')

const BackupIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the backup.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('BackupId')

const FeedIdSchema = z
  .string()
  .openapi({
    description: 'The unique identifier of the feed.',
    example: 'ieidlxygmwj87oxz5hxttoc8',
  })
  .openapi('FeedId')

const BookmarkSchema = z
  .object({
    id: z.string(),
    firstCreatedAt: z.iso.datetime({ offset: true }).exactOptional(),
    createdAt: z.iso.datetime({ offset: true }),
    modifiedAt: z.iso.datetime({ offset: true }).nullable(),
    title: z.string().nullable().exactOptional(),
    archived: z.boolean(),
    favourited: z.boolean(),
    taggingStatus: z
      .union([z.literal('success'), z.literal('failure'), z.literal('pending'), z.literal(null)])
      .nullable(),
    summarizationStatus: z
      .union([z.literal('success'), z.literal('failure'), z.literal('pending'), z.literal(null)])
      .nullable(),
    embeddingStatus: z
      .union([z.literal('success'), z.literal('failure'), z.literal('pending'), z.literal(null)])
      .nullable(),
    note: z.string().nullable().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    source: z
      .union([
        z.literal('api'),
        z.literal('web'),
        z.literal('cli'),
        z.literal('mobile'),
        z.literal('extension'),
        z.literal('singlefile'),
        z.literal('rss'),
        z.literal('import'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional(),
    userId: z.string(),
    tags: z.array(
      z
        .object({ id: z.string(), name: z.string(), attachedBy: z.enum(['ai', 'human']) })
        .openapi({ required: ['id', 'name', 'attachedBy'] }),
    ),
    content: z.xor([
      z
        .object({
          type: z.literal('link'),
          url: z.string(),
          title: z.string().nullable().exactOptional(),
          description: z.string().nullable().exactOptional(),
          imageUrl: z.string().nullable().exactOptional(),
          imageAssetId: z.string().nullable().exactOptional(),
          screenshotAssetId: z.string().nullable().exactOptional(),
          pdfAssetId: z.string().nullable().exactOptional(),
          fullPageArchiveAssetId: z.string().nullable().exactOptional(),
          precrawledArchiveAssetId: z.string().nullable().exactOptional(),
          videoAssetId: z.string().nullable().exactOptional(),
          favicon: z.string().nullable().exactOptional(),
          htmlContent: z.string().nullable().exactOptional(),
          contentAssetId: z.string().nullable().exactOptional(),
          readerViewStatus: z
            .union([
              z.literal('readable'),
              z.literal('not_readable'),
              z.literal('uncertain'),
              z.literal('unavailable'),
              z.literal(null),
            ])
            .nullable()
            .exactOptional(),
          readerViewScore: z.int().min(0).max(100).nullable().exactOptional(),
          preferredPreview: z
            .union([
              z.literal('reader_view'),
              z.literal('screenshot'),
              z.literal('overview'),
              z.literal(null),
            ])
            .nullable()
            .exactOptional(),
          crawledAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
          crawlStatus: z
            .union([
              z.literal('success'),
              z.literal('failure'),
              z.literal('pending'),
              z.literal(null),
            ])
            .nullable()
            .exactOptional(),
          author: z.string().nullable().exactOptional(),
          publisher: z.string().nullable().exactOptional(),
          datePublished: z.iso.datetime({ offset: true }).nullable().exactOptional(),
          dateModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
        })
        .openapi({ required: ['type', 'url'] }),
      z
        .object({
          type: z.literal('text'),
          text: z.string(),
          sourceUrl: z.string().nullable().exactOptional(),
        })
        .openapi({ required: ['type', 'text'] }),
      z
        .object({
          type: z.literal('asset'),
          assetType: z.enum(['image', 'pdf']),
          assetId: z.string(),
          fileName: z.string().nullable().exactOptional(),
          sourceUrl: z.string().nullable().exactOptional(),
          size: z.number().nullable().exactOptional(),
          content: z.string().nullable().exactOptional(),
        })
        .openapi({ required: ['type', 'assetType', 'assetId'] }),
      z.object({ type: z.literal('unknown') }).openapi({ required: ['type'] }),
    ]),
    assets: z.array(
      z
        .object({
          id: z.string(),
          assetType: z.enum([
            'linkHtmlContent',
            'screenshot',
            'pdf',
            'assetScreenshot',
            'bannerImage',
            'fullPageArchive',
            'video',
            'bookmarkAsset',
            'precrawledArchive',
            'userUploaded',
            'avatar',
            'unknown',
          ]),
          fileName: z.string().nullable().exactOptional(),
        })
        .openapi({ required: ['id', 'assetType'] }),
    ),
  })
  .openapi({
    required: [
      'id',
      'createdAt',
      'modifiedAt',
      'archived',
      'favourited',
      'taggingStatus',
      'summarizationStatus',
      'embeddingStatus',
      'userId',
      'tags',
      'content',
      'assets',
    ],
  })
  .openapi('Bookmark')

const PaginatedBookmarksSchema = z
  .object({
    bookmarks: z.array(BookmarkSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'Cursor for the next page, or null if no more results.' }),
  })
  .openapi({ required: ['bookmarks', 'nextCursor'] })
  .openapi('PaginatedBookmarks')

const CursorSchema = z
  .string()
  .openapi({ description: 'Cursor from a previous response to fetch the next page.' })
  .openapi('Cursor')

const ErrorSchema = z
  .object({
    code: z.string().openapi({ description: 'A machine-readable error code.' }),
    message: z.string().openapi({ description: 'A human-readable error message.' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const BookmarkReadableContentSchema = z
  .object({
    bookmarkId: z.string(),
    bookmarkType: z.enum(['link', 'text', 'asset']),
    format: z.enum(['markdown', 'text']),
    content: z.string(),
    contentVersion: z
      .string()
      .openapi({
        description: 'A hash identifying the rendered content version used by this cursor.',
      }),
    range: z
      .object({
        start: z
          .int()
          .openapi({ description: 'Zero-based start offset in Unicode characters, inclusive.' }),
        end: z
          .int()
          .openapi({ description: 'Zero-based end offset in Unicode characters, exclusive.' }),
        total: z
          .int()
          .openapi({ description: 'Total number of Unicode characters in the rendered content.' }),
      })
      .openapi({ required: ['start', 'end', 'total'] }),
    nextCursor: z
      .string()
      .nullable()
      .openapi({
        description: 'Cursor for the next chunk, or null when all content has been returned.',
      }),
    truncated: z
      .boolean()
      .openapi({ description: 'Whether more readable content remains after this chunk.' }),
  })
  .openapi({
    required: [
      'bookmarkId',
      'bookmarkType',
      'format',
      'content',
      'contentVersion',
      'range',
      'nextCursor',
      'truncated',
    ],
  })
  .openapi('BookmarkReadableContent')

const ListSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable().exactOptional(),
    icon: z.string(),
    parentId: z.string().nullable(),
    type: z.enum(['manual', 'smart']).default('manual').exactOptional(),
    query: z.string().nullable().exactOptional(),
    public: z.boolean(),
    hasCollaborators: z.boolean(),
    userRole: z.enum(['owner', 'editor', 'viewer', 'public']),
  })
  .openapi({
    required: ['id', 'name', 'icon', 'parentId', 'public', 'hasCollaborators', 'userRole'],
  })
  .openapi('List')

const HighlightSchema = z
  .object({
    bookmarkId: z.string(),
    startOffset: z.number(),
    endOffset: z.number(),
    color: z.enum(['yellow', 'red', 'green', 'blue']).default('yellow').exactOptional(),
    text: z.string().nullable(),
    note: z.string().nullable(),
    id: z.string(),
    userId: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
  })
  .openapi({
    required: [
      'bookmarkId',
      'startOffset',
      'endOffset',
      'text',
      'note',
      'id',
      'userId',
      'createdAt',
    ],
  })
  .openapi('Highlight')

const TagSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    numBookmarks: z.number(),
    numBookmarksByAttachedType: z
      .object({ ai: z.number().exactOptional(), human: z.number().exactOptional() })
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'name', 'numBookmarks', 'numBookmarksByAttachedType'] })
  .openapi('Tag')

const PaginatedHighlightsSchema = z
  .object({
    highlights: z.array(HighlightSchema),
    nextCursor: z
      .string()
      .nullable()
      .openapi({ description: 'Cursor for the next page, or null if no more results.' }),
  })
  .openapi({ required: ['highlights', 'nextCursor'] })
  .openapi('PaginatedHighlights')

const UploadedAssetSchema = z
  .object({
    assetId: z
      .string()
      .openapi({ description: 'The unique identifier assigned to the uploaded asset.' }),
    contentType: z.string().openapi({ description: 'The MIME type of the uploaded file.' }),
    size: z.number().openapi({ description: 'The size of the uploaded file in bytes.' }),
    fileName: z.string().openapi({ description: 'The original file name of the uploaded file.' }),
  })
  .openapi({ required: ['assetId', 'contentType', 'size', 'fileName'] })
  .openapi('UploadedAsset')

const SignedAssetUrlSchema = z
  .object({
    assetId: z.string().openapi({ description: 'The unique identifier of the asset.' }),
    signedUrl: z.url().openapi({ description: 'The temporary URL for downloading the asset.' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'When the signed URL expires, in ISO 8601 format.' }),
  })
  .openapi({ required: ['assetId', 'signedUrl', 'expiresAt'] })
  .openapi('SignedAssetUrl')

const FeedSchema = z
  .object({
    id: z.string(),
    name: z.string().min(1).max(100),
    url: z.url(),
    enabled: z.boolean(),
    importTags: z.boolean(),
    lastFetchedStatus: z
      .union([z.literal('success'), z.literal('failure'), z.literal('pending'), z.literal(null)])
      .nullable(),
    lastFetchedAt: z
      .string()
      .nullable()
      .openapi({
        description: 'ISO 8601 timestamp of the last fetch attempt, or null if never fetched.',
        example: '2025-01-15T12:00:00.000Z',
      }),
    lastSuccessfulFetchAt: z
      .string()
      .nullable()
      .openapi({
        description:
          'ISO 8601 timestamp of the last successful fetch, or null if the feed has never been fetched successfully.',
        example: '2025-01-15T12:00:00.000Z',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'url',
      'enabled',
      'importTags',
      'lastFetchedStatus',
      'lastFetchedAt',
      'lastSuccessfulFetchAt',
    ],
  })
  .openapi('Feed')

const BookmarkIdParamsSchema = BookmarkIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/BookmarkId' },
    required: true,
    description: 'The unique identifier of the bookmark.',
    name: 'bookmarkId',
    in: 'path',
  },
})

const ListIdParamsSchema = ListIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/ListId' },
    required: true,
    description: 'The unique identifier of the list.',
    name: 'listId',
    in: 'path',
  },
})

const TagIdParamsSchema = TagIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/TagId' },
    required: true,
    description: 'The unique identifier of the tag.',
    name: 'tagId',
    in: 'path',
  },
})

const HighlightIdParamsSchema = HighlightIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/HighlightId' },
    required: true,
    description: 'The unique identifier of the highlight.',
    name: 'highlightId',
    in: 'path',
  },
})

const AssetIdParamsSchema = AssetIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/AssetId' },
    required: true,
    description: 'The unique identifier of the asset.',
    name: 'assetId',
    in: 'path',
  },
})

const BackupIdParamsSchema = BackupIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/BackupId' },
    required: true,
    description: 'The unique identifier of the backup.',
    name: 'backupId',
    in: 'path',
  },
})

const FeedIdParamsSchema = FeedIdSchema.openapi({
  param: {
    schema: { $ref: '#/components/schemas/FeedId' },
    required: true,
    description: 'The unique identifier of the feed.',
    name: 'feedId',
    in: 'path',
  },
})

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const getBookmarksRoute = createRoute({
  method: 'get',
  path: '/bookmarks',
  tags: ['Bookmarks'],
  summary: 'Get all bookmarks',
  description:
    'Retrieve a paginated list of all bookmarks for the authenticated user. Supports filtering by archived/favourited status and sorting by date.',
  operationId: 'listBookmarks',
  request: {
    query: z.object({
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean', description: 'Filter by archived status.' },
            required: false,
            description: 'Filter by archived status.',
            name: 'archived',
            in: 'query',
          },
          description: 'Filter by archived status.',
        }),
      favourited: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean', description: 'Filter by favourited status.' },
            required: false,
            description: 'Filter by favourited status.',
            name: 'favourited',
            in: 'query',
          },
          description: 'Filter by favourited status.',
        }),
      sortOrder: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'desc',
              description: "Sort order by creation date. Defaults to 'desc'.",
            },
            required: false,
            description: "Sort order by creation date. Defaults to 'desc'.",
            name: 'sortOrder',
            in: 'query',
          },
          description: "Sort order by creation date. Defaults to 'desc'.",
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', description: 'Maximum number of items to return per page.' },
            required: false,
            description: 'Maximum number of items to return per page.',
            name: 'limit',
            in: 'query',
          },
          description: 'Maximum number of items to return per page.',
        }),
      cursor: CursorSchema.openapi({
        param: {
          schema: { $ref: '#/components/schemas/Cursor' },
          required: false,
          description: 'Cursor from a previous response to fetch the next page.',
          name: 'cursor',
          in: 'query',
        },
      }).exactOptional(),
      includeContent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'boolean',
              default: false,
              description:
                "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            },
            required: false,
            description:
              "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            name: 'includeContent',
            in: 'query',
          },
          description:
            "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of bookmarks.',
      content: { 'application/json': { schema: PaginatedBookmarksSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postBookmarksRoute = createRoute({
  method: 'post',
  path: '/bookmarks',
  tags: ['Bookmarks'],
  summary: 'Create a new bookmark',
  description:
    'Create a new bookmark. The bookmark type (link, text, or asset) is determined by the `type` field in the request body. For link bookmarks, if the URL already exists, the existing bookmark is returned with a 200 status.',
  operationId: 'createBookmark',
  request: {
    body: {
      description: 'The bookmark to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              title: z.string().max(1000).nullable().exactOptional(),
              archived: z.boolean().exactOptional(),
              favourited: z.boolean().exactOptional(),
              note: z.string().exactOptional(),
              summary: z.string().exactOptional(),
              createdAt: z.iso.datetime({ offset: true }).exactOptional(),
              crawlPriority: z.enum(['low', 'normal']).exactOptional(),
              importSessionId: z.string().exactOptional(),
              source: z
                .enum(['api', 'web', 'cli', 'mobile', 'extension', 'singlefile', 'rss', 'import'])
                .exactOptional(),
            })
            .openapi({ required: [] })
            .and(
              z.xor([
                z
                  .object({
                    type: z.literal('link'),
                    url: z.url(),
                    precrawledArchiveId: z.string().exactOptional(),
                  })
                  .openapi({ required: ['type', 'url'] }),
                z
                  .object({
                    type: z.literal('text'),
                    text: z.string(),
                    sourceUrl: z.string().exactOptional(),
                  })
                  .openapi({ required: ['type', 'text'] }),
                z
                  .object({
                    type: z.literal('asset'),
                    assetType: z.enum(['image', 'pdf']),
                    assetId: z.string(),
                    fileName: z.string().exactOptional(),
                    sourceUrl: z.string().exactOptional(),
                  })
                  .openapi({ required: ['type', 'assetType', 'assetId'] }),
              ]),
            ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A bookmark with this URL already exists. The existing bookmark is returned.',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    201: {
      description: 'The bookmark was created successfully.',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    400: {
      description: 'Bad request — invalid input data.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBookmarksSearchRoute = createRoute({
  method: 'get',
  path: '/bookmarks/search',
  tags: ['Bookmarks'],
  summary: 'Search bookmarks',
  description:
    'Search across all bookmarks using full-text, semantic, or hybrid ranking. Full-text search covers bookmark titles, content, descriptions, and notes. Results default to full-text relevance sorting; semantic and hybrid modes support relevance sorting only.',
  operationId: 'searchBookmarks',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', description: 'The search query string.' },
            required: true,
            description: 'The search query string.',
            name: 'q',
            in: 'query',
          },
          description: 'The search query string.',
        }),
      searchMode: z
        .enum(['fts', 'semantic', 'hybrid'])
        .default('fts')
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['fts', 'semantic', 'hybrid'],
              default: 'fts',
              description:
                "Search strategy. 'fts' uses full-text search, 'semantic' uses bookmark embeddings, and 'hybrid' fuses a fixed candidate window from both. Hybrid falls back to full-text search when the query contains no free-text terms or when embedding infrastructure is unavailable. Semantic hits below a minimum similarity are dropped, so semantic search may return fewer results than requested.",
            },
            required: false,
            description:
              "Search strategy. 'fts' uses full-text search, 'semantic' uses bookmark embeddings, and 'hybrid' fuses a fixed candidate window from both. Hybrid falls back to full-text search when the query contains no free-text terms or when embedding infrastructure is unavailable. Semantic hits below a minimum similarity are dropped, so semantic search may return fewer results than requested.",
            name: 'searchMode',
            in: 'query',
          },
          description:
            "Search strategy. 'fts' uses full-text search, 'semantic' uses bookmark embeddings, and 'hybrid' fuses a fixed candidate window from both. Hybrid falls back to full-text search when the query contains no free-text terms or when embedding infrastructure is unavailable. Semantic hits below a minimum similarity are dropped, so semantic search may return fewer results than requested.",
        }),
      sortOrder: z
        .enum(['asc', 'desc', 'relevance'])
        .default('relevance')
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['asc', 'desc', 'relevance'],
              default: 'relevance',
              description:
                "Sort order for results. Defaults to 'relevance'. Use 'asc' or 'desc' for date-based sorting.",
            },
            required: false,
            description:
              "Sort order for results. Defaults to 'relevance'. Use 'asc' or 'desc' for date-based sorting.",
            name: 'sortOrder',
            in: 'query',
          },
          description:
            "Sort order for results. Defaults to 'relevance'. Use 'asc' or 'desc' for date-based sorting.",
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', description: 'Maximum number of items to return per page.' },
            required: false,
            description: 'Maximum number of items to return per page.',
            name: 'limit',
            in: 'query',
          },
          description: 'Maximum number of items to return per page.',
        }),
      cursor: CursorSchema.openapi({
        param: {
          schema: { $ref: '#/components/schemas/Cursor' },
          required: false,
          description: 'Cursor from a previous response to fetch the next page.',
          name: 'cursor',
          in: 'query',
        },
      }).exactOptional(),
      includeContent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'boolean',
              default: false,
              description:
                "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            },
            required: false,
            description:
              "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            name: 'includeContent',
            in: 'query',
          },
          description:
            "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of bookmarks matching the search query.',
      content: { 'application/json': { schema: PaginatedBookmarksSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBookmarksCheckUrlRoute = createRoute({
  method: 'get',
  path: '/bookmarks/check-url',
  tags: ['Bookmarks'],
  summary: 'Check if a URL exists in bookmarks',
  description:
    'Check if a URL is already bookmarked. Uses substring matching to find candidates, then normalizes URLs (ignoring hash fragments and trailing slashes) for exact comparison.',
  operationId: 'checkBookmarkUrl',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', description: 'The URL to check against existing bookmarks.' },
            required: true,
            description: 'The URL to check against existing bookmarks.',
            name: 'url',
            in: 'query',
          },
          description: 'The URL to check against existing bookmarks.',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Object indicating whether the URL is bookmarked. `bookmarkId` is `null` if not found.',
      content: {
        'application/json': {
          schema: z
            .object({
              bookmarkId: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'The ID of the existing bookmark, or null if the URL is not bookmarked.',
                }),
            })
            .openapi({ required: ['bookmarkId'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBookmarksBookmarkIdRoute = createRoute({
  method: 'get',
  path: '/bookmarks/{bookmarkId}',
  tags: ['Bookmarks'],
  summary: 'Get a single bookmark',
  description: 'Retrieve a single bookmark by its ID, including its tags, content, and assets.',
  operationId: 'getBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema }),
    query: z.object({
      includeContent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'boolean',
              default: false,
              description:
                "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            },
            required: false,
            description:
              "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            name: 'includeContent',
            in: 'query',
          },
          description:
            "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested bookmark.',
      content: { 'application/json': { schema: BookmarkSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteBookmarksBookmarkIdRoute = createRoute({
  method: 'delete',
  path: '/bookmarks/{bookmarkId}',
  tags: ['Bookmarks'],
  summary: 'Delete a bookmark',
  description:
    'Permanently delete a bookmark and all its associated data (tags, highlights, assets).',
  operationId: 'deleteBookmark',
  request: { params: z.object({ bookmarkId: BookmarkIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the bookmark was deleted successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const patchBookmarksBookmarkIdRoute = createRoute({
  method: 'patch',
  path: '/bookmarks/{bookmarkId}',
  tags: ['Bookmarks'],
  summary: 'Update a bookmark',
  description:
    'Partially update a bookmark. Only the fields provided in the request body will be updated. Supports updating common fields (title, note, archived, favourited) as well as type-specific fields.',
  operationId: 'updateBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema }),
    body: {
      description: 'The fields to update. Only the fields you want to change need to be provided.',
      content: {
        'application/json': {
          schema: z
            .object({
              archived: z.boolean().exactOptional(),
              favourited: z.boolean().exactOptional(),
              summary: z.string().nullable().exactOptional(),
              note: z.string().exactOptional(),
              title: z.string().max(1000).nullable().exactOptional(),
              createdAt: z.iso.datetime({ offset: true }).exactOptional(),
              url: z.url().exactOptional(),
              description: z.string().nullable().exactOptional(),
              author: z.string().nullable().exactOptional(),
              publisher: z.string().nullable().exactOptional(),
              datePublished: z.iso.datetime({ offset: true }).nullable().exactOptional(),
              dateModified: z.iso.datetime({ offset: true }).nullable().exactOptional(),
              text: z.string().nullable().exactOptional(),
              assetContent: z.string().nullable().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated bookmark.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              firstCreatedAt: z.iso.datetime({ offset: true }).exactOptional(),
              createdAt: z.iso.datetime({ offset: true }),
              modifiedAt: z.iso.datetime({ offset: true }).nullable(),
              title: z.string().nullable().exactOptional(),
              archived: z.boolean(),
              favourited: z.boolean(),
              taggingStatus: z
                .union([
                  z.literal('success'),
                  z.literal('failure'),
                  z.literal('pending'),
                  z.literal(null),
                ])
                .nullable(),
              summarizationStatus: z
                .union([
                  z.literal('success'),
                  z.literal('failure'),
                  z.literal('pending'),
                  z.literal(null),
                ])
                .nullable(),
              embeddingStatus: z
                .union([
                  z.literal('success'),
                  z.literal('failure'),
                  z.literal('pending'),
                  z.literal(null),
                ])
                .nullable(),
              note: z.string().nullable().exactOptional(),
              summary: z.string().nullable().exactOptional(),
              source: z
                .union([
                  z.literal('api'),
                  z.literal('web'),
                  z.literal('cli'),
                  z.literal('mobile'),
                  z.literal('extension'),
                  z.literal('singlefile'),
                  z.literal('rss'),
                  z.literal('import'),
                  z.literal(null),
                ])
                .nullable()
                .exactOptional(),
              userId: z.string(),
            })
            .openapi({
              required: [
                'id',
                'createdAt',
                'modifiedAt',
                'archived',
                'favourited',
                'taggingStatus',
                'summarizationStatus',
                'embeddingStatus',
                'userId',
              ],
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBookmarksBookmarkIdContentRoute = createRoute({
  method: 'get',
  path: '/bookmarks/{bookmarkId}/content',
  tags: ['Bookmarks'],
  summary: 'Get readable bookmark content',
  description:
    'Retrieve a bounded chunk of an agent-readable bookmark representation. Link content is rendered from extracted HTML; text and media bookmarks use their stored or extracted text. Continue reading by passing the opaque `nextCursor` from the previous response.',
  operationId: 'getBookmarkReadableContent',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema }),
    query: z.object({
      format: z
        .enum(['markdown', 'text'])
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['markdown', 'text'],
              description:
                "The readable representation. If omitted with a cursor, the cursor's format is used; otherwise defaults to markdown.",
            },
            required: false,
            description:
              "The readable representation. If omitted with a cursor, the cursor's format is used; otherwise defaults to markdown.",
            name: 'format',
            in: 'query',
          },
          description:
            "The readable representation. If omitted with a cursor, the cursor's format is used; otherwise defaults to markdown.",
        }),
      maxChars: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50000),
        )
        .default(12000)
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'integer',
              minimum: 1,
              maximum: 50000,
              default: 12000,
              description:
                'Maximum number of Unicode characters to return. The chunk may end earlier at a paragraph or line boundary.',
            },
            required: false,
            description:
              'Maximum number of Unicode characters to return. The chunk may end earlier at a paragraph or line boundary.',
            name: 'maxChars',
            in: 'query',
          },
          description:
            'Maximum number of Unicode characters to return. The chunk may end earlier at a paragraph or line boundary.',
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              description:
                'Opaque continuation cursor returned as `nextCursor` by a previous response.',
            },
            required: false,
            description:
              'Opaque continuation cursor returned as `nextCursor` by a previous response.',
            name: 'cursor',
            in: 'query',
          },
          description:
            'Opaque continuation cursor returned as `nextCursor` by a previous response.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A bounded chunk of readable bookmark content.',
      content: { 'application/json': { schema: BookmarkReadableContentSchema } },
    },
    400: {
      description: 'Bad request — the cursor is malformed, mismatched, or outside the content.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'The bookmark content changed after the supplied cursor was issued.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postBookmarksBookmarkIdSummarizeRoute = createRoute({
  method: 'post',
  path: '/bookmarks/{bookmarkId}/summarize',
  tags: ['Bookmarks'],
  summary: 'Summarize a bookmark',
  description:
    'Trigger AI summarization for a bookmark. The summary is generated asynchronously and attached to the bookmark. Returns the updated bookmark record.',
  operationId: 'summarizeBookmark',
  request: { params: z.object({ bookmarkId: BookmarkIdParamsSchema }) },
  responses: {
    200: {
      description: 'The bookmark with the updated summary.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              firstCreatedAt: z.iso.datetime({ offset: true }).exactOptional(),
              createdAt: z.iso.datetime({ offset: true }),
              modifiedAt: z.iso.datetime({ offset: true }).nullable(),
              title: z.string().nullable().exactOptional(),
              archived: z.boolean(),
              favourited: z.boolean(),
              taggingStatus: z
                .union([
                  z.literal('success'),
                  z.literal('failure'),
                  z.literal('pending'),
                  z.literal(null),
                ])
                .nullable(),
              summarizationStatus: z
                .union([
                  z.literal('success'),
                  z.literal('failure'),
                  z.literal('pending'),
                  z.literal(null),
                ])
                .nullable(),
              embeddingStatus: z
                .union([
                  z.literal('success'),
                  z.literal('failure'),
                  z.literal('pending'),
                  z.literal(null),
                ])
                .nullable(),
              note: z.string().nullable().exactOptional(),
              summary: z.string().nullable().exactOptional(),
              source: z
                .union([
                  z.literal('api'),
                  z.literal('web'),
                  z.literal('cli'),
                  z.literal('mobile'),
                  z.literal('extension'),
                  z.literal('singlefile'),
                  z.literal('rss'),
                  z.literal('import'),
                  z.literal(null),
                ])
                .nullable()
                .exactOptional(),
              userId: z.string(),
            })
            .openapi({
              required: [
                'id',
                'createdAt',
                'modifiedAt',
                'archived',
                'favourited',
                'taggingStatus',
                'summarizationStatus',
                'embeddingStatus',
                'userId',
              ],
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postBookmarksBookmarkIdTagsRoute = createRoute({
  method: 'post',
  path: '/bookmarks/{bookmarkId}/tags',
  tags: ['Bookmarks'],
  summary: 'Attach tags to a bookmark',
  description:
    "Attach one or more tags to a bookmark. Tags can be identified by ID or name. If a tag name is provided and the tag doesn't exist, it will be created automatically.",
  operationId: 'attachTagsToBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema }),
    body: {
      description: 'The tags to attach. Each tag must have either a `tagId` or a `tagName`.',
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z.array(
                z
                  .object({
                    tagId: z.string().exactOptional(),
                    tagName: z.string().exactOptional(),
                    attachedBy: z.enum(['ai', 'human']).default('human').exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['tags'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The IDs of the tags that were attached.',
      content: {
        'application/json': {
          schema: z.object({ attached: z.array(TagIdSchema) }).openapi({ required: ['attached'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteBookmarksBookmarkIdTagsRoute = createRoute({
  method: 'delete',
  path: '/bookmarks/{bookmarkId}/tags',
  tags: ['Bookmarks'],
  summary: 'Detach tags from a bookmark',
  description: 'Detach one or more tags from a bookmark. Tags can be identified by ID or name.',
  operationId: 'detachTagsFromBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema }),
    body: {
      description: 'The tags to detach. Each tag must have either a `tagId` or a `tagName`.',
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z.array(
                z
                  .object({
                    tagId: z.string().exactOptional(),
                    tagName: z.string().exactOptional(),
                    attachedBy: z.enum(['ai', 'human']).default('human').exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['tags'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The IDs of the tags that were detached.',
      content: {
        'application/json': {
          schema: z.object({ detached: z.array(TagIdSchema) }).openapi({ required: ['detached'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBookmarksBookmarkIdListsRoute = createRoute({
  method: 'get',
  path: '/bookmarks/{bookmarkId}/lists',
  tags: ['Bookmarks'],
  summary: 'Get lists of a bookmark',
  description: 'Retrieve all lists that contain the specified bookmark.',
  operationId: 'getBookmarkLists',
  request: { params: z.object({ bookmarkId: BookmarkIdParamsSchema }) },
  responses: {
    200: {
      description: 'The lists that contain this bookmark.',
      content: {
        'application/json': {
          schema: z.object({ lists: z.array(ListSchema) }).openapi({ required: ['lists'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBookmarksBookmarkIdHighlightsRoute = createRoute({
  method: 'get',
  path: '/bookmarks/{bookmarkId}/highlights',
  tags: ['Bookmarks'],
  summary: 'Get highlights of a bookmark',
  description: 'Retrieve all text highlights within the specified bookmark.',
  operationId: 'getBookmarkHighlights',
  request: { params: z.object({ bookmarkId: BookmarkIdParamsSchema }) },
  responses: {
    200: {
      description: 'The highlights within this bookmark.',
      content: {
        'application/json': {
          schema: z
            .object({ highlights: z.array(HighlightSchema) })
            .openapi({ required: ['highlights'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postBookmarksBookmarkIdAssetsRoute = createRoute({
  method: 'post',
  path: '/bookmarks/{bookmarkId}/assets',
  tags: ['Bookmarks'],
  summary: 'Attach asset to a bookmark',
  description:
    'Attach a previously uploaded asset to a bookmark. The asset must be uploaded first via the POST /assets endpoint.',
  operationId: 'attachAssetToBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema }),
    body: {
      description: 'The asset ID and type to attach.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().openapi({ description: 'The ID of the previously uploaded asset.' }),
              assetType: z
                .enum([
                  'linkHtmlContent',
                  'screenshot',
                  'pdf',
                  'assetScreenshot',
                  'bannerImage',
                  'fullPageArchive',
                  'video',
                  'bookmarkAsset',
                  'precrawledArchive',
                  'userUploaded',
                  'avatar',
                  'unknown',
                ])
                .openapi({ description: 'The type classification for this asset.' }),
            })
            .openapi({ required: ['id', 'assetType'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The asset was attached successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              assetType: z.enum([
                'linkHtmlContent',
                'screenshot',
                'pdf',
                'assetScreenshot',
                'bannerImage',
                'fullPageArchive',
                'video',
                'bookmarkAsset',
                'precrawledArchive',
                'userUploaded',
                'avatar',
                'unknown',
              ]),
              fileName: z.string().nullable().exactOptional(),
            })
            .openapi({ required: ['id', 'assetType'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putBookmarksBookmarkIdAssetsAssetIdRoute = createRoute({
  method: 'put',
  path: '/bookmarks/{bookmarkId}/assets/{assetId}',
  tags: ['Bookmarks'],
  summary: 'Replace asset on a bookmark',
  description:
    'Replace an existing asset on a bookmark with a different previously uploaded asset.',
  operationId: 'replaceAssetOnBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema, assetId: AssetIdParamsSchema }),
    body: {
      description: 'The ID of the new asset to replace the existing one.',
      content: {
        'application/json': {
          schema: z
            .object({
              assetId: z
                .string()
                .openapi({ description: 'The ID of the new asset to use as a replacement.' }),
            })
            .openapi({ required: ['assetId'] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'No content — asset was replaced successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark or asset not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteBookmarksBookmarkIdAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/bookmarks/{bookmarkId}/assets/{assetId}',
  tags: ['Bookmarks'],
  summary: 'Detach asset from a bookmark',
  description: 'Detach an asset from a bookmark.',
  operationId: 'detachAssetFromBookmark',
  request: {
    params: z.object({ bookmarkId: BookmarkIdParamsSchema, assetId: AssetIdParamsSchema }),
  },
  responses: {
    204: { description: 'No content — asset was detached successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark or asset not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getListsRoute = createRoute({
  method: 'get',
  path: '/lists',
  tags: ['Lists'],
  summary: 'Get all lists',
  description:
    'Retrieve all bookmark lists for the authenticated user, including both manual and smart lists.',
  operationId: 'listLists',
  responses: {
    200: {
      description: 'All lists owned by or shared with the current user.',
      content: {
        'application/json': {
          schema: z.object({ lists: z.array(ListSchema) }).openapi({ required: ['lists'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postListsRoute = createRoute({
  method: 'post',
  path: '/lists',
  tags: ['Lists'],
  summary: 'Create a new list',
  description:
    'Create a new bookmark list. Lists can be manual (bookmarks are added explicitly) or smart (bookmarks are matched automatically by a search query).',
  operationId: 'createList',
  request: {
    body: {
      description:
        'The list to create. For smart lists, a `query` field is required. For manual lists, `query` must not be set.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(100),
              description: z.string().min(0).max(500).exactOptional(),
              icon: z.string(),
              type: z.enum(['manual', 'smart']).default('manual').exactOptional(),
              query: z.string().min(1).exactOptional(),
              parentId: z.string().nullable().exactOptional(),
            })
            .openapi({ required: ['name', 'icon'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The created list.',
      content: { 'application/json': { schema: ListSchema } },
    },
    400: {
      description:
        'Bad request — invalid input data (e.g., smart list missing query, or manual list with a query).',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getListsListIdRoute = createRoute({
  method: 'get',
  path: '/lists/{listId}',
  tags: ['Lists'],
  summary: 'Get a single list',
  description: 'Retrieve a single list by its ID.',
  operationId: 'getList',
  request: { params: z.object({ listId: ListIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested list.',
      content: { 'application/json': { schema: ListSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'List not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteListsListIdRoute = createRoute({
  method: 'delete',
  path: '/lists/{listId}',
  tags: ['Lists'],
  summary: 'Delete a list',
  description: 'Delete a list. This removes the list only — bookmarks within it are not deleted.',
  operationId: 'deleteList',
  request: { params: z.object({ listId: ListIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the list was deleted successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'List not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const patchListsListIdRoute = createRoute({
  method: 'patch',
  path: '/lists/{listId}',
  tags: ['Lists'],
  summary: 'Update a list',
  description:
    'Partially update a list. Only the fields provided in the request body will be updated.',
  operationId: 'updateList',
  request: {
    params: z.object({ listId: ListIdParamsSchema }),
    body: {
      description: 'The fields to update. Only the fields you want to change need to be provided.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(100).exactOptional(),
              description: z.string().min(0).max(500).nullable().exactOptional(),
              icon: z.string().exactOptional(),
              parentId: z.string().nullable().exactOptional(),
              query: z.string().min(1).exactOptional(),
              public: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated list.',
      content: { 'application/json': { schema: ListSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'List not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getListsListIdBookmarksRoute = createRoute({
  method: 'get',
  path: '/lists/{listId}/bookmarks',
  tags: ['Lists'],
  summary: 'Get bookmarks in a list',
  description:
    "Retrieve a paginated list of bookmarks within the specified list. For smart lists, bookmarks are computed from the list's query.",
  operationId: 'getListBookmarks',
  request: {
    params: z.object({ listId: ListIdParamsSchema }),
    query: z.object({
      sortOrder: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'desc',
              description: "Sort order by creation date. Defaults to 'desc'.",
            },
            required: false,
            description: "Sort order by creation date. Defaults to 'desc'.",
            name: 'sortOrder',
            in: 'query',
          },
          description: "Sort order by creation date. Defaults to 'desc'.",
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', description: 'Maximum number of items to return per page.' },
            required: false,
            description: 'Maximum number of items to return per page.',
            name: 'limit',
            in: 'query',
          },
          description: 'Maximum number of items to return per page.',
        }),
      cursor: CursorSchema.openapi({
        param: {
          schema: { $ref: '#/components/schemas/Cursor' },
          required: false,
          description: 'Cursor from a previous response to fetch the next page.',
          name: 'cursor',
          in: 'query',
        },
      }).exactOptional(),
      includeContent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'boolean',
              default: false,
              description:
                "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            },
            required: false,
            description:
              "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            name: 'includeContent',
            in: 'query',
          },
          description:
            "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of bookmarks in the specified list.',
      content: { 'application/json': { schema: PaginatedBookmarksSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'List not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putListsListIdBookmarksBookmarkIdRoute = createRoute({
  method: 'put',
  path: '/lists/{listId}/bookmarks/{bookmarkId}',
  tags: ['Lists'],
  summary: 'Add a bookmark to a list',
  description:
    'Add a bookmark to a manual list. This operation is idempotent — adding an already-present bookmark has no effect.',
  operationId: 'addBookmarkToList',
  request: { params: z.object({ listId: ListIdParamsSchema, bookmarkId: BookmarkIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the bookmark was added to the list successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'List or bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteListsListIdBookmarksBookmarkIdRoute = createRoute({
  method: 'delete',
  path: '/lists/{listId}/bookmarks/{bookmarkId}',
  tags: ['Lists'],
  summary: 'Remove a bookmark from a list',
  description: 'Remove a bookmark from a manual list.',
  operationId: 'removeBookmarkFromList',
  request: { params: z.object({ listId: ListIdParamsSchema, bookmarkId: BookmarkIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the bookmark was removed from the list successfully.' },
    400: {
      description: 'Bookmark is not in the list.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'List or bookmark not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTagsRoute = createRoute({
  method: 'get',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Get all tags',
  description:
    'Retrieve a paginated list of all tags. Supports filtering by name, attached-by source, and sorting by name, usage count, or relevance.',
  operationId: 'listTags',
  request: {
    query: z.object({
      nameContains: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, required: false, name: 'nameContains', in: 'query' },
        }),
      sort: z
        .enum(['name', 'usage', 'relevance'])
        .default('usage')
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['name', 'usage', 'relevance'], default: 'usage' },
            required: false,
            name: 'sort',
            in: 'query',
          },
        }),
      attachedBy: z
        .enum(['ai', 'human', 'none'])
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', enum: ['ai', 'human', 'none'] },
            required: false,
            name: 'attachedBy',
            in: 'query',
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: { schema: { type: 'string' }, required: false, name: 'cursor', in: 'query' },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'integer', minimum: 1 },
            required: false,
            name: 'limit',
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of tags with usage counts.',
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z.array(TagSchema),
              nextCursor: z
                .string()
                .nullable()
                .openapi({ description: 'Cursor for the next page, or null if no more results.' }),
            })
            .openapi({ required: ['tags', 'nextCursor'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postTagsRoute = createRoute({
  method: 'post',
  path: '/tags',
  tags: ['Tags'],
  summary: 'Create a new tag',
  description:
    "Create a new tag. Tag names are normalized (trimmed and converted to the user's preferred tag style).",
  operationId: 'createTag',
  request: {
    body: {
      description: 'The tag name to create.',
      content: {
        'application/json': {
          schema: z.object({ name: z.string() }).openapi({ required: ['name'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The created tag.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string(), name: z.string() })
            .openapi({ required: ['id', 'name'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTagsTagIdRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Get a single tag',
  description: 'Retrieve a single tag by its ID, including the number of bookmarks using it.',
  operationId: 'getTag',
  request: { params: z.object({ tagId: TagIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested tag with usage statistics.',
      content: { 'application/json': { schema: TagSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Tag not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteTagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  description: 'Delete a tag. This removes the tag from all bookmarks it was attached to.',
  operationId: 'deleteTag',
  request: { params: z.object({ tagId: TagIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the tag was deleted successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Tag not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const patchTagsTagIdRoute = createRoute({
  method: 'patch',
  path: '/tags/{tagId}',
  tags: ['Tags'],
  summary: 'Update a tag',
  description: 'Rename a tag. The new name will be normalized and trimmed.',
  operationId: 'updateTag',
  request: {
    params: z.object({ tagId: TagIdParamsSchema }),
    body: {
      description: 'The new tag name.',
      content: {
        'application/json': {
          schema: z.object({ name: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated tag.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string(), name: z.string() })
            .openapi({ required: ['id', 'name'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Tag not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getTagsTagIdBookmarksRoute = createRoute({
  method: 'get',
  path: '/tags/{tagId}/bookmarks',
  tags: ['Tags'],
  summary: 'Get bookmarks with a tag',
  description: 'Retrieve a paginated list of all bookmarks that have the specified tag attached.',
  operationId: 'getTagBookmarks',
  request: {
    params: z.object({ tagId: TagIdParamsSchema }),
    query: z.object({
      sortOrder: z
        .enum(['asc', 'desc'])
        .default('desc')
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'desc',
              description: "Sort order by creation date. Defaults to 'desc'.",
            },
            required: false,
            description: "Sort order by creation date. Defaults to 'desc'.",
            name: 'sortOrder',
            in: 'query',
          },
          description: "Sort order by creation date. Defaults to 'desc'.",
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', description: 'Maximum number of items to return per page.' },
            required: false,
            description: 'Maximum number of items to return per page.',
            name: 'limit',
            in: 'query',
          },
          description: 'Maximum number of items to return per page.',
        }),
      cursor: CursorSchema.openapi({
        param: {
          schema: { $ref: '#/components/schemas/Cursor' },
          required: false,
          description: 'Cursor from a previous response to fetch the next page.',
          name: 'cursor',
          in: 'query',
        },
      }).exactOptional(),
      includeContent: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            schema: {
              type: 'boolean',
              default: false,
              description:
                "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            },
            required: false,
            description:
              "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
            name: 'includeContent',
            in: 'query',
          },
          description:
            "If set to true, the bookmark's full content (HTML, text, etc.) will be included in the response. Set to false for lighter responses when only metadata is needed.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of bookmarks that have the specified tag.',
      content: { 'application/json': { schema: PaginatedBookmarksSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Tag not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getHighlightsRoute = createRoute({
  method: 'get',
  path: '/highlights',
  tags: ['Highlights'],
  summary: 'Get all highlights',
  description:
    'Retrieve a paginated list of all highlights across all bookmarks for the authenticated user.',
  operationId: 'listHighlights',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number', description: 'Maximum number of items to return per page.' },
            required: false,
            description: 'Maximum number of items to return per page.',
            name: 'limit',
            in: 'query',
          },
          description: 'Maximum number of items to return per page.',
        }),
      cursor: CursorSchema.openapi({
        param: {
          schema: { $ref: '#/components/schemas/Cursor' },
          required: false,
          description: 'Cursor from a previous response to fetch the next page.',
          name: 'cursor',
          in: 'query',
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of highlights.',
      content: { 'application/json': { schema: PaginatedHighlightsSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postHighlightsRoute = createRoute({
  method: 'post',
  path: '/highlights',
  tags: ['Highlights'],
  summary: 'Create a new highlight',
  description:
    "Create a new text highlight on a bookmark. Highlights are defined by character offsets within the bookmark's content and support color coding.",
  operationId: 'createHighlight',
  request: {
    body: {
      description:
        'The highlight to create, including the bookmark ID, text offsets, and optional color/note.',
      content: {
        'application/json': {
          schema: z
            .object({
              bookmarkId: z.string(),
              startOffset: z.number(),
              endOffset: z.number(),
              color: z.enum(['yellow', 'red', 'green', 'blue']).default('yellow').exactOptional(),
              text: z.string().nullable(),
              note: z.string().nullable(),
            })
            .openapi({ required: ['bookmarkId', 'startOffset', 'endOffset', 'text', 'note'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The created highlight.',
      content: { 'application/json': { schema: HighlightSchema } },
    },
    400: {
      description: 'Bad request — invalid offsets or missing required fields.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Bookmark not found — the specified bookmarkId does not exist.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getHighlightsHighlightIdRoute = createRoute({
  method: 'get',
  path: '/highlights/{highlightId}',
  tags: ['Highlights'],
  summary: 'Get a single highlight',
  description: 'Retrieve a single highlight by its ID.',
  operationId: 'getHighlight',
  request: { params: z.object({ highlightId: HighlightIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested highlight.',
      content: { 'application/json': { schema: HighlightSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Highlight not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteHighlightsHighlightIdRoute = createRoute({
  method: 'delete',
  path: '/highlights/{highlightId}',
  tags: ['Highlights'],
  summary: 'Delete a highlight',
  description: 'Delete a highlight by its ID.',
  operationId: 'deleteHighlight',
  request: { params: z.object({ highlightId: HighlightIdParamsSchema }) },
  responses: {
    200: {
      description: 'The deleted highlight is returned.',
      content: { 'application/json': { schema: HighlightSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Highlight not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const patchHighlightsHighlightIdRoute = createRoute({
  method: 'patch',
  path: '/highlights/{highlightId}',
  tags: ['Highlights'],
  summary: 'Update a highlight',
  description: 'Partially update a highlight. Supports changing the color or note.',
  operationId: 'updateHighlight',
  request: {
    params: z.object({ highlightId: HighlightIdParamsSchema }),
    body: {
      description: 'The fields to update. Only the fields you want to change need to be provided.',
      content: {
        'application/json': {
          schema: z
            .object({
              color: z.enum(['yellow', 'red', 'green', 'blue']).exactOptional(),
              note: z.string().nullable().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated highlight.',
      content: { 'application/json': { schema: HighlightSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Highlight not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'Get current user info',
  description:
    'Retrieve profile information for the currently authenticated user, including their name, email, and avatar.',
  operationId: 'getCurrentUser',
  responses: {
    200: {
      description: "The current user's profile information.",
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              name: z.string().nullable().exactOptional(),
              email: z.string().nullable().exactOptional(),
              image: z.string().nullable().exactOptional(),
              localUser: z.boolean(),
            })
            .openapi({ required: ['id', 'localUser'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getUsersMeStatsRoute = createRoute({
  method: 'get',
  path: '/users/me/stats',
  tags: ['Users'],
  summary: 'Get current user stats',
  description:
    'Retrieve usage statistics for the currently authenticated user, including bookmark counts by type, top domains, tag usage, bookmarking activity patterns, and storage usage.',
  operationId: 'getCurrentUserStats',
  responses: {
    200: {
      description: 'Detailed usage statistics for the current user.',
      content: {
        'application/json': {
          schema: z
            .object({
              numBookmarks: z.number(),
              numFavorites: z.number(),
              numArchived: z.number(),
              numTags: z.number(),
              numLists: z.number(),
              numHighlights: z.number(),
              bookmarksByType: z
                .object({ link: z.number(), text: z.number(), asset: z.number() })
                .openapi({ required: ['link', 'text', 'asset'] }),
              topDomains: z
                .array(
                  z
                    .object({ domain: z.string(), count: z.number() })
                    .openapi({ required: ['domain', 'count'] }),
                )
                .max(10),
              totalAssetSize: z.number(),
              assetsByType: z.array(
                z
                  .object({ type: z.string(), count: z.number(), totalSize: z.number() })
                  .openapi({ required: ['type', 'count', 'totalSize'] }),
              ),
              bookmarkingActivity: z
                .object({
                  thisWeek: z.number(),
                  thisMonth: z.number(),
                  thisYear: z.number(),
                  byHour: z.array(
                    z
                      .object({ hour: z.number(), count: z.number() })
                      .openapi({ required: ['hour', 'count'] }),
                  ),
                  byDayOfWeek: z.array(
                    z
                      .object({ day: z.number(), count: z.number() })
                      .openapi({ required: ['day', 'count'] }),
                  ),
                })
                .openapi({
                  required: ['thisWeek', 'thisMonth', 'thisYear', 'byHour', 'byDayOfWeek'],
                }),
              tagUsage: z
                .array(
                  z
                    .object({ name: z.string(), count: z.number() })
                    .openapi({ required: ['name', 'count'] }),
                )
                .max(10),
              bookmarksBySource: z.array(
                z
                  .object({
                    source: z
                      .union([
                        z.literal('api'),
                        z.literal('web'),
                        z.literal('cli'),
                        z.literal('mobile'),
                        z.literal('extension'),
                        z.literal('singlefile'),
                        z.literal('rss'),
                        z.literal('import'),
                        z.literal(null),
                      ])
                      .nullable(),
                    count: z.number(),
                  })
                  .openapi({ required: ['source', 'count'] }),
              ),
            })
            .openapi({
              required: [
                'numBookmarks',
                'numFavorites',
                'numArchived',
                'numTags',
                'numLists',
                'numHighlights',
                'bookmarksByType',
                'topDomains',
                'totalAssetSize',
                'assetsByType',
                'bookmarkingActivity',
                'tagUsage',
                'bookmarksBySource',
              ],
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postAssetsRoute = createRoute({
  method: 'post',
  path: '/assets',
  tags: ['Assets'],
  summary: 'Upload a new asset',
  description:
    'Upload a binary file as a new asset. The uploaded asset can then be attached to a bookmark via the POST /bookmarks/{bookmarkId}/assets endpoint.',
  operationId: 'uploadAsset',
  request: {
    body: {
      description: 'The file to upload as multipart/form-data.',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z
                .file()
                .openapi({ type: 'string', format: 'binary', description: 'File to be uploaded' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'The asset was uploaded successfully. Returns metadata about the uploaded asset.',
      content: { 'application/json': { schema: UploadedAssetSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getAssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}',
  tags: ['Assets'],
  summary: 'Get a single asset',
  description:
    "Download an asset's binary content. The response Content-Type header is set based on the asset's MIME type.",
  operationId: 'getAsset',
  request: { params: z.object({ assetId: AssetIdParamsSchema }) },
  responses: {
    200: {
      description:
        "The asset's binary content. The Content-Type header reflects the asset's MIME type (e.g., image/png, application/pdf).",
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getAssetsAssetIdSignedUrlRoute = createRoute({
  method: 'get',
  path: '/assets/{assetId}/signed-url',
  tags: ['Assets'],
  summary: 'Get a signed asset URL',
  description:
    'Generate a temporary signed URL that can be used to download an asset without sending an API key.',
  operationId: 'getAssetSignedUrl',
  request: { params: z.object({ assetId: AssetIdParamsSchema }) },
  responses: {
    200: {
      description: 'A temporary signed URL for downloading the asset and its expiration time.',
      content: { 'application/json': { schema: SignedAssetUrlSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const putAdminUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/admin/users/{userId}',
  tags: ['Admin'],
  summary: 'Update a user (admin)',
  description:
    "Update a user's role, bookmark quota, storage quota, or browser crawling setting. Requires admin role. You cannot update your own user account via this endpoint.",
  operationId: 'adminUpdateUser',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            schema: {
              type: 'string',
              description: 'The ID of the user to update.',
              example: 'user_123',
            },
            required: true,
            description: 'The ID of the user to update.',
            name: 'userId',
            in: 'path',
          },
          description: 'The ID of the user to update.',
          example: 'user_123',
        }),
    }),
    body: {
      description:
        'The fields to update. All fields are optional — only provided fields will be changed.',
      content: {
        'application/json': {
          schema: z
            .object({
              role: z.enum(['user', 'admin']).exactOptional(),
              bookmarkQuota: z.int().min(0).nullable().exactOptional(),
              storageQuota: z.int().min(0).nullable().exactOptional(),
              browserCrawlingEnabled: z.boolean().nullable().exactOptional(),
            })
            .openapi({
              description: 'User update data',
              example: { role: 'admin', bookmarkQuota: 1000, storageQuota: 5000000000 },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'User updated successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().openapi({ description: 'Whether the update was successful.' }),
            })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Bad request — invalid input data or attempted to update own user.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    403: {
      description: 'Forbidden — admin access required.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'User not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postAdminJobsTriggerRecrawlRoute = createRoute({
  method: 'post',
  path: '/admin/jobs/trigger/recrawl',
  tags: ['Admin'],
  summary: 'Trigger recrawl of links (admin)',
  description:
    'Trigger a recrawl of link bookmarks. You can filter by crawl status to target specific bookmarks (e.g., only failed ones) and by how recently they were modified. Optionally run AI inference after crawling. Requires admin role.',
  operationId: 'adminTriggerRecrawl',
  request: {
    body: {
      description: 'Options for the recrawl job.',
      content: {
        'application/json': {
          schema: z
            .object({
              crawlStatus: z
                .enum(['success', 'failure', 'pending', 'all'])
                .default('all')
                .exactOptional()
                .openapi({
                  description:
                    "Filter bookmarks by their crawl status. Use 'failure' to retry only failed crawls.",
                }),
              runInference: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({ description: 'Whether to run AI inference after crawling.' }),
              modifiedWithinSeconds: z
                .int()
                .positive()
                .exactOptional()
                .openapi({
                  description:
                    'Only process bookmarks modified within this many seconds. Omit to process all matching bookmarks.',
                }),
            })
            .openapi({
              example: { crawlStatus: 'failure', runInference: false, modifiedWithinSeconds: 3600 },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Recrawl jobs triggered successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .boolean()
                .openapi({ description: 'Whether the job was triggered successfully.' }),
            })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Bad request — invalid input data.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    403: {
      description: 'Forbidden — admin access required.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postAdminJobsTriggerReindexRoute = createRoute({
  method: 'post',
  path: '/admin/jobs/trigger/reindex',
  tags: ['Admin'],
  summary: 'Trigger reindex of all bookmarks (admin)',
  description:
    'Trigger a reindex of bookmarks in the search engine. Without modifiedWithinSeconds, this clears the existing index and re-queues all bookmarks. When set, only bookmarks modified within that many seconds are re-queued and the existing index is preserved. Requires admin role.',
  operationId: 'adminTriggerReindex',
  request: {
    body: {
      description: 'Optional time window for the reindex job.',
      content: {
        'application/json': {
          schema: z
            .object({
              modifiedWithinSeconds: z
                .int()
                .positive()
                .exactOptional()
                .openapi({
                  description:
                    'Only process bookmarks modified within this many seconds. Omit to process all matching bookmarks.',
                }),
            })
            .openapi({ example: { modifiedWithinSeconds: 3600 }, required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Reindex jobs triggered successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .boolean()
                .openapi({ description: 'Whether the job was triggered successfully.' }),
            })
            .openapi({ required: ['success'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    403: {
      description: 'Forbidden — admin access required.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postAdminJobsTriggerInferenceRoute = createRoute({
  method: 'post',
  path: '/admin/jobs/trigger/inference',
  tags: ['Admin'],
  summary: 'Trigger AI inference on bookmarks (admin)',
  description:
    'Trigger AI inference (tagging or summarization) on bookmarks. You can filter by status and by how recently bookmarks were modified. Requires admin role.',
  operationId: 'adminTriggerInference',
  request: {
    body: {
      description: 'Options for the inference job.',
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .enum(['tag', 'summarize'])
                .openapi({
                  description:
                    "The type of inference to run: 'tag' for AI tagging, 'summarize' for AI summarization.",
                }),
              status: z
                .enum(['success', 'failure', 'pending', 'all'])
                .default('all')
                .exactOptional()
                .openapi({
                  description:
                    "Filter bookmarks by their inference status. Use 'failure' to retry only failed ones.",
                }),
              modifiedWithinSeconds: z
                .int()
                .positive()
                .exactOptional()
                .openapi({
                  description:
                    'Only process bookmarks modified within this many seconds. Omit to process all matching bookmarks.',
                }),
            })
            .openapi({
              required: ['type'],
              example: { type: 'tag', status: 'failure', modifiedWithinSeconds: 3600 },
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Inference jobs triggered successfully.',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z
                .boolean()
                .openapi({ description: 'Whether the job was triggered successfully.' }),
            })
            .openapi({ required: ['success'] }),
        },
      },
    },
    400: {
      description: 'Bad request — invalid input data.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    403: {
      description: 'Forbidden — admin access required.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBackupsRoute = createRoute({
  method: 'get',
  path: '/backups',
  tags: ['Backups'],
  summary: 'Get all backups',
  description:
    'Retrieve a list of all backups for the authenticated user, including their status and metadata.',
  operationId: 'listBackups',
  responses: {
    200: {
      description: 'A list of all backups.',
      content: {
        'application/json': {
          schema: z
            .object({
              backups: z.array(
                z
                  .object({
                    id: z.string(),
                    userId: z.string(),
                    assetId: z.string().nullable(),
                    createdAt: z.iso.datetime({ offset: true }),
                    size: z.number(),
                    bookmarkCount: z.number(),
                    status: z.enum(['pending', 'success', 'failure']),
                    errorMessage: z.string().nullable().exactOptional(),
                  })
                  .openapi({
                    required: [
                      'id',
                      'userId',
                      'assetId',
                      'createdAt',
                      'size',
                      'bookmarkCount',
                      'status',
                    ],
                  }),
              ),
            })
            .openapi({ required: ['backups'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postBackupsRoute = createRoute({
  method: 'post',
  path: '/backups',
  tags: ['Backups'],
  summary: 'Trigger a new backup',
  description:
    'Trigger a new full account backup. The backup is created asynchronously — use GET /backups/{backupId} to check its status.',
  operationId: 'createBackup',
  responses: {
    201: {
      description:
        "Backup creation was triggered. The backup object is returned with a 'pending' status.",
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              userId: z.string(),
              assetId: z.string().nullable(),
              createdAt: z.iso.datetime({ offset: true }),
              size: z.number(),
              bookmarkCount: z.number(),
              status: z.enum(['pending', 'success', 'failure']),
              errorMessage: z.string().nullable().exactOptional(),
            })
            .openapi({
              required: ['id', 'userId', 'assetId', 'createdAt', 'size', 'bookmarkCount', 'status'],
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBackupsBackupIdRoute = createRoute({
  method: 'get',
  path: '/backups/{backupId}',
  tags: ['Backups'],
  summary: 'Get a single backup',
  description:
    'Retrieve metadata for a single backup, including its current status (pending, success, or failure).',
  operationId: 'getBackup',
  request: { params: z.object({ backupId: BackupIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested backup.',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              userId: z.string(),
              assetId: z.string().nullable(),
              createdAt: z.iso.datetime({ offset: true }),
              size: z.number(),
              bookmarkCount: z.number(),
              status: z.enum(['pending', 'success', 'failure']),
              errorMessage: z.string().nullable().exactOptional(),
            })
            .openapi({
              required: ['id', 'userId', 'assetId', 'createdAt', 'size', 'bookmarkCount', 'status'],
            }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Backup not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteBackupsBackupIdRoute = createRoute({
  method: 'delete',
  path: '/backups/{backupId}',
  tags: ['Backups'],
  summary: 'Delete a backup',
  description: 'Permanently delete a backup and its associated archive file.',
  operationId: 'deleteBackup',
  request: { params: z.object({ backupId: BackupIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the backup was deleted successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Backup not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getBackupsBackupIdDownloadRoute = createRoute({
  method: 'get',
  path: '/backups/{backupId}/download',
  tags: ['Backups'],
  summary: 'Download a backup',
  description:
    "Download a completed backup as a zip archive. The backup must have a 'success' status.",
  operationId: 'downloadBackup',
  request: { params: z.object({ backupId: BackupIdParamsSchema }) },
  responses: {
    200: {
      description: 'The backup file as a zip archive.',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Backup not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getFeedsRoute = createRoute({
  method: 'get',
  path: '/feeds',
  tags: ['Feeds'],
  summary: 'Get all feeds',
  description: 'Retrieve all RSS feed subscriptions for the authenticated user.',
  operationId: 'listFeeds',
  responses: {
    200: {
      description: 'A list of all feeds.',
      content: {
        'application/json': {
          schema: z.object({ feeds: z.array(FeedSchema) }).openapi({ required: ['feeds'] }),
        },
      },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postFeedsRoute = createRoute({
  method: 'post',
  path: '/feeds',
  tags: ['Feeds'],
  summary: 'Create a new feed',
  description:
    'Create a new RSS feed subscription. The feed will be periodically fetched and matching items will be imported as bookmarks.',
  operationId: 'createFeed',
  request: {
    body: {
      description: 'The feed to create.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(100),
              url: z.url().max(2000),
              enabled: z.boolean(),
              importTags: z.boolean().default(false).exactOptional(),
            })
            .openapi({ required: ['name', 'url', 'enabled'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The created feed.',
      content: { 'application/json': { schema: FeedSchema } },
    },
    400: {
      description: 'Bad request — e.g. the maximum number of RSS feeds per user has been reached.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const getFeedsFeedIdRoute = createRoute({
  method: 'get',
  path: '/feeds/{feedId}',
  tags: ['Feeds'],
  summary: 'Get a single feed',
  description: 'Retrieve a single RSS feed subscription by its ID.',
  operationId: 'getFeed',
  request: { params: z.object({ feedId: FeedIdParamsSchema }) },
  responses: {
    200: {
      description: 'The requested feed.',
      content: { 'application/json': { schema: FeedSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Feed not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const deleteFeedsFeedIdRoute = createRoute({
  method: 'delete',
  path: '/feeds/{feedId}',
  tags: ['Feeds'],
  summary: 'Delete a feed',
  description: 'Delete an RSS feed subscription. Previously imported bookmarks are not affected.',
  operationId: 'deleteFeed',
  request: { params: z.object({ feedId: FeedIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the feed was deleted successfully.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Feed not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const patchFeedsFeedIdRoute = createRoute({
  method: 'patch',
  path: '/feeds/{feedId}',
  tags: ['Feeds'],
  summary: 'Update a feed',
  description: 'Update an RSS feed subscription. Only provided fields will be changed.',
  operationId: 'updateFeed',
  request: {
    params: z.object({ feedId: FeedIdParamsSchema }),
    body: {
      description: 'The fields to update.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().min(1).max(100).exactOptional(),
              url: z.url().max(2000).exactOptional(),
              enabled: z.boolean().exactOptional(),
              importTags: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The updated feed.',
      content: { 'application/json': { schema: FeedSchema } },
    },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Feed not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})

export const postFeedsFeedIdFetchRoute = createRoute({
  method: 'post',
  path: '/feeds/{feedId}/fetch',
  tags: ['Feeds'],
  summary: 'Trigger a feed fetch',
  description:
    'Trigger an immediate fetch of the RSS feed. The fetch is enqueued and processed asynchronously.',
  operationId: 'fetchFeedNow',
  request: { params: z.object({ feedId: FeedIdParamsSchema }) },
  responses: {
    204: { description: 'No content — the fetch has been enqueued.' },
    401: {
      description: 'Unauthorized — the Bearer token is missing, invalid, or expired.',
      content: { 'text/plain': { schema: z.string().openapi({ example: 'Unauthorized' }) } },
    },
    404: {
      description: 'Feed not found.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ bearerAuth: [] }],
})
