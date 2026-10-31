import { createRoute, z } from '@hono/zod-openapi'

const ArticleSchema = z
  .object({
    article: z
      .object({
        body_markdown: z.string().exactOptional(),
        canonical_url: z.string().nullable().exactOptional(),
        description: z.string().exactOptional(),
        main_image: z.string().nullable().exactOptional(),
        organization_id: z.int().nullable().exactOptional(),
        published: z.boolean().default(false).exactOptional(),
        series: z.string().nullable().exactOptional(),
        tags: z.string().exactOptional(),
        title: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Representation of an Article to be created/updated', required: [] })
  .openapi('Article')

const ArticleFlareTagSchema = z
  .object({
    bg_color_hex: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Background color (hexadecimal)' }),
    name: z.string().exactOptional(),
    text_color_hex: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Text color (hexadecimal)' }),
  })
  .openapi({ description: 'Flare tag of the article', required: [] })
  .openapi('ArticleFlareTag')

const SharedOrganizationSchema = z
  .object({
    name: z.string().exactOptional(),
    profile_image: z.url().exactOptional().openapi({ description: 'Profile image (640x640)' }),
    profile_image_90: z.url().exactOptional().openapi({ description: 'Profile image (90x90)' }),
    slug: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ description: 'The organization the resource belongs to', required: [] })
  .openapi('SharedOrganization')

const SharedUserSchema = z
  .object({
    github_username: z.string().nullable().exactOptional(),
    name: z.string().exactOptional(),
    profile_image: z.string().exactOptional().openapi({ description: 'Profile image (640x640)' }),
    profile_image_90: z.string().exactOptional().openapi({ description: 'Profile image (90x90)' }),
    twitter_username: z.string().nullable().exactOptional(),
    username: z.string().exactOptional(),
    website_url: z.url().nullable().exactOptional(),
  })
  .openapi({ description: 'The resource creator', required: [] })
  .openapi('SharedUser')

const ArticleIndexSchema = z
  .object({
    canonical_url: z.url(),
    cover_image: z.url().nullable(),
    created_at: z.iso.datetime({ offset: true }),
    crossposted_at: z.iso.datetime({ offset: true }).nullable(),
    description: z.string(),
    edited_at: z.iso.datetime({ offset: true }).nullable(),
    flare_tag: ArticleFlareTagSchema.exactOptional(),
    id: z.int32(),
    last_comment_at: z.iso.datetime({ offset: true }),
    organization: SharedOrganizationSchema.exactOptional(),
    path: z.string(),
    positive_reactions_count: z.int32(),
    public_reactions_count: z.int32(),
    published_at: z.iso.datetime({ offset: true }),
    published_timestamp: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Crossposting or published date time' }),
    readable_publish_date: z.string(),
    reading_time_minutes: z.int32().openapi({ description: 'Reading time, in minutes' }),
    slug: z.string(),
    social_image: z.url(),
    tag_list: z.array(z.string()),
    tags: z.string(),
    title: z.string(),
    type_of: z.string(),
    url: z.url(),
    user: SharedUserSchema,
  })
  .openapi({
    description: 'Representation of an article or post returned in a list',
    required: [
      'type_of',
      'id',
      'title',
      'description',
      'cover_image',
      'readable_publish_date',
      'social_image',
      'tag_list',
      'tags',
      'slug',
      'path',
      'url',
      'canonical_url',
      'comments_count',
      'positive_reactions_count',
      'public_reactions_count',
      'created_at',
      'edited_at',
      'crossposted_at',
      'published_at',
      'last_comment_at',
      'published_timestamp',
      'user',
      'reading_time_minutes',
    ],
  })
  .openapi('ArticleIndex')

const CommentSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    id_code: z.string().exactOptional(),
    image_url: z.url().exactOptional().openapi({ description: 'Podcast image url' }),
    type_of: z.string().exactOptional(),
  })
  .openapi({ description: 'A Comment on an Article or Podcast Episode', required: [] })
  .openapi('Comment')

const FollowedTagSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Tag id' }),
    name: z.string(),
    points: z.float32(),
  })
  .openapi({ description: 'Representation of a followed tag', required: ['id', 'name', 'points'] })
  .openapi('FollowedTag')

const OrganizationSchema = z
  .object({
    github_username: z.string().exactOptional(),
    joined_at: z.string().exactOptional(),
    location: z.string().exactOptional(),
    name: z.string().exactOptional(),
    story: z.string().nullable().exactOptional(),
    summary: z.string().exactOptional(),
    tag_line: z.string().nullable().exactOptional(),
    tech_stack: z.string().exactOptional(),
    twitter_username: z.string().exactOptional(),
    type_of: z.string().exactOptional(),
    url: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ description: 'Representation of an Organization', required: [] })
  .openapi('Organization')

const PageSchema = z
  .object({
    body_json: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'For JSON pages, the JSON body' }),
    body_markdown: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The text (in markdown) of the ad (required)' }),
    description: z
      .string()
      .openapi({ description: 'For internal use, helps similar pages from one another' }),
    is_top_level_path: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution",
      }),
    slug: z
      .string()
      .openapi({ description: 'Used to link to this page in URLs, must be unique and URL-safe' }),
    social_image: z.object({}).nullable().exactOptional(),
    template: z
      .enum(['contained', 'full_within_layout', 'nav_bar_included', 'json'])
      .default('contained')
      .openapi({ description: 'Controls what kind of layout the page is rendered in' }),
    title: z.string().openapi({ description: 'Title of the page' }),
  })
  .openapi({
    description: 'Representation of a page object',
    required: ['title', 'slug', 'description', 'template'],
  })
  .openapi('Page')

const SharedPodcastSchema = z
  .object({
    image_url: z.url().exactOptional().openapi({ description: 'Podcast image url' }),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ description: 'The podcast that the resource belongs to', required: [] })
  .openapi('SharedPodcast')

const PodcastEpisodeIndexSchema = z
  .object({
    class_name: z.string(),
    id: z.int32(),
    image_url: z.url().openapi({ description: 'Podcast episode image url or podcast image url' }),
    path: z.string(),
    podcast: SharedPodcastSchema,
    title: z.string(),
    type_of: z.string(),
  })
  .openapi({
    description: 'Representation of a podcast episode returned in a list',
    required: ['type_of', 'class_name', 'id', 'path', 'title', 'image_url', 'podcast'],
  })
  .openapi('PodcastEpisodeIndex')

const ProfileImageSchema = z
  .object({
    image_of: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Determines the type of the profile image owner (user or organization)',
      }),
    profile_image: z.string().exactOptional().openapi({ description: 'Profile image (640x640)' }),
    profile_image_90: z.string().exactOptional().openapi({ description: 'Profile image (90x90)' }),
    type_of: z.string().exactOptional().openapi({ description: 'Return profile_image' }),
  })
  .openapi({ description: 'A profile image object', required: [] })
  .openapi('ProfileImage')

const TagSchema = z
  .object({
    bg_color_hex: z.string().nullable().exactOptional(),
    id: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Tag id' }),
    name: z.string().exactOptional(),
    text_color_hex: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'Representation of a tag', required: [] })
  .openapi('Tag')

const UserSchema = z
  .object({
    github_username: z.string().exactOptional(),
    id: z
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
    joined_at: z.string().exactOptional(),
    location: z.string().nullable().exactOptional(),
    name: z.string().exactOptional(),
    profile_image: z.string().exactOptional(),
    summary: z.string().nullable().exactOptional(),
    twitter_username: z.string().exactOptional(),
    type_of: z.string().exactOptional(),
    username: z.string().exactOptional(),
    website_url: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'The representation of a user', required: [] })
  .openapi('User')

