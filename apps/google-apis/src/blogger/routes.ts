import { createRoute, z } from '@hono/zod-openapi'

const CommentSchema = z
  .object({
    author: z
      .object({
        displayName: z.string().exactOptional().openapi({ description: 'The display name.' }),
        id: z.string().exactOptional().openapi({ description: 'The identifier of the creator.' }),
        image: z
          .object({
            url: z.string().exactOptional().openapi({ description: "The creator's avatar URL." }),
          })
          .exactOptional()
          .openapi({ description: "The creator's avatar.", required: [] }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: "The URL of the creator's Profile page." }),
      })
      .exactOptional()
      .openapi({ description: 'The author of this Comment.', required: [] }),
    blog: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The identifier of the blog containing this comment.' }),
      })
      .exactOptional()
      .openapi({ description: 'Data about the blog containing this comment.', required: [] }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual content of the comment. May include HTML markup.' }),
    id: z.string().exactOptional().openapi({ description: 'The identifier for this resource.' }),
    inReplyTo: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The identified of the parent of this comment.' }),
      })
      .exactOptional()
      .openapi({ description: 'Data about the comment this is in reply to.', required: [] }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entry. Always blogger#comment.' }),
    post: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The identifier of the post containing this comment.' }),
      })
      .exactOptional()
      .openapi({ description: 'Data about the post containing this comment.', required: [] }),
    published: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this comment was published.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API REST URL to fetch this resource from.' }),
    status: z
      .enum(['LIVE', 'EMPTIED', 'PENDING', 'SPAM'])
      .exactOptional()
      .openapi({ description: 'The status of the comment (only populated for admin users).' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this comment was last updated.' }),
  })
  .openapi({ required: [] })
  .openapi('Comment')

