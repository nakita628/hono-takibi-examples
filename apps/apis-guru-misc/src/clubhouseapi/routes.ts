import { createRoute, z } from '@hono/zod-openapi'

export const postCallPhoneNumberAuthRoute = createRoute({
  method: 'post',
  path: '/call_phone_number_auth',
  summary: 'Call phone number auth.',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({}), examples: { jsonObject: { value: {} } } },
      },
    },
  },
  responses: { 200: { description: 'success', content: {} } },
})

export const getCheckForUpdateRoute = createRoute({
  method: 'get',
  path: '/check_for_update',
  summary:
    'Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)',
  request: {
    query: z.object({
      is_testflight: z
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
            example: 1,
            in: 'query',
            name: 'is_testflight',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'successful response', content: {} } },
})

export const postCheckWaitlistStatusRoute = createRoute({
  method: 'post',
  path: '/check_waitlist_status',
  summary: 'checks waitlist status.',
  responses: {
    200: { description: 'got waitlist status', content: {} },
    401: { description: 'authorization not provided', content: {} },
  },
})

export const postCompletePhoneNumberAuthRoute = createRoute({
  method: 'post',
  path: '/complete_phone_number_auth',
  summary: 'Call phone number auth.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            jsonObject: { value: { phone_number: '+1234567890', verification_code: '1234' } },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'success', content: {} } },
})

export const postCreateChannelRoute = createRoute({
  method: 'post',
  path: '/create_channel',
  summary: 'creates a channel',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            openNoTopic: {
              value: {
                club_id: null,
                event_id: null,
                is_private: false,
                is_social_mode: false,
                topic: null,
                user_ids: [],
              },
            },
            socialWithTopic: {
              value: {
                club_id: null,
                event_id: null,
                is_private: false,
                is_social_mode: true,
                topic: 'topic',
                user_ids: [],
              },
            },
          },
        },
      },
    },
  },
  responses: { 400: { description: 'waitlisted', content: {} } },
})

export const postFollowRoute = createRoute({
  method: 'post',
  path: '/follow',
  summary: 'follows a user',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { user_id: 1234 } } },
        },
      },
    },
  },
  responses: { 401: { description: 'waitlisted', content: {} } },
})

export const getGetActionableNotificationsRoute = createRoute({
  method: 'get',
  path: '/get_actionable_notifications',
  summary: 'get actionable notifications (the bell again)',
  responses: { 200: { description: 'Returns a list of actionable notifications.', content: {} } },
})

export const getGetAllTopicsRoute = createRoute({
  method: 'get',
  path: '/get_all_topics',
  summary: 'gets all topics.',
  responses: { 200: { description: 'a list of topics', content: {} } },
})

export const getGetChannelsRoute = createRoute({
  method: 'get',
  path: '/get_channels',
  summary: 'get all channels',
  responses: { 200: { description: 'list of channels', content: {} } },
})

export const postGetClubRoute = createRoute({
  method: 'post',
  path: '/get_club',
  summary: 'gets club by id',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { club_id: 1234 } } },
        },
      },
    },
  },
  responses: { 200: { description: 'returns club object', content: {} } },
})

export const postGetClubsForTopicRoute = createRoute({
  method: 'post',
  path: '/get_clubs_for_topic',
  summary: 'looks up clubs by topic.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { topic_id: 140 } } },
        },
      },
    },
  },
  responses: { 200: { description: 'returns list of clubs with pagination', content: {} } },
})

export const postGetCreateChannelTargetsRoute = createRoute({
  method: 'post',
  path: '/get_create_channel_targets',
  summary: 'is fetched when you tap Create Room',
  request: { body: { content: { 'application/json': { schema: z.object({}), example: {} } } } },
  responses: { 400: { description: 'waitlisted', content: {} } },
})

export const getGetEventsRoute = createRoute({
  method: 'get',
  path: '/get_events',
  summary: 'the Upcoming for You page',
  request: {
    query: z.object({
      is_filtered: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: true,
            in: 'query',
            name: 'is_filtered',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page_size: z
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
            example: 25,
            in: 'query',
            name: 'page_size',
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            example: 1,
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'a list of events', content: {} } },
})

export const postGetFollowingRoute = createRoute({
  method: 'post',
  path: '/get_following',
  summary:
    'get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { user_id: 1234 } } },
        },
      },
    },
  },
  responses: { 200: { description: 'returns list of users and clubs', content: {} } },
})