const UserInviteParamSchema = z
  .object({ email: z.string().exactOptional(), name: z.string().nullable().exactOptional() })
  .openapi({ description: 'User invite parameters', required: [] })
  .openapi('UserInviteParam')

const VideoArticleSchema = z
  .object({
    cloudinary_video_url: z.string().exactOptional(),
    id: z
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
    path: z.string().exactOptional(),
    title: z.string().exactOptional(),
    type_of: z.string().exactOptional(),
    user: z
      .object({ name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Author of the article', required: [] }),
    user_id: z
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
    video_duration_in_minutes: z.string().exactOptional(),
    video_source_url: z.string().exactOptional(),
  })
  .openapi({ description: 'Representation of an Article with video', required: [] })
  .openapi('VideoArticle')

const ListingCategoryParamParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Using this parameter will return listings belonging to the\n              requested category.',
      example: 'cfp',
      in: 'query',
      name: 'category',
      schema: { type: 'string' },
      required: false,
    },
  })

const PageParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description: 'Pagination page',
      in: 'query',
      name: 'page',
      required: false,
      schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
    },
  })

const PerPageParam10to1000ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(1000),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.',
      in: 'query',
      name: 'per_page',
      required: false,
      schema: { default: 10, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
    },
  })

const PerPageParam24to1000ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(1000),
  )
  .default(24)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.',
      in: 'query',
      name: 'per_page',
      required: false,
      schema: { default: 24, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
    },
  })

const PerPageParam30to100ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(100),
  )
  .default(30)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.',
      in: 'query',
      name: 'per_page',
      required: false,
      schema: { default: 30, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
    },
  })

const PerPageParam30to1000ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(1000),
  )
  .default(30)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.',
      in: 'query',
      name: 'per_page',
      required: false,
      schema: { default: 30, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
    },
  })

const PerPageParam80to1000ParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(1000),
  )
  .default(80)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.',
      in: 'query',
      name: 'per_page',
      required: false,
      schema: { default: 80, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'API Key authentication.\n\nAuthentication for some endpoints, like write operations on the\nArticles API require a DEV API key.\n\nAll authenticated endpoints are CORS disabled, the API key is intended for non-browser scripts.\n\n### Getting an API key\n\nTo obtain one, please follow these steps:\n\n  - visit https://dev.to/settings/extensions\n  - in the "DEV API Keys" section create a new key by adding a\n    description and clicking on "Generate API Key"\n\n    ![obtain a DEV API Key](https://user-images.githubusercontent.com/37842/172718105-bd93664e-76e0-477d-99c4-265dda0b06c5.png)\n\n  - You\'ll see the newly generated key in the same view\n    ![generated DEV API Key](https://user-images.githubusercontent.com/37842/172718151-e7fe26a0-9937-42e8-96c6-333acdab9e49.png)',
  in: 'header',
  name: 'api-key',
  type: 'apiKey',
}

export const postApiAdminUsersRoute = createRoute({
  method: 'post',
  path: '/api/admin/users',
  tags: ['users'],
  summary: 'Invite a User',
  description:
    'This endpoint allows the client to trigger an invitation to the provided email address.\n\n        It requires a token from a user with `super_admin` privileges.',
  operationId: 'postAdminUsersCreate',
  request: { body: { content: { 'application/json': { schema: UserInviteParamSchema } } } },
  responses: {
    200: { description: 'Successful' },
    401: { description: 'Unauthorized', content: {} },
    422: { description: 'Unprocessable Entity', content: {} },
  },
})

export const getApiArticlesRoute = createRoute({
  method: 'get',
  path: '/api/articles',
  tags: ['articles'],
  summary: 'Published articles',
  description:
    'This endpoint allows the client to retrieve a list of articles.\n\n"Articles" are all the posts that users create on DEV that typically\nshow up in the feed. They can be a blog post, a discussion question,\na help thread etc. but is referred to as article within the code.\n\nBy default it will return featured, published articles ordered\nby descending popularity.\n\nIt supports pagination, each page will contain `30` articles by default.',
  operationId: 'getArticles',
  request: {
    query: z.object({
      page: PageParamParamsSchema,
      per_page: PerPageParam30to1000ParamsSchema,
      tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will retrieve articles that contain the requested tag. Articles\nwill be ordered by descending popularity.This parameter can be used in conjuction with `top`.',
            example: 'discuss',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will retrieve articles with any of the comma-separated tags.\nArticles will be ordered by descending popularity.',
            example: 'javascript, css',
            in: 'query',
            name: 'tags',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tags_exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will retrieve articles that do _not_ contain _any_\nof comma-separated tags. Articles will be ordered by descending popularity.',
            example: 'node, java',
            in: 'query',
            name: 'tags_exclude',
            required: false,
            schema: { type: 'string' },
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will retrieve articles belonging\n            to a User or Organization ordered by descending publication date.\n            If `state=all` the number of items returned will be `1000` instead of the default `30`.\n            This parameter can be used in conjuction with `state`.',
            example: 'ben',
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state: z
        .enum(['fresh', 'rising', 'all'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will allow the client to check which articles are fresh or rising.\n            If `state=fresh` the server will return fresh articles.\n            If `state=rising` the server will return rising articles.\n            This param can be used in conjuction with `username`, only if set to `all`.',
            example: 'fresh',
            in: 'query',
            name: 'state',
            required: false,
            schema: { enum: ['fresh', 'rising', 'all'], type: 'string' },
          },
        }),
      top: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will allow the client to return the most popular articles\nin the last `N` days.\n`top` indicates the number of days since publication of the articles returned.\nThis param can be used in conjuction with `tag`.',
            example: 2,
            in: 'query',
            name: 'top',
            required: false,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      collection_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Adding this will allow the client to return the list of articles\nbelonging to the requested collection, ordered by ascending publication date.',
            example: 99,
            in: 'query',
            name: 'collection_id',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A List of Articles',
      content: {
        'application/json': {
          schema: z.array(ArticleIndexSchema),
          example: [
            {
              canonical_url: 'http://localhost:3000/username387/the-winds-twelve-quarters175-p58',
              collection_id: null,
              comments_count: 0,
              cover_image:
                'http://localhost:3000/assets/10-56ac1726da8a3bcbe4f93b48752287ea41bb79199cd8a8a61a9e4280ce9ae5b8.png',
              created_at: '2023-02-27T10:58:04Z',
              crossposted_at: null,
              description:
                'Iphone yr etsy goth skateboard sustainable twee direct trade. Freegan cardigan +1 twee blog gastropub...',
              edited_at: null,
              flare_tag: { bg_color_hex: '#000000', name: 'discuss', text_color_hex: '#ffffff' },
              id: 610,
              last_comment_at: '2023-02-27T10:58:04Z',
              organization: {
                name: "O'Connell, Bosco and Skiles",
                profile_image:
                  '/uploads/organization/profile_image/72/0ac6f538-133b-4535-a194-9762e9953ed2.png',
                profile_image_90:
                  '/uploads/organization/profile_image/72/0ac6f538-133b-4535-a194-9762e9953ed2.png',
                slug: 'org70',
                username: 'org70',
              },
              path: '/username387/the-winds-twelve-quarters175-p58',
              positive_reactions_count: 0,
              public_reactions_count: 0,
              published_at: '2023-02-27T10:58:04Z',
              published_timestamp: '2023-02-27T10:58:04Z',
              readable_publish_date: 'Feb 27',
              reading_time_minutes: 1,
              slug: 'the-winds-twelve-quarters175-p58',
              social_image:
                'http://localhost:3000/assets/10-56ac1726da8a3bcbe4f93b48752287ea41bb79199cd8a8a61a9e4280ce9ae5b8.png',
              tag_list: ['discuss'],
              tags: 'discuss',
              title: "The Wind's Twelve Quarters175",
              type_of: 'article',
              url: 'http://localhost:3000/username387/the-winds-twelve-quarters175-p58',
              user: {
                github_username: 'github387',
                name: 'Boyce "Jimmy" \\:/ Ledner',
                profile_image:
                  '/uploads/user/profile_image/823/265a22f6-a63a-4bae-9f3f-6a5d8d046de5.jpeg',
                profile_image_90:
                  '/uploads/user/profile_image/823/265a22f6-a63a-4bae-9f3f-6a5d8d046de5.jpeg',
                twitter_username: 'twitter387',
                user_id: 823,
                username: 'username387',
                website_url: null,
              },
            },
          ],
        },
      },
    },
  },
  security: [],
})