const PostSchema = z
  .object({
    author: z
      .object({
        displayName: z.string().exactOptional().openapi({ description: 'The display name.' }),
        id: z.string().exactOptional().openapi({ description: 'The identifier of the creator.' }),
        image: z
          .object({
            url: z.string().exactOptional().openapi({ description: "The creator's avatar URL." }),
          })
          .exactOptional()
          .openapi({ description: "The creator's avatar.", required: [] }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: "The URL of the creator's Profile page." }),
      })
      .exactOptional()
      .openapi({ description: 'The author of this Post.', required: [] }),
    blog: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The identifier of the Blog that contains this Post.' }),
      })
      .exactOptional()
      .openapi({ description: 'Data about the blog containing this Post.', required: [] }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of the Post. May contain HTML markup.' }),
    customMetaData: z
      .string()
      .exactOptional()
      .openapi({ description: 'The JSON meta-data for the Post.' }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of the resource.' }),
    id: z.string().exactOptional().openapi({ description: 'The identifier of this Post.' }),
    images: z
      .array(z.object({ url: z.string().exactOptional() }).openapi({ required: [] }))
      .exactOptional()
      .openapi({ description: 'Display image for the Post.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#post.' }),
    labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of labels this Post was tagged with.' }),
    location: z
      .object({
        lat: z.float64().exactOptional().openapi({ description: "Location's latitude." }),
        lng: z.float64().exactOptional().openapi({ description: "Location's longitude." }),
        name: z.string().exactOptional().openapi({ description: 'Location name.' }),
        span: z
          .string()
          .exactOptional()
          .openapi({
            description: "Location's viewport span. Can be used when rendering a map preview.",
          }),
      })
      .exactOptional()
      .openapi({ description: 'The location for geotagged posts.', required: [] }),
    published: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this Post was published.' }),
    readerComments: z
      .enum(['ALLOW', 'DONT_ALLOW_SHOW_EXISTING', 'DONT_ALLOW_HIDE_EXISTING'])
      .exactOptional()
      .openapi({ description: 'Comment control and display setting for readers of this post.' }),
    replies: z
      .object({
        items: z
          .array(CommentSchema)
          .exactOptional()
          .openapi({ description: 'The List of Comments for this Post.' }),
        selfLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the comments on this post.' }),
        totalItems: z
          .string()
          .exactOptional()
          .openapi({ description: 'The count of comments on this post.' }),
      })
      .exactOptional()
      .openapi({ description: 'The container of comments on this Post.', required: [] }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API REST URL to fetch this resource from.' }),
    status: z
      .enum(['LIVE', 'DRAFT', 'SCHEDULED', 'SOFT_TRASHED'])
      .exactOptional()
      .openapi({ description: 'Status of the post. Only set for admin-level requests.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the Post.' }),
    titleLink: z
      .string()
      .exactOptional()
      .openapi({ description: "The title link URL, similar to atom's related link." }),
    trashed: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this Post was last trashed.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this Post was last updated.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL where this Post is displayed.' }),
  })
  .openapi({ required: [] })
  .openapi('Post')

const BlogSchema = z
  .object({
    customMetaData: z
      .string()
      .exactOptional()
      .openapi({ description: 'The JSON custom meta-data for the Blog.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of this blog. This is displayed underneath the title.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The identifier for this resource.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entry. Always blogger#blog.' }),
    locale: z
      .object({
        country: z
          .string()
          .exactOptional()
          .openapi({ description: "The country this blog's locale is set to." }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'The language this blog is authored in.' }),
        variant: z
          .string()
          .exactOptional()
          .openapi({ description: 'The language variant this blog is authored in.' }),
      })
      .exactOptional()
      .openapi({ description: 'The locale this Blog is set to.', required: [] }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this blog. This is displayed as the title.' }),
    pages: z
      .object({
        selfLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the container for pages in this blog.' }),
        totalItems: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The count of pages in this blog.' }),
      })
      .exactOptional()
      .openapi({ description: 'The container of pages in this blog.', required: [] }),
    posts: z
      .object({
        items: z
          .array(PostSchema)
          .exactOptional()
          .openapi({ description: 'The List of Posts for this Blog.' }),
        selfLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the container for posts in this blog.' }),
        totalItems: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The count of posts in this blog.' }),
      })
      .exactOptional()
      .openapi({ description: 'The container of posts in this blog.', required: [] }),
    published: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this blog was published.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API REST URL to fetch this resource from.' }),
    status: z
      .enum(['LIVE', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'The status of the blog.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this blog was last updated.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL where this blog is published.' }),
  })
  .openapi({ required: [] })
  .openapi('Blog')

const BlogPerUserInfoSchema = z
  .object({
    blogId: z.string().exactOptional().openapi({ description: 'ID of the Blog resource.' }),
    hasAdminAccess: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the user has Admin level access to the blog.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#blogPerUserInfo.' }),
    photosAlbumKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Photo Album Key for the user when adding photos to the blog.' }),
    role: z
      .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
      .exactOptional()
      .openapi({
        description:
          'Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER).',
      }),
    userId: z.string().exactOptional().openapi({ description: 'ID of the User.' }),
  })
  .openapi({ required: [] })
  .openapi('BlogPerUserInfo')

const BlogUserInfoSchema = z
  .object({
    blog: BlogSchema.exactOptional().openapi({ description: 'The Blog resource.' }),
    blog_user_info: BlogPerUserInfoSchema.exactOptional().openapi({
      description: 'Information about a User for the Blog.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#blogUserInfo.' }),
  })
  .openapi({ required: [] })
  .openapi('BlogUserInfo')

const BlogListSchema = z
  .object({
    blogUserInfos: z
      .array(BlogUserInfoSchema)
      .exactOptional()
      .openapi({ description: 'Admin level list of blog per-user information.' }),
    items: z
      .array(BlogSchema)
      .exactOptional()
      .openapi({ description: 'The list of Blogs this user has Authorship or Admin rights over.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#blogList.' }),
  })
  .openapi({ required: [] })
  .openapi('BlogList')

const CommentListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of the response.' }),
    items: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({ description: 'The List of Comments for a Post.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entry. Always blogger#commentList.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to fetch the next page, if one exists.' }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to fetch the previous page, if one exists.' }),
  })
  .openapi({ required: [] })
  .openapi('CommentList')

