import { createRoute, z } from '@hono/zod-openapi'

const BulkResponseSchema = z
  .array(
    z
      .object({
        code: z
          .int()
          .exactOptional()
          .openapi({ description: 'The HTTP code that corresponds to this item' }),
        errors: z
          .object({})
          .exactOptional()
          .openapi({ description: 'A list of validation errors for this item (in case of error)' }),
        input: z
          .object({})
          .exactOptional()
          .openapi({
            description: 'The request data that belonged to this response (in case of error)',
          }),
        message: z
          .string()
          .exactOptional()
          .openapi({ description: 'A human-readable error message (in case of error)' }),
        result: z
          .object({})
          .exactOptional()
          .openapi({ description: 'The resulting created/updated object (in case of success)' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'A list of responses to your bulk input, ordered the same as your input',
  })
  .openapi('BulkResponse')

const EpisodeSchema = z.object({}).openapi('Episode')

const EpisodeVoteSchema = z
  .object({
    episode_id: z.int().exactOptional().openapi({ readOnly: true }),
    vote: z.int().min(1).max(10).exactOptional().openapi({ description: 'The vote number' }),
    voted_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Epoch timestamp for when the user voted for the episode',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('EpisodeVote')

const MarkTypeSchema = z
  .any()
  .openapi({ description: '0 for watched, 1 for acquired, 2 for skipped' })
  .openapi('MarkType')

const MarkedEpisodeSchema = z
  .object({
    _embedded: z
      .object({ episode: EpisodeSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    episode_id: z.int().exactOptional().openapi({ readOnly: true }),
    marked_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Epoch timestamp for when the user watched the episode, or 0 for unknown.',
      }),
    type: MarkTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkedEpisode')

const NetworkSchema = z.object({}).openapi('Network')

const NetworkFollowSchema = z
  .object({
    _embedded: z
      .object({ network: NetworkSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    network_id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NetworkFollow')

const PersonSchema = z.object({}).openapi('Person')

const PersonFollowSchema = z
  .object({
    _embedded: z
      .object({ person: PersonSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    person_id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersonFollow')

const ShowSchema = z.object({}).openapi('Show')

const ShowFollowSchema = z
  .object({
    _embedded: z
      .object({ show: ShowSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    show_id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShowFollow')

const ShowVoteSchema = z
  .object({
    show_id: z.int().exactOptional().openapi({ readOnly: true }),
    vote: z.int().min(1).max(10).exactOptional().openapi({ description: 'The vote number' }),
    voted_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Epoch timestamp for when the user voted for the episode',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('ShowVote')

const TagSchema = z
  .object({
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const TagInstanceSchema = z
  .object({
    _embedded: z
      .object({ show: ShowSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    show_id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TagInstance')

const WebchannelSchema = z.object({}).openapi('Webchannel')

const WebchannelFollowSchema = z
  .object({
    _embedded: z
      .object({ webchannel: WebchannelSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    webchannel_id: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebchannelFollow')

const MarkedEpisodeRequestBody = {
  content: { 'application/json': { schema: MarkedEpisodeSchema } },
}

const TagRequestBody = { content: { 'application/json': { schema: TagSchema } } }

const UsertokenSecurityScheme = { scheme: 'basic', type: 'http' }

export const postAuthPollRoute = createRoute({
  method: 'post',
  path: '/auth/poll',
  tags: ['auth'],
  summary: 'Poll whether an authentication request was confirmed',
  description:
    "Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.\n\nWhen the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.\n\nFor as long as the user did not yet confirm their authentication request, this endpoint will return a 403.\n",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The user confirmed the authentication request',
      content: {
        'application/json': {
          schema: z
            .object({
              apikey: z.string().exactOptional().openapi({ description: "The user's API key" }),
              username: z.string().exactOptional().openapi({ description: "The user's username" }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: { description: 'The authentication request was not confirmed yet' },
    404: { description: 'The authentication request was not found' },
    429: { description: 'You are polling too quickly, please back off' },
  },
})

export const postAuthStartRoute = createRoute({
  method: 'post',
  path: '/auth/start',
  tags: ['auth'],
  summary: 'Start an authentication request',
  description:
    "If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.\n\nTo get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.\n\nAlternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.\n",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .exactOptional()
                .openapi({ description: "The user's email address" }),
              email_confirmation: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({ description: 'Whether to email the user a confirmation link' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The authentication request was succesfully started',
      content: {
        'application/json': {
          schema: z
            .object({
              confirm_url: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'URL where the user can confirm the authentication request',
                }),
              token: z
                .string()
                .exactOptional()
                .openapi({ description: 'Authentication token to use in the `poll` endpoint' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'The email address was found, but not confirmed' },
    404: { description: 'The email address was not found' },
    429: { description: 'You are starting authentication requests too quickly, please back off' },
  },
})

export const getAuthValidateRoute = createRoute({
  method: 'get',
  path: '/auth/validate',
  tags: ['auth'],
  summary: 'Validate your authentication credentials',
  description:
    "If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.",
  responses: {
    200: {
      description: 'The supplied credentials are valid',
      content: {
        'application/json': {
          schema: z
            .object({
              premium: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    "The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none",
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: { description: 'The supplied credentials are not valid' },
  },
})

export const postScrobbleEpisodesRoute = createRoute({
  method: 'post',
  path: '/scrobble/episodes',
  tags: ['scrobbling'],
  summary: 'Mark episodes as acquired or watched based on their IDs',
  description: 'This endpoint can be used by all users, even without premium',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                episode_id: z
                  .int()
                  .exactOptional()
                  .openapi({ description: 'The TVmaze episode ID' }),
                marked_at: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'Epoch timestamp for when the user watched the episode, or 0 for unknown.',
                  }),
                type: MarkTypeSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'All episodes were succesfully marked',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    207: {
      description: 'Some episodes were succesfully marked, but there are errors',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    422: {
      description: 'None of the episodes were succesfully marked',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
  },
})

export const putScrobbleEpisodesEpisodeIdRoute = createRoute({
  method: 'put',
  path: '/scrobble/episodes/{episode_id}',
  tags: ['scrobbling'],
  summary: 'Mark an episode as acquired or watched based on its ID',
  description: 'This endpoint can be used by all users, even without premium',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: MarkedEpisodeRequestBody,
  },
  responses: {
    200: {
      description: 'this episode is now marked',
      content: { 'application/json': { schema: MarkedEpisodeSchema } },
    },
    404: { description: 'this episode does not exist' },
    422: { description: 'invalid input data' },
  },
})

export const postScrobbleShowsRoute = createRoute({
  method: 'post',
  path: '/scrobble/shows',
  tags: ['scrobbling'],
  summary: 'Mark episodes within a show as acquired or watched based on their attributes',
  description:
    'To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.\n\nThis endpoint can be used by all users, even without premium.\n',
  request: {
    query: z.object({
      tvmaze_id: z
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
            description: "The show's TVmaze ID",
            in: 'query',
            name: 'tvmaze_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      thetvdb_id: z
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
            description: "The show's TheTVDB ID",
            in: 'query',
            name: 'thetvdb_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      imdb_id: z
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
            description: "The show's IMDB ID",
            in: 'query',
            name: 'imdb_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                airdate: z.iso
                  .date()
                  .exactOptional()
                  .openapi({ description: 'The episode airdate' }),
                episode: z.int().exactOptional().openapi({ description: 'The episode number' }),
                marked_at: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      'Epoch timestamp for when the user watched the episode, or 0 for unknown.',
                  }),
                season: z.int().exactOptional().openapi({ description: 'The season number' }),
                type: MarkTypeSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'All episodes were succesfully marked',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    207: {
      description: 'Some episodes were succesfully marked, but there are errors',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    422: {
      description: 'None of the episodes were succesfully marked',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
  },
})

export const getScrobbleShowsShowIdRoute = createRoute({
  method: 'get',
  path: '/scrobble/shows/{show_id}',
  tags: ['scrobbling'],
  summary: 'List watched and acquired episodes for a show',
  description: 'This endpoint can be used by all users, even without premium',
  request: {
    params: z.object({
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
        .openapi({
          param: {
            description: 'ID of the target show',
            in: 'path',
            name: 'show_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      embed: z
        .literal('episode')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full episode info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['episode'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of marked episodes',
      content: { 'application/json': { schema: z.array(MarkedEpisodeSchema) } },
    },
  },
})

export const getUserEpisodesRoute = createRoute({
  method: 'get',
  path: '/user/episodes',
  tags: ['marked episodes'],
  summary: 'List the marked episodes',
  request: {
    query: z.object({
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
            description: 'Only return episodes from this specific show',
            in: 'query',
            name: 'show_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of marked episodes',
      content: { 'application/json': { schema: z.array(MarkedEpisodeSchema) } },
    },
  },
})

export const getUserEpisodesEpisodeIdRoute = createRoute({
  method: 'get',
  path: '/user/episodes/{episode_id}',
  tags: ['marked episodes'],
  summary: 'Check if an episode is marked',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The marked episode',
      content: { 'application/json': { schema: MarkedEpisodeSchema } },
    },
    404: { description: 'This episode is not marked' },
  },
})

export const putUserEpisodesEpisodeIdRoute = createRoute({
  method: 'put',
  path: '/user/episodes/{episode_id}',
  tags: ['marked episodes'],
  summary: 'Mark an episode',
  description: 'Set `marked_at` to `NULL` or leave it out to use the current time.',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: MarkedEpisodeRequestBody,
  },
  responses: {
    200: {
      description: 'this episode is now marked',
      content: { 'application/json': { schema: MarkedEpisodeSchema } },
    },
    404: { description: 'this episode does not exist' },
    422: { description: 'invalid input data' },
  },
})

export const deleteUserEpisodesEpisodeIdRoute = createRoute({
  method: 'delete',
  path: '/user/episodes/{episode_id}',
  tags: ['marked episodes'],
  summary: 'Unmark an episode',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'the episode is now unmarked' },
    404: { description: 'this episode was not marked' },
  },
})

export const getUserFollowsNetworksRoute = createRoute({
  method: 'get',
  path: '/user/follows/networks',
  tags: ['followed networks'],
  summary: 'List the followed networks',
  request: {
    query: z.object({
      embed: z
        .literal('network')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full network info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['network'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of followed networks',
      content: { 'application/json': { schema: z.array(NetworkFollowSchema) } },
    },
  },
})

export const getUserFollowsNetworksNetworkIdRoute = createRoute({
  method: 'get',
  path: '/user/follows/networks/{network_id}',
  tags: ['followed networks'],
  summary: 'Check if a network is followed',
  request: {
    params: z.object({
      network_id: z
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
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The followed network',
      content: { 'application/json': { schema: NetworkFollowSchema } },
    },
    404: { description: 'this network is not followed' },
  },
})

export const putUserFollowsNetworksNetworkIdRoute = createRoute({
  method: 'put',
  path: '/user/follows/networks/{network_id}',
  tags: ['followed networks'],
  summary: 'Follow a network',
  request: {
    params: z.object({
      network_id: z
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
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'this network is now followed',
      content: { 'application/json': { schema: NetworkFollowSchema } },
    },
    404: { description: 'this network does not exist' },
  },
})

export const deleteUserFollowsNetworksNetworkIdRoute = createRoute({
  method: 'delete',
  path: '/user/follows/networks/{network_id}',
  tags: ['followed networks'],
  summary: 'Unfollow a network',
  request: {
    params: z.object({
      network_id: z
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
          param: { in: 'path', name: 'network_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'the network is now unfollowed' },
    404: { description: 'this network was not followed' },
  },
})

export const getUserFollowsPeopleRoute = createRoute({
  method: 'get',
  path: '/user/follows/people',
  tags: ['followed people'],
  summary: 'List the followed people',
  request: {
    query: z.object({
      embed: z
        .literal('person')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full person info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['person'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of followed people',
      content: { 'application/json': { schema: z.array(PersonFollowSchema) } },
    },
  },
})

export const getUserFollowsPeoplePersonIdRoute = createRoute({
  method: 'get',
  path: '/user/follows/people/{person_id}',
  tags: ['followed people'],
  summary: 'Check if a person is followed',
  request: {
    params: z.object({
      person_id: z
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
          param: { in: 'path', name: 'person_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The followed person',
      content: { 'application/json': { schema: PersonFollowSchema } },
    },
    404: { description: 'this person is not followed' },
  },
})

export const putUserFollowsPeoplePersonIdRoute = createRoute({
  method: 'put',
  path: '/user/follows/people/{person_id}',
  tags: ['followed people'],
  summary: 'Follow a person',
  request: {
    params: z.object({
      person_id: z
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
          param: { in: 'path', name: 'person_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'this person is now followed',
      content: { 'application/json': { schema: PersonFollowSchema } },
    },
    404: { description: 'this person does not exist' },
  },
})

export const deleteUserFollowsPeoplePersonIdRoute = createRoute({
  method: 'delete',
  path: '/user/follows/people/{person_id}',
  tags: ['followed people'],
  summary: 'Unfollow a person',
  request: {
    params: z.object({
      person_id: z
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
          param: { in: 'path', name: 'person_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'the person is now unfollowed' },
    404: { description: 'this person was not followed' },
  },
})

export const getUserFollowsShowsRoute = createRoute({
  method: 'get',
  path: '/user/follows/shows',
  tags: ['followed shows'],
  summary: 'List the followed shows',
  request: {
    query: z.object({
      embed: z
        .literal('show')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full show info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['show'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of followed shows',
      content: { 'application/json': { schema: z.array(ShowFollowSchema) } },
    },
  },
})

export const getUserFollowsShowsShowIdRoute = createRoute({
  method: 'get',
  path: '/user/follows/shows/{show_id}',
  tags: ['followed shows'],
  summary: 'Check if a show is followed',
  request: {
    params: z.object({
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The followed show',
      content: { 'application/json': { schema: ShowFollowSchema } },
    },
    404: { description: 'This show is not followed' },
  },
})

export const putUserFollowsShowsShowIdRoute = createRoute({
  method: 'put',
  path: '/user/follows/shows/{show_id}',
  tags: ['followed shows'],
  summary: 'Follow a show',
  request: {
    params: z.object({
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'This show is now followed',
      content: { 'application/json': { schema: ShowFollowSchema } },
    },
    404: { description: 'This show does not exist' },
  },
})

export const deleteUserFollowsShowsShowIdRoute = createRoute({
  method: 'delete',
  path: '/user/follows/shows/{show_id}',
  tags: ['followed shows'],
  summary: 'Unfollow a show',
  request: {
    params: z.object({
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'The show is now unfollowed' },
    404: { description: 'This show was not followed' },
  },
})

export const getUserFollowsWebchannelsRoute = createRoute({
  method: 'get',
  path: '/user/follows/webchannels',
  tags: ['followed webchannels'],
  summary: 'List the followed webchannels',
  request: {
    query: z.object({
      embed: z
        .literal('webchannel')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full webchannel info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['webchannel'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of followed webchannels',
      content: { 'application/json': { schema: z.array(WebchannelFollowSchema) } },
    },
  },
})

export const getUserFollowsWebchannelsWebchannelIdRoute = createRoute({
  method: 'get',
  path: '/user/follows/webchannels/{webchannel_id}',
  tags: ['followed webchannels'],
  summary: 'Check if a webchannel is followed',
  request: {
    params: z.object({
      webchannel_id: z
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
          param: { in: 'path', name: 'webchannel_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The followed webchannel',
      content: { 'application/json': { schema: WebchannelFollowSchema } },
    },
    404: { description: 'this webchannel is not followed' },
  },
})

export const putUserFollowsWebchannelsWebchannelIdRoute = createRoute({
  method: 'put',
  path: '/user/follows/webchannels/{webchannel_id}',
  tags: ['followed webchannels'],
  summary: 'Follow a webchannel',
  request: {
    params: z.object({
      webchannel_id: z
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
          param: { in: 'path', name: 'webchannel_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'this webchannel is now followed',
      content: { 'application/json': { schema: WebchannelFollowSchema } },
    },
    404: { description: 'this webchannel does not exist' },
  },
})

export const deleteUserFollowsWebchannelsWebchannelIdRoute = createRoute({
  method: 'delete',
  path: '/user/follows/webchannels/{webchannel_id}',
  tags: ['followed webchannels'],
  summary: 'Unfollow a webchannel',
  request: {
    params: z.object({
      webchannel_id: z
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
          param: { in: 'path', name: 'webchannel_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'the webchannel is now unfollowed' },
    404: { description: 'this webchannel was not followed' },
  },
})

export const getUserTagsRoute = createRoute({
  method: 'get',
  path: '/user/tags',
  tags: ['tagged shows'],
  summary: 'List all tags',
  responses: {
    200: {
      description: 'An array of tags',
      content: { 'application/json': { schema: z.array(TagSchema) } },
    },
  },
})

export const postUserTagsRoute = createRoute({
  method: 'post',
  path: '/user/tags',
  tags: ['tagged shows'],
  summary: 'Create a new tag',
  request: { body: TagRequestBody },
  responses: {
    200: {
      description: 'The newly created tag',
      content: { 'application/json': { schema: TagSchema } },
    },
    422: { description: 'invalid input data' },
  },
})

export const deleteUserTagsTagIdRoute = createRoute({
  method: 'delete',
  path: '/user/tags/{tag_id}',
  tags: ['tagged shows'],
  summary: 'Delete a specific tag',
  request: {
    params: z.object({
      tag_id: z
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
          param: { in: 'path', name: 'tag_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'The tag was deleted' },
    404: { description: 'The tag does not exist' },
  },
})

export const patchUserTagsTagIdRoute = createRoute({
  method: 'patch',
  path: '/user/tags/{tag_id}',
  tags: ['tagged shows'],
  summary: 'Update a specific tag',
  request: {
    params: z.object({
      tag_id: z
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
          param: { in: 'path', name: 'tag_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: TagRequestBody,
  },
  responses: {
    200: {
      description: 'The tag was updated',
      content: { 'application/json': { schema: TagSchema } },
    },
    404: { description: 'The tag does not exist' },
    422: { description: 'The tag could not be updated' },
  },
})

export const getUserTagsTagIdShowsRoute = createRoute({
  method: 'get',
  path: '/user/tags/{tag_id}/shows',
  tags: ['tagged shows'],
  summary: 'List all shows under this tag',
  request: {
    params: z.object({
      tag_id: z
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
          param: { in: 'path', name: 'tag_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      embed: z
        .literal('show')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full show info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['show'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of tagged shows',
      content: { 'application/json': { schema: z.array(TagInstanceSchema) } },
    },
    404: { description: 'The tag does not exist' },
  },
})

export const putUserTagsTagIdShowsShowIdRoute = createRoute({
  method: 'put',
  path: '/user/tags/{tag_id}/shows/{show_id}',
  tags: ['tagged shows'],
  summary: 'Tag a show',
  request: {
    params: z.object({
      tag_id: z
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
          param: { in: 'path', name: 'tag_id', required: true, schema: { type: 'integer' } },
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The show was tagged',
      content: { 'application/json': { schema: TagInstanceSchema } },
    },
    404: { description: 'The show or tag does not exist' },
  },
})

export const deleteUserTagsTagIdShowsShowIdRoute = createRoute({
  method: 'delete',
  path: '/user/tags/{tag_id}/shows/{show_id}',
  tags: ['tagged shows'],
  summary: 'Untag a show',
  request: {
    params: z.object({
      tag_id: z
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
          param: { in: 'path', name: 'tag_id', required: true, schema: { type: 'integer' } },
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'The show was untagged' },
    404: { description: 'The show was not tagged' },
  },
})

export const getUserVotesEpisodesRoute = createRoute({
  method: 'get',
  path: '/user/votes/episodes',
  tags: ['voted episodes'],
  summary: 'List the episodes voted for',
  responses: {
    200: {
      description: 'An array of episode votes',
      content: { 'application/json': { schema: z.array(EpisodeVoteSchema) } },
    },
  },
})

export const getUserVotesEpisodesEpisodeIdRoute = createRoute({
  method: 'get',
  path: '/user/votes/episodes/{episode_id}',
  tags: ['voted episodes'],
  summary: 'Check if an episode is voted for',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The episode vote',
      content: { 'application/json': { schema: EpisodeVoteSchema } },
    },
    404: { description: 'This episode is not voted for' },
  },
})

export const putUserVotesEpisodesEpisodeIdRoute = createRoute({
  method: 'put',
  path: '/user/votes/episodes/{episode_id}',
  tags: ['voted episodes'],
  summary: 'Vote for an episode',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: EpisodeVoteSchema } } },
  },
  responses: {
    200: {
      description: 'This episode is now voted for',
      content: { 'application/json': { schema: EpisodeVoteSchema } },
    },
    404: { description: 'This episode does not exist' },
    422: { description: 'Invalid vote' },
  },
})

export const deleteUserVotesEpisodesEpisodeIdRoute = createRoute({
  method: 'delete',
  path: '/user/votes/episodes/{episode_id}',
  tags: ['voted episodes'],
  summary: 'Remove an episode vote',
  request: {
    params: z.object({
      episode_id: z
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
          param: { in: 'path', name: 'episode_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'The episode vote is now removed' },
    404: { description: 'This episode was not voted for' },
  },
})

export const getUserVotesShowsRoute = createRoute({
  method: 'get',
  path: '/user/votes/shows',
  tags: ['voted shows'],
  summary: 'List the shows voted for',
  request: {
    query: z.object({
      embed: z
        .literal('show')
        .exactOptional()
        .openapi({
          param: {
            description: 'Embed full show info',
            in: 'query',
            name: 'embed',
            required: false,
            schema: { enum: ['show'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of show votes',
      content: { 'application/json': { schema: z.array(ShowVoteSchema) } },
    },
  },
})

export const getUserVotesShowsShowIdRoute = createRoute({
  method: 'get',
  path: '/user/votes/shows/{show_id}',
  tags: ['voted shows'],
  summary: 'Check if a show is voted for',
  request: {
    params: z.object({
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The show vote',
      content: { 'application/json': { schema: ShowVoteSchema } },
    },
    404: { description: 'This show is not voted for' },
  },
})

export const putUserVotesShowsShowIdRoute = createRoute({
  method: 'put',
  path: '/user/votes/shows/{show_id}',
  tags: ['voted shows'],
  summary: 'Vote for a show',
  description: 'Set `voted_at` to `NULL` or leave it out to use the current time.',
  request: {
    params: z.object({
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ShowVoteSchema } } },
  },
  responses: {
    200: {
      description: 'This show is now voted for',
      content: { 'application/json': { schema: ShowVoteSchema } },
    },
    404: { description: 'This show does not exist' },
    422: { description: 'Invalid vote' },
  },
})

export const deleteUserVotesShowsShowIdRoute = createRoute({
  method: 'delete',
  path: '/user/votes/shows/{show_id}',
  tags: ['voted shows'],
  summary: 'Remove a show vote',
  request: {
    params: z.object({
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
        .openapi({
          param: { in: 'path', name: 'show_id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: { description: 'The show vote is now removed' },
    404: { description: 'This show was not voted for' },
  },
})