export const postApiArticlesRoute = createRoute({
  method: 'post',
  path: '/api/articles',
  tags: ['articles'],
  summary: 'Publish article',
  description:
    'This endpoint allows the client to create a new article.\n\n"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.',
  operationId: 'createArticle',
  request: { body: { content: { 'application/json': { schema: ArticleSchema } } } },
  responses: {
    201: { description: 'An Article', content: {} },
    401: { description: 'Unauthorized', content: {} },
    422: { description: 'Unprocessable Entity', content: {} },
  },
})

export const getApiArticlesLatestRoute = createRoute({
  method: 'get',
  path: '/api/articles/latest',
  tags: ['articles'],
  summary: 'Published articles sorted by published date',
  description:
    'This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.\n\nIt supports pagination, each page will contain 30 articles by default.',
  operationId: 'getLatestArticles',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: 'A List of Articles',
      content: {
        'application/json': {
          schema: z.array(ArticleIndexSchema),
          example: [
            {
              canonical_url: 'http://localhost:3000/username390/absalom-absalom178-4a5e',
              collection_id: null,
              comments_count: 0,
              cover_image:
                'http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png',
              created_at: '2023-02-27T10:58:04Z',
              crossposted_at: null,
              description:
                'Sartorial photo booth muggle magic chambray occupy umami leggings. Celiac pug paleo yolo...',
              edited_at: null,
              flare_tag: { bg_color_hex: '#000000', name: 'discuss', text_color_hex: '#ffffff' },
              id: 613,
              last_comment_at: '2023-02-27T10:58:04Z',
              path: '/username390/absalom-absalom178-4a5e',
              positive_reactions_count: 0,
              public_reactions_count: 0,
              published_at: '2023-02-27T10:58:04Z',
              published_timestamp: '2023-02-27T10:58:04Z',
              readable_publish_date: 'Feb 27',
              reading_time_minutes: 1,
              slug: 'absalom-absalom178-4a5e',
              social_image:
                'http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png',
              tag_list: ['javascript', 'html', 'discuss'],
              tags: 'javascript, html, discuss',
              title: 'Absalom, Absalom!178',
              type_of: 'article',
              url: 'http://localhost:3000/username390/absalom-absalom178-4a5e',
              user: {
                github_username: 'github390',
                name: 'Samantha "Clemencia" \\:/ Kemmer',
                profile_image:
                  '/uploads/user/profile_image/826/dd79a3c7-6da2-4138-ac15-fab1628b409d.jpeg',
                profile_image_90:
                  '/uploads/user/profile_image/826/dd79a3c7-6da2-4138-ac15-fab1628b409d.jpeg',
                twitter_username: 'twitter390',
                user_id: 826,
                username: 'username390',
                website_url: null,
              },
            },
            {
              canonical_url: 'http://localhost:3000/username389/if-not-now-when177-4iin',
              collection_id: null,
              comments_count: 0,
              cover_image:
                'http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png',
              created_at: '2023-02-27T10:58:04Z',
              crossposted_at: null,
              description:
                "Master taxidermy yuccie polaroid tousled 90's street. Green juice helvetica chartreuse listicle banh...",
              edited_at: null,
              flare_tag: { bg_color_hex: '#000000', name: 'discuss', text_color_hex: '#ffffff' },
              id: 612,
              last_comment_at: '2023-02-27T10:58:04Z',
              path: '/username389/if-not-now-when177-4iin',
              positive_reactions_count: 0,
              public_reactions_count: 0,
              published_at: '2023-02-27T10:58:04Z',
              published_timestamp: '2023-02-27T10:58:04Z',
              readable_publish_date: 'Feb 27',
              reading_time_minutes: 1,
              slug: 'if-not-now-when177-4iin',
              social_image:
                'http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png',
              tag_list: ['javascript', 'html', 'discuss'],
              tags: 'javascript, html, discuss',
              title: 'If Not Now, When?177',
              type_of: 'article',
              url: 'http://localhost:3000/username389/if-not-now-when177-4iin',
              user: {
                github_username: 'github389',
                name: 'Brianna "Gabriel" \\:/ Mante',
                profile_image:
                  '/uploads/user/profile_image/825/3bf3e66f-9268-4e22-89d9-431e0a5fa9dc.jpeg',
                profile_image_90:
                  '/uploads/user/profile_image/825/3bf3e66f-9268-4e22-89d9-431e0a5fa9dc.jpeg',
                twitter_username: 'twitter389',
                user_id: 825,
                username: 'username389',
                website_url: null,
              },
            },
            {
              canonical_url: 'http://localhost:3000/username388/have-his-carcase176-1phd',
              collection_id: null,
              comments_count: 0,
              cover_image:
                'http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png',
              created_at: '2023-02-27T10:58:04Z',
              crossposted_at: null,
              description:
                "Salvia sartorial carry you probably haven't heard of them try-hard dreamcatcher meggings 8-bit....",
              edited_at: null,
              flare_tag: { bg_color_hex: '#000000', name: 'discuss', text_color_hex: '#ffffff' },
              id: 611,
              last_comment_at: '2023-02-27T10:58:04Z',
              path: '/username388/have-his-carcase176-1phd',
              positive_reactions_count: 0,
              public_reactions_count: 0,
              published_at: '2023-02-27T10:58:04Z',
              published_timestamp: '2023-02-27T10:58:04Z',
              readable_publish_date: 'Feb 27',
              reading_time_minutes: 1,
              slug: 'have-his-carcase176-1phd',
              social_image:
                'http://localhost:3000/assets/24-377bc0861a9a539e8d1875ea9d4eea9e0226d93e1b6e9317e0c73c754699cc14.png',
              tag_list: ['javascript', 'html', 'discuss'],
              tags: 'javascript, html, discuss',
              title: 'Have His Carcase176',
              type_of: 'article',
              url: 'http://localhost:3000/username388/have-his-carcase176-1phd',
              user: {
                github_username: 'github388',
                name: 'Leeanna "Miles" \\:/ Hills',
                profile_image:
                  '/uploads/user/profile_image/824/50463451-9323-40fc-b439-c7df125a27fa.jpeg',
                profile_image_90:
                  '/uploads/user/profile_image/824/50463451-9323-40fc-b439-c7df125a27fa.jpeg',
                twitter_username: 'twitter388',
                user_id: 824,
                username: 'username388',
                website_url: null,
              },
            },
          ],
        },
      },
    },
  },
  security: [],
})