const PageSchema = z
  .object({
    author: z
      .object({
        displayName: z.string().exactOptional().openapi({ description: 'The display name.' }),
        id: z.string().exactOptional().openapi({ description: 'The identifier of the creator.' }),
        image: z
          .object({
            url: z.string().exactOptional().openapi({ description: "The creator's avatar URL." }),
          })
          .exactOptional()
          .openapi({ description: "The creator's avatar.", required: [] }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: "The URL of the creator's Profile page." }),
      })
      .exactOptional()
      .openapi({ description: 'The author of this Page.', required: [] }),
    blog: z
      .object({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'The identifier of the blog containing this page.' }),
      })
      .exactOptional()
      .openapi({ description: 'Data about the blog containing this Page.', required: [] }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body content of this Page, in HTML.' }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of the resource.' }),
    id: z.string().exactOptional().openapi({ description: 'The identifier for this resource.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#page.' }),
    published: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this Page was published.' }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API REST URL to fetch this resource from.' }),
    status: z
      .enum(['LIVE', 'DRAFT', 'SOFT_TRASHED'])
      .exactOptional()
      .openapi({
        description: 'The status of the page for admin resources (either LIVE or DRAFT).',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of this entity. This is the name displayed in the Admin user interface.',
      }),
    trashed: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this Page was trashed.' }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'RFC 3339 date-time when this Page was last updated.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL that this Page is displayed at.' }),
  })
  .openapi({ required: [] })
  .openapi('Page')

const PageListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of the response.' }),
    items: z
      .array(PageSchema)
      .exactOptional()
      .openapi({ description: 'The list of Pages for a Blog.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#pageList.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to fetch the next page, if one exists.' }),
  })
  .openapi({ required: [] })
  .openapi('PageList')

