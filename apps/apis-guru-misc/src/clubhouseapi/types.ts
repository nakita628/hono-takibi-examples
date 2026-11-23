declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/call_phone_number_auth': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/check_for_update': {
      $get: {
        input: { query: { is_testflight?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/check_waitlist_status': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/complete_phone_number_auth': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/create_channel': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/follow': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_actionable_notifications': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/get_all_topics': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/get_channels': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/get_club': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_clubs_for_topic': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_create_channel_targets': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_events': {
      $get: {
        input: {
          query: {
            is_filtered?: boolean | undefined
            page_size?: number | undefined
            page?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_following': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_notifications': {
      $get: {
        input: { query: { page_size?: number | undefined; page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_online_friends': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_profile': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_release_notes': { $post: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/get_settings': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/get_suggested_club_invites': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_suggested_follows_all': {
      $get: {
        input: {
          query: {
            in_onboarding?: boolean | undefined
            page_size?: number | undefined
            page?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_suggested_follows_friends_only': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_suggested_follows_similar': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_suggested_invites': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_suggested_speakers': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_topic': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_users_for_topic': {
      $get: {
        input: {
          query: {
            topic_id?: number | undefined
            page_size?: number | undefined
            page?: number | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/get_welcome_channel': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/invite_from_waitlist': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/invite_to_app': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/join_channel': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/leave_channel': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/me': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/record_action_trails': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/refresh_token': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/resend_phone_number_auth': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search_clubs': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/search_users': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/start_phone_number_auth': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/update_notifications': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/update_username': {
      $post: {
        input: { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