export const getApiArticlesMeRoute = createRoute({
  method: 'get',
  path: '/api/articles/me',
  tags: ['articles', 'users'],
  summary: "User's articles",
  description:
    'This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.\n\n"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.\n\nPublished articles will be in reverse chronological publication order.\n\nIt will return published articles with pagination. By default a page will contain 30 articles.',
  operationId: 'getUserArticles',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: "A List of the authenticated user's Articles",
      content: { 'application/json': { schema: z.array(ArticleIndexSchema), example: [] } },
    },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const getApiArticlesMeAllRoute = createRoute({
  method: 'get',
  path: '/api/articles/me/all',
  tags: ['articles', 'users'],
  summary: "User's all articles",
  description:
    'This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.\n\n"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.\n\nIt will return both published and unpublished articles with pagination.\n\nUnpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.\n\nBy default a page will contain 30 articles.',
  operationId: 'getUserAllArticles',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: "A List of the authenticated user's Articles",
      content: { 'application/json': { schema: z.array(ArticleIndexSchema), example: [] } },
    },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const getApiArticlesMePublishedRoute = createRoute({
  method: 'get',
  path: '/api/articles/me/published',
  tags: ['articles', 'users'],
  summary: "User's published articles",
  description:
    'This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.\n\n"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.\n\nPublished articles will be in reverse chronological publication order.\n\nIt will return published articles with pagination. By default a page will contain 30 articles.',
  operationId: 'getUserPublishedArticles',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: "A List of the authenticated user's Articles",
      content: { 'application/json': { schema: z.array(ArticleIndexSchema), example: [] } },
    },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const getApiArticlesMeUnpublishedRoute = createRoute({
  method: 'get',
  path: '/api/articles/me/unpublished',
  tags: ['articles', 'users'],
  summary: "User's unpublished articles",
  description:
    'This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.\n\n"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.\n\nUnpublished articles will be in reverse chronological creation order.\n\nIt will return unpublished articles with pagination. By default a page will contain 30 articles.',
  operationId: 'getUserUnpublishedArticles',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: "A List of the authenticated user's Articles",
      content: { 'application/json': { schema: z.array(ArticleIndexSchema), example: [] } },
    },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const getApiArticlesIdRoute = createRoute({
  method: 'get',
  path: '/api/articles/{id}',
  tags: ['articles'],
  summary: 'Published article by id',
  description:
    'This endpoint allows the client to retrieve a single published article given its `id`.',
  operationId: 'getArticleById',
  request: {
    params: z.object({
      id: z
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
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An Article',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            body_html:
              '<p>Banjo carry cray vhs swag. Whatever celiac quinoa pabst chillwave. Vice pickled park lumbersexual salvia synth. Blog etsy austin mustache.</p>\n\n<p>Biodiesel forage street thundercats deep v.</p>\n\n',
            body_markdown:
              '---\ntitle: Cover Her Face179\npublished: true\ntags: discuss\ndate: \nseries: \ncanonical_url: \n\n---\n\nBanjo carry cray vhs swag. Whatever celiac quinoa pabst chillwave. Vice pickled park lumbersexual salvia synth. Blog etsy austin mustache.\n\n\nBiodiesel forage street thundercats deep v.\n\n',
            canonical_url: 'http://localhost:3000/username391/cover-her-face179-4gbc',
            collection_id: null,
            comments_count: 0,
            cover_image:
              'http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png',
            created_at: '2023-02-27T10:58:04Z',
            crossposted_at: null,
            description:
              'Banjo carry cray vhs swag. Whatever celiac quinoa pabst chillwave. Vice pickled park lumbersexual...',
            edited_at: null,
            flare_tag: { bg_color_hex: '#000000', name: 'discuss', text_color_hex: '#ffffff' },
            id: 614,
            last_comment_at: '2023-02-27T10:58:04Z',
            path: '/username391/cover-her-face179-4gbc',
            positive_reactions_count: 0,
            public_reactions_count: 0,
            published_at: '2023-02-27T10:58:04Z',
            published_timestamp: '2023-02-27T10:58:04Z',
            readable_publish_date: 'Feb 27',
            reading_time_minutes: 1,
            slug: 'cover-her-face179-4gbc',
            social_image:
              'http://localhost:3000/assets/2-1a96ae446ded018b65b215cce3aecc40a00e701642da521fdd6edd3c593ff6c1.png',
            tag_list: 'discuss',
            tags: ['discuss'],
            title: 'Cover Her Face179',
            type_of: 'article',
            url: 'http://localhost:3000/username391/cover-her-face179-4gbc',
            user: {
              github_username: 'github391',
              name: 'Von "Joan" \\:/ Swaniawski',
              profile_image:
                '/uploads/user/profile_image/827/90d87f32-bafb-49f5-8001-c7f1146a84f8.jpeg',
              profile_image_90:
                '/uploads/user/profile_image/827/90d87f32-bafb-49f5-8001-c7f1146a84f8.jpeg',
              twitter_username: 'twitter391',
              user_id: 827,
              username: 'username391',
              website_url: null,
            },
          },
        },
      },
    },
    404: { description: 'Article Not Found', content: {} },
  },
  security: [],
})

export const putApiArticlesIdRoute = createRoute({
  method: 'put',
  path: '/api/articles/{id}',
  tags: ['articles'],
  summary: 'Update an article by id',
  description:
    'This endpoint allows the client to update an existing article.\n\n"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.',
  operationId: 'updateArticle',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the user to unpublish.',
            example: 123,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ArticleSchema } } },
  },
  responses: {
    200: { description: 'An Article', content: {} },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Article Not Found', content: {} },
    422: { description: 'Unprocessable Entity', content: {} },
  },
})

export const putApiArticlesIdUnpublishRoute = createRoute({
  method: 'put',
  path: '/api/articles/{id}/unpublish',
  tags: ['articles'],
  summary: 'Unpublish an article',
  description:
    "This endpoint allows the client to unpublish an article.\n\nThe user associated with the API key must have any 'admin' or 'moderator' role.\n\nThe article will be unpublished and will no longer be visible to the public. It will remain\nin the database and will set back to draft status on the author's posts dashboard. Any\nnotifications associated with the article will be deleted. Any comments on the article\nwill remain.",
  operationId: 'unpublishArticle',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the article to unpublish.',
            example: 1,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    query: z.object({
      note: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Content for the note that's created along with unpublishing",
            example: 'Admin requested unpublishing all articles via API',
            in: 'query',
            name: 'note',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Article successfully unpublished' },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Article Not Found', content: {} },
  },
})

export const getApiArticlesUsernameSlugRoute = createRoute({
  method: 'get',
  path: '/api/articles/{username}/{slug}',
  tags: ['articles'],
  summary: 'Published article by path',
  description:
    'This endpoint allows the client to retrieve a single published article given its `path`.',
  operationId: 'getArticleByPath',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
      slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An Article',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            body_html:
              '<p>Synth tote bag venmo vice hoodie disrupt bitters mixtape. Fashion axe goth shoreditch kogi loko literally.</p>\n\n<p>Franzen ramps forage wayfarers thundercats put a bird on it loko.</p>\n\n',
            body_markdown:
              '---\ntitle: The Line of Beauty183\npublished: true\ntags: discuss\ndate: \nseries: \ncanonical_url: \n\n---\n\nSynth tote bag venmo vice hoodie disrupt bitters mixtape. Fashion axe goth shoreditch kogi loko literally.\n\n\nFranzen ramps forage wayfarers thundercats put a bird on it loko.\n\n',
            canonical_url: 'http://localhost:3000/username396/the-line-of-beauty183-33nj',
            collection_id: null,
            comments_count: 0,
            cover_image:
              'http://localhost:3000/assets/3-93b6b57b5a6115cffe5d63d29a22825eb9e65f647bfef57a88244bc2b98186f0.png',
            created_at: '2023-02-27T10:58:04Z',
            crossposted_at: null,
            description:
              'Synth tote bag venmo vice hoodie disrupt bitters mixtape. Fashion axe goth shoreditch kogi loko...',
            edited_at: null,
            flare_tag: { bg_color_hex: '#000000', name: 'discuss', text_color_hex: '#ffffff' },
            id: 618,
            last_comment_at: '2023-02-27T10:58:04Z',
            path: '/username396/the-line-of-beauty183-33nj',
            positive_reactions_count: 0,
            public_reactions_count: 0,
            published_at: '2023-02-27T10:58:04Z',
            published_timestamp: '2023-02-27T10:58:04Z',
            readable_publish_date: 'Feb 27',
            reading_time_minutes: 1,
            slug: 'the-line-of-beauty183-33nj',
            social_image:
              'http://localhost:3000/assets/3-93b6b57b5a6115cffe5d63d29a22825eb9e65f647bfef57a88244bc2b98186f0.png',
            tag_list: 'discuss',
            tags: ['discuss'],
            title: 'The Line of Beauty183',
            type_of: 'article',
            url: 'http://localhost:3000/username396/the-line-of-beauty183-33nj',
            user: {
              github_username: 'github396',
              name: 'Danial "Charles" \\:/ Grant',
              profile_image:
                '/uploads/user/profile_image/832/80339e58-8c50-4c64-b8a5-0ae9d3bf6d2d.jpeg',
              profile_image_90:
                '/uploads/user/profile_image/832/80339e58-8c50-4c64-b8a5-0ae9d3bf6d2d.jpeg',
              twitter_username: 'twitter396',
              user_id: 832,
              username: 'username396',
              website_url: null,
            },
          },
        },
      },
    },
    404: { description: 'Article Not Found', content: {} },
  },
  security: [],
})