const PageviewsSchema = z
  .object({
    blogId: z.string().exactOptional().openapi({ description: 'Blog Id.' }),
    counts: z
      .array(
        z
          .object({
            count: z
              .string()
              .exactOptional()
              .openapi({ description: 'Count of page views for the given time range.' }),
            timeRange: z
              .enum(['ALL_TIME', 'THIRTY_DAYS', 'SEVEN_DAYS'])
              .exactOptional()
              .openapi({ description: 'Time range the given count applies to.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The container of posts in this blog.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entry. Always blogger#page_views.' }),
  })
  .openapi({ required: [] })
  .openapi('Pageviews')

const PostListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of the response.' }),
    items: z
      .array(PostSchema)
      .exactOptional()
      .openapi({ description: 'The list of Posts for this Blog.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#postList.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to fetch the next page, if one exists.' }),
    prevPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to fetch the previous page, if one exists.' }),
  })
  .openapi({ required: [] })
  .openapi('PostList')

const PostPerUserInfoSchema = z
  .object({
    blogId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the Blog that the post resource belongs to.' }),
    hasEditAccess: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the user has Author level access to the post.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#postPerUserInfo.' }),
    postId: z.string().exactOptional().openapi({ description: 'ID of the Post resource.' }),
    userId: z.string().exactOptional().openapi({ description: 'ID of the User.' }),
  })
  .openapi({ required: [] })
  .openapi('PostPerUserInfo')

const PostUserInfoSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#postUserInfo.' }),
    post: PostSchema.exactOptional().openapi({ description: 'The Post resource.' }),
    post_user_info: PostPerUserInfoSchema.exactOptional().openapi({
      description: 'Information about a User for the Post.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PostUserInfo')

const PostUserInfosListSchema = z
  .object({
    items: z
      .array(PostUserInfoSchema)
      .exactOptional()
      .openapi({
        description: 'The list of Posts with User information for the post, for this Blog.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#postList.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to fetch the next page, if one exists.' }),
  })
  .openapi({ required: [] })
  .openapi('PostUserInfosList')

const UserSchema = z
  .object({
    about: z.string().exactOptional().openapi({ description: 'Profile summary information.' }),
    blogs: z
      .object({
        selfLink: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL of the Blogs for this user.' }),
      })
      .exactOptional()
      .openapi({ description: 'The container of blogs for this user.', required: [] }),
    created: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The timestamp of when this profile was created, in seconds since epoch.',
      }),
    displayName: z.string().exactOptional().openapi({ description: 'The display name.' }),
    id: z.string().exactOptional().openapi({ description: 'The identifier for this User.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this entity. Always blogger#user.' }),
    locale: z
      .object({
        country: z
          .string()
          .exactOptional()
          .openapi({ description: "The country this blog's locale is set to." }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'The language this blog is authored in.' }),
        variant: z
          .string()
          .exactOptional()
          .openapi({ description: 'The language variant this blog is authored in.' }),
      })
      .exactOptional()
      .openapi({ description: "This user's locale", required: [] }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API REST URL to fetch this resource from.' }),
    url: z.string().exactOptional().openapi({ description: "The user's profile page." }),
  })
  .openapi({ required: [] })
  .openapi('User')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/blogger': 'Manage your Blogger account',
        'https://www.googleapis.com/auth/blogger.readonly': 'View your Blogger account',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/blogger': 'Manage your Blogger account',
        'https://www.googleapis.com/auth/blogger.readonly': 'View your Blogger account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV3BlogsByurlRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/byurl',
  tags: ['blogs'],
  description: 'Gets a blog by url.',
  operationId: 'blogger.blogs.getByUrl',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      url: z
        .string()
        .openapi({
          param: { in: 'query', name: 'url', required: true, schema: { type: 'string' } },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BlogSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3BlogsBlogIdRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}',
  tags: ['blogs'],
  description: 'Gets a blog by id.',
  operationId: 'blogger.blogs.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxPosts: z
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
          param: { in: 'query', name: 'maxPosts', schema: { type: 'integer' }, required: false },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BlogSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3BlogsBlogIdCommentsRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/comments',
  tags: ['comments'],
  description: 'Lists comments by blog.',
  operationId: 'blogger.comments.listByBlog',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endDate', schema: { type: 'string' }, required: false },
        }),
      fetchBodies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBodies', schema: { type: 'boolean' }, required: false },
        }),
      maxResults: z
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
          param: { in: 'query', name: 'maxResults', schema: { type: 'integer' }, required: false },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pageToken', schema: { type: 'string' }, required: false },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startDate', schema: { type: 'string' }, required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['LIVE', 'EMPTIED', 'PENDING', 'SPAM'])),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'status',
            schema: {
              items: { enum: ['LIVE', 'EMPTIED', 'PENDING', 'SPAM'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3BlogsBlogIdPagesRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/pages',
  tags: ['pages'],
  description: 'Lists pages.',
  operationId: 'blogger.pages.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fetchBodies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBodies', schema: { type: 'boolean' }, required: false },
        }),
      maxResults: z
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
          param: { in: 'query', name: 'maxResults', schema: { type: 'integer' }, required: false },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pageToken', schema: { type: 'string' }, required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['LIVE', 'DRAFT', 'SOFT_TRASHED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'status',
            schema: {
              items: { enum: ['LIVE', 'DRAFT', 'SOFT_TRASHED'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const postV3BlogsBlogIdPagesRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/pages',
  tags: ['pages'],
  description: 'Inserts a page.',
  operationId: 'blogger.pages.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      isDraft: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'isDraft', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const getV3BlogsBlogIdPagesPageIdRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/pages/{pageId}',
  tags: ['pages'],
  description: 'Gets a page by blog id and page id.',
  operationId: 'blogger.pages.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      pageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const putV3BlogsBlogIdPagesPageIdRoute = createRoute({
  method: 'put',
  path: '/v3/blogs/{blogId}/pages/{pageId}',
  tags: ['pages'],
  description: 'Updates a page by blog id and page id.',
  operationId: 'blogger.pages.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      publish: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publish', schema: { type: 'boolean' }, required: false },
        }),
      revert: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'revert', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      pageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const deleteV3BlogsBlogIdPagesPageIdRoute = createRoute({
  method: 'delete',
  path: '/v3/blogs/{blogId}/pages/{pageId}',
  tags: ['pages'],
  description: 'Deletes a page by blog id and page id.',
  operationId: 'blogger.pages.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      useTrash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Move to Trash if possible',
            in: 'query',
            name: 'useTrash',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      pageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const patchV3BlogsBlogIdPagesPageIdRoute = createRoute({
  method: 'patch',
  path: '/v3/blogs/{blogId}/pages/{pageId}',
  tags: ['pages'],
  description: 'Patches a page.',
  operationId: 'blogger.pages.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      publish: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publish', schema: { type: 'boolean' }, required: false },
        }),
      revert: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'revert', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      pageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPagesPageIdPublishRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/pages/{pageId}/publish',
  tags: ['pages'],
  description: 'Publishes a page.',
  operationId: 'blogger.pages.publish',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      pageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPagesPageIdRevertRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/pages/{pageId}/revert',
  tags: ['pages'],
  description: 'Reverts a published or scheduled page to draft state.',
  operationId: 'blogger.pages.revert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      pageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const getV3BlogsBlogIdPageviewsRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/pageviews',
  tags: ['pageViews'],
  description: 'Gets page views by blog id.',
  operationId: 'blogger.pageViews.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      range: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['all', '30DAYS', '7DAYS'])),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'range',
            schema: { items: { enum: ['all', '30DAYS', '7DAYS'], type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PageviewsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const getV3BlogsBlogIdPostsRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/posts',
  tags: ['posts'],
  description: 'Lists posts.',
  operationId: 'blogger.posts.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endDate', schema: { type: 'string' }, required: false },
        }),
      fetchBodies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBodies', schema: { type: 'boolean' }, required: false },
        }),
      fetchImages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchImages', schema: { type: 'boolean' }, required: false },
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'labels', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
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
          param: { in: 'query', name: 'maxResults', schema: { type: 'integer' }, required: false },
        }),
      orderBy: z
        .enum(['ORDER_BY_UNSPECIFIED', 'PUBLISHED', 'UPDATED'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['ORDER_BY_UNSPECIFIED', 'PUBLISHED', 'UPDATED'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pageToken', schema: { type: 'string' }, required: false },
        }),
      sortOption: z
        .enum(['SORT_OPTION_UNSPECIFIED', 'DESCENDING', 'ASCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Sort direction applied to post list.',
            in: 'query',
            name: 'sortOption',
            schema: {
              enum: ['SORT_OPTION_UNSPECIFIED', 'DESCENDING', 'ASCENDING'],
              type: 'string',
            },
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startDate', schema: { type: 'string' }, required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['LIVE', 'DRAFT', 'SCHEDULED', 'SOFT_TRASHED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'status',
            schema: {
              items: { enum: ['LIVE', 'DRAFT', 'SCHEDULED', 'SOFT_TRASHED'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const postV3BlogsBlogIdPostsRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/posts',
  tags: ['posts'],
  description: 'Inserts a post.',
  operationId: 'blogger.posts.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fetchBody: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBody', schema: { type: 'boolean' }, required: false },
        }),
      fetchImages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchImages', schema: { type: 'boolean' }, required: false },
        }),
      isDraft: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'isDraft', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const getV3BlogsBlogIdPostsBypathRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/posts/bypath',
  tags: ['posts'],
  description: 'Gets a post by path.',
  operationId: 'blogger.posts.getByPath',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      path: z
        .string()
        .openapi({
          param: { in: 'query', name: 'path', required: true, schema: { type: 'string' } },
        }),
      maxComments: z
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
          param: { in: 'query', name: 'maxComments', schema: { type: 'integer' }, required: false },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3BlogsBlogIdPostsSearchRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/posts/search',
  tags: ['posts'],
  description: 'Searches for posts matching given query terms in the specified blog.',
  operationId: 'blogger.posts.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      q: z
        .string()
        .openapi({ param: { in: 'query', name: 'q', required: true, schema: { type: 'string' } } }),
      fetchBodies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBodies', schema: { type: 'boolean' }, required: false },
        }),
      orderBy: z
        .enum(['ORDER_BY_UNSPECIFIED', 'PUBLISHED', 'UPDATED'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['ORDER_BY_UNSPECIFIED', 'PUBLISHED', 'UPDATED'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3BlogsBlogIdPostsPostIdRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/posts/{postId}',
  tags: ['posts'],
  description: 'Gets a post by blog id and post id',
  operationId: 'blogger.posts.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fetchBody: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBody', schema: { type: 'boolean' }, required: false },
        }),
      fetchImages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchImages', schema: { type: 'boolean' }, required: false },
        }),
      maxComments: z
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
          param: { in: 'query', name: 'maxComments', schema: { type: 'integer' }, required: false },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const putV3BlogsBlogIdPostsPostIdRoute = createRoute({
  method: 'put',
  path: '/v3/blogs/{blogId}/posts/{postId}',
  tags: ['posts'],
  description: 'Updates a post by blog id and post id.',
  operationId: 'blogger.posts.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fetchBody: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBody', schema: { type: 'boolean' }, required: false },
        }),
      fetchImages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchImages', schema: { type: 'boolean' }, required: false },
        }),
      maxComments: z
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
          param: { in: 'query', name: 'maxComments', schema: { type: 'integer' }, required: false },
        }),
      publish: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publish', schema: { type: 'boolean' }, required: false },
        }),
      revert: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'revert', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const deleteV3BlogsBlogIdPostsPostIdRoute = createRoute({
  method: 'delete',
  path: '/v3/blogs/{blogId}/posts/{postId}',
  tags: ['posts'],
  description: 'Deletes a post by blog id and post id.',
  operationId: 'blogger.posts.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      useTrash: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Move to Trash if possible',
            in: 'query',
            name: 'useTrash',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const patchV3BlogsBlogIdPostsPostIdRoute = createRoute({
  method: 'patch',
  path: '/v3/blogs/{blogId}/posts/{postId}',
  tags: ['posts'],
  description: 'Patches a post.',
  operationId: 'blogger.posts.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fetchBody: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBody', schema: { type: 'boolean' }, required: false },
        }),
      fetchImages: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchImages', schema: { type: 'boolean' }, required: false },
        }),
      maxComments: z
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
          param: { in: 'query', name: 'maxComments', schema: { type: 'integer' }, required: false },
        }),
      publish: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publish', schema: { type: 'boolean' }, required: false },
        }),
      revert: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'revert', schema: { type: 'boolean' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: PostSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const getV3BlogsBlogIdPostsPostIdCommentsRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/posts/{postId}/comments',
  tags: ['comments'],
  description: 'Lists comments.',
  operationId: 'blogger.comments.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endDate', schema: { type: 'string' }, required: false },
        }),
      fetchBodies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBodies', schema: { type: 'boolean' }, required: false },
        }),
      maxResults: z
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
          param: { in: 'query', name: 'maxResults', schema: { type: 'integer' }, required: false },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pageToken', schema: { type: 'string' }, required: false },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startDate', schema: { type: 'string' }, required: false },
        }),
      status: z
        .enum(['LIVE', 'EMPTIED', 'PENDING', 'SPAM'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            schema: { enum: ['LIVE', 'EMPTIED', 'PENDING', 'SPAM'], type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}',
  tags: ['comments'],
  description: 'Gets a comment by id.',
  operationId: 'blogger.comments.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
      commentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'commentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const deleteV3BlogsBlogIdPostsPostIdCommentsCommentIdRoute = createRoute({
  method: 'delete',
  path: '/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}',
  tags: ['comments'],
  description: 'Deletes a comment by blog id, post id and comment id.',
  operationId: 'blogger.comments.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
      commentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'commentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPostsPostIdCommentsCommentIdApproveRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve',
  tags: ['comments'],
  description: 'Marks a comment as not spam by blog id, post id and comment id.',
  operationId: 'blogger.comments.approve',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
      commentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'commentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPostsPostIdCommentsCommentIdRemovecontentRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent',
  tags: ['comments'],
  description: 'Removes the content of a comment by blog id, post id and comment id.',
  operationId: 'blogger.comments.removeContent',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
      commentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'commentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPostsPostIdCommentsCommentIdSpamRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam',
  tags: ['comments'],
  description: 'Marks a comment as spam by blog id, post id and comment id.',
  operationId: 'blogger.comments.markAsSpam',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
      commentId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'commentId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPostsPostIdPublishRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/posts/{postId}/publish',
  tags: ['posts'],
  description: 'Publishes a post.',
  operationId: 'blogger.posts.publish',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      publishDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'publishDate', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const postV3BlogsBlogIdPostsPostIdRevertRoute = createRoute({
  method: 'post',
  path: '/v3/blogs/{blogId}/posts/{postId}/revert',
  tags: ['posts'],
  description: 'Reverts a published or scheduled post to draft state.',
  operationId: 'blogger.posts.revert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
  ],
})

export const getV3UsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v3/users/{userId}',
  tags: ['users'],
  description: 'Gets one user by user_id.',
  operationId: 'blogger.users.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3UsersUserIdBlogsRoute = createRoute({
  method: 'get',
  path: '/v3/users/{userId}/blogs',
  tags: ['blogs'],
  description: 'Lists blogs by user.',
  operationId: 'blogger.blogs.listByUser',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      fetchUserInfo: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'fetchUserInfo',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      role: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'role',
            schema: {
              items: {
                enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['LIVE', 'DELETED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Default value of status is LIVE.',
            explode: true,
            in: 'query',
            name: 'status',
            schema: { items: { enum: ['LIVE', 'DELETED'], type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BlogListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3UsersUserIdBlogsBlogIdRoute = createRoute({
  method: 'get',
  path: '/v3/users/{userId}/blogs/{blogId}',
  tags: ['blogUserInfos'],
  description: 'Gets one blog and user info pair by blog id and user id.',
  operationId: 'blogger.blogUserInfos.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxPosts: z
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
          param: { in: 'query', name: 'maxPosts', schema: { type: 'integer' }, required: false },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BlogUserInfoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3UsersUserIdBlogsBlogIdPostsRoute = createRoute({
  method: 'get',
  path: '/v3/users/{userId}/blogs/{blogId}/posts',
  tags: ['postUserInfos'],
  description: 'Lists post and user info pairs.',
  operationId: 'blogger.postUserInfos.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'endDate', schema: { type: 'string' }, required: false },
        }),
      fetchBodies: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'fetchBodies', schema: { type: 'boolean' }, required: false },
        }),
      labels: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'labels', schema: { type: 'string' }, required: false },
        }),
      maxResults: z
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
          param: { in: 'query', name: 'maxResults', schema: { type: 'integer' }, required: false },
        }),
      orderBy: z
        .enum(['ORDER_BY_UNSPECIFIED', 'PUBLISHED', 'UPDATED'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['ORDER_BY_UNSPECIFIED', 'PUBLISHED', 'UPDATED'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'pageToken', schema: { type: 'string' }, required: false },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'startDate', schema: { type: 'string' }, required: false },
        }),
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['LIVE', 'DRAFT', 'SCHEDULED', 'SOFT_TRASHED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'status',
            schema: {
              items: { enum: ['LIVE', 'DRAFT', 'SCHEDULED', 'SOFT_TRASHED'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      view: z
        .enum(['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'view',
            schema: {
              enum: ['VIEW_TYPE_UNSPECIFIED', 'READER', 'AUTHOR', 'ADMIN'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostUserInfosListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})

export const getV3UsersUserIdBlogsBlogIdPostsPostIdRoute = createRoute({
  method: 'get',
  path: '/v3/users/{userId}/blogs/{blogId}/posts/{postId}',
  tags: ['postUserInfos'],
  description: 'Gets one post and user info pair, by post_id and user_id.',
  operationId: 'blogger.postUserInfos.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxComments: z
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
          param: { in: 'query', name: 'maxComments', schema: { type: 'integer' }, required: false },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'userId', required: true, schema: { type: 'string' } },
        }),
      blogId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'blogId', required: true, schema: { type: 'string' } },
        }),
      postId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'postId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostUserInfoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/blogger.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/blogger.readonly'],
    },
  ],
})
