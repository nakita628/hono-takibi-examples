import { createRoute, z } from '@hono/zod-openapi'

const LinkSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Link')

const PaginationSchema = z
  .object({
    currentPage: z.int().exactOptional(),
    pageCount: z.int().exactOptional(),
    perPage: z.int().exactOptional(),
    totalCount: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const BaseIndexResponseSchema = z
  .object({
    _links: z
      .object({ self: LinkSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    _meta: PaginationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BaseIndexResponse')

const ErrorSchema = z
  .object({
    code: z.int().exactOptional(),
    message: z.string().exactOptional(),
    name: z.string().exactOptional(),
    status: z.int().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const PersonaSchema = z
  .object({
    _links: z
      .object({ self: LinkSchema.exactOptional(), shows: z.array(LinkSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    bio: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HTML-formatted biography',
        example:
          "<p>Besides DJ'ing industrial and experimental music since 1991, Deftly has performed in industrial ...",
      }),
    email: z
      .email()
      .exactOptional()
      .openapi({ description: "DJ/host's email address", example: 'example@spinitron.com' }),
    id: z.int().exactOptional().openapi({ example: 2832 }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://spinitron.com/images/Persona/28/2832-img_profile-original.jpg',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'On-air DJ/host name', example: 'Deftly-D' }),
    since: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Since what year has the DJ/host been at the station?',
        example: 1991,
      }),
    website: z
      .url()
      .exactOptional()
      .openapi({
        description: 'URL to web site for the DJ/host',
        example: 'https://spinitron.com/example/doesnt/exist',
      }),
  })
  .openapi({
    description:
      'The `Persona` object describes a radio DJ/host. One person can have multiple personas',
    required: [],
  })
  .openapi('Persona')

const PlaylistSchema = z
  .object({
    _links: z
      .object({
        persona: LinkSchema.exactOptional(),
        self: LinkSchema.exactOptional(),
        show: LinkSchema.exactOptional(),
        spins: LinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    automation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Was the playlist created playlists created by a radio station automation system?',
        example: false,
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Program/show category', example: 'Music' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HTML-formatted description of the playlist or program/show',
        example: 'It is a <em>cross-­cultural musical journey united in voices and rhythms</em>.',
      }),
    duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Duration in seconds', example: 3600 }),
    end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC datetime ISO-8601', example: '2018-03-30T14:00:00+0000' }),
    episode_description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HTML-formatted description of the episode',
        example: '<p>Episode description</p>',
      }),
    episode_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of this episode of the program/show' }),
    hide_dj: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Should the client application hide information about the playlist's DJ/host?",
        example: false,
      }),
    id: z.int().exactOptional().openapi({ example: 219992 }),
    image: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://spinitron.com/images/Show/44/4498/img_show-original.jpg' }),
    persona_id: z.int().exactOptional().openapi({ example: 2832 }),
    show_id: z.int().exactOptional().openapi({ example: 4498 }),
    since: z
      .int()
      .exactOptional()
      .openapi({ description: 'Since what year has the program/show existed?', example: 1999 }),
    start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC datetime ISO-8601', example: '2018-03-30T13:00:00+0000' }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: "Station's time zone", example: 'America/Chicago' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Program/show title', example: 'Transworld Airwaves' }),
    url: z
      .url()
      .exactOptional()
      .openapi({ description: 'URL to web site for the playlist or program/show' }),
  })
  .openapi({ required: [] })
  .openapi('Playlist')

const ShowSchema = z
  .object({
    _links: z
      .object({
        personas: z.array(LinkSchema).exactOptional(),
        playlists: LinkSchema.exactOptional(),
        self: LinkSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'Program/show category', example: 'Music' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HTML-formatted description of the playlist or program/show',
        example:
          '<p>Since 2001, <strong>The High Voltage Circumcision</strong> show has delivered a full spectrum barrage of dark hard and experimental music from industrial to noise to idm to ebm to bizarre to audio collage often with a side of live guests, social consciousness, interviews, twisted humor, studio experiments and left turns.</p>',
      }),
    duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Duration in seconds', example: 10800 }),
    end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC datetime ISO-8601', example: '2018-04-03T02:00:00+0000' }),
    hide_dj: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Should the client application hide information about the show's DJs/hosts?",
        example: false,
      }),
    id: z.int().exactOptional().openapi({ example: 4498 }),
    image: z
      .url()
      .exactOptional()
      .openapi({ example: 'https://spinitron.com/images/Show/44/4498/img_show-original.jpg' }),
    one_off: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is the show a one-off in the schedule instead of repeating?',
        example: false,
      }),
    since: z
      .int()
      .exactOptional()
      .openapi({ description: 'Since what year has the program/show existed?', example: 2001 }),
    start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC datetime ISO-8601', example: '2018-04-02T23:00:00+0000' }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: "Station's time zone", example: 'America/Chicago' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Program/show title',
        example: 'Voidstar Productions’ High Voltage Circumcision Show',
      }),
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'URL to web site for the program/show',
        example: 'https://spinitron.com/example/doesnt/exist',
      }),
  })
  .openapi({
    description:
      'A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.',
    required: [],
  })
  .openapi('Show')

