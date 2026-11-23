type Comment = {
  author?:
    | {
        displayName?: string | undefined
        id?: string | undefined
        image?: { url?: string | undefined } | undefined
        url?: string | undefined
      }
    | undefined
  blog?: { id?: string | undefined } | undefined
  content?: string | undefined
  id?: string | undefined
  inReplyTo?: { id?: string | undefined } | undefined
  kind?: string | undefined
  post?: { id?: string | undefined } | undefined
  published?: string | undefined
  selfLink?: string | undefined
  status?: 'LIVE' | 'EMPTIED' | 'PENDING' | 'SPAM' | undefined
  updated?: string | undefined
}
type Post = {
  author?:
    | {
        displayName?: string | undefined
        id?: string | undefined
        image?: { url?: string | undefined } | undefined
        url?: string | undefined
      }
    | undefined
  blog?: { id?: string | undefined } | undefined
  content?: string | undefined
  customMetaData?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  images?: { url?: string | undefined }[] | undefined
  kind?: string | undefined
  labels?: string[] | undefined
  location?:
    | {
        lat?: number | undefined
        lng?: number | undefined
        name?: string | undefined
        span?: string | undefined
      }
    | undefined
  published?: string | undefined
  readerComments?: 'ALLOW' | 'DONT_ALLOW_SHOW_EXISTING' | 'DONT_ALLOW_HIDE_EXISTING' | undefined
  replies?:
    | {
        items?: Comment[] | undefined
        selfLink?: string | undefined
        totalItems?: string | undefined
      }
    | undefined
  selfLink?: string | undefined
  status?: 'LIVE' | 'DRAFT' | 'SCHEDULED' | 'SOFT_TRASHED' | undefined
  title?: string | undefined
  titleLink?: string | undefined
  trashed?: string | undefined
  updated?: string | undefined
  url?: string | undefined
}
type Blog = {
  customMetaData?: string | undefined
  description?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  locale?:
    | { country?: string | undefined; language?: string | undefined; variant?: string | undefined }
    | undefined
  name?: string | undefined
  pages?: { selfLink?: string | undefined; totalItems?: number | undefined } | undefined
  posts?:
    | { items?: Post[] | undefined; selfLink?: string | undefined; totalItems?: number | undefined }
    | undefined
  published?: string | undefined
  selfLink?: string | undefined
  status?: 'LIVE' | 'DELETED' | undefined
  updated?: string | undefined
  url?: string | undefined
}
type CommentList = {
  etag?: string | undefined
  items?: Comment[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  prevPageToken?: string | undefined
}
type Page = {
  author?:
    | {
        displayName?: string | undefined
        id?: string | undefined
        image?: { url?: string | undefined } | undefined
        url?: string | undefined
      }
    | undefined
  blog?: { id?: string | undefined } | undefined
  content?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  published?: string | undefined
  selfLink?: string | undefined
  status?: 'LIVE' | 'DRAFT' | 'SOFT_TRASHED' | undefined
  title?: string | undefined
  trashed?: string | undefined
  updated?: string | undefined
  url?: string | undefined
}
type PageList = {
  etag?: string | undefined
  items?: Page[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Pageviews = {
  blogId?: string | undefined
  counts?:
    | {
        count?: string | undefined
        timeRange?: 'ALL_TIME' | 'THIRTY_DAYS' | 'SEVEN_DAYS' | undefined
      }[]
    | undefined
  kind?: string | undefined
}
type PostList = {
  etag?: string | undefined
  items?: Post[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  prevPageToken?: string | undefined
}
type User = {
  about?: string | undefined
  blogs?: { selfLink?: string | undefined } | undefined
  created?: string | undefined
  displayName?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  locale?:
    | { country?: string | undefined; language?: string | undefined; variant?: string | undefined }
    | undefined
  selfLink?: string | undefined
  url?: string | undefined
}
type BlogPerUserInfo = {
  blogId?: string | undefined
  hasAdminAccess?: boolean | undefined
  kind?: string | undefined
  photosAlbumKey?: string | undefined
  role?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
  userId?: string | undefined
}
type BlogUserInfo = {
  blog?: Blog | undefined
  blog_user_info?: BlogPerUserInfo | undefined
  kind?: string | undefined
}
type BlogList = {
  blogUserInfos?: BlogUserInfo[] | undefined
  items?: Blog[] | undefined
  kind?: string | undefined
}
type PostPerUserInfo = {
  blogId?: string | undefined
  hasEditAccess?: boolean | undefined
  kind?: string | undefined
  postId?: string | undefined
  userId?: string | undefined
}
type PostUserInfo = {
  kind?: string | undefined
  post?: Post | undefined
  post_user_info?: PostPerUserInfo | undefined
}
type PostUserInfosList = {
  items?: PostUserInfo[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/blogs/byurl': {
      $get: {
        input: {
          query: {
            url: string
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Blog
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            maxPosts?: number | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Blog
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/comments': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            endDate?: string | undefined
            fetchBodies?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            startDate?: string | undefined
            status?: ('LIVE' | 'EMPTIED' | 'PENDING' | 'SPAM')[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CommentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/pages': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            fetchBodies?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            status?: ('LIVE' | 'DRAFT' | 'SOFT_TRASHED')[] | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PageList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { blogId: string } } & {
          query: {
            isDraft?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Page }
        output: Page
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/pages/:pageId': {
      $delete: {
        input: { param: { blogId: string; pageId: string } } & {
          query: {
            useTrash?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { blogId: string; pageId: string } } & {
          query: {
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Page
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { blogId: string; pageId: string } } & {
          query: {
            publish?: boolean | undefined
            revert?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Page }
        output: Page
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { blogId: string; pageId: string } } & {
          query: {
            publish?: boolean | undefined
            revert?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Page }
        output: Page
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/pages/:pageId/publish': {
      $post: {
        input: { param: { blogId: string; pageId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Page
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/pages/:pageId/revert': {
      $post: {
        input: { param: { blogId: string; pageId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Page
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/pageviews': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            range?: ('all' | '30DAYS' | '7DAYS')[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Pageviews
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            endDate?: string | undefined
            fetchBodies?: boolean | undefined
            fetchImages?: boolean | undefined
            labels?: string | undefined
            maxResults?: number | undefined
            orderBy?: 'ORDER_BY_UNSPECIFIED' | 'PUBLISHED' | 'UPDATED' | undefined
            pageToken?: string | undefined
            sortOption?: 'SORT_OPTION_UNSPECIFIED' | 'DESCENDING' | 'ASCENDING' | undefined
            startDate?: string | undefined
            status?: ('LIVE' | 'DRAFT' | 'SCHEDULED' | 'SOFT_TRASHED')[] | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PostList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { blogId: string } } & {
          query: {
            fetchBody?: boolean | undefined
            fetchImages?: boolean | undefined
            isDraft?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Post }
        output: Post
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/bypath': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            path: string
            maxComments?: number | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Post
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/search': {
      $get: {
        input: { param: { blogId: string } } & {
          query: {
            q: string
            fetchBodies?: boolean | undefined
            orderBy?: 'ORDER_BY_UNSPECIFIED' | 'PUBLISHED' | 'UPDATED' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PostList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId': {
      $delete: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            useTrash?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            fetchBody?: boolean | undefined
            fetchImages?: boolean | undefined
            maxComments?: number | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Post
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            fetchBody?: boolean | undefined
            fetchImages?: boolean | undefined
            maxComments?: number | undefined
            publish?: boolean | undefined
            revert?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Post }
        output: Post
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            fetchBody?: boolean | undefined
            fetchImages?: boolean | undefined
            maxComments?: number | undefined
            publish?: boolean | undefined
            revert?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Post }
        output: Post
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/comments': {
      $get: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            endDate?: string | undefined
            fetchBodies?: boolean | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            startDate?: string | undefined
            status?: 'LIVE' | 'EMPTIED' | 'PENDING' | 'SPAM' | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: CommentList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/comments/:commentId': {
      $delete: {
        input: { param: { blogId: string; postId: string; commentId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { blogId: string; postId: string; commentId: string } } & {
          query: {
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/comments/:commentId/approve': {
      $post: {
        input: { param: { blogId: string; postId: string; commentId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/comments/:commentId/removecontent': {
      $post: {
        input: { param: { blogId: string; postId: string; commentId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/comments/:commentId/spam': {
      $post: {
        input: { param: { blogId: string; postId: string; commentId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Comment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/publish': {
      $post: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            publishDate?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Post
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/blogs/:blogId/posts/:postId/revert': {
      $post: {
        input: { param: { blogId: string; postId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Post
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/users/:userId': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/users/:userId/blogs': {
      $get: {
        input: { param: { userId: string } } & {
          query: {
            fetchUserInfo?: boolean | undefined
            role?: ('VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN')[] | undefined
            status?: ('LIVE' | 'DELETED')[] | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BlogList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/users/:userId/blogs/:blogId': {
      $get: {
        input: { param: { userId: string; blogId: string } } & {
          query: {
            maxPosts?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: BlogUserInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/users/:userId/blogs/:blogId/posts': {
      $get: {
        input: { param: { userId: string; blogId: string } } & {
          query: {
            endDate?: string | undefined
            fetchBodies?: boolean | undefined
            labels?: string | undefined
            maxResults?: number | undefined
            orderBy?: 'ORDER_BY_UNSPECIFIED' | 'PUBLISHED' | 'UPDATED' | undefined
            pageToken?: string | undefined
            startDate?: string | undefined
            status?: ('LIVE' | 'DRAFT' | 'SCHEDULED' | 'SOFT_TRASHED')[] | undefined
            view?: 'VIEW_TYPE_UNSPECIFIED' | 'READER' | 'AUTHOR' | 'ADMIN' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PostUserInfosList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/users/:userId/blogs/:blogId/posts/:postId': {
      $get: {
        input: { param: { userId: string; blogId: string; postId: string } } & {
          query: {
            maxComments?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PostUserInfo
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