export const getApiCommentsRoute = createRoute({
  method: 'get',
  path: '/api/comments',
  tags: ['comments'],
  summary: 'Comments',
  description:
    'This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.\n\nIt will return the all top level comments with their nested comments as threads. See the format specification for further details.',
  operationId: 'getCommentsByArticleId',
  request: {
    query: z.object({
      a_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Article identifier.',
            example: '321',
            in: 'query',
            name: 'a_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      p_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Podcast Episode identifier.',
            example: '321',
            in: 'query',
            name: 'p_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A List of Comments',
      content: {
        'application/json': {
          schema: z.array(CommentSchema),
          example: [
            {
              body_html:
                '<p>Tumblr organic put a bird on it everyday mustache typewriter pug.</p>\n\n',
              children: [],
              created_at: '2023-02-27T10:58:05Z',
              id_code: '60',
              type_of: 'comment',
              user: {
                github_username: 'github410',
                name: 'Dwight "Pedro" \\:/ Parker',
                profile_image:
                  '/uploads/user/profile_image/846/8af90bef-f000-41c1-a90f-0e364c163a8a.jpeg',
                profile_image_90:
                  '/uploads/user/profile_image/846/8af90bef-f000-41c1-a90f-0e364c163a8a.jpeg',
                twitter_username: 'twitter410',
                user_id: 846,
                username: 'username410',
                website_url: null,
              },
            },
          ],
        },
      },
    },
    404: { description: 'Resource Not Found', content: {} },
  },
  security: [],
})

export const getApiCommentsIdRoute = createRoute({
  method: 'get',
  path: '/api/comments/{id}',
  tags: ['comments'],
  summary: 'Comment by id',
  description:
    'This endpoint allows the client to retrieve a comment as well as his descendants comments.\n\n  It will return the required comment (the root) with its nested descendants as a thread.\n\n  See the format specification for further details.',
  operationId: 'getCommentById',
  request: {
    params: z.object({
      id: z
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
            description: 'Comment identifier.',
            example: '321',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'A List of the Comments', content: {} },
    404: { description: 'Comment Not Found', content: {} },
  },
  security: [],
})

export const getApiDisplayAdsRoute = createRoute({
  method: 'get',
  path: '/api/display_ads',
  tags: ['display ads'],
  summary: 'display ads',
  description: 'This endpoint allows the client to retrieve a list of all display ads.',
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
  },
})

export const postApiDisplayAdsRoute = createRoute({
  method: 'post',
  path: '/api/display_ads',
  tags: ['display ads'],
  summary: 'display ads',
  description: 'This endpoint allows the client to create a new display ad.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              approved: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Ad must be both published and approved to be in rotation',
                }),
              body_markdown: z
                .string()
                .openapi({ description: 'The text (in markdown) of the ad (required)' }),
              creator_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Identifies the user who created the ad.' }),
              display_to: z
                .enum(['all', 'logged_in', 'logged_out'])
                .default('all')
                .exactOptional()
                .openapi({ description: 'Potentially limits visitors to whom the ad is visible' }),
              name: z
                .string()
                .openapi({
                  description: 'For internal use, helps distinguish ads from one another',
                }),
              organization_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Identifies the organization to which the ad belongs' }),
              placement_area: z
                .enum([
                  'sidebar_left',
                  'sidebar_left_2',
                  'sidebar_right',
                  'post_sidebar',
                  'post_comments',
                ])
                .openapi({
                  description: 'Identifies which area of site layout the ad can appear in',
                }),
              published: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Ad must be both published and approved to be in rotation',
                }),
              tag_list: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Tags on which this ad can be displayed (blank is all/any tags)',
                }),
              type_of: z
                .enum(['in_house', 'community', 'external'])
                .default('in_house')
                .exactOptional()
                .openapi({
                  description:
                    "Types of the billboards:\nin_house (created by admins),\ncommunity (created by an entity, appears on entity's content),\nexternal ( created by an entity, or a non-entity, can appear everywhere)\n",
                }),
            })
            .openapi({ required: ['name', 'body_markdown', 'placement_area'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    422: { description: 'unprocessable', content: {} },
  },
})

export const getApiDisplayAdsIdRoute = createRoute({
  method: 'get',
  path: '/api/display_ads/{id}',
  tags: ['display ads'],
  summary: 'display ad',
  description: 'This endpoint allows the client to retrieve a single display ad, via its id.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the user to unpublish.',
            example: 123,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    404: { description: 'Unknown DisplayAd ID', content: {} },
  },
})

export const putApiDisplayAdsIdRoute = createRoute({
  method: 'put',
  path: '/api/display_ads/{id}',
  tags: ['display ads'],
  summary: 'display ads',
  description:
    'This endpoint allows the client to update the attributes of a single display ad, via its id.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the user to unpublish.',
            example: 123,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              approved: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Ad must be both published and approved to be in rotation',
                }),
              body_markdown: z
                .string()
                .openapi({ description: 'The text (in markdown) of the ad (required)' }),
              creator_id: z
                .int()
                .exactOptional()
                .openapi({ description: 'Identifies the user who created the ad.' }),
              display_to: z
                .enum(['all', 'logged_in', 'logged_out'])
                .default('all')
                .exactOptional()
                .openapi({ description: 'Potentially limits visitors to whom the ad is visible' }),
              name: z
                .string()
                .openapi({
                  description: 'For internal use, helps distinguish ads from one another',
                }),
              organization_id: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "Identifies the organization to which the ad belongs, required for 'community' type ads",
                }),
              placement_area: z
                .enum([
                  'sidebar_left',
                  'sidebar_left_2',
                  'sidebar_right',
                  'post_sidebar',
                  'post_comments',
                ])
                .openapi({
                  description: 'Identifies which area of site layout the ad can appear in',
                }),
              published: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Ad must be both published and approved to be in rotation',
                }),
              tag_list: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Tags on which this ad can be displayed (blank is all/any tags)',
                }),
            })
            .openapi({ required: ['name', 'body_markdown', 'placement_area'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    404: { description: 'not found', content: {} },
  },
})

export const putApiDisplayAdsIdUnpublishRoute = createRoute({
  method: 'put',
  path: '/api/display_ads/{id}/unpublish',
  tags: ['display ads'],
  summary: 'unpublish',
  description:
    'This endpoint allows the client to remove a display ad from rotation by un-publishing it.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the user to unpublish.',
            example: 123,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'no content' },
    401: { description: 'unauthorized', content: {} },
    404: { description: 'not found', content: {} },
  },
})