const SpinSchema = z
  .object({
    _links: z
      .object({ playlist: LinkSchema.exactOptional(), self: LinkSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    artist: z.string().exactOptional().openapi({ example: 'The Beatles' }),
    'artist-custom': z
      .string()
      .exactOptional()
      .openapi({ description: "Station-specific custom field relating to the song's artist" }),
    'catalog-number': z
      .string()
      .exactOptional()
      .openapi({
        description: "Reference number in the record label's catalog",
        example: '5C 006-04982',
      }),
    classical: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Is the track\'s metadata schema "classical" rather than "popular"?',
        example: false,
      }),
    composer: z.string().exactOptional().openapi({ example: 'Lennon - McCartney' }),
    conductor: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For classical music, conducor of the ensemble',
        example: 'Herbert von Karajan',
      }),
    duration: z.int().exactOptional().openapi({ description: 'Duration in seconds', example: 199 }),
    end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC datetime ISO-8601', example: '2018-03-30T13:10:25+0000' }),
    ensemble: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For classical music, orchestra, performing ensemble, choir, etc.',
        example: 'Vienna Philharmonic Orchestra',
      }),
    genre: z.string().exactOptional().openapi({ example: 'Pop' }),
    id: z.int().exactOptional().openapi({ example: 8017277 }),
    image: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Cover art',
        example:
          'https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/ef/e8/67/efe8674e-467a-adfe-9f67-8d50860b4f1e/dj.sokyjuyt.jpg/170x170bb.jpg',
      }),
    isrc: z.string().exactOptional().openapi({ example: 'GBAYE9901218' }),
    iswc: z.string().exactOptional().openapi({ example: 'T-010.434.166-3' }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Record label, i.e. publisher of the sound recording',
        example: 'Apple Records',
      }),
    'label-custom': z
      .string()
      .exactOptional()
      .openapi({ description: 'Station-specific custom field relating to the record label' }),
    local: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the artist local to the station?', example: false }),
    medium: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Media format in which the sound recording was reased',
        example: '7"',
      }),
    new: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is this a recent release?', example: false }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HTML-formatted DJ annotation of the spin, can include images etc.',
        example: 'B-side of the <strong>original</strong> 7" vinyl in the station\'s collection.',
      }),
    performers: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For classical music, featured performing artists, e.g. soloists',
        example: 'Rohan DeSaram (cello), Marianne Schroeder (piano)',
      }),
    playlist_id: z.int().exactOptional().openapi({ example: 336722 }),
    release: z.string().exactOptional().openapi({ example: 'All Together Now / Hey Bulldog' }),
    'release-custom': z
      .string()
      .exactOptional()
      .openapi({ description: 'Station-specific custom field relating to the release' }),
    released: z
      .int()
      .exactOptional()
      .openapi({ description: 'Year of initial release', example: 1972 }),
    request: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Was the spin requested by a listener?', example: false }),
    song: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the song or track', example: 'Hey Bulldog' }),
    start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC datetime ISO-8601', example: '2018-03-30T13:07:08+0000' }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: "Station's time zone", example: 'America/Chicago' }),
    upc: z
      .string()
      .exactOptional()
      .openapi({ description: 'Universal Product Code of the release', example: '4006408126775' }),
    va: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is it a "Various Artists" release?', example: false }),
    work: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For classical music, the main compositional work the track (see `song` field) belongs to',
        example: 'The Marriage of Figaro',
      }),
  })
  .openapi({ required: [] })
  .openapi('Spin')