export const getGetNotificationsRoute = createRoute({
  method: 'get',
  path: '/get_notifications',
  summary: 'get notifications (the bell icon)',
  request: {
    query: z.object({
      page_size: z
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
            example: 20,
            in: 'query',
            name: 'page_size',
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            example: 1,
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Returns a list of notifications.', content: {} } },
})

export const postGetOnlineFriendsRoute = createRoute({
  method: 'post',
  path: '/get_online_friends',
  summary: 'gets online friends on the app homepage.',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({}), examples: { emptyRequest: { value: {} } } },
      },
    },
  },
  responses: { 200: { description: 'a list of online clubs and users.', content: {} } },
})

export const postGetProfileRoute = createRoute({
  method: 'post',
  path: '/get_profile',
  summary: 'looks up user profile by ID.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { user_id: 4075733 } } },
        },
      },
    },
  },
  responses: { 200: { description: 'returns user profile info', content: {} } },
})

export const postGetReleaseNotesRoute = createRoute({
  method: 'post',
  path: '/get_release_notes',
  summary: 'gets release notes.',
  responses: { 200: { description: 'the response', content: {} } },
})

export const getGetSettingsRoute = createRoute({
  method: 'get',
  path: '/get_settings',
  summary: 'get notification settings',
  responses: { 200: { description: 'notification settings', content: {} } },
})

export const postGetSuggestedClubInvitesRoute = createRoute({
  method: 'post',
  path: '/get_suggested_club_invites',
  summary: 'find users to invite to clubs based on phone number',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            jsonObject: {
              value: {
                contacts: [{ name: 'aaa', phone_number: '+11234567890' }],
                upload_contacts: true,
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'returns list of suggested invites.', content: {} } },
})

export const getGetSuggestedFollowsAllRoute = createRoute({
  method: 'get',
  path: '/get_suggested_follows_all',
  summary: 'gets suggested follows during signup',
  request: {
    query: z.object({
      in_onboarding: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: true,
            in: 'query',
            name: 'in_onboarding',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      page_size: z
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
            example: 50,
            in: 'query',
            name: 'page_size',
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            example: 1,
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'a list of users to follow. bios truncated to 80 chars.', content: {} },
  },
})

export const postGetSuggestedFollowsFriendsOnlyRoute = createRoute({
  method: 'post',
  path: '/get_suggested_follows_friends_only',
  summary: 'find people to follow by uploading contacts during signup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            noContacts: { value: { club_id: null, contacts: [], upload_contacts: true } },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'returns list of users and clubs', content: {} } },
})

export const postGetSuggestedFollowsSimilarRoute = createRoute({
  method: 'post',
  path: '/get_suggested_follows_similar',
  summary: "find similar users. (The Sparkles button on Clubhouse's profile page)",
  request: {
    body: { content: { 'application/json': { schema: z.object({}), example: { user_id: 4 } } } },
  },
  responses: {
    200: { description: 'Returns a list of users. Bios truncated to 80 chars.', content: {} },
  },
})

export const postGetSuggestedInvitesRoute = createRoute({
  method: 'post',
  path: '/get_suggested_invites',
  summary: 'find users to invite based on phone number.',
  description:
    "(also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            hasContact: {
              value: {
                club_id: null,
                contacts: [{ phone_number: '+11234567890' }],
                upload_contacts: false,
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'returns list of users that can be invited.', content: {} } },
})

export const postGetSuggestedSpeakersRoute = createRoute({
  method: 'post',
  path: '/get_suggested_speakers',
  summary: 'gets suggested users when you start a private room',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { startingPrivateRoom: { value: { channel: null } } },
        },
      },
    },
  },
  responses: { 200: { description: 'Returns a list of actionable notifications.', content: {} } },
})

export const postGetTopicRoute = createRoute({
  method: 'post',
  path: '/get_topic',
  summary: 'looks up topic by ID.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { topic_id: 140 } } },
        },
      },
    },
  },
  responses: { 200: { description: 'returns topic info', content: {} } },
})

export const getGetUsersForTopicRoute = createRoute({
  method: 'get',
  path: '/get_users_for_topic',
  summary: 'looks up users by topic.',
  request: {
    query: z.object({
      topic_id: z
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
            example: 140,
            in: 'query',
            name: 'topic_id',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      page_size: z
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
            example: 25,
            in: 'query',
            name: 'page_size',
            schema: { type: 'integer' },
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            example: 1,
            in: 'query',
            name: 'page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'returns list of users with pagination. Bios truncated to 80 chars.',
      content: {},
    },
  },
})

export const getGetWelcomeChannelRoute = createRoute({
  method: 'get',
  path: '/get_welcome_channel',
  summary: 'called during signup',
  responses: { 200: { description: 'empty???', content: {} } },
})

export const postInviteFromWaitlistRoute = createRoute({
  method: 'post',
  path: '/invite_from_waitlist',
  summary: 'wave to another user on the waitlist to give them access',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { user_id: 1234 } } },
        },
      },
    },
  },
  responses: {
    400: {
      description: 'your own account is waitlisted, or some other error occurred',
      content: {},
    },
  },
})