export const getApiFollowersUsersRoute = createRoute({
  method: 'get',
  path: '/api/followers/users',
  tags: ['followers'],
  summary: 'Followers',
  description:
    'This endpoint allows the client to retrieve a list of the followers they have.\n        "Followers" are users that are following other users on the website.\n        It supports pagination, each page will contain 80 followers by default.',
  operationId: 'getFollowers',
  request: {
    query: z.object({
      page: PageParamParamsSchema,
      per_page: PerPageParam30to1000ParamsSchema,
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Default is 'created_at'. Specifies the sort order for the created_at param of the follow\n                                relationship. To sort by newest followers first (descending order) specify\n                                ?sort=-created_at.",
            example: 'created_at',
            in: 'query',
            name: 'sort',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A List of followers',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                id: z.int32().exactOptional(),
                name: z.string().exactOptional().openapi({ description: "The follower's name" }),
                path: z
                  .string()
                  .exactOptional()
                  .openapi({ description: "A path to the follower's profile" }),
                profile_image: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Profile image (640x640)' }),
                type_of: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'user_follower by default' }),
                user_id: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: "The follower's user id" }),
              })
              .openapi({ description: 'A follower', required: [] }),
          ),
          example: [
            {
              created_at: '2023-02-27T10:58:06Z',
              id: 7,
              name: 'Benjamin "Sol" \\:/ Senger',
              path: '/username435',
              profile_image:
                '/uploads/user/profile_image/871/51d055b1-32e3-4ccd-878a-a63e0ab5f69b.jpeg',
              type_of: 'user_follower',
              user_id: 871,
              username: 'username435',
            },
            {
              created_at: '2023-02-27T10:58:06Z',
              id: 6,
              name: 'Christin "Anthony" \\:/ Metz',
              path: '/username433',
              profile_image:
                '/uploads/user/profile_image/869/8ba1b0fb-ed63-4d36-a21d-11615b8e42d0.jpeg',
              type_of: 'user_follower',
              user_id: 869,
              username: 'username433',
            },
          ],
        },
      },
    },
    401: { description: 'unauthorized', content: {} },
  },
})

export const getApiFollowsTagsRoute = createRoute({
  method: 'get',
  path: '/api/follows/tags',
  tags: ['followed_tags', 'tags'],
  summary: 'Followed Tags',
  description: 'This endpoint allows the client to retrieve a list of the tags they follow.',
  operationId: 'getFollowedTags',
  responses: {
    200: {
      description: 'A List of followed tags',
      content: {
        'application/json': {
          schema: z.array(FollowedTagSchema),
          example: [
            { id: 1220, name: 'tag3', points: 1 },
            { id: 1221, name: 'tag4', points: 1 },
          ],
        },
      },
    },
    401: { description: 'unauthorized', content: {} },
  },
})

export const getApiOrganizationsUsernameRoute = createRoute({
  method: 'get',
  path: '/api/organizations/{username}',
  tags: ['organizations'],
  summary: 'An organization',
  description:
    'This endpoint allows the client to retrieve a single organization by their username',
  operationId: 'getOrganization',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An Organization',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            github_username: 'org217',
            id: 79,
            joined_at: '2023-02-27T10:58:06Z',
            location: null,
            name: 'Beatty Inc',
            profile_image:
              '/uploads/organization/profile_image/79/a1244f11-60ba-4f71-8c00-4e3f29ddf7f3.png',
            story: null,
            summary:
              'Stumptown schlitz umami try-hard blog mumblecore. Typewriter 8-bit five dollar toast neutra locavore put a bird on it farm-to-table tilde.',
            tag_line: null,
            tech_stack: null,
            twitter_username: 'org8840',
            type_of: 'organization',
            url: 'http://spinka-armstrong.com/hollis',
            username: 'org77',
          },
        },
      },
    },
    404: { description: 'Not Found', content: {} },
  },
  security: [],
})

export const getApiOrganizationsUsernameArticlesRoute = createRoute({
  method: 'get',
  path: '/api/organizations/{username}/articles',
  tags: ['organizations', 'articles'],
  summary: "Organization's Articles",
  description:
    'This endpoint allows the client to retrieve a list of Articles belonging to the organization\n\nIt supports pagination, each page will contain `30` users by default.',
  operationId: 'getOrgArticles',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: "An Organization's Articles",
      content: {
        'application/json': {
          schema: z.array(ArticleIndexSchema),
          example: [
            {
              canonical_url: 'http://localhost:3000/org81/postern-of-fate195-51k4',
              collection_id: null,
              comments_count: 0,
              cover_image:
                'http://localhost:3000/assets/12-f9d673ae4ff98002f782ab82c641f2f26673be728e8f5409bea83f2d1de15323.png',
              created_at: '2023-02-27T10:58:07Z',
              crossposted_at: null,
              description:
                'Tilde master jean shorts farm-to-table yuccie. Poutine freegan semiotics. Cronut tacos post-ironic...',
              edited_at: null,
              id: 630,
              last_comment_at: '2023-02-27T10:58:07Z',
              organization: {
                name: 'Schaden-Fritsch',
                profile_image:
                  '/uploads/organization/profile_image/83/8d2996b4-f9fb-4947-aea3-17898ab9d7ec.png',
                profile_image_90:
                  '/uploads/organization/profile_image/83/8d2996b4-f9fb-4947-aea3-17898ab9d7ec.png',
                slug: 'org81',
                username: 'org81',
              },
              path: '/org81/postern-of-fate195-51k4',
              positive_reactions_count: 0,
              public_reactions_count: 0,
              published_at: '2023-02-27T10:58:07Z',
              published_timestamp: '2023-02-27T10:58:07Z',
              readable_publish_date: 'Feb 27',
              reading_time_minutes: 1,
              slug: 'postern-of-fate195-51k4',
              social_image:
                'http://localhost:3000/assets/12-f9d673ae4ff98002f782ab82c641f2f26673be728e8f5409bea83f2d1de15323.png',
              tag_list: ['javascript', 'html', 'discuss'],
              tags: 'javascript, html, discuss',
              title: 'Postern of Fate195',
              type_of: 'article',
              url: 'http://localhost:3000/org81/postern-of-fate195-51k4',
              user: {
                github_username: 'github453',
                name: 'Rowena "Zack" \\:/ Howell',
                profile_image:
                  '/uploads/user/profile_image/889/9d1a2834-1117-4f0d-9e87-aa4f3d3dc525.jpeg',
                profile_image_90:
                  '/uploads/user/profile_image/889/9d1a2834-1117-4f0d-9e87-aa4f3d3dc525.jpeg',
                twitter_username: 'twitter453',
                user_id: 889,
                username: 'username453',
                website_url: null,
              },
            },
          ],
        },
      },
    },
    404: { description: 'Not Found', content: {} },
  },
  security: [],
})

export const getApiOrganizationsUsernameUsersRoute = createRoute({
  method: 'get',
  path: '/api/organizations/{username}/users',
  tags: ['organizations', 'users'],
  summary: "Organization's users",
  description:
    'This endpoint allows the client to retrieve a list of users belonging to the organization\n\nIt supports pagination, each page will contain `30` users by default.',
  operationId: 'getOrgUsers',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: "An Organization's users",
      content: {
        'application/json': {
          schema: z.array(UserSchema),
          example: [
            {
              github_username: 'github445',
              id: 881,
              joined_at: 'Feb 27, 2023',
              location: null,
              name: 'Jeromy "Spencer" \\:/ VonRueden',
              profile_image:
                '/uploads/user/profile_image/881/66c7cfc8-df38-4758-aad0-3d8b6b225a35.jpeg',
              summary: null,
              twitter_username: 'twitter445',
              type_of: 'user',
              username: 'username445',
              website_url: null,
            },
            {
              github_username: 'github446',
              id: 882,
              joined_at: 'Feb 27, 2023',
              location: null,
              name: 'Annabel "Tisa" \\:/ Rogahn',
              profile_image:
                '/uploads/user/profile_image/882/9cc02e02-adbb-4735-85bf-5f336714bb18.jpeg',
              summary: null,
              twitter_username: 'twitter446',
              type_of: 'user',
              username: 'username446',
              website_url: null,
            },
          ],
        },
      },
    },
    404: { description: 'Not Found', content: {} },
  },
  security: [],
})

