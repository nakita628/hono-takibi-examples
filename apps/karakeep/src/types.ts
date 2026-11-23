type Cursor = string
type Bookmark = {
  id: string
  firstCreatedAt?: string | undefined
  createdAt: string
  modifiedAt: string | null
  title?: (string | null) | undefined
  archived: boolean
  favourited: boolean
  taggingStatus: 'success' | 'failure' | 'pending' | null
  summarizationStatus: 'success' | 'failure' | 'pending' | null
  embeddingStatus: 'success' | 'failure' | 'pending' | null
  note?: (string | null) | undefined
  summary?: (string | null) | undefined
  source?:
    | 'api'
    | 'web'
    | 'cli'
    | 'mobile'
    | 'extension'
    | 'singlefile'
    | 'rss'
    | 'import'
    | null
    | undefined
  userId: string
  tags: { id: string; name: string; attachedBy: 'ai' | 'human' }[]
  content:
    | {
        type: 'link'
        url: string
        title?: (string | null) | undefined
        description?: (string | null) | undefined
        imageUrl?: (string | null) | undefined
        imageAssetId?: (string | null) | undefined
        screenshotAssetId?: (string | null) | undefined
        pdfAssetId?: (string | null) | undefined
        fullPageArchiveAssetId?: (string | null) | undefined
        precrawledArchiveAssetId?: (string | null) | undefined
        videoAssetId?: (string | null) | undefined
        favicon?: (string | null) | undefined
        htmlContent?: (string | null) | undefined
        contentAssetId?: (string | null) | undefined
        readerViewStatus?:
          | 'readable'
          | 'not_readable'
          | 'uncertain'
          | 'unavailable'
          | null
          | undefined
        readerViewScore?: (number | null) | undefined
        preferredPreview?: 'reader_view' | 'screenshot' | 'overview' | null | undefined
        crawledAt?: (string | null) | undefined
        crawlStatus?: 'success' | 'failure' | 'pending' | null | undefined
        author?: (string | null) | undefined
        publisher?: (string | null) | undefined
        datePublished?: (string | null) | undefined
        dateModified?: (string | null) | undefined
      }
    | { type: 'text'; text: string; sourceUrl?: (string | null) | undefined }
    | {
        type: 'asset'
        assetType: 'image' | 'pdf'
        assetId: string
        fileName?: (string | null) | undefined
        sourceUrl?: (string | null) | undefined
        size?: (number | null) | undefined
        content?: (string | null) | undefined
      }
    | { type: 'unknown' }
  assets: {
    id: string
    assetType:
      | 'linkHtmlContent'
      | 'screenshot'
      | 'pdf'
      | 'assetScreenshot'
      | 'bannerImage'
      | 'fullPageArchive'
      | 'video'
      | 'bookmarkAsset'
      | 'precrawledArchive'
      | 'userUploaded'
      | 'avatar'
      | 'unknown'
    fileName?: (string | null) | undefined
    size?: (number | null) | undefined
  }[]
}
type PaginatedBookmarks = { bookmarks: Bookmark[]; nextCursor: string | null }
type Error = { code: string; message: string }
type BookmarkId = string
type BookmarkReadableContent = {
  bookmarkId: string
  bookmarkType: 'link' | 'text' | 'asset'
  format: 'markdown' | 'text'
  content: string
  contentVersion: string
  range: { start: number; end: number; total: number }
  nextCursor: string | null
  truncated: boolean
}
type TagId = string
type List = {
  id: string
  name: string
  description?: (string | null) | undefined
  icon: string
  parentId: string | null
  type?: 'manual' | 'smart' | undefined
  query?: (string | null) | undefined
  public: boolean
  hasCollaborators: boolean
  userRole: 'owner' | 'editor' | 'viewer' | 'public'
}
type Highlight = {
  bookmarkId: string
  startOffset: number
  endOffset: number
  color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
  text: string | null
  prefix: string | null
  suffix: string | null
  note: string | null
  id: string
  userId: string
  createdAt: string
}
type AssetId = string
type ListId = string
type Tag = {
  id: string
  name: string
  numBookmarks: number
  numBookmarksByAttachedType: { ai?: number | undefined; human?: number | undefined }
}
type HighlightWithBookmark = {
  bookmarkId: string
  startOffset: number
  endOffset: number
  color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
  text: string | null
  prefix: string | null
  suffix: string | null
  note: string | null
  id: string
  userId: string
  createdAt: string
  bookmark: { title: string | null; url: string | null }
}
type PaginatedHighlights = { highlights: HighlightWithBookmark[]; nextCursor: string | null }
type HighlightId = string
type UploadedAsset = { assetId: string; contentType: string; size: number; fileName: string }
type SignedAssetUrl = { assetId: string; signedUrl: string; expiresAt: string }
type BackupId = string
type Feed = {
  id: string
  name: string
  url: string
  enabled: boolean
  importTags: boolean
  lastFetchedStatus: 'success' | 'failure' | 'pending' | null
  lastFetchedAt: string | null
  lastSuccessfulFetchAt: string | null
}
type FeedId = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bookmarks': {
      $get:
        | {
            input: {
              query: {
                archived?: boolean | undefined
                favourited?: boolean | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: PaginatedBookmarks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                archived?: boolean | undefined
                favourited?: boolean | undefined
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                title?: (string | null) | undefined
                archived?: boolean | undefined
                favourited?: boolean | undefined
                note?: string | undefined
                summary?: string | undefined
                createdAt?: string | undefined
                crawlPriority?: 'low' | 'normal' | undefined
                importSessionId?: string | undefined
                source?:
                  | 'api'
                  | 'web'
                  | 'cli'
                  | 'mobile'
                  | 'extension'
                  | 'singlefile'
                  | 'rss'
                  | 'import'
                  | undefined
              }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                title?: (string | null) | undefined
                archived?: boolean | undefined
                favourited?: boolean | undefined
                note?: string | undefined
                summary?: string | undefined
                createdAt?: string | undefined
                crawlPriority?: 'low' | 'normal' | undefined
                importSessionId?: string | undefined
                source?:
                  | 'api'
                  | 'web'
                  | 'cli'
                  | 'mobile'
                  | 'extension'
                  | 'singlefile'
                  | 'rss'
                  | 'import'
                  | undefined
              }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                title?: (string | null) | undefined
                archived?: boolean | undefined
                favourited?: boolean | undefined
                note?: string | undefined
                summary?: string | undefined
                createdAt?: string | undefined
                crawlPriority?: 'low' | 'normal' | undefined
                importSessionId?: string | undefined
                source?:
                  | 'api'
                  | 'web'
                  | 'cli'
                  | 'mobile'
                  | 'extension'
                  | 'singlefile'
                  | 'rss'
                  | 'import'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                title?: (string | null) | undefined
                archived?: boolean | undefined
                favourited?: boolean | undefined
                note?: string | undefined
                summary?: string | undefined
                createdAt?: string | undefined
                crawlPriority?: 'low' | 'normal' | undefined
                importSessionId?: string | undefined
                source?:
                  | 'api'
                  | 'web'
                  | 'cli'
                  | 'mobile'
                  | 'extension'
                  | 'singlefile'
                  | 'rss'
                  | 'import'
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/bookmarks/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                searchMode?: 'fts' | 'semantic' | 'hybrid' | undefined
                sortOrder?: 'asc' | 'desc' | 'relevance' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: PaginatedBookmarks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                searchMode?: 'fts' | 'semantic' | 'hybrid' | undefined
                sortOrder?: 'asc' | 'desc' | 'relevance' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/bookmarks/check-url': {
      $get:
        | {
            input: { query: { url: string } }
            output: { bookmarkId: string | null }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { url: string } }; output: string; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/bookmarks/:bookmarkId': {
      $get:
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: { includeContent?: boolean | undefined }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: { includeContent?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: { includeContent?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                archived?: boolean | undefined
                favourited?: boolean | undefined
                summary?: (string | null) | undefined
                note?: string | undefined
                title?: (string | null) | undefined
                createdAt?: string | undefined
                url?: string | undefined
                description?: (string | null) | undefined
                author?: (string | null) | undefined
                publisher?: (string | null) | undefined
                datePublished?: (string | null) | undefined
                dateModified?: (string | null) | undefined
                text?: (string | null) | undefined
                assetContent?: (string | null) | undefined
              }
            }
            output: {
              id: string
              firstCreatedAt?: string | undefined
              createdAt: string
              modifiedAt: string | null
              title?: (string | null) | undefined
              archived: boolean
              favourited: boolean
              taggingStatus: 'success' | 'failure' | 'pending' | null
              summarizationStatus: 'success' | 'failure' | 'pending' | null
              embeddingStatus: 'success' | 'failure' | 'pending' | null
              note?: (string | null) | undefined
              summary?: (string | null) | undefined
              source?:
                | 'api'
                | 'web'
                | 'cli'
                | 'mobile'
                | 'extension'
                | 'singlefile'
                | 'rss'
                | 'import'
                | null
                | undefined
              userId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                archived?: boolean | undefined
                favourited?: boolean | undefined
                summary?: (string | null) | undefined
                note?: string | undefined
                title?: (string | null) | undefined
                createdAt?: string | undefined
                url?: string | undefined
                description?: (string | null) | undefined
                author?: (string | null) | undefined
                publisher?: (string | null) | undefined
                datePublished?: (string | null) | undefined
                dateModified?: (string | null) | undefined
                text?: (string | null) | undefined
                assetContent?: (string | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                archived?: boolean | undefined
                favourited?: boolean | undefined
                summary?: (string | null) | undefined
                note?: string | undefined
                title?: (string | null) | undefined
                createdAt?: string | undefined
                url?: string | undefined
                description?: (string | null) | undefined
                author?: (string | null) | undefined
                publisher?: (string | null) | undefined
                datePublished?: (string | null) | undefined
                dateModified?: (string | null) | undefined
                text?: (string | null) | undefined
                assetContent?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:bookmarkId/content': {
      $get:
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: {
                format?: 'markdown' | 'text' | undefined
                maxChars?: number | undefined
                cursor?: string | undefined
              }
            }
            output: BookmarkReadableContent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: {
                format?: 'markdown' | 'text' | undefined
                maxChars?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: {
                format?: 'markdown' | 'text' | undefined
                maxChars?: number | undefined
                cursor?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: {
                format?: 'markdown' | 'text' | undefined
                maxChars?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              query: {
                format?: 'markdown' | 'text' | undefined
                maxChars?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/bookmarks/:bookmarkId/summarize': {
      $post:
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: {
              id: string
              firstCreatedAt?: string | undefined
              createdAt: string
              modifiedAt: string | null
              title?: (string | null) | undefined
              archived: boolean
              favourited: boolean
              taggingStatus: 'success' | 'failure' | 'pending' | null
              summarizationStatus: 'success' | 'failure' | 'pending' | null
              embeddingStatus: 'success' | 'failure' | 'pending' | null
              note?: (string | null) | undefined
              summary?: (string | null) | undefined
              source?:
                | 'api'
                | 'web'
                | 'cli'
                | 'mobile'
                | 'extension'
                | 'singlefile'
                | 'rss'
                | 'import'
                | null
                | undefined
              userId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:bookmarkId/tags': {
      $post:
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                tags: {
                  tagId?: string | undefined
                  tagName?: string | undefined
                  attachedBy?: 'ai' | 'human' | undefined
                }[]
              }
            }
            output: { attached: TagId[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                tags: {
                  tagId?: string | undefined
                  tagName?: string | undefined
                  attachedBy?: 'ai' | 'human' | undefined
                }[]
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                tags: {
                  tagId?: string | undefined
                  tagName?: string | undefined
                  attachedBy?: 'ai' | 'human' | undefined
                }[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                tags: {
                  tagId?: string | undefined
                  tagName?: string | undefined
                  attachedBy?: 'ai' | 'human' | undefined
                }[]
              }
            }
            output: { detached: TagId[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                tags: {
                  tagId?: string | undefined
                  tagName?: string | undefined
                  attachedBy?: 'ai' | 'human' | undefined
                }[]
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                tags: {
                  tagId?: string | undefined
                  tagName?: string | undefined
                  attachedBy?: 'ai' | 'human' | undefined
                }[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:bookmarkId/lists': {
      $get:
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: { lists: List[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:bookmarkId/highlights': {
      $get:
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: { highlights: Highlight[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:bookmarkId/assets': {
      $post:
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                id: string
                assetType:
                  | 'linkHtmlContent'
                  | 'screenshot'
                  | 'pdf'
                  | 'assetScreenshot'
                  | 'bannerImage'
                  | 'fullPageArchive'
                  | 'video'
                  | 'bookmarkAsset'
                  | 'precrawledArchive'
                  | 'userUploaded'
                  | 'avatar'
                  | 'unknown'
              }
            }
            output: {
              id: string
              assetType:
                | 'linkHtmlContent'
                | 'screenshot'
                | 'pdf'
                | 'assetScreenshot'
                | 'bannerImage'
                | 'fullPageArchive'
                | 'video'
                | 'bookmarkAsset'
                | 'precrawledArchive'
                | 'userUploaded'
                | 'avatar'
                | 'unknown'
              fileName?: (string | null) | undefined
              size?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                id: string
                assetType:
                  | 'linkHtmlContent'
                  | 'screenshot'
                  | 'pdf'
                  | 'assetScreenshot'
                  | 'bannerImage'
                  | 'fullPageArchive'
                  | 'video'
                  | 'bookmarkAsset'
                  | 'precrawledArchive'
                  | 'userUploaded'
                  | 'avatar'
                  | 'unknown'
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId } } & {
              json: {
                id: string
                assetType:
                  | 'linkHtmlContent'
                  | 'screenshot'
                  | 'pdf'
                  | 'assetScreenshot'
                  | 'bannerImage'
                  | 'fullPageArchive'
                  | 'video'
                  | 'bookmarkAsset'
                  | 'precrawledArchive'
                  | 'userUploaded'
                  | 'avatar'
                  | 'unknown'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:bookmarkId/assets/:assetId': {
      $put:
        | {
            input: { param: { bookmarkId: BookmarkId; assetId: AssetId } } & {
              json: { assetId: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bookmarkId: BookmarkId; assetId: AssetId } } & {
              json: { assetId: string }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId; assetId: AssetId } } & {
              json: { assetId: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { bookmarkId: BookmarkId; assetId: AssetId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { bookmarkId: BookmarkId; assetId: AssetId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { bookmarkId: BookmarkId; assetId: AssetId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/lists': {
      $get:
        | { input: {}; output: { lists: List[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
      $post:
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                icon: string
                type?: 'manual' | 'smart' | undefined
                query?: string | undefined
                parentId?: (string | null) | undefined
              }
            }
            output: List
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                icon: string
                type?: 'manual' | 'smart' | undefined
                query?: string | undefined
                parentId?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: string | undefined
                icon: string
                type?: 'manual' | 'smart' | undefined
                query?: string | undefined
                parentId?: (string | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/lists/:listId': {
      $get:
        | { input: { param: { listId: ListId } }; output: List; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { listId: ListId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { listId: ListId } }; output: Error; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { listId: ListId } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { listId: ListId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { listId: ListId } }; output: Error; outputFormat: 'json'; status: 404 }
      $patch:
        | {
            input: { param: { listId: ListId } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                icon?: string | undefined
                parentId?: (string | null) | undefined
                query?: string | undefined
                public?: boolean | undefined
              }
            }
            output: List
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: ListId } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                icon?: string | undefined
                parentId?: (string | null) | undefined
                query?: string | undefined
                public?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { listId: ListId } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                icon?: string | undefined
                parentId?: (string | null) | undefined
                query?: string | undefined
                public?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/lists/:listId/bookmarks': {
      $get:
        | {
            input: { param: { listId: ListId } } & {
              query: {
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: PaginatedBookmarks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listId: ListId } } & {
              query: {
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { listId: ListId } } & {
              query: {
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/lists/:listId/bookmarks/:bookmarkId': {
      $put:
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { listId: ListId; bookmarkId: BookmarkId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: {
              query: {
                nameContains?: string | undefined
                sort?: 'name' | 'usage' | 'relevance' | undefined
                attachedBy?: 'ai' | 'human' | 'none' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: { tags: Tag[]; nextCursor: string | null }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                nameContains?: string | undefined
                sort?: 'name' | 'usage' | 'relevance' | undefined
                attachedBy?: 'ai' | 'human' | 'none' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: { json: { name: string } }
            output: { id: string; name: string }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: { name: string } }; output: string; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/tags/:tagId': {
      $get:
        | { input: { param: { tagId: TagId } }; output: Tag; outputFormat: 'json'; status: 200 }
        | { input: { param: { tagId: TagId } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { tagId: TagId } }; output: Error; outputFormat: 'json'; status: 404 }
      $delete:
        | { input: { param: { tagId: TagId } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { tagId: TagId } }; output: string; outputFormat: 'text'; status: 401 }
        | { input: { param: { tagId: TagId } }; output: Error; outputFormat: 'json'; status: 404 }
      $patch:
        | {
            input: { param: { tagId: TagId } } & { json: { name?: string | undefined } }
            output: { id: string; name: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: TagId } } & { json: { name?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tagId: TagId } } & { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tags/:tagId/bookmarks': {
      $get:
        | {
            input: { param: { tagId: TagId } } & {
              query: {
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: PaginatedBookmarks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: TagId } } & {
              query: {
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { tagId: TagId } } & {
              query: {
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                cursor?: Cursor | undefined
                includeContent?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/highlights': {
      $get:
        | {
            input: { query: { limit?: number | undefined; cursor?: Cursor | undefined } }
            output: PaginatedHighlights
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: Cursor | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
      $post:
        | {
            input: {
              json: {
                bookmarkId: string
                startOffset: number
                endOffset: number
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                text: string | null
                prefix?: (string | null) | undefined
                suffix?: (string | null) | undefined
                note: string | null
              }
            }
            output: Highlight
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                bookmarkId: string
                startOffset: number
                endOffset: number
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                text: string | null
                prefix?: (string | null) | undefined
                suffix?: (string | null) | undefined
                note: string | null
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                bookmarkId: string
                startOffset: number
                endOffset: number
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                text: string | null
                prefix?: (string | null) | undefined
                suffix?: (string | null) | undefined
                note: string | null
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                bookmarkId: string
                startOffset: number
                endOffset: number
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                text: string | null
                prefix?: (string | null) | undefined
                suffix?: (string | null) | undefined
                note: string | null
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/highlights/:highlightId': {
      $get:
        | {
            input: { param: { highlightId: HighlightId } }
            output: Highlight
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { highlightId: HighlightId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { highlightId: HighlightId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { highlightId: HighlightId } }
            output: Highlight
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { highlightId: HighlightId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { highlightId: HighlightId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { highlightId: HighlightId } } & {
              json: {
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                note?: (string | null) | undefined
              }
            }
            output: Highlight
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { highlightId: HighlightId } } & {
              json: {
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                note?: (string | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { highlightId: HighlightId } } & {
              json: {
                color?: 'yellow' | 'red' | 'green' | 'blue' | undefined
                note?: (string | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/me': {
      $get:
        | {
            input: {}
            output: {
              id: string
              name?: (string | null) | undefined
              email?: (string | null) | undefined
              image?: (string | null) | undefined
              localUser: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/users/me/stats': {
      $get:
        | {
            input: {}
            output: {
              numBookmarks: number
              numFavorites: number
              numArchived: number
              numTags: number
              numLists: number
              numHighlights: number
              bookmarksByType: { link: number; text: number; asset: number }
              topDomains: { domain: string; count: number }[]
              totalAssetSize: number
              assetsByType: { type: string; count: number; totalSize: number }[]
              bookmarkingActivity: {
                thisWeek: number
                thisMonth: number
                thisYear: number
                byHour: { hour: number; count: number }[]
                byDayOfWeek: { day: number; count: number }[]
              }
              tagUsage: { name: string; count: number }[]
              bookmarksBySource: {
                source:
                  | 'api'
                  | 'web'
                  | 'cli'
                  | 'mobile'
                  | 'extension'
                  | 'singlefile'
                  | 'rss'
                  | 'import'
                  | null
                count: number
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/assets': {
      $post:
        | {
            input: { form: { file: File } }
            output: UploadedAsset
            outputFormat: 'json'
            status: 200
          }
        | { input: { form: { file: File } }; output: string; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/assets/:assetId': {
      $get:
        | { input: { param: { assetId: AssetId } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { assetId: AssetId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/assets/:assetId/signed-url': {
      $get:
        | {
            input: { param: { assetId: AssetId } }
            output: SignedAssetUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assetId: AssetId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/admin/users/:userId': {
      $put:
        | {
            input: { param: { userId: string } } & {
              json: {
                role?: 'user' | 'admin' | undefined
                bookmarkQuota?: (number | null) | undefined
                storageQuota?: (number | null) | undefined
                browserCrawlingEnabled?: (boolean | null) | undefined
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?: 'user' | 'admin' | undefined
                bookmarkQuota?: (number | null) | undefined
                storageQuota?: (number | null) | undefined
                browserCrawlingEnabled?: (boolean | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?: 'user' | 'admin' | undefined
                bookmarkQuota?: (number | null) | undefined
                storageQuota?: (number | null) | undefined
                browserCrawlingEnabled?: (boolean | null) | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?: 'user' | 'admin' | undefined
                bookmarkQuota?: (number | null) | undefined
                storageQuota?: (number | null) | undefined
                browserCrawlingEnabled?: (boolean | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userId: string } } & {
              json: {
                role?: 'user' | 'admin' | undefined
                bookmarkQuota?: (number | null) | undefined
                storageQuota?: (number | null) | undefined
                browserCrawlingEnabled?: (boolean | null) | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/admin/jobs/trigger/recrawl': {
      $post:
        | {
            input: {
              json: {
                crawlStatus?: 'success' | 'failure' | 'pending' | 'all' | undefined
                runInference?: boolean | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                crawlStatus?: 'success' | 'failure' | 'pending' | 'all' | undefined
                runInference?: boolean | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                crawlStatus?: 'success' | 'failure' | 'pending' | 'all' | undefined
                runInference?: boolean | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                crawlStatus?: 'success' | 'failure' | 'pending' | 'all' | undefined
                runInference?: boolean | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/jobs/trigger/reindex': {
      $post:
        | {
            input: { json: { modifiedWithinSeconds?: number | undefined } }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { modifiedWithinSeconds?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { json: { modifiedWithinSeconds?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/admin/jobs/trigger/inference': {
      $post:
        | {
            input: {
              json: {
                type: 'tag' | 'summarize'
                status?: 'success' | 'failure' | 'pending' | 'all' | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: { success: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: 'tag' | 'summarize'
                status?: 'success' | 'failure' | 'pending' | 'all' | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type: 'tag' | 'summarize'
                status?: 'success' | 'failure' | 'pending' | 'all' | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              json: {
                type: 'tag' | 'summarize'
                status?: 'success' | 'failure' | 'pending' | 'all' | undefined
                modifiedWithinSeconds?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/backups': {
      $get:
        | {
            input: {}
            output: {
              backups: {
                id: string
                userId: string
                assetId: string | null
                createdAt: string
                size: number
                bookmarkCount: number
                status: 'pending' | 'success' | 'failure'
                errorMessage?: (string | null) | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
      $post:
        | {
            input: {}
            output: {
              id: string
              userId: string
              assetId: string | null
              createdAt: string
              size: number
              bookmarkCount: number
              status: 'pending' | 'success' | 'failure'
              errorMessage?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
    }
  } & {
    '/backups/:backupId': {
      $get:
        | {
            input: { param: { backupId: BackupId } }
            output: {
              id: string
              userId: string
              assetId: string | null
              createdAt: string
              size: number
              bookmarkCount: number
              status: 'pending' | 'success' | 'failure'
              errorMessage?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { backupId: BackupId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { backupId: BackupId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { backupId: BackupId } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { backupId: BackupId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { backupId: BackupId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/backups/:backupId/download': {
      $get:
        | {
            input: { param: { backupId: BackupId } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { backupId: BackupId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { backupId: BackupId } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/feeds': {
      $get:
        | { input: {}; output: { feeds: Feed[] }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: string; outputFormat: 'text'; status: 401 }
      $post:
        | {
            input: {
              json: {
                name: string
                url: string
                enabled: boolean
                importTags?: boolean | undefined
              }
            }
            output: Feed
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                url: string
                enabled: boolean
                importTags?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                url: string
                enabled: boolean
                importTags?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
    }
  } & {
    '/feeds/:feedId': {
      $get:
        | { input: { param: { feedId: FeedId } }; output: Feed; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { feedId: FeedId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { feedId: FeedId } }; output: Error; outputFormat: 'json'; status: 404 }
      $patch:
        | {
            input: { param: { feedId: FeedId } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                importTags?: boolean | undefined
              }
            }
            output: Feed
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { feedId: FeedId } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                importTags?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { feedId: FeedId } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                importTags?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { feedId: FeedId } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { feedId: FeedId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { feedId: FeedId } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/feeds/:feedId/fetch': {
      $post:
        | { input: { param: { feedId: FeedId } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { feedId: FeedId } }
            output: string
            outputFormat: 'text'
            status: 401
          }
        | { input: { param: { feedId: FeedId } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  },
  '/'
>
export default routes