const ValidationErrorSchema = z
  .object({ field: z.string().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ValidationError')

const ExpandParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'Allows to select extra fields',
      in: 'query',
      name: 'expand',
      schema: { items: { type: 'string' }, type: 'array' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      description: 'Allows to select only needed fields',
      in: 'query',
      name: 'fields',
      schema: { items: { type: 'string' }, type: 'array' },
      required: false,
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Amount of items to return',
      in: 'query',
      name: 'count',
      schema: { default: 20, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const PageParamsSchema = z
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
      description: 'Offset, used together with count',
      in: 'query',
      name: 'page',
      schema: { minimum: 1, type: 'integer' },
      required: false,
    },
  })

const AccessTokenSecurityScheme = { in: 'query', name: 'access-token', type: 'apiKey' }

const HttpBearerSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getPersonasRoute = createRoute({
  method: 'get',
  path: '/personas',
  tags: ['Persona'],
  summary: 'Get Personas',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by Persona name',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: LimitParamsSchema,
      page: PageParamsSchema,
      fields: FieldsParamsSchema,
      expand: ExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The personas',
      content: {
        'application/json': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(PersonaSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(PersonaSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getPersonasIdRoute = createRoute({
  method: 'get',
  path: '/personas/{id}',
  tags: ['Persona'],
  summary: 'Get Persona by id',
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
    query: z.object({ fields: FieldsParamsSchema, expand: ExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'The Persona',
      content: {
        'application/json': { schema: PersonaSchema },
        'application/xml': { schema: PersonaSchema },
      },
    },
    404: {
      description: 'Persona not found',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getPlaylistsRoute = createRoute({
  method: 'get',
  path: '/playlists',
  tags: ['Playlist'],
  summary: 'Returns playlists optionally filtered by {start} and/or {end} datetimes',
  description:
    'Get Playlists optionally filtered by a datetime range.\nOnly past Playlists will be returned (with allowed tolerance equals 1 hour in future).\n\nOrdered chronologically from newest to oldest.\n',
  request: {
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The datetime starting from items must be returned. Maximum 1 hour in future.\n',
            in: 'query',
            name: 'start',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'The ending datetime. Maximum 1 hour in future.\n',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      show_id: z
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
            description: 'Filter by show',
            in: 'query',
            name: 'show_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      persona_id: z
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
            description: 'Filter by persona',
            in: 'query',
            name: 'persona_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      count: LimitParamsSchema,
      page: PageParamsSchema,
      fields: FieldsParamsSchema,
      expand: ExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The playlists',
      content: {
        'application/json': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(PlaylistSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(PlaylistSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const getPlaylistsIdRoute = createRoute({
  method: 'get',
  path: '/playlists/{id}',
  tags: ['Playlist'],
  summary: 'Get a Playlist by id',
  description:
    'The response object represents the playlist specified by {id}.\n\nStatus 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).\n',
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
    query: z.object({ fields: FieldsParamsSchema, expand: ExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'The playlist',
      content: {
        'application/json': { schema: PlaylistSchema },
        'application/xml': { schema: PlaylistSchema },
      },
    },
    404: {
      description: 'Playlist not found or is in the future',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getShowsRoute = createRoute({
  method: 'get',
  path: '/shows',
  tags: ['Show'],
  summary: 'Returns scheduled shows optionally filtered by {start} and/or {end} datetimes',
  description:
    "**Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,\neach of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.\nThus scheduled shows have occurences that, for example, may be displayed in a calendar.\n\nIn the response, `items` is an array of objects representing occurences of scheduled shows.\n\nYou may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}\nparameters, both of which must be no more than one hour in the past. An occurence starting at {end} is\nincluded in the reponse.\n\n`itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before\n{start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}\nis included.\n\nIf the request omits the {start} parameter, the server sets its value to the current time so that the filter\nrange's start is always defined. If the request specifies {end} then the requested range is *bounded*,\notherwise it is *unbounded*.\n\nFor a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only\ndifference between objects in `items` representing a given show will be the `start` field value.\n\nFor an unbounded request, `items` includes *only one* occurence per show, specifically, the\nnext occurrence after {start} of all shows occuring after {start}.\n\nUse an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda\nof shows expanded into occurrences by thir shedules and repetitions.\n\nObjects in `items` are ordered first by `datetime` and then by `id`.\n",
  request: {
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'The datetime starting from items must be returned. Maximum 1 hour in past.\n',
            in: 'query',
            name: 'start',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'The ending datetime. Maximum 1 hour in past.\n',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      count: LimitParamsSchema,
      page: PageParamsSchema,
      fields: FieldsParamsSchema,
      expand: ExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The shows',
      content: {
        'application/json': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(ShowSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(ShowSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
    422: {
      description: 'Invalid datetimes in filter: either too old or {end} is less than {start}.\n',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getShowsIdRoute = createRoute({
  method: 'get',
  path: '/shows/{id}',
  tags: ['Show'],
  summary: 'Get a Show by id',
  description:
    'The response object represents the next occurence of the show specified by {id}.\n\nStatus 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.\n',
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
    query: z.object({ fields: FieldsParamsSchema, expand: ExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'The Show',
      content: {
        'application/json': { schema: ShowSchema },
        'application/xml': { schema: ShowSchema },
      },
    },
    404: {
      description: 'Show not found or too old',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getSpinsRoute = createRoute({
  method: 'get',
  path: '/spins',
  tags: ['Spin'],
  summary: 'Returns spins optionally filtered by {start} and/or {end} datetimes',
  description:
    'Get Spins optionally filtered by a datetime range. Only past Spins will be returned.\n',
  request: {
    query: z.object({
      start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'The datetime starting from items must be returned.\n',
            in: 'query',
            name: 'start',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'The ending datetime.\n',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      playlist_id: z
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
            description: 'Filter by playlist',
            in: 'query',
            name: 'playlist_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      show_id: z
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
            description: 'Filter by show',
            in: 'query',
            name: 'show_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      count: LimitParamsSchema,
      page: PageParamsSchema,
      fields: FieldsParamsSchema,
      expand: ExpandParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The spins',
      content: {
        'application/json': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(SpinSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
        'application/xml': {
          schema: BaseIndexResponseSchema.and(
            z.object({ items: z.array(SpinSchema).exactOptional() }).openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postSpinsRoute = createRoute({
  method: 'post',
  path: '/spins',
  tags: ['Spin'],
  summary: 'Log a Spin',
  description: 'An endpoint for automation systems to log spins into the spin table.',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              artist: z.string(),
              composer: z.string().exactOptional(),
              duration: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              genre: z.string().exactOptional(),
              isrc: z.string().exactOptional(),
              label: z.string().exactOptional(),
              live: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Only when automation params are configured with the "Pass through" mode.\nEnables "live assist" mode. Default mode is "full automation".\n',
                }),
              release: z.string().exactOptional(),
              song: z.string(),
              start: z.iso.datetime({ offset: true }).exactOptional(),
            })
            .openapi({ required: ['artist', 'song'] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'The new created Spin.',
      content: {
        'application/json': { schema: SpinSchema },
        'application/xml': { schema: SpinSchema },
      },
    },
    422: {
      description: 'Validation failed.',
      content: {
        'application/json': { schema: z.array(ValidationErrorSchema) },
        'application/xml': { schema: z.array(ValidationErrorSchema) },
      },
    },
    default: {
      description: 'Failed to create the object for unknown reason.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getSpinsIdRoute = createRoute({
  method: 'get',
  path: '/spins/{id}',
  tags: ['Spin'],
  summary: 'Get a Spin by id',
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
    query: z.object({ fields: FieldsParamsSchema, expand: ExpandParamsSchema }),
  },
  responses: {
    200: {
      description: 'The spin',
      content: {
        'application/json': { schema: SpinSchema },
        'application/xml': { schema: SpinSchema },
      },
    },
    404: {
      description: 'Spin not found',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
      },
    },
  },
})
