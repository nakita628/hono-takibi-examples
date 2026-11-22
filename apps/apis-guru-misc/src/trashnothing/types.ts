type Photo = {
  blurhash?: string | undefined
  images?:
    | { height?: number | undefined; url?: string | undefined; width?: number | undefined }[]
    | undefined
  photo_id?: string | undefined
  thumbnail?: string | undefined
  url?: string | undefined
}
type Post = {
  content?: string | undefined
  date?: string | undefined
  expiration?: string | undefined
  footer?: string | undefined
  group_id?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  outcome?: string | undefined
  photos?: Photo[] | undefined
  post_id?: string | undefined
  repost_count?: number | undefined
  reselling?: boolean | undefined
  source?: string | undefined
  title?: string | undefined
  type?: string | undefined
  url?: string | undefined
  user_id?: string | undefined
}
type Message = {
  content?: string | undefined
  date?: string | undefined
  email_attachments?: string[] | undefined
  from_user_id?: string | undefined
  message_id?: string | undefined
  photos?: Photo[] | undefined
  post?: Post | undefined
  subject?: string | undefined
  to_user_id?: string | undefined
}
type User = {
  about_me?: string | undefined
  country?: string | undefined
  feedback?:
    | {
        percent_positive?: number | undefined
        restriction?: string | undefined
        score?: number | undefined
      }
    | undefined
  firstname?: string | undefined
  lastname?: string | undefined
  member_since?: string | undefined
  profile_image?: string | undefined
  reply_time?: number | undefined
  user_id?: string | undefined
  username?: string | undefined
}
type Conversation = {
  archived?: boolean | undefined
  blocked?: boolean | undefined
  conversation_id?: string | undefined
  last_message_date?: string | undefined
  messages?: Message[] | undefined
  num_unread_messages?: number | undefined
  user?: User | undefined
}
type Group = {
  country?: { abbreviation?: string | undefined; name?: string | undefined } | undefined
  group_id?: string | undefined
  has_questions?: boolean | undefined
  homepage?: string | undefined
  identifier?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  member_count?: number | undefined
  membership?:
    | {
        date?: string | undefined
        questionnaire?:
          | { message?: string | undefined; questions?: string[] | undefined }
          | undefined
        status?: string | undefined
      }
    | undefined
  name?: string | undefined
  open_archives?: boolean | undefined
  open_membership?: boolean | undefined
  region?: { abbreviation?: string | undefined; name?: string | undefined } | undefined
  timezone?: string | undefined
}
type PhotoResult = {
  photo_id?: string | undefined
  thumbnail?:
    | { height?: number | undefined; url?: string | undefined; width?: number | undefined }
    | undefined
}
type PostSearchResult = {
  content?: string | undefined
  date?: string | undefined
  expiration?: string | undefined
  footer?: string | undefined
  group_id?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  outcome?: string | undefined
  photos?: Photo[] | undefined
  post_id?: string | undefined
  repost_count?: number | undefined
  reselling?: boolean | undefined
  source?: string | undefined
  title?: string | undefined
  type?: string | undefined
  url?: string | undefined
  user_id?: string | undefined
  search_content?: string | undefined
  search_title?: string | undefined
}
type Feedback = {
  content?: string | undefined
  date?: string | undefined
  feedback_id?: string | undefined
  positive?: boolean | undefined
  reviewer_user_id?: string | undefined
  user_id?: string | undefined
}
type Story = {
  content?: string | undefined
  date?: string | undefined
  like_count?: number | undefined
  photos?: Photo[] | undefined
  share_url?: string | undefined
  story_id?: string | undefined
  title?: string | undefined
  user?: User | undefined
  user_liked?: boolean | undefined
}
type CurrentUser = {
  about_me?: string | undefined
  country?: string | undefined
  feedback?:
    | {
        percent_positive?: number | undefined
        restriction?: string | undefined
        score?: number | undefined
      }
    | undefined
  firstname?: string | undefined
  lastname?: string | undefined
  member_since?: string | undefined
  profile_image?: string | undefined
  reply_time?: number | undefined
  user_id?: string | undefined
  username?: string | undefined
  digest_photos?: boolean | undefined
  email?:
    | {
        address?: string | undefined
        bouncing?: boolean | undefined
        spam_stop?: boolean | undefined
      }
    | undefined
  email_message_delay?: string | undefined
  email_post_reminders?: boolean | undefined
  email_posts_frequency?: string | undefined
  email_search_alerts?: boolean | undefined
  has_password?: boolean | undefined
  last_listings_view?: string | undefined
  location?:
    | {
        latitude?: number | undefined
        longitude?: number | undefined
        name?: string | undefined
        radius?: number | undefined
      }
    | undefined
  profile_image_source?: string | undefined
  public_name?: boolean | undefined
  public_post_sources?: string[] | undefined
  show_all_group_posts?: boolean | undefined
  signup?: string | undefined
  special_notices?: boolean | undefined
  uses_fair_offer_policy?: boolean | undefined
  verified?: boolean | undefined
}
type Alert = {
  alert_id?: string | undefined
  last_sent?: string | undefined
  search?: string | undefined
  send_count?: number | undefined
  types?: string[] | undefined
  user_id?: string | undefined
}
type GroupNotice = {
  content?: string | undefined
  date?: string | undefined
  group_id?: string | undefined
  notice_id?: string | undefined
  title?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/conversations': {
      $get:
        | {
            input: {
              query: {
                category?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                num_messages?: number | undefined
                include_num_unread?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: {
              conversations?: Conversation[] | undefined
              num_unread?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                num_messages?: number | undefined
                include_num_unread?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/conversations/archive-all': {
      $put:
        | { input: { form: { message_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { form: { message_id: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/conversations/mark-all-read': {
      $put:
        | { input: { form: { message_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { form: { message_id: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/conversations/search': {
      $get:
        | {
            input: {
              query: {
                search: string
                page?: number | undefined
                per_page?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: {
              conversations?: Conversation[] | undefined
              page?: number | undefined
              per_page?: number | undefined
              search?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                page?: number | undefined
                per_page?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/conversations/:conversation_id': {
      $delete:
        | {
            input: { param: { conversation_id: string } } & { query: { message_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { query: { message_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & { query: { message_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & { query: { message_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/archive': {
      $put:
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/block': {
      $put:
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/mark-read': {
      $put:
        | {
            input: { param: { conversation_id: string } } & { form: { message_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { form: { message_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & { form: { message_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & { form: { message_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/messages': {
      $get:
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                device_pixel_ratio?: number | undefined
                include_conversation?: number | undefined
              }
            }
            output: {
              conversation?: Conversation | undefined
              messages?: Message[] | undefined
              page?: number | undefined
              per_page?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                device_pixel_ratio?: number | undefined
                include_conversation?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                device_pixel_ratio?: number | undefined
                include_conversation?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                device_pixel_ratio?: number | undefined
                include_conversation?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/reply': {
      $post:
        | {
            input: { param: { conversation_id: string } } & {
              form: {
                content: string
                device_pixel_ratio?: number | undefined
                photo_ids?: string | undefined
              }
            }
            output: Message
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & {
              form: {
                content: string
                device_pixel_ratio?: number | undefined
                photo_ids?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & {
              form: {
                content: string
                device_pixel_ratio?: number | undefined
                photo_ids?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & {
              form: {
                content: string
                device_pixel_ratio?: number | undefined
                photo_ids?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/report': {
      $post:
        | {
            input: { param: { conversation_id: string } } & { form: { reason: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } } & { form: { reason: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { conversation_id: string } } & { form: { reason: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } } & { form: { reason: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/unarchive': {
      $put:
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/conversations/:conversation_id/unblock': {
      $put:
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { conversation_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/feedback': {
      $post: {
        input: { form: { message: string; meta?: string | undefined; subject: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/groups': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                distance?: number | undefined
                country?: string | undefined
                region?: string | undefined
                postal_code?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              groups?: Group[] | undefined
              num_groups?: number | undefined
              num_pages?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                distance?: number | undefined
                country?: string | undefined
                region?: string | undefined
                postal_code?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/groups/multiple': {
      $get:
        | {
            input: { query: { group_ids: string } }
            output: Group[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { group_ids: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/groups/subscribe': {
      $post:
        | {
            input: { form: { group_ids: string } }
            output: { groups?: Group[] | undefined; over_group_limit?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { form: { group_ids: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { form: { group_ids: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/groups/:group_id': {
      $get:
        | {
            input: { param: { group_id: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/groups/:group_id/answers': {
      $post:
        | {
            input: { param: { group_id: string } } & { json: { [x: string]: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { json: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { json: { [x: string]: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/groups/:group_id/contact': {
      $post:
        | {
            input: { param: { group_id: string } } & { form: { message: string; subject: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { group_id: string } } & { form: { message: string; subject: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { group_id: string } } & { form: { message: string; subject: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/groups/:group_id/unsubscribe': {
      $post:
        | {
            input: { param: { group_id: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/photos': {
      $post:
        | {
            input: { form: { device_pixel_ratio?: number | undefined; photo: File } }
            output: PhotoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { device_pixel_ratio?: number | undefined; photo: File } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/photos/multiple': {
      $get:
        | {
            input: { query: { photo_ids: string; device_pixel_ratio?: number | undefined } }
            output: PhotoResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { photo_ids: string; device_pixel_ratio?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/photos/:photo_id': {
      $delete:
        | { input: { param: { photo_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { photo_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { photo_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { photo_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/photos/:photo_id/rotate': {
      $post:
        | {
            input: { param: { photo_id: string } } & {
              query: { degrees: number; device_pixel_ratio?: number | undefined }
            }
            output: PhotoResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { photo_id: string } } & {
              query: { degrees: number; device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { photo_id: string } } & {
              query: { degrees: number; device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { photo_id: string } } & {
              query: { degrees: number; device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/posts': {
      $get:
        | {
            input: {
              query: {
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              group_ids?: string[] | undefined
              last_listings_view?: string | undefined
              num_pages?: number | undefined
              num_posts?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              posts?: Post[] | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              form: {
                content?: string | undefined
                expires_in?: string | undefined
                fair_offer?: number | undefined
                group_ids?: string | undefined
                latitude?: number | undefined
                location: string
                longitude?: number | undefined
                photo_ids?: string | undefined
                preferences?: string | undefined
                repost?: string | undefined
                reselling?: string | undefined
                session: string
                title: string
                type: string
              }
            }
            output: {
              identifier?: string | undefined
              message?: string | undefined
              preference_key?: string | undefined
              result?: string | undefined
              session?: { [x: string]: string } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                content?: string | undefined
                expires_in?: string | undefined
                fair_offer?: number | undefined
                group_ids?: string | undefined
                latitude?: number | undefined
                location: string
                longitude?: number | undefined
                photo_ids?: string | undefined
                preferences?: string | undefined
                repost?: string | undefined
                reselling?: string | undefined
                session: string
                title: string
                type: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/posts/all': {
      $get:
        | {
            input: {
              query: {
                types: string
                date_min: string
                date_max: string
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: { posts?: Post[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                types: string
                date_min: string
                date_max: string
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/posts/all/changes': {
      $get:
        | {
            input: {
              query: {
                date_min: string
                date_max: string
                per_page?: number | undefined
                page?: number | undefined
              }
            }
            output: {
              changes?:
                | {
                    date?: string | undefined
                    post_id?: string | undefined
                    type?: string | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date_min: string
                date_max: string
                per_page?: number | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/posts/multiple': {
      $get: {
        input: { query: { post_ids: string } }
        output: {
          forbidden?: string[] | undefined
          not_found?: string[] | undefined
          posts?: Post[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/posts/search': {
      $get:
        | {
            input: {
              query: {
                search: string
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              group_ids?: string[] | undefined
              num_pages?: number | undefined
              num_posts?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              posts?: PostSearchResult[] | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/posts/:post_id': {
      $delete:
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { param: { post_id: string } }; output: Post; outputFormat: 'json'; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { post_id: string } } & {
              form: {
                content?: string | undefined
                expires_in?: string | undefined
                fair_offer?: number | undefined
                latitude?: number | undefined
                location: string
                longitude?: number | undefined
                photo_ids?: string | undefined
                preferences?: string | undefined
                reselling?: string | undefined
                session: string
                title: string
                type: string
              }
            }
            output: {
              identifier?: string | undefined
              message?: string | undefined
              preference_key?: string | undefined
              result?: string | undefined
              session?: { [x: string]: string } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { post_id: string } } & {
              form: {
                content?: string | undefined
                expires_in?: string | undefined
                fair_offer?: number | undefined
                latitude?: number | undefined
                location: string
                longitude?: number | undefined
                photo_ids?: string | undefined
                preferences?: string | undefined
                reselling?: string | undefined
                session: string
                title: string
                type: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { post_id: string } } & {
              form: {
                content?: string | undefined
                expires_in?: string | undefined
                fair_offer?: number | undefined
                latitude?: number | undefined
                location: string
                longitude?: number | undefined
                photo_ids?: string | undefined
                preferences?: string | undefined
                reselling?: string | undefined
                session: string
                title: string
                type: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { post_id: string } } & {
              form: {
                content?: string | undefined
                expires_in?: string | undefined
                fair_offer?: number | undefined
                latitude?: number | undefined
                location: string
                longitude?: number | undefined
                photo_ids?: string | undefined
                preferences?: string | undefined
                reselling?: string | undefined
                session: string
                title: string
                type: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/posts/:post_id/bookmark': {
      $delete:
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/posts/:post_id/display': {
      $get:
        | {
            input: { param: { post_id: string } }
            output: {
              author?: User | undefined
              author_offer_count?: number | undefined
              author_posts?: Post[] | undefined
              author_wanted_count?: number | undefined
              bookmarked?: boolean | undefined
              feedback?: Feedback[] | undefined
              groups?: Group[] | undefined
              post?: Post | undefined
              replied?: boolean | undefined
              user_can_reply?: boolean | undefined
              viewed?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/posts/:post_id/promise': {
      $put:
        | { input: { param: { post_id: string } }; output: Post; outputFormat: 'json'; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/posts/:post_id/reply': {
      $post:
        | {
            input: { param: { post_id: string } } & {
              form: { message: string; photo_ids?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { post_id: string } } & {
              form: { message: string; photo_ids?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { post_id: string } } & {
              form: { message: string; photo_ids?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { post_id: string } } & {
              form: { message: string; photo_ids?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/posts/:post_id/report': {
      $post:
        | {
            input: { param: { post_id: string } } & {
              form: { details?: string | undefined; reason: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { post_id: string } } & {
              form: { details?: string | undefined; reason: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { post_id: string } } & {
              form: { details?: string | undefined; reason: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/posts/:post_id/satisfy': {
      $put:
        | { input: { param: { post_id: string } }; output: Post; outputFormat: 'json'; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/posts/:post_id/share': {
      $post:
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/posts/:post_id/unpromise': {
      $put:
        | { input: { param: { post_id: string } }; output: Post; outputFormat: 'json'; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/posts/:post_id/withdraw': {
      $put:
        | { input: { param: { post_id: string } }; output: Post; outputFormat: 'json'; status: 200 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { post_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/stories': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort_by?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: { stories?: Story[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                sort_by?: string | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                device_pixel_ratio?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $post:
        | {
            input: {
              form: {
                content: string
                device_pixel_ratio?: number | undefined
                photo_ids?: string | undefined
                sharing: string
                title: string
              }
            }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                content: string
                device_pixel_ratio?: number | undefined
                photo_ids?: string | undefined
                sharing: string
                title: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/stories/:story_id': {
      $get:
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stories/:story_id/like': {
      $put:
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stories/:story_id/unlike': {
      $put:
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: Story
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { story_id: string } } & {
              query: { device_pixel_ratio?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stories/:story_id/viewed': {
      $post:
        | { input: { param: { story_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { story_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/users/me': {
      $get:
        | { input: {}; output: CurrentUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: {
              form: {
                about_me?: string | undefined
                digest_photos?: number | undefined
                email_message_delay?: string | undefined
                email_newsletters?: string | undefined
                email_post_reminders?: number | undefined
                email_posts_frequency?: string | undefined
                email_search_alerts?: number | undefined
                firstname?: string | undefined
                last_listings_view?: string | undefined
                lastname?: string | undefined
                notify_about_reposts?: number | undefined
                old_password?: string | undefined
                password?: string | undefined
                profile_image_source?: string | undefined
                public_name?: number | undefined
                public_post_sources?: string | undefined
                show_all_group_posts?: number | undefined
                special_notices?: number | undefined
              }
            }
            output: CurrentUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                about_me?: string | undefined
                digest_photos?: number | undefined
                email_message_delay?: string | undefined
                email_newsletters?: string | undefined
                email_post_reminders?: number | undefined
                email_posts_frequency?: string | undefined
                email_search_alerts?: number | undefined
                firstname?: string | undefined
                last_listings_view?: string | undefined
                lastname?: string | undefined
                notify_about_reposts?: number | undefined
                old_password?: string | undefined
                password?: string | undefined
                profile_image_source?: string | undefined
                public_name?: number | undefined
                public_post_sources?: string | undefined
                show_all_group_posts?: number | undefined
                special_notices?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/alerts': {
      $get: { input: {}; output: Alert[]; outputFormat: 'json'; status: 200 }
      $put:
        | {
            input: { form: { search: string; types: string } }
            output: Alert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { search: string; types: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/alerts/:alert_id': {
      $delete:
        | { input: { param: { alert_id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { alert_id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { alert_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/users/me/email': {
      $post:
        | { input: { form: { address: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { form: { address: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/me/email/not-bouncing': {
      $put:
        | { input: {}; output: CurrentUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/me/groups': {
      $get:
        | {
            input: { query: { membership?: string | undefined } }
            output: Group[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { membership?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/location': {
      $put:
        | {
            input: { form: { latitude: number; longitude: number; name: string; radius: number } }
            output: CurrentUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { latitude: number; longitude: number; name: string; radius: number } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/notices': {
      $get:
        | {
            input: { query: { group_ids?: string | undefined } }
            output: GroupNotice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { group_ids?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/post-locations': {
      $get: {
        input: {}
        output: {
          latitude?: number | undefined
          longitude?: number | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { form: { latitude: number; longitude: number; name: string } }
        output: {
          latitude?: number | undefined
          longitude?: number | undefined
          name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/posts': {
      $get:
        | {
            input: {
              query: {
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              group_ids?: string[] | undefined
              last_listings_view?: string | undefined
              num_pages?: number | undefined
              num_posts?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              posts?: Post[] | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/posts/search': {
      $get:
        | {
            input: {
              query: {
                search: string
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              group_ids?: string[] | undefined
              num_pages?: number | undefined
              num_posts?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              posts?: PostSearchResult[] | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search: string
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                user_state?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/profile-image': {
      $post:
        | {
            input: {
              form: {
                crop?: string | undefined
                device_pixel_ratio?: number | undefined
                photo?: File | undefined
                photo_id?: string | undefined
                set_default?: number | undefined
              }
            }
            output: { photo?: PhotoResult | undefined; user?: CurrentUser | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                crop?: string | undefined
                device_pixel_ratio?: number | undefined
                photo?: File | undefined
                photo_id?: string | undefined
                set_default?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/me/profile-images': {
      $get: {
        input: {}
        output: { image?: string | undefined; source?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/me/resend-verification': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/users/me/reset-password': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/users/report': {
      $post:
        | {
            input: {
              form: {
                group_id?: string | undefined
                message: string
                subject?: string | undefined
                user_email?: string | undefined
                user_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              form: {
                group_id?: string | undefined
                message: string
                subject?: string | undefined
                user_email?: string | undefined
                user_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                group_id?: string | undefined
                message: string
                subject?: string | undefined
                user_email?: string | undefined
                user_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/users/:user_id': {
      $get:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/users/:user_id/display': {
      $get:
        | {
            input: { param: { user_id: string } }
            output: {
              feedback?: Feedback[] | undefined
              offer_count?: number | undefined
              posts?: Post[] | undefined
              user?: User | undefined
              wanted_count?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/users/:user_id/feedback': {
      $delete:
        | {
            input: { param: { user_id: string } }
            output: { user?: User | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { user_id: string } } & {
              form: {
                category?: string | undefined
                content?: string | undefined
                positive: number
              }
            }
            output: { feedback?: Feedback | undefined; user?: User | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              form: {
                category?: string | undefined
                content?: string | undefined
                positive: number
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { user_id: string } } & {
              form: {
                category?: string | undefined
                content?: string | undefined
                positive: number
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/users/:user_id/posts': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: {
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              group_ids?: string[] | undefined
              last_listings_view?: string | undefined
              num_pages?: number | undefined
              num_posts?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              posts?: Post[] | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:user_id/posts/search': {
      $get:
        | {
            input: { param: { user_id: string } } & {
              query: {
                search: string
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {
              end_index?: number | undefined
              group_ids?: string[] | undefined
              num_pages?: number | undefined
              num_posts?: number | undefined
              page?: number | undefined
              per_page?: number | undefined
              posts?: PostSearchResult[] | undefined
              start_index?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & {
              query: {
                search: string
                sort_by?: string | undefined
                types: string
                sources: string
                group_ids?: string | undefined
                per_page?: number | undefined
                page?: number | undefined
                device_pixel_ratio?: number | undefined
                latitude?: number | undefined
                longitude?: number | undefined
                radius?: number | undefined
                date_min?: string | undefined
                date_max?: string | undefined
                outcomes?: string | undefined
                include_reposts?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/users/:user_id/profile-image': {
      $get:
        | {
            input: { param: { user_id: string } } & { query: { default?: string | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { param: { user_id: string } } & { query: { default?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