export const getApiPagesRoute = createRoute({
  method: 'get',
  path: '/api/pages',
  tags: ['pages'],
  summary: 'show details for all pages',
  description: 'This endpoint allows the client to retrieve details for all Page objects.',
  responses: {
    200: {
      description: 'successful',
      content: {
        'application/json': {
          schema: z.array(PageSchema),
          example: [
            {
              body_html: null,
              body_json: null,
              body_markdown: 'Velit autem nisi distinctio.',
              description: 'Voluptas ut laboriosam neque.',
              id: 1,
              is_top_level_path: false,
              landing_page: false,
              processed_html: '<p>Velit autem nisi distinctio.</p>\n\n',
              slug: 'push_premium',
              social_image: { url: null },
              template: 'contained',
              title: 'This Side of Paradise',
            },
          ],
        },
      },
    },
  },
  security: [],
})

export const postApiPagesRoute = createRoute({
  method: 'post',
  path: '/api/pages',
  tags: ['pages'],
  summary: 'pages',
  description: 'This endpoint allows the client to create a new page.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              body_json: z
                .string()
                .exactOptional()
                .openapi({ description: 'For JSON pages, the JSON body' }),
              body_markdown: z
                .string()
                .exactOptional()
                .openapi({ description: 'The text (in markdown) of the ad (required)' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'For internal use, helps similar pages from one another' }),
              is_top_level_path: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "If true, the page is available at '/{slug}' instead of '/page/{slug}', use with caution",
                }),
              slug: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Used to link to this page in URLs, must be unique and URL-safe',
                }),
              template: z
                .enum(['contained', 'full_within_layout', 'nav_bar_included', 'json'])
                .default('contained')
                .exactOptional()
                .openapi({ description: 'Controls what kind of layout the page is rendered in' }),
              title: z.string().exactOptional().openapi({ description: 'Title of the page' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
    422: { description: 'unprocessable', content: {} },
  },
})

export const getApiPagesIdRoute = createRoute({
  method: 'get',
  path: '/api/pages/{id}',
  tags: ['pages'],
  summary: 'show details for a page',
  description:
    'This endpoint allows the client to retrieve details for a single Page object, specified by ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the page.',
            example: 1,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful',
      content: {
        'application/json': {
          schema: PageSchema,
          example: {
            body_html: null,
            body_json: null,
            body_markdown: 'Amet rerum nostrum earum.',
            description: 'Voluptatibus quod dolor dolores.',
            id: 6,
            is_top_level_path: false,
            landing_page: false,
            processed_html: '<p>Amet rerum nostrum earum.</p>\n\n',
            slug: 'satisfaction-scale',
            social_image: { url: null },
            template: 'contained',
            title: 'In a Glass Darkly',
          },
        },
      },
    },
  },
  security: [],
})

export const putApiPagesIdRoute = createRoute({
  method: 'put',
  path: '/api/pages/{id}',
  tags: ['pages'],
  summary: 'update details for a page',
  description:
    'This endpoint allows the client to retrieve details for a single Page object, specified by ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the page.',
            example: 1,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PageSchema } } },
  },
  responses: {
    200: {
      description: 'successful',
      content: {
        'application/json': {
          schema: PageSchema,
          example: {
            body_html: null,
            body_json: null,
            body_markdown: 'Qui sed sit dolorem.',
            description: 'Ut reiciendis qui iste.',
            id: 7,
            is_top_level_path: false,
            landing_page: false,
            processed_html: '<p>Qui sed sit dolorem.</p>\n\n',
            slug: 'corn-premium',
            social_image: { url: null },
            template: 'contained',
            title: 'New Title',
          },
        },
      },
    },
    401: { description: 'unauthorized', content: {} },
    422: { description: 'unprocessable', content: {} },
  },
})

export const deleteApiPagesIdRoute = createRoute({
  method: 'delete',
  path: '/api/pages/{id}',
  tags: ['pages'],
  summary: 'remove a page',
  description: 'This endpoint allows the client to delete a single Page object, specified by ID.',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the page.',
            example: 1,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful',
      content: {
        'application/json': {
          schema: PageSchema,
          example: {
            body_html: null,
            body_json: null,
            body_markdown: 'In soluta qui odio.',
            description: 'Est molestias eius voluptas.',
            id: 10,
            is_top_level_path: false,
            landing_page: false,
            processed_html: '<p>In soluta qui odio.</p>\n\n',
            slug: 'message-premium',
            social_image: { url: null },
            template: 'contained',
            title: 'The Green Bay Tree',
          },
        },
      },
    },
    401: { description: 'unauthorized', content: {} },
    422: { description: 'unprocessable', content: {} },
  },
})

export const getApiPodcastEpisodesRoute = createRoute({
  method: 'get',
  path: '/api/podcast_episodes',
  tags: ['podcast_episodes'],
  summary: 'Podcast Episodes',
  description:
    'This endpoint allows the client to retrieve a list of podcast episodes.\n        "Podcast episodes" are episodes belonging to podcasts.\n        It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.\n        It supports pagination, each page will contain 30 articles by default.',
  operationId: 'getPodcastEpisodes',
  request: {
    query: z.object({
      page: PageParamParamsSchema,
      per_page: PerPageParam30to1000ParamsSchema,
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Using this parameter will retrieve episodes belonging to a specific podcast.',
            example: 'codenewbie',
            in: 'query',
            name: 'username',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A List of Podcast episodes filtered by username',
      content: {
        'application/json': {
          schema: z.array(PodcastEpisodeIndexSchema),
          example: [
            {
              class_name: 'PodcastEpisode',
              id: 4,
              image_url: '/uploads/podcast/image/4/5e637d0a-0446-47a1-a77c-09dd5adaa4b6.jpeg',
              path: '/codenewbie/slug-4',
              podcast: {
                image_url: '/uploads/podcast/image/4/5e637d0a-0446-47a1-a77c-09dd5adaa4b6.jpeg',
                slug: 'codenewbie',
                title: 'Delirium Tremens',
              },
              title: '20',
              type_of: 'podcast_episodes',
            },
          ],
        },
      },
    },
    404: { description: 'Unknown Podcast username', content: {} },
  },
  security: [],
})

export const getApiProfileImagesUsernameRoute = createRoute({
  method: 'get',
  path: '/api/profile_images/{username}',
  tags: ['profile images'],
  summary: 'A Users or organizations profile image',
  description:
    'This endpoint allows the client to retrieve a user or organization profile image information by its\n        corresponding username.',
  operationId: 'getProfileImage',
  request: {
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            description:
              'The parameter is the username of the user or the username of the organization.',
            example: 'janedoe',
            in: 'path',
            name: 'username',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An object containing profile image details',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            image_of: 'user',
            profile_image:
              '/uploads/user/profile_image/904/b992f4eb-7fca-49a1-b292-d3f9b013d81c.jpeg',
            profile_image_90:
              '/uploads/user/profile_image/904/b992f4eb-7fca-49a1-b292-d3f9b013d81c.jpeg',
            type_of: 'profile_image',
          },
        },
      },
    },
    404: { description: 'Resource Not Found', content: {} },
  },
})

