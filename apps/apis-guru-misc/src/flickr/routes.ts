import { createRoute, z } from '@hono/zod-openapi'

const AlbumSchema = z
  .object({
    can_comment: z.boolean().exactOptional(),
    count_comments: z.number().exactOptional(),
    count_views: z.number().exactOptional(),
    date_create: z.number().exactOptional(),
    date_update: z.number().exactOptional(),
    description: z.string().exactOptional(),
    farm: z.string().exactOptional(),
    id: z.string().exactOptional(),
    photos: z.number().exactOptional(),
    primary: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    server: z.string().exactOptional(),
    title: z.string().exactOptional(),
    videos: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Album')

const ContextPhotoSchema = z
  .object({
    farm: z.string().exactOptional(),
    id: z.string().exactOptional(),
    is_faved: z.boolean().exactOptional(),
    license: z.int().exactOptional(),
    media: z.string().exactOptional(),
    owner: z.string().exactOptional(),
    safe: z.boolean().exactOptional(),
    secret: z.string().exactOptional(),
    server: z.string().exactOptional(),
    thumb: z.string().exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContextPhoto')

const ContextPhotosSchema = z
  .object({ photos: z.array(ContextPhotoSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ContextPhotos')

const CoverSchema = z
  .object({
    farm: z.string().exactOptional(),
    id: z.string().exactOptional(),
    isfamily: z.boolean().exactOptional(),
    isfriend: z.boolean().exactOptional(),
    ispublic: z.boolean().exactOptional(),
    owner: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    server: z.string().exactOptional(),
    title: z.string().exactOptional(),
    y: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Cover')

const PhotoURLsSchema = z
  .object({
    h: z.string().exactOptional(),
    l: z.string().exactOptional(),
    s: z.string().exactOptional(),
    t: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PhotoURLs')

const GroupSchema = z
  .object({
    blast: z
      .object({
        _content: z.string().exactOptional(),
        date_blast_added: z.string().exactOptional(),
        user_id: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    cover: CoverSchema.exactOptional(),
    coverphoto_farm: z.string().exactOptional(),
    coverphoto_server: z.string().exactOptional(),
    coverphoto_url: PhotoURLsSchema.exactOptional(),
    description: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    iconfarm: z.string().exactOptional(),
    iconserver: z.string().exactOptional(),
    id: z.string().exactOptional(),
    is_admin: z.boolean().exactOptional(),
    is_member: z.boolean().exactOptional(),
    is_moderator: z.boolean().exactOptional(),
    ispoolmoderated: z.boolean().exactOptional(),
    lang: z.string().exactOptional(),
    members: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    path_alias: z.string().exactOptional(),
    pool_count: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    pool_rows: z.int().exactOptional(),
    privacy: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    restrictions: z
      .object({
        art_ok: z.boolean().exactOptional(),
        has_geo: z.boolean().exactOptional(),
        images_ok: z.boolean().exactOptional(),
        moderate_ok: z.boolean().exactOptional(),
        photos_ok: z.boolean().exactOptional(),
        restricted_ok: z.boolean().exactOptional(),
        safe_ok: z.boolean().exactOptional(),
        screens_ok: z.boolean().exactOptional(),
        videos_ok: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    roles: z
      .object({
        admin: z.string().exactOptional(),
        member: z.string().exactOptional(),
        moderator: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    rules: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    throttle: z
      .object({
        count: z.int().exactOptional(),
        mode: z.string().exactOptional(),
        remaining: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    topic_count: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Group')

const NoteSchema = z
  .object({ description: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Note')

const OwnerSchema = z
  .object({
    iconfarm: z.string().exactOptional(),
    iconserver: z.string().exactOptional(),
    is_ad_free: z.boolean().exactOptional(),
    ispro: z.boolean().exactOptional(),
    location: z.string().exactOptional(),
    noindexfollow: z.boolean().exactOptional(),
    nsid: z.string().exactOptional(),
    path_alias: z.string().exactOptional(),
    realname: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Owner')

const PersonSchema = z
  .object({
    can_buy_pro: z.boolean().exactOptional(),
    cover: CoverSchema.exactOptional(),
    coverphoto: PhotoURLsSchema.exactOptional(),
    coverphoto_farm: z.string().exactOptional(),
    coverphoto_server: z.string().exactOptional(),
    description: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    disable_keyboard_shortcuts: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    expire: z.boolean().exactOptional(),
    has_stats: z.boolean().exactOptional(),
    iconfarm: z.string().exactOptional(),
    iconserver: z.string().exactOptional(),
    id: z.string().exactOptional(),
    is_ad_free: z.boolean().exactOptional(),
    ispro: z.boolean().exactOptional(),
    location: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    mbox_sha1sum: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    mobileurl: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    nsid: z.string().exactOptional(),
    path_alias: z.string().exactOptional(),
    photos: z
      .object({
        count: z
          .object({ _content: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        firstdate: z
          .object({ _content: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        firstdatetaken: z
          .object({ _content: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
        views: z
          .object({ _content: z.string().exactOptional() })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    photosurl: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    profileurl: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    realname: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    timezone: z
      .object({
        label: z.string().exactOptional(),
        offset: z.string().exactOptional(),
        timezone_id: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    unread_messages: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    user_secret: z.string().exactOptional(),
    username: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    yintl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Person')

const TagSchema = z
  .object({
    _content: z.string().exactOptional(),
    author: z.string().exactOptional(),
    authorname: z.string().exactOptional(),
    id: z.string().exactOptional(),
    machine_tag: z.boolean().exactOptional(),
    raw: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const URLSchema = z
  .object({ _content: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('URL')

const PhotoSchema = z
  .object({
    comments: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    dates: z
      .object({
        lastupdate: z.string().exactOptional(),
        posted: z.string().exactOptional(),
        taken: z.string().exactOptional(),
        takengranularity: z.string().exactOptional(),
        takenunknown: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    dateuploaded: z.string().exactOptional(),
    description: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    editability: z
      .object({ canaddmeta: z.boolean().exactOptional(), cancomment: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    farm: z.string().exactOptional(),
    id: z.string().exactOptional(),
    isfavorite: z.boolean().exactOptional(),
    license: z.string().exactOptional(),
    media: z.string().exactOptional(),
    notes: z
      .object({ note: z.array(NoteSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    originalsecret: z.string().exactOptional(),
    owner: OwnerSchema.exactOptional(),
    people: z
      .object({ haspeople: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    permissions: z
      .object({ permaddmeta: z.string().exactOptional(), permcomment: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    publiceditability: z
      .object({ canaddmeta: z.boolean().exactOptional(), cancomment: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    rotation: z.string().exactOptional(),
    safe: z.boolean().exactOptional(),
    safety_level: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    server: z.string().exactOptional(),
    tags: z
      .object({ tag: z.array(TagSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    title: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    urls: z
      .object({ url: z.array(URLSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    usage: z
      .object({
        canblog: z.boolean().exactOptional(),
        candownload: z.boolean().exactOptional(),
        canprint: z.boolean().exactOptional(),
        canshare: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    views: z.string().exactOptional(),
    visibility: z
      .object({
        isfamily: z.boolean().exactOptional(),
        isfriend: z.boolean().exactOptional(),
        ispublic: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Photo')

const SizeSchema = z
  .object({
    height: z.number().exactOptional(),
    label: z.string().exactOptional(),
    media: z.string().exactOptional(),
    source: z.string().exactOptional(),
    url: z.string().exactOptional(),
    width: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Size')

const StatSchema = z.string().openapi('Stat')

const TopicSchema = z
  .object({
    author: z.string().exactOptional(),
    author_is_deleted: z.boolean().exactOptional(),
    author_path_alias: z.string().exactOptional(),
    authorname: z.string().exactOptional(),
    can_delete: z.boolean().exactOptional(),
    can_edit: z.boolean().exactOptional(),
    can_reply: z.boolean().exactOptional(),
    count_replies: z.int().exactOptional(),
    datecreate: z.string().exactOptional(),
    datelastpost: z.string().exactOptional(),
    iconfarm: z.string().exactOptional(),
    iconserver: z.string().exactOptional(),
    id: z.string().exactOptional(),
    is_locked: z.boolean().exactOptional(),
    is_pro: z.boolean().exactOptional(),
    is_sticky: z.boolean().exactOptional(),
    last_reply: z.string().exactOptional(),
    lastedit: z.string().exactOptional(),
    message: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    role: z.string().exactOptional(),
    subject: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Topic')

const TopicReplySchema = z
  .object({
    author: z.string().exactOptional(),
    author_is_deleted: z.boolean().exactOptional(),
    author_path_alias: z.string().exactOptional(),
    authorname: z.string().exactOptional(),
    can_delete: z.boolean().exactOptional(),
    can_edit: z.boolean().exactOptional(),
    datecreate: z.string().exactOptional(),
    iconfarm: z.string().exactOptional(),
    iconserver: z.string().exactOptional(),
    id: z.string().exactOptional(),
    is_pro: z.boolean().exactOptional(),
    lastedit: z.string().exactOptional(),
    message: z
      .object({ _content: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TopicReply')

export const getOauthAccessTokenRoute = createRoute({
  method: 'get',
  path: '/oauth/access_token',
  tags: ['Public'],
  description: 'Returns an access token',
  operationId: 'getAccessToken',
  request: {
    query: z.object({
      oauth_consumer_key: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_consumer_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_nonce: z
        .string()
        .openapi({
          param: { in: 'query', name: 'oauth_nonce', required: true, schema: { type: 'string' } },
        }),
      oauth_timestamp: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_timestamp',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      oauth_signature_method: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature_method',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_version: z
        .string()
        .openapi({
          param: { in: 'query', name: 'oauth_version', required: true, schema: { type: 'string' } },
        }),
      oauth_signature: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_verifier: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_verifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_token: z
        .string()
        .openapi({
          param: { in: 'query', name: 'oauth_token', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.string() } } },
  },
})

export const getOauthRequestTokenRoute = createRoute({
  method: 'get',
  path: '/oauth/request_token',
  tags: ['Public'],
  description: 'Returns an oauth token and oauth token secret',
  operationId: 'getRequestToken',
  request: {
    query: z.object({
      oauth_consumer_key: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_consumer_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_nonce: z
        .string()
        .openapi({
          param: { in: 'query', name: 'oauth_nonce', required: true, schema: { type: 'string' } },
        }),
      oauth_timestamp: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_timestamp',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      oauth_signature_method: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature_method',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_version: z
        .string()
        .openapi({
          param: { in: 'query', name: 'oauth_version', required: true, schema: { type: 'string' } },
        }),
      oauth_signature: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_signature',
            required: true,
            schema: { type: 'string' },
          },
        }),
      oauth_callback: z
        .string()
        .regex(/^http.*$/)
        .openapi({
          param: {
            in: 'query',
            name: 'oauth_callback',
            required: true,
            schema: { pattern: '^http.*$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.string() } } },
  },
})

export const getRestMethodFlickrFavoritesGetContextRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.favorites.getContext',
  tags: ['Public'],
  description: "Returns next and previous favorites for a photo in a user's favorites",
  operationId: 'getFavoritesContextByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      user_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
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
              count: z
                .object({ _content: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              nextphoto: ContextPhotoSchema.exactOptional(),
              prevphoto: ContextPhotoSchema.exactOptional(),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrFavoritesGetListRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.favorites.getList',
  tags: ['Public'],
  description:
    "Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.",
  operationId: 'getFavoritesByPersonID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
      min_fave_date: z
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
            in: 'query',
            name: 'min_fave_date',
            schema: { type: 'number' },
            required: false,
          },
        }),
      max_fave_date: z
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
            in: 'query',
            name: 'max_fave_date',
            schema: { type: 'number' },
            required: false,
          },
        }),
      page: z
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
          param: { in: 'query', name: 'page', schema: { type: 'number' }, required: false },
        }),
      per_page: z
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
          param: { in: 'query', name: 'per_page', schema: { type: 'number' }, required: false },
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
              page: z.number().exactOptional(),
              pages: z.number().exactOptional(),
              perpage: z.number().exactOptional(),
              photos: z.array(PhotoSchema).exactOptional(),
              total: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGalleriesGetPhotosRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.galleries.getPhotos',
  tags: ['Public'],
  description: 'Returns a list of photos in a gallery.',
  operationId: 'getGalleryPhotosByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      gallery_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'gallery_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ photos: z.array(PhotoSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGroupsDiscussRepliesGetInfoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.groups.discuss.replies.getInfo',
  tags: ['Public'],
  description: 'Get information on a group topic reply',
  operationId: 'getGroupTopicRepliesByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      group_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
        }),
      topic_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'topic_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      reply_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'reply_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ reply: TopicReplySchema.exactOptional(), stat: StatSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGroupsDiscussTopicsGetInfoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.groups.discuss.topics.getInfo',
  tags: ['Public'],
  description: 'Get information about a group discussion topic',
  operationId: 'getGroupTopicByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      group_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
        }),
      topic_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'topic_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ stat: StatSchema.exactOptional(), topic: TopicSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGroupsDiscussTopicsGetListRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.groups.discuss.topics.getList',
  tags: ['Public'],
  description: 'Get a list of discussion topics in a group.',
  operationId: 'getGroupDiscussionsByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      group_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
        }),
      page: z
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
          param: { in: 'query', name: 'page', schema: { type: 'number' }, required: false },
        }),
      per_page: z
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
          param: { in: 'query', name: 'per_page', schema: { type: 'number' }, required: false },
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
              iconfarm: z.number().exactOptional(),
              iconserver: z.number().exactOptional(),
              ispoolmoderated: z.boolean().exactOptional(),
              lang: z.string().exactOptional(),
              members: z.number().exactOptional(),
              name: z.string().exactOptional(),
              page: z.number().exactOptional(),
              pages: z.number().exactOptional(),
              per_page: z.number().exactOptional(),
              privacy: z.number().exactOptional(),
              topics: z.array(TopicSchema).exactOptional(),
              total: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGroupsGetInfoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.groups.getInfo',
  tags: ['Public'],
  description: 'Get information about a group',
  operationId: 'getGroupByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      group_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
        }),
      group_path_alias: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_path_alias',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'lang', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ group: GroupSchema.exactOptional(), stat: StatSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGroupsPoolsGetContextRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.groups.pools.getContext',
  tags: ['Public'],
  description: 'Returns next and previous photos for a photo in a group pool',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      group_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
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
              count: z
                .object({ _content: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              nextphoto: ContextPhotoSchema.exactOptional(),
              prevphoto: ContextPhotoSchema.exactOptional(),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrGroupsPoolsGetPhotosRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.groups.pools.getPhotos',
  tags: ['Public'],
  description: 'Returns a list of pool photos for a given group',
  operationId: 'getGroupPhotosByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      group_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'group_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ photos: z.array(PhotoSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPeopleGetInfoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.people.getInfo',
  tags: ['Public'],
  description: 'Returns a person',
  operationId: 'getPersonByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .regex(/^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'user_id',
            required: false,
            schema: { pattern: '^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ person: PersonSchema.exactOptional(), stat: StatSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPeopleGetPhotosRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.people.getPhotos',
  tags: ['Public'],
  description: "Return photos from the given user's photostream",
  operationId: 'getMediaByPersonID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
      safe_search: z
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
          param: { in: 'query', name: 'safe_search', schema: { type: 'number' }, required: false },
        }),
      min_upload_date: z
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
            in: 'query',
            name: 'min_upload_date',
            schema: { type: 'number' },
            required: false,
          },
        }),
      max_upload_date: z
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
            in: 'query',
            name: 'max_upload_date',
            schema: { type: 'number' },
            required: false,
          },
        }),
      min_taken_date: z
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
            in: 'query',
            name: 'min_taken_date',
            schema: { type: 'number' },
            required: false,
          },
        }),
      max_taken_date: z
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
            in: 'query',
            name: 'max_taken_date',
            schema: { type: 'number' },
            required: false,
          },
        }),
      content_type: z
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
          param: { in: 'query', name: 'content_type', schema: { type: 'number' }, required: false },
        }),
      privacy_filter: z
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
            in: 'query',
            name: 'privacy_filter',
            schema: { type: 'number' },
            required: false,
          },
        }),
      page: z
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
          param: { in: 'query', name: 'page', schema: { type: 'number' }, required: false },
        }),
      per_page: z
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
          param: { in: 'query', name: 'per_page', schema: { type: 'number' }, required: false },
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
              page: z.number().exactOptional(),
              pages: z.number().exactOptional(),
              perpage: z.number().exactOptional(),
              photos: z.array(PhotoSchema).exactOptional(),
              total: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotolistGetContextRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photolist.getContext',
  tags: ['Public'],
  description: 'Returns next and previous photos in a photo list',
  operationId: 'getPhotolistContextByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      photolist_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'photolist_id', required: true, schema: { type: 'string' } },
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
              count: z
                .object({ _content: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              nextphoto: ContextPhotoSchema.exactOptional(),
              prevphoto: ContextPhotoSchema.exactOptional(),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosGetContextRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photos.getContext',
  tags: ['Public'],
  description: 'Returns next and previous photos for a photo in a photostream',
  operationId: 'getPhotostreamContextByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
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
              count: z
                .object({ _content: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              nextphoto: ContextPhotoSchema.exactOptional(),
              prevphoto: ContextPhotoSchema.exactOptional(),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosGetExifRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photos.getExif',
  tags: ['Public'],
  description:
    'Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.',
  operationId: 'getPhotoExifByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      secret: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'secret', required: false, schema: { type: 'string' } },
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
              photo: z
                .object({
                  camera: z.string().exactOptional(),
                  exif: z
                    .array(
                      z
                        .object({
                          label: z.string().exactOptional(),
                          raw: z
                            .object({ _content: z.string().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                          tag: z.string().exactOptional(),
                          tagspace: z.string().exactOptional(),
                          tagspaceid: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  farm: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                  secret: z.string().exactOptional(),
                  server: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosGetInfoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photos.getInfo',
  tags: ['Public'],
  description: 'Returns a photo',
  operationId: 'getPhotoByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'a photo',
      content: {
        'application/json': {
          schema: z
            .object({ photo: PhotoSchema.exactOptional(), stat: StatSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosGetSizesRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photos.getSizes',
  tags: ['Public'],
  description: 'Returns photo sizes',
  operationId: 'getPhotoSizesByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Photo sizes',
      content: {
        'application/json': {
          schema: z
            .object({
              sizes: z
                .object({
                  canblog: z.number().exactOptional(),
                  candownload: z.number().exactOptional(),
                  canprint: z.number().exactOptional(),
                  sizes: z.array(SizeSchema).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosLicensesGetInfoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photos.licenses.getInfo',
  tags: ['Public'],
  description: 'Fetches a list of available photo licenses for Flickr',
  operationId: 'getLicenseByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
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
              licenses: z
                .object({
                  license: z
                    .array(
                      z
                        .object({
                          id: z.int().exactOptional(),
                          name: z.string().exactOptional(),
                          url: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosSearchRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photos.search',
  tags: ['Public'],
  description: 'Return a list of photos matching some criteria.',
  operationId: 'getMediaBySearch',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.",
            in: 'query',
            name: 'text',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.',
            in: 'query',
            name: 'tags',
            schema: { type: 'string' },
            required: false,
          },
        }),
      user_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of \"me\" will search against the calling user's photos for authenticated calls.",
            in: 'query',
            name: 'user_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_upload_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.',
            in: 'query',
            name: 'min_upload_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      max_upload_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.',
            in: 'query',
            name: 'max_upload_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      min_taken_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.',
            in: 'query',
            name: 'min_taken_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      max_taken_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.',
            in: 'query',
            name: 'max_taken_date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      license: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.',
            in: 'query',
            name: 'license',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:\n  date-posted-asc,\n  date-posted-desc,\n  date-taken-asc,\n  date-taken-desc,\n  interestingness-desc,\n  interestingness-asc, and\n  relevance.\n',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      privacy_filter: z
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
            description:
              'Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,\n  1: public photos,\n  2: private photos visible to friends,\n  3: private photos visible to family,\n  4: private photos visible to friends & family,\n  5: completely private photos\n',
            in: 'query',
            name: 'privacy_filter',
            schema: { type: 'number' },
            required: false,
          },
        }),
      bbox: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.',
            in: 'query',
            name: 'bbox',
            schema: { type: 'string' },
            required: false,
          },
        }),
      accuracy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Recorded accuracy level of the location information. Current range is 1-16:\n  World level is 1\n  Country is ~3\n  Region is ~6\n  City is ~11\n  Street is ~16\n',
            in: 'query',
            name: 'accuracy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      safe_search: z
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
            description:
              'Safe search setting:\n  1: for safe,\n  2: for moderate,\n  3: for restricted\n',
            in: 'query',
            name: 'safe_search',
            schema: { type: 'number' },
            required: false,
          },
        }),
      content_type: z
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
            description:
              "Content Type setting:\n  1: photos only.\n  2: screenshots only.\n  3: 'other' only.\n  4: photos and screenshots.\n  5: screenshots and 'other'.\n  6: photos and 'other'.\n  7: photos, screenshots, and 'other' (all).\n",
            in: 'query',
            name: 'content_type',
            schema: { type: 'number' },
            required: false,
          },
        }),
      machine_tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the \'dc\' namespace : "machine_tags" => "dc:" Find photos with a title in the \'dc\' namespace : "machine_tags" => "dc:title=" Find photos titled "mr. camera" in the \'dc\' namespace : "machine_tags" => "dc:title=\\"mr. camera\\" Find photos whose value is "mr. camera" : "machine_tags" => "*:*=\\"mr. camera\\"" Find photos that have a title, in any namespace : "machine_tags" => "*:title=" Find photos that have a title, in any namespace, whose value is "mr. camera" : "machine_tags" => "*:title=\\"mr. camera\\"" Find photos, in the \'dc\' namespace whose value is "mr. camera" : "machine_tags" => "dc:*=\\"mr. camera\\"" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).\n',
            in: 'query',
            name: 'machine_tags',
            schema: { type: 'string' },
            required: false,
          },
        }),
      machine_tag_mode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.",
            in: 'query',
            name: 'machine_tag_mode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      group_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.",
            in: 'query',
            name: 'group_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      contacts: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)",
            in: 'query',
            name: 'contacts',
            schema: { type: 'string' },
            required: false,
          },
        }),
      woe_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).',
            in: 'query',
            name: 'woe_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      place_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n',
            in: 'query',
            name: 'place_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      media: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results by media type. Possible values are all (default), photos or videos',
            in: 'query',
            name: 'media',
            schema: { type: 'string' },
            required: false,
          },
        }),
      has_geo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Any photo that has been geotagged, or if the value is "0" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n',
            in: 'query',
            name: 'has_geo',
            schema: { type: 'string' },
            required: false,
          },
        }),
      geo_context: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Geo context is a numeric value representing the photo\'s geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken "indoors" or "outdoors". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n',
            in: 'query',
            name: 'geo_context',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lat: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n',
            in: 'query',
            name: 'lat',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n',
            in: 'query',
            name: 'lon',
            schema: { type: 'string' },
            required: false,
          },
        }),
      radius: z
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
            description:
              'A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).',
            in: 'query',
            name: 'radius',
            schema: { type: 'number' },
            required: false,
          },
        }),
      radius_units: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The unit of measure when doing radial geo queries. Valid options are "mi" (miles) and "km" (kilometers). The default is "km".',
            in: 'query',
            name: 'radius_units',
            schema: { type: 'string' },
            required: false,
          },
        }),
      is_commons: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.',
            in: 'query',
            name: 'is_commons',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      in_gallery: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.',
            in: 'query',
            name: 'in_gallery',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      is_getty: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the scope of the search to only photos that are for sale on Getty. Default is false.',
            in: 'query',
            name: 'is_getty',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      per_page: z
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
            description:
              'Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.',
            in: 'query',
            name: 'per_page',
            schema: { type: 'number' },
            required: false,
          },
        }),
      page: z
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
            description:
              'The page of results to return. If this argument is omitted, it defaults to 1.',
            in: 'query',
            name: 'page',
            schema: { type: 'number' },
            required: false,
          },
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
              page: z.number().exactOptional(),
              pages: z.number().exactOptional(),
              perpage: z.number().exactOptional(),
              photos: z.array(PhotoSchema).exactOptional(),
              total: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosetsGetContextRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photosets.getContext',
  tags: ['Public'],
  description: 'Returns next and previous photos for a photo in a set',
  operationId: 'getAlbumContextByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photo_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photo_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
      photoset_id: z
        .string()
        .regex(/^[0-9]+$/)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'photoset_id',
            required: false,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
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
              count: z
                .object({ _content: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              nextphoto: ContextPhotoSchema.exactOptional(),
              prevphoto: ContextPhotoSchema.exactOptional(),
              stat: StatSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosetsGetListRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photosets.getList',
  tags: ['Public'],
  description: 'Returns the albums belonging to the specified user',
  operationId: 'getAlbumsByPersonID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      user_id: z
        .string()
        .openapi({
          param: { in: 'query', name: 'user_id', required: true, schema: { type: 'string' } },
        }),
      page: z
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
          param: { in: 'query', name: 'page', schema: { type: 'number' }, required: false },
        }),
      per_page: z
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
          param: { in: 'query', name: 'per_page', schema: { type: 'number' }, required: false },
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
              page: z.number().exactOptional(),
              pages: z.number().exactOptional(),
              perpage: z.number().exactOptional(),
              photosets: z.array(AlbumSchema).exactOptional(),
              total: z.number().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrPhotosetsGetPhotosRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.photosets.getPhotos',
  tags: ['Public'],
  description: 'Returns a list of photos in an album.',
  operationId: 'getAlbumByID',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      photoset_id: z
        .string()
        .regex(/^[0-9]+$/)
        .openapi({
          param: {
            in: 'query',
            name: 'photoset_id',
            required: true,
            schema: { pattern: '^[0-9]+$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ photoset: z.array(PhotoSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getRestMethodFlickrTestEchoRoute = createRoute({
  method: 'get',
  path: '/rest?method=flickr.test.echo',
  tags: ['Public'],
  description: 'Echos the input parameters back in the response',
  operationId: 'echo',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: { in: 'query', name: 'api_key', required: true, schema: { type: 'string' } },
        }),
      echo: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'echo', required: false, schema: { type: 'string' } },
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
              echo: z
                .object({ _content: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postUploadRoute = createRoute({
  method: 'post',
  path: '/upload',
  tags: ['Public'],
  description: 'Uploads a new photo to Flickr',
  operationId: 'uploadPhoto',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              api_key: z.string(),
              content_type: z.enum(['1', '2', '3']).exactOptional(),
              description: z.string().exactOptional(),
              hidden: z.enum(['1', '2']).exactOptional(),
              is_family: z.enum(['0', '1']).exactOptional(),
              is_friend: z.enum(['0', '1']).exactOptional(),
              is_public: z.enum(['0', '1']).exactOptional(),
              photo: z.file().openapi({ type: 'string', format: 'binary' }),
              safety_level: z.enum(['1', '2', '3']).exactOptional(),
              tags: z.string().exactOptional(),
              title: z.string().exactOptional(),
            })
            .openapi({ required: ['api_key', 'photo'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})