export const postInviteToAppRoute = createRoute({
  method: 'post',
  path: '/invite_to_app',
  summary: 'invite a user to the app, using one of your invites',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            jsonObject: {
              value: { message: null, name: 'John Smith', phone_number: '+11234567890' },
            },
          },
        },
      },
    },
  },
  responses: {
    400: { description: "your own account doesn't have an invite either", content: {} },
  },
})

export const postJoinChannelRoute = createRoute({
  method: 'post',
  path: '/join_channel',
  summary: 'join a channel.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            joinFromAppHomeScreen: {
              value: {
                attribution_details: 'eyJpc19leHBsb3JlIjpmYWxzZSwicmFuayI6MX0=',
                attribution_source: 'feed',
                channel: 'abcdefgh',
              },
            },
            justChannelIsEnough: { value: { channel: 'abcdefgh' } },
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'stuff needed to actually join a channel', content: {} },
    400: { description: 'cannot join', content: {} },
  },
})

export const postLeaveChannelRoute = createRoute({
  method: 'post',
  path: '/leave_channel',
  summary: 'leave a channel.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { channel: 'abcdefgh' } } },
        },
      },
    },
  },
  responses: { 200: { description: 'left the channel', content: {} } },
})

export const postMeRoute = createRoute({
  method: 'post',
  path: '/me',
  summary: 'gets user',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            clubhouseApp: {
              value: {
                return_blocked_ids: true,
                return_following_ids: true,
                timezone_identifier: 'America/Los_Angeles',
              },
            },
            emptyAlsoWorks: { value: {} },
          },
        },
      },
    },
  },
  responses: {
    200: { description: 'the response', content: {} },
    403: { description: 'error response - happens if account is banned (is_blocked)', content: {} },
  },
})

export const postRecordActionTrailsRoute = createRoute({
  method: 'post',
  path: '/record_action_trails',
  summary: 'analytics',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            appOpened: {
              value: {
                action_trails: [
                  { blob_data: {}, client_time_created: 1612971962, trail_type: 'app_opened' },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'always empty', content: {} } },
})

export const postRefreshTokenRoute = createRoute({
  method: 'post',
  path: '/refresh_token',
  summary: 'gets an access_token from a refresh_token.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { refresh: '<refresh_token>' } } },
        },
      },
    },
  },
  responses: {
    200: { description: 'returns new access and refresh token', content: {} },
    401: { description: 'invalid refresh token', content: {} },
  },
})

export const postResendPhoneNumberAuthRoute = createRoute({
  method: 'post',
  path: '/resend_phone_number_auth',
  summary: 'Resend phone number auth.',
  request: {
    body: {
      content: {
        'application/json': { schema: z.object({}), examples: { jsonObject: { value: {} } } },
      },
    },
  },
  responses: { 200: { description: 'success', content: {} } },
})

export const postSearchClubsRoute = createRoute({
  method: 'post',
  path: '/search_clubs',
  summary: 'search clubs.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            normalSearch: {
              value: {
                cofollows_only: false,
                followers_only: false,
                following_only: false,
                query: 'rohan',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'Returns a list of clubs.', content: {} } },
})

export const postSearchUsersRoute = createRoute({
  method: 'post',
  path: '/search_users',
  summary: 'search for users',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            normalSearch: {
              value: {
                cofollows_only: false,
                followers_only: false,
                following_only: false,
                query: 'johnsmith',
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: { description: 'Returns a list of users.', content: {} } },
})

export const postStartPhoneNumberAuthRoute = createRoute({
  method: 'post',
  path: '/start_phone_number_auth',
  summary: 'Starts phone number auth.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { phone_number: '+11234567890' } } },
        },
      },
    },
  },
  responses: { 200: { description: 'success', content: {} } },
})

export const postUpdateNotificationsRoute = createRoute({
  method: 'post',
  path: '/update_notifications',
  summary: 'updates notification during signup.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: {
            onboardingSetting: {
              value: {
                apn_token: null,
                enable_trending: -1,
                frequency: -1,
                is_sandbox: false,
                pause_till: -1,
                system_enabled: 2,
              },
            },
          },
        },
      },
    },
  },
  responses: { 400: { description: 'waitlisted', content: {} } },
})

export const postUpdateUsernameRoute = createRoute({
  method: 'post',
  path: '/update_username',
  summary: 'edits username.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({}),
          examples: { jsonObject: { value: { username: 'hipsterhouse' } } },
        },
      },
    },
  },
  responses: {
    200: { description: 'username successfully set', content: {} },
    400: { description: 'invalid/taken username (eg empty string)', content: {} },
  },
})