export const postApiReactionsRoute = createRoute({
  method: 'post',
  path: '/api/reactions',
  tags: ['reactions'],
  summary: 'create reaction',
  description:
    'This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:\n        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles\n        * "Like"ing that Article a second time will return the previous "like"',
  request: {
    query: z.object({
      category: z
        .enum(['like', 'unicorn', 'exploding_head', 'raised_hands', 'fire'])
        .openapi({
          param: {
            in: 'query',
            name: 'category',
            required: true,
            schema: {
              enum: ['like', 'unicorn', 'exploding_head', 'raised_hands', 'fire'],
              type: 'string',
            },
          },
        }),
      reactable_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'reactable_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      reactable_type: z
        .enum(['Comment', 'Article', 'User'])
        .openapi({
          param: {
            in: 'query',
            name: 'reactable_type',
            required: true,
            schema: { enum: ['Comment', 'Article', 'User'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
  },
})

export const postApiReactionsToggleRoute = createRoute({
  method: 'post',
  path: '/api/reactions/toggle',
  tags: ['reactions'],
  summary: 'toggle reaction',
  description:
    'This endpoint allows the client to toggle the user\'s reaction to a specified reactable (eg, Article, Comment, or User). For examples:\n        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles\n        * "Like"ing that Article a second time will remove the "like" from the user',
  request: {
    query: z.object({
      category: z
        .enum(['like', 'unicorn', 'exploding_head', 'raised_hands', 'fire'])
        .openapi({
          param: {
            in: 'query',
            name: 'category',
            required: true,
            schema: {
              enum: ['like', 'unicorn', 'exploding_head', 'raised_hands', 'fire'],
              type: 'string',
            },
          },
        }),
      reactable_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'reactable_id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      reactable_type: z
        .enum(['Comment', 'Article', 'User'])
        .openapi({
          param: {
            in: 'query',
            name: 'reactable_type',
            required: true,
            schema: { enum: ['Comment', 'Article', 'User'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'successful', content: {} },
    401: { description: 'unauthorized', content: {} },
  },
})

export const getApiReadinglistRoute = createRoute({
  method: 'get',
  path: '/api/readinglist',
  tags: ['readinglist'],
  summary: 'Readinglist',
  description:
    'This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.\n        It supports pagination, each page will contain `30` articles by default',
  operationId: 'getReadinglist',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam30to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of articles in the users readinglist',
      content: { 'application/json': { schema: z.array(ArticleIndexSchema), example: [] } },
    },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const getApiTagsRoute = createRoute({
  method: 'get',
  path: '/api/tags',
  tags: ['tags'],
  summary: 'Tags',
  description:
    'This endpoint allows the client to retrieve a list of tags that can be used to tag articles.\n\nIt will return tags ordered by popularity.\n\nIt supports pagination, each page will contain 10 tags by default.',
  operationId: 'getTags',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam10to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: 'A List of all tags',
      content: {
        'application/json': {
          schema: z.array(TagSchema),
          example: [
            { bg_color_hex: null, id: 1254, name: 'tag7', text_color_hex: null },
            { bg_color_hex: null, id: 1253, name: 'tag6', text_color_hex: null },
            { bg_color_hex: null, id: 1252, name: 'tag5', text_color_hex: null },
          ],
        },
      },
    },
  },
  security: [],
})

export const getApiUsersMeRoute = createRoute({
  method: 'get',
  path: '/api/users/me',
  tags: ['users'],
  summary: 'The authenticated user',
  description:
    'This endpoint allows the client to retrieve information about the authenticated user',
  operationId: 'getUserMe',
  responses: {
    200: {
      description: 'successful',
      content: {
        'application/json': {
          schema: z.object({}),
          example: {
            github_username: 'github480',
            id: 916,
            joined_at: 'Feb 27, 2023',
            location: null,
            name: 'Dennis "Rodger" \\:/ Gorczany',
            profile_image:
              '/uploads/user/profile_image/916/fc0d6dd7-6dee-4df6-9720-ac6618f19fd5.jpeg',
            summary: null,
            twitter_username: 'twitter480',
            type_of: 'user',
            username: 'username480',
            website_url: null,
          },
        },
      },
    },
    401: { description: 'Unauthorized', content: {} },
  },
})

export const getApiUsersIdRoute = createRoute({
  method: 'get',
  path: '/api/users/{id}',
  tags: ['users'],
  summary: 'A User',
  description:
    "This endpoint allows the client to retrieve a single user, either by id\nor by the user's username.\n\nFor complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser",
  operationId: 'getUser',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'successful', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const putApiUsersIdSuspendRoute = createRoute({
  method: 'put',
  path: '/api/users/{id}/suspend',
  tags: ['users'],
  summary: 'Suspend a User',
  description:
    "This endpoint allows the client to suspend a user.\n\nThe user associated with the API key must have any 'admin' or 'moderator' role.\n\nThis specified user will be assigned the 'suspended' role. Suspending a user will stop the\nuser from posting new posts and comments. It doesn't delete any of the user's content, just\nprevents them from creating new content while suspended. Users are not notified of their suspension\nin the UI, so if you want them to know about this, you must notify them.",
  operationId: 'suspendUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the user to suspend.',
            example: 1,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'User successfully unpublished' },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Unknown User ID', content: {} },
  },
})

export const putApiUsersIdUnpublishRoute = createRoute({
  method: 'put',
  path: '/api/users/{id}/unpublish',
  tags: ['users'],
  summary: "Unpublish a User's Articles and Comments",
  description:
    "This endpoint allows the client to unpublish all of the articles and\ncomments created by a user.\n\nThe user associated with the API key must have any 'admin' or 'moderator' role.\n\nThis specified user's articles and comments will be unpublished and will no longer be\nvisible to the public. They will remain in the database and will set back to draft status\non the specified user's  dashboard. Any notifications associated with the specified user's\narticles and comments will be deleted.\n\nNote this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT\nstatus code immediately, but the articles and comments will not be unpublished until the\nrequest is completed on the server.",
  operationId: 'unpublishUser',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .openapi({
          param: {
            description: 'The ID of the user to unpublish.',
            example: 1,
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: "User's articles and comments successfully unpublished" },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Unknown User ID (still accepted for async processing)', content: {} },
  },
})

export const getApiVideosRoute = createRoute({
  method: 'get',
  path: '/api/videos',
  tags: ['videos', 'articles'],
  summary: 'Articles with a video',
  description:
    'This endpoint allows the client to retrieve a list of articles that are uploaded with a video.\n\nIt will only return published video articles ordered by descending popularity.\n\nIt supports pagination, each page will contain 24 articles by default.',
  operationId: 'videos',
  request: {
    query: z.object({ page: PageParamParamsSchema, per_page: PerPageParam24to1000ParamsSchema }),
  },
  responses: {
    200: {
      description: 'A List of all articles with videos',
      content: {
        'application/json': {
          schema: z.array(VideoArticleSchema),
          example: [
            {
              cloudinary_video_url:
                'https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/thumbs-video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f-00001.png',
              id: 636,
              path: '/username499/i-know-why-the-caged-bird-sings201-4ncl',
              title: 'I Know Why the Caged Bird Sings201',
              type_of: 'video_article',
              user: { name: 'Kenneth "Ardelia" \\:/ Luettgen' },
              user_id: 936,
              video_duration_in_minutes: '00:00',
              video_source_url:
                'https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f.m3u8',
            },
            {
              cloudinary_video_url:
                'https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/thumbs-video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f-00001.png',
              id: 637,
              path: '/username500/as-i-lay-dying202-1ba2',
              title: 'As I Lay Dying202',
              type_of: 'video_article',
              user: { name: 'Fleta "Alleen" \\:/ Jerde' },
              user_id: 937,
              video_duration_in_minutes: '00:00',
              video_source_url:
                'https://dw71fyauz7yz9.cloudfront.net/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f/video-upload__1e42eb0bab4abb3c63baeb5e8bdfe69f.m3u8',
            },
          ],
        },
      },
    },
  },
  security: [],
})
