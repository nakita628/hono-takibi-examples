type Card = {
  author_name?: string | undefined
  author_url?: string | undefined
  blurhash?: string | undefined
  description: string
  height?: number | undefined
  html?: string | undefined
  image?: string | undefined
  provider_name?: string | undefined
  provider_url?: string | undefined
  title: string
  type: 'link' | 'photo' | 'video' | 'rich'
  url: string
  width?: number | undefined
}
type Error = { error: string; error_description?: string | undefined }
type IdentityProof = {
  profile_url?: string | undefined
  proof_url?: string | undefined
  provider?: string | undefined
  provider_username?: string | undefined
  updated_at?: string | undefined
}
type Relationship = {
  blocked_by: boolean
  blocking: boolean
  domain_blocking: boolean
  endorsed: boolean
  followed_by: boolean
  following: boolean
  id: string
  muting: boolean
  muting_notifications: boolean
  note: string
  notifying: boolean
  requested: boolean
  showing_reblogs: boolean
}
type Emoji = {
  category?: string | undefined
  shortcode: string
  static_url: string
  url: string
  visible_in_picker: boolean
}
type Field = {
  name?: string | undefined
  value?: string | undefined
  verified_at?: string | undefined
}
type Source = {
  fields?: Field[] | undefined
  follow_requests_count?: number | undefined
  language?: string | undefined
  note?: string | undefined
  privacy?: 'public' | 'unlisted' | 'private' | 'direct' | undefined
  sensitive?: boolean | undefined
}
type Account = {
  acct?: string | undefined
  avatar?: string | undefined
  avatar_static?: string | undefined
  bot?: boolean | undefined
  created_at?: string | undefined
  discoverable?: boolean | undefined
  display_name?: string | undefined
  emojis?: Emoji[] | undefined
  fields?: Field[] | undefined
  followers_count?: number | undefined
  following_count?: number | undefined
  header?: string | undefined
  header_static?: string | undefined
  id?: string | undefined
  last_status_at?: string | undefined
  locked?: boolean | undefined
  moved?: Account | undefined
  mute_expires_at?: string | undefined
  note?: string | undefined
  source?: Source | undefined
  statuses_count?: number | undefined
  suspended?: boolean | undefined
  url?: string | undefined
  username?: string | undefined
}
type FeaturedTag = {
  id?: string | undefined
  last_status_at?: string | undefined
  name?: string | undefined
  statuses_count?: number | undefined
  url?: string | undefined
}
type List = { id: string; replies_policy: 'followed' | 'list' | 'none'; title: string }
type Application = {
  client_id?: string | undefined
  client_secret?: string | undefined
  name: string
  vapid_key?: string | undefined
  website?: string | undefined
}
type Attachment = {
  blurhash?: string | undefined
  description?: string | undefined
  id: string
  meta?: { [x: string]: unknown } | undefined
  preview_url: string
  remote_url?: string | undefined
  text_url?: string | undefined
  type: 'unknown' | 'image' | 'gifv' | 'video' | 'audio'
  url: string
}
type Mention = { acct: string; id: string; url: string; username: string }
type Poll = {
  emojis?: Emoji[] | undefined
  expired?: boolean | undefined
  expires_at?: string | undefined
  id?: string | undefined
  multiple?: boolean | undefined
  options?: { [x: string]: unknown }[] | undefined
  own_votes?: number[] | undefined
  voted?: boolean | undefined
  voters_count?: number | undefined
  votes_count?: number | undefined
}
type History = { accounts: string; day: string; uses: string }
type Tag = { history?: History[] | undefined; name: string; url: string }
type Status = {
  account?: Account | undefined
  application?: Application | undefined
  bookmarked?: boolean | undefined
  card?: Card | undefined
  content?: string | undefined
  created_at?: string | undefined
  emojis?: Emoji[] | undefined
  favourited?: boolean | undefined
  favourites_count?: number | undefined
  id?: string | undefined
  in_reply_to_account_id?: string | undefined
  in_reply_to_id?: string | undefined
  language?: string | undefined
  media_attachments?: Attachment[] | undefined
  mentions?: Mention[] | undefined
  muted?: boolean | undefined
  pinned?: boolean | undefined
  poll?: Poll | undefined
  reblog?: Status | undefined
  reblogged?: boolean | undefined
  reblogs_count?: number | undefined
  replies_count?: number | undefined
  sensitive?: boolean | undefined
  spoiler_text?: string | undefined
  tags?: Tag[] | undefined
  text?: string | undefined
  uri?: string | undefined
  url?: string | undefined
  visibility?: 'public' | 'unlisted' | 'private' | 'direct' | undefined
}
type AdminAccount = {
  account?: Account | undefined
  approved?: boolean | undefined
  confirmed?: boolean | undefined
  created_at?: string | undefined
  created_by_application_id?: string | undefined
  disabled?: boolean | undefined
  email?: string | undefined
  id?: string | undefined
  invite_request?: string | undefined
  invited_by_account_id?: string | undefined
  ip?: string | undefined
  locale?: string | undefined
  role?: string | undefined
  silenced?: boolean | undefined
  suspended?: boolean | undefined
  username?: string | undefined
}
type AdminReport = {
  account?: Account | undefined
  action_taken?: string | undefined
  assigned_account?: Account | undefined
  comment?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  statuses?: Status[] | undefined
  target_account?: Account | undefined
  updated_at?: string | undefined
}
type Announcement = {
  all_day: boolean
  created_at: string
  ends_at?: string | undefined
  id: string
  published: boolean
  read: boolean
  scheduled_at?: string | undefined
  starts_at?: string | undefined
  text: string
  updated_at: string
}
type Conversation = {
  accounts: Account[]
  id: string
  last_status?: Status | undefined
  unread: boolean
}
type Filter = {
  context?: ('home' | 'notifications' | 'public' | 'thread')[] | undefined
  expires_at?: string | undefined
  id?: string | undefined
  irreversible?: boolean | undefined
  phrase?: string | undefined
  whole_word?: boolean | undefined
}
type Instance = {
  approval_required: boolean
  contact_account?: Account | undefined
  description: string
  email: string
  invites_enabled: boolean
  languages: string[]
  registrations: boolean
  short_description: string
  stats: { [x: string]: unknown }
  thumbnail?: (string | null) | undefined
  title: string
  uri: string
  urls: { [x: string]: unknown }
  version: string
}
type Activity = {
  logins?: string | undefined
  registrations?: string | undefined
  statuses?: string | undefined
  week?: string | undefined
}
type Notification = {
  account: Account
  created_at: string
  id: string
  status?: Status | undefined
  type: 'follow' | 'follow_request' | 'mention' | 'reblog' | 'favourite' | 'poll' | 'status'
}
type Preferences = {
  'posting:default:language'?: string | undefined
  'posting:default:sensitive'?: boolean | undefined
  'posting:default:visibility'?: 'public' | 'unlisted' | 'private' | 'direct' | undefined
  'reading:expand:media'?: 'default' | 'show_all' | 'hide_all' | undefined
  'reading:expand:spoilers'?: boolean | undefined
}
type PushSubscription = {
  alerts: { [x: string]: unknown }
  endpoint: string
  id: string
  server_key: string
}
type Report = {
  action_taken?: boolean | undefined
  action_taken_at?: string | undefined
  category?: 'other' | 'spam' | 'violation' | undefined
  comment?: string | undefined
  created_at?: string | undefined
  forwarded?: boolean | undefined
  id?: string | undefined
  rule_ids?: number[] | undefined
  status_ids?: number[] | undefined
  target_account?: Account | undefined
}
type StatusParams = {
  application_id?: string | undefined
  in_reply_to_id?: string | undefined
  media_ids?: string[] | undefined
  scheduled_at?: string | undefined
  sensitive?: boolean | undefined
  spoiler_text?: string | undefined
  text?: string | undefined
  visibility?: string | undefined
}
type ScheduledStatus = {
  id: string
  media_attachments: Attachment[]
  params: StatusParams
  scheduled_at: string
}
type Context = { ancestors: Status[]; descendants: Status[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/oembed': {
      $get:
        | {
            input: {
              query: {
                url?: string | undefined
                maxwidth?: number | undefined
                maxheight?: number | undefined
              }
            }
            output: Card
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                url?: string | undefined
                maxwidth?: number | undefined
                maxheight?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/proofs': {
      $get:
        | {
            input: { query: { provider?: string | undefined; username?: string | undefined } }
            output: IdentityProof
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { provider?: string | undefined; username?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/accounts': {
      $post:
        | {
            input: {
              json: {
                agreement: boolean
                email: string
                locale: string
                password: string
                reason?: string | undefined
                username: string
              }
            } & {
              form: {
                agreement: boolean
                email: string
                locale: string
                password: string
                reason?: string | undefined
                username: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              json: {
                agreement: boolean
                email: string
                locale: string
                password: string
                reason?: string | undefined
                username: string
              }
            } & {
              form: {
                agreement: boolean
                email: string
                locale: string
                password: string
                reason?: string | undefined
                username: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/relationships': {
      $get:
        | {
            input: { query: { id: string[] } }
            output: Relationship[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { id: string[] } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { query: { id: string[] } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/api/v1/accounts/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                resolve?: string | undefined
                following?: boolean | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                resolve?: string | undefined
                following?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v1/accounts/update_credentials': {
      $patch:
        | {
            input: {
              json: {
                avatar?: string | undefined
                bot?: boolean | undefined
                discoverable?: string | undefined
                display_name?: string | undefined
                fields_attributes?: { [x: string]: unknown } | undefined
                header?: string | undefined
                locked?: boolean | undefined
                note?: string | undefined
                source?:
                  | {
                      language?: string | undefined
                      privacy?: string | undefined
                      sensitive?: boolean | undefined
                    }
                  | undefined
              }
            } & {
              form: {
                avatar?: string | undefined
                bot?: boolean | undefined
                discoverable?: string | undefined
                display_name?: string | undefined
                fields_attributes?: { [x: string]: unknown } | undefined
                header?: string | undefined
                locked?: boolean | undefined
                note?: string | undefined
                source?:
                  | {
                      language?: string | undefined
                      privacy?: string | undefined
                      sensitive?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                avatar?: string | undefined
                bot?: boolean | undefined
                discoverable?: string | undefined
                display_name?: string | undefined
                fields_attributes?: { [x: string]: unknown } | undefined
                header?: string | undefined
                locked?: boolean | undefined
                note?: string | undefined
                source?:
                  | {
                      language?: string | undefined
                      privacy?: string | undefined
                      sensitive?: boolean | undefined
                    }
                  | undefined
              }
            } & {
              form: {
                avatar?: string | undefined
                bot?: boolean | undefined
                discoverable?: string | undefined
                display_name?: string | undefined
                fields_attributes?: { [x: string]: unknown } | undefined
                header?: string | undefined
                locked?: boolean | undefined
                note?: string | undefined
                source?:
                  | {
                      language?: string | undefined
                      privacy?: string | undefined
                      sensitive?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/verify_credentials': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/api/v1/accounts/:id': {
      $get:
        | { input: { param: { id: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 410 }
    }
  } & {
    '/api/v1/accounts/:id/block': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/accounts/:id/featured_tags': {
      $get:
        | {
            input: { param: { id: string } }
            output: FeaturedTag[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/accounts/:id/follow': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: { notify?: boolean | undefined; reblogs?: boolean | undefined }
            } & { form: { notify?: boolean | undefined; reblogs?: boolean | undefined } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { notify?: boolean | undefined; reblogs?: boolean | undefined }
            } & { form: { notify?: boolean | undefined; reblogs?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v1/accounts/:id/followers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 410
          }
    }
  } & {
    '/api/v1/accounts/:id/following': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                max_id?: string | undefined
                since_id?: string | undefined
                limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 410
          }
    }
  } & {
    '/api/v1/accounts/:id/identity_proofs': {
      $get:
        | {
            input: { param: { id: string } }
            output: IdentityProof[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 410 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/api/v1/accounts/:id/lists': {
      $get:
        | { input: { param: { id: string } }; output: List[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 410 }
    }
  } & {
    '/api/v1/accounts/:id/mute': {
      $post:
        | {
            input: { param: { id: string } } & {
              json: { duration?: number | undefined; notifications?: boolean | undefined }
            } & { form: { duration?: number | undefined; notifications?: boolean | undefined } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { duration?: number | undefined; notifications?: boolean | undefined }
            } & { form: { duration?: number | undefined; notifications?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/accounts/:id/note': {
      $post:
        | {
            input: { param: { id: string } } & { json: { comment?: string | undefined } } & {
              form: { comment?: string | undefined }
            }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { comment?: string | undefined } } & {
              form: { comment?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { comment?: string | undefined } } & {
              form: { comment?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/api/v1/accounts/:id/pin': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/v1/accounts/:id/statuses': {
      $get:
        | { input: { param: { id: string } }; output: Status[]; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 410 }
    }
  } & {
    '/api/v1/accounts/:id/unblock': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/accounts/:id/unfollow': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/accounts/:id/unmute': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/accounts/:id/unpin': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/api/v1/admin/accounts': {
      $get: {
        input: {
          query: {
            local?: boolean | undefined
            remote?: boolean | undefined
            by_domain?: string | undefined
            active?: boolean | undefined
            pending?: boolean | undefined
            disabled?: boolean | undefined
            silenced?: boolean | undefined
            suspended?: boolean | undefined
            staff?: boolean | undefined
            username?: string | undefined
            display_name?: string | undefined
            email?: string | undefined
            ip?: string | undefined
          }
        }
        output: AdminAccount[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/accounts/:id': {
      $get: {
        input: { param: { id: string } }
        output: AdminAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/accounts/:id/action': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            report_id?: string | undefined
            send_email_notification?: boolean | undefined
            text?: string | undefined
            type?: 'none' | 'disable' | 'silence' | 'suspend' | undefined
            warning_preset_id?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/admin/accounts/:id/approve': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/admin/accounts/:id/enable': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/admin/accounts/:id/reject': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/admin/accounts/:id/unsilence': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/admin/accounts/:id/unsuspend': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/v1/admin/reports': {
      $get: {
        input: {
          query: {
            resolved?: boolean | undefined
            account_id?: string | undefined
            target_account_id?: string | undefined
          }
        }
        output: AdminReport[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/reports/:id': {
      $get: {
        input: { param: { id: string } }
        output: AdminReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/reports/:id/assign_to_self': {
      $post: {
        input: { param: { id: string } }
        output: AdminReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/reports/:id/reopen': {
      $post: {
        input: { param: { id: string } }
        output: AdminReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/reports/:id/resolve': {
      $post: {
        input: { param: { id: string } }
        output: AdminReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/admin/reports/:id/unassign': {
      $post: {
        input: { param: { id: string } }
        output: AdminReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/announcements': {
      $get: {
        input: { query: { with_dismissed?: boolean | undefined } }
        output: Announcement[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/announcements/:id/dismiss': {
      $post: {
        input: { param: { id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/announcements/:id/reactions/:name': {
      $delete:
        | {
            input: { param: { id: string; name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { param: { id: string; name: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/apps': {
      $post:
        | {
            input: {
              json: {
                client_name: string
                redirect_uris: string
                scopes?: string | undefined
                website?: string | undefined
              }
            } & {
              form: {
                client_name: string
                redirect_uris: string
                scopes?: string | undefined
                website?: string | undefined
              }
            }
            output: {
              client_id?: string | undefined
              client_secret?: string | undefined
              id?: string | undefined
              name?: string | undefined
              redirect_uri?: string | undefined
              vapid_key?: string | undefined
              website?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_name: string
                redirect_uris: string
                scopes?: string | undefined
                website?: string | undefined
              }
            } & {
              form: {
                client_name: string
                redirect_uris: string
                scopes?: string | undefined
                website?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/apps/verify_credentials': {
      $get:
        | { input: {}; output: Application; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/blocks': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/bookmarks': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Status[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/conversations': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Conversation[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/conversations/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/conversations/:id/read': {
      $post:
        | {
            input: { param: { id: string } }
            output: Conversation
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/custom_emojis': {
      $get: { input: {}; output: Emoji[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/directory': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            offset?: number | undefined
            order?: 'active' | 'new' | undefined
            local?: boolean | undefined
          }
        }
        output: Account[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/domain_blocks': {
      $delete:
        | {
            input: { query: { domain: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { domain: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { query: { domain: string } }; output: Error; outputFormat: 'json'; status: 422 }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { domain: string } } & { form: { domain: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { domain: string } } & { form: { domain: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { domain: string } } & { form: { domain: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/endorsements': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/favourites': {
      $get:
        | {
            input: {
              query: {
                limit?: string | undefined
                max_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Status[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                max_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/featured_tags': {
      $get:
        | { input: {}; output: FeaturedTag[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: { name?: string | undefined } }
            output: FeaturedTag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/featured_tags/suggestions': {
      $get:
        | { input: {}; output: FeaturedTag[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/featured_tags/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/filters': {
      $get:
        | { input: {}; output: Filter[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/filters/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | { input: { param: { id: string } }; output: Filter; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Filter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            } & {
              form: {
                context: ('home' | 'notifications' | 'public' | 'thread')[]
                expires_in?: number | undefined
                irreversible?: boolean | undefined
                phrase: string
                whole_word?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/follow_requests': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/follow_requests/:id/authorize': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/follow_requests/:id/reject': {
      $post:
        | {
            input: { param: { id: string } }
            output: Relationship
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/instance': { $get: { input: {}; output: Instance; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/v1/instance/activity': {
      $get: { input: {}; output: Activity[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/instance/peers': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/lists': {
      $delete:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | { input: {}; output: List[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: {
              json: { replies_policy?: 'followed' | 'list' | 'none' | undefined; title: string }
            }
            output: List
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { replies_policy?: 'followed' | 'list' | 'none' | undefined; title: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: {
              json: {
                replies_policy?: 'followed' | 'list' | 'none' | undefined
                title?: string | undefined
              }
            }
            output: List
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                replies_policy?: 'followed' | 'list' | 'none' | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                replies_policy?: 'followed' | 'list' | 'none' | undefined
                title?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/lists/:id': {
      $get:
        | { input: { param: { id: string } }; output: List; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/lists/:id/accounts': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { account_ids: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { account_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { account_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { account_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: { account_ids: string[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { account_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { account_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { account_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/markers': {
      $get:
        | {
            input: { query: { timeline: { [x: string]: unknown }[] } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { timeline: { [x: string]: unknown }[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/v1/media': {
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/media/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: Attachment
            outputFormat: 'json'
            status: 206
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
      $post:
        | {
            input: { param: { id: string } } & {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Attachment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            } & {
              form: {
                description?: string | undefined
                file: File
                focus?: string | undefined
                thumbnail?: File | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/mutes': {
      $get:
        | {
            input: {
              query: {
                limit?: string | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: string | undefined
                max_id?: string | undefined
                since_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/notifications': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
                exclude_types?: string[] | undefined
                account_id?: string | undefined
              }
            }
            output: Notification[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
                exclude_types?: string[] | undefined
                account_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/notifications/clear': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/notifications/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Notification
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/notifications/:id/dismiss': {
      $post:
        | {
            input: { param: { id: string } }
            output: Notification
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/polls/:id': {
      $get:
        | { input: { param: { id: string } }; output: Poll; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: string } } & { json: { choices: string[] } }
            output: Poll
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { choices: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { choices: string[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { choices: string[] } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/preferences': {
      $get:
        | { input: {}; output: Preferences; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/push/subscription': {
      $delete: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: PushSubscription; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { json: { data: string; subscription: string } }
            output: PushSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { data: string; subscription: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { json: { data: string } }
            output: PushSubscription
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { data: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/reports': {
      $post:
        | {
            input: {
              json: {
                account_id: string
                comment?: string | undefined
                forward?: boolean | undefined
                status_ids?: string[] | undefined
              }
            }
            output: Report
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                account_id: string
                comment?: string | undefined
                forward?: boolean | undefined
                status_ids?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/scheduled_statuses': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: ScheduledStatus[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/scheduled_statuses/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } }
            output: ScheduledStatus
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: { scheduled_at?: string | undefined } }
            output: ScheduledStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { scheduled_at?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { scheduled_at?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { scheduled_at?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/api/v1/statuses': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                in_reply_to_id?: string | undefined
                language?: string | undefined
                media_ids?: string[] | undefined
                poll?: { [x: string]: unknown }[] | undefined
                scheduled_at?: string | undefined
                sensitive?: boolean | undefined
                spoiler_text?: string | undefined
                status?: string | undefined
                visibility?: 'public' | 'unlisted' | 'private' | 'direct' | undefined
              }[]
            }
            output: Status | ScheduledStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                in_reply_to_id?: string | undefined
                language?: string | undefined
                media_ids?: string[] | undefined
                poll?: { [x: string]: unknown }[] | undefined
                scheduled_at?: string | undefined
                sensitive?: boolean | undefined
                spoiler_text?: string | undefined
                status?: string | undefined
                visibility?: 'public' | 'unlisted' | 'private' | 'direct' | undefined
              }[]
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/statuses/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/bookmark': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/context': {
      $get:
        | { input: { param: { id: string } }; output: Context; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/favourite': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/favourited_by': {
      $get:
        | { input: { param: { id: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/mute': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/pin': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/api/v1/statuses/:id/reblog': {
      $post:
        | {
            input: { param: { id: string } } & { json: { visibility?: string | undefined } }
            output: Status
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { visibility?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: { visibility?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/statuses/:id/reblogged_by': {
      $get:
        | { input: { param: { id: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/unbookmark': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/unfavourite': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/unmute': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/unpin': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/statuses/:id/unreblog': {
      $post:
        | { input: { param: { id: string } }; output: Status; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/v1/suggestions': {
      $get:
        | {
            input: { query: { limit?: number | undefined } }
            output: Account
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/suggestions/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/api/v1/timelines/home': {
      $get:
        | {
            input: {
              query: {
                local?: boolean | undefined
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Status[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                local?: boolean | undefined
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: {
              query: {
                local?: boolean | undefined
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/timelines/list/:list_id': {
      $get:
        | {
            input: { param: { list_id: string } } & {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Status[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { list_id: string } } & {
              query: {
                limit?: number | undefined
                max_id?: string | undefined
                since_id?: string | undefined
                min_id?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/api/v1/timelines/public': {
      $get: {
        input: {
          query: {
            local?: boolean | undefined
            remote?: boolean | undefined
            only_media?: boolean | undefined
            limit?: number | undefined
            max_id?: string | undefined
            since_id?: string | undefined
            min_id?: string | undefined
          }
        }
        output: Status[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/timelines/tag/:hashtag': {
      $get: {
        input: { param: { hashtag: string } } & {
          query: {
            local?: boolean | undefined
            remote?: boolean | undefined
            only_media?: boolean | undefined
            limit?: number | undefined
            max_id?: string | undefined
            since_id?: string | undefined
            min_id?: string | undefined
          }
        }
        output: Status[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/trends': {
      $get: {
        input: { query: { limit?: number | undefined } }
        output: Tag[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/search': {
      $get:
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                resolve?: string | undefined
                following?: boolean | undefined
                account_id?: string | undefined
                max_id?: string | undefined
                min_id?: string | undefined
                type?: 'accounts' | 'hashtags' | 'statuses' | undefined
                exclude_unreviewed?: boolean | undefined
                offset?: number | undefined
              }
            }
            output: {
              accounts?: Account[] | undefined
              hashtags?: Status[] | undefined
              statuses?: Tag[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                q: string
                limit?: number | undefined
                resolve?: string | undefined
                following?: boolean | undefined
                account_id?: string | undefined
                max_id?: string | undefined
                min_id?: string | undefined
                type?: 'accounts' | 'hashtags' | 'statuses' | undefined
                exclude_unreviewed?: boolean | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/oauth/authorize': {
      $get:
        | {
            input: {
              query: {
                response_type: string
                client_id: string
                redirect_uri: string
                scope?: string | undefined
                force_login?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                response_type: string
                client_id: string
                redirect_uri: string
                scope?: string | undefined
                force_login?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth/revoke': {
      $post:
        | {
            input: { json: { client_id: string; client_secret: string; token: string } } & {
              form: { client_id: string; client_secret: string; token: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: { client_id: string; client_secret: string; token: string } } & {
              form: { client_id: string; client_secret: string; token: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: {
              json: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: string
                redirect_uri: string
                scopes?: string | undefined
              }
            } & {
              form: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: string
                redirect_uri: string
                scopes?: string | undefined
              }
            }
            output: {
              access_token?: string | undefined
              created_at?: number | undefined
              scope?: string | undefined
              token_type?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: string
                redirect_uri: string
                scopes?: string | undefined
              }
            } & {
              form: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: string
                redirect_uri: string
                scopes?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: string
                redirect_uri: string
                scopes?: string | undefined
              }
            } & {
              form: {
                client_id: string
                client_secret: string
                code?: string | undefined
                grant_type: string
                redirect_uri: string
                scopes?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
