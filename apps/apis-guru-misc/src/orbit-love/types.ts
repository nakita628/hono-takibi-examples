type Member = {
  bio?: string | undefined
  birthday?: string | undefined
  company?: string | undefined
  devto?: string | undefined
  email?: string | undefined
  github?: string | undefined
  linkedin?: string | undefined
  location?: string | undefined
  name?: string | undefined
  pronouns?: string | undefined
  shipping_address?: string | undefined
  slug?: string | undefined
  tag_list?: string | undefined
  tags?: string | undefined
  tags_to_add?: string | undefined
  teammate?: boolean | undefined
  title?: string | undefined
  tshirt?: string | undefined
  twitter?: string | undefined
  url?: string | undefined
}
type ActivityWithMember = {
  activity_type?: string | undefined
  activity_type_key?: string | undefined
  description?: string | undefined
  key?: string | undefined
  link?: string | undefined
  link_text?: string | undefined
  occurred_at?: string | undefined
  properties?: { [x: string]: unknown } | undefined
  title: string
  weight?: string | undefined
  member?: Member | undefined
}
type PostActivityWithMember = {
  activity_type: 'content'
  occurred_at?: string | undefined
  url: string
  member?: Member | undefined
}
type Identity = {
  email?: string | undefined
  name?: string | undefined
  source: string
  source_host?: string | undefined
  uid?: string | undefined
  url?: string | undefined
  username?: string | undefined
}
type ActivityAndIdentity = {
  activity?: ActivityWithMember | PostActivityWithMember | undefined
  identity?: Identity | undefined
}
type MemberAndIdentity = { identity?: Identity | undefined; member?: Member | undefined }
type Activity = {
  activity_type?: string | undefined
  activity_type_key?: string | undefined
  description?: string | undefined
  key?: string | undefined
  link?: string | undefined
  link_text?: string | undefined
  occurred_at?: string | undefined
  properties?: { [x: string]: unknown } | undefined
  title: string
  weight?: string | undefined
}
type PostActivity = { activity_type: 'content'; occurred_at?: string | undefined; url: string }
type CustomOrPostActivity = Activity | PostActivity
type Note = { body: string }
type Organization = {
  crm_uid?: string | undefined
  crm_url: string
  deal_closed_date?: string | undefined
  lifecycle_stage: string
  owner_email?: string | undefined
  owner_name?: string | undefined
  price_plan?: string | undefined
  source: string
}
type WebhookSubscription = {
  activity_tags?: string[] | undefined
  activity_types?: string[] | undefined
  event_type: string
  member_tags?: string[] | undefined
  name: string
  secret?: string | undefined
  url: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/user': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & { '/workspaces': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/workspaces/:workspace_slug': {
      $get: {
        input: { param: { workspace_slug: string } } & {
          query: { include_orbit_level_counts?: boolean | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/activities': {
      $get: {
        input: { param: { workspace_slug: string } } & {
          query: {
            affiliation?: 'member' | 'teammate' | undefined
            member_tags?: string | undefined
            orbit?: string | undefined
            activity_type?:
              | 'discourse:topic:created'
              | 'discourse:post:liked'
              | 'discourse:user:created'
              | 'discourse:post:created'
              | 'slack:message:sent'
              | 'slack:thread:replied'
              | 'slack:channel:joined'
              | 'note:created'
              | 'post:created'
              | 'issues:opened'
              | 'discord:message:sent'
              | 'issue_comment:created'
              | 'discord:thread:replied'
              | 'custom:happened'
              | 'dev:comment'
              | 'discord:message:replied'
              | 'discord:server:joined'
              | 'insided:conversation:started'
              | 'fork:created'
              | 'insided:idea:replied'
              | 'insided:article:created'
              | 'discussions:discussion_created'
              | 'insided:question:replied'
              | 'discussions:comment'
              | 'discussions:reply'
              | 'insided:article:replied'
              | 'insided:question:asked'
              | 'insided:conversation:replied'
              | 'insided:idea:submitted'
              | 'reddit:comment'
              | 'reddit:post'
              | 'stackoverflow:answer'
              | 'linkedin:comment'
              | 'pull_requests:opened'
              | 'pull_requests:merged'
              | 'star:created'
              | 'stackoverflow:question'
              | 'tweet:sent'
              | 'twitter:followed'
              | 'youtube:comment'
              | undefined
            identity?:
              | 'github'
              | 'twitter'
              | 'email'
              | 'discourse'
              | 'linkedin'
              | 'devto'
              | 'slack'
              | 'discord'
              | undefined
            'company[]'?: string | undefined
            'title[]'?: string | undefined
            'regions[]'?: string | undefined
            'countries[]'?: string | undefined
            'cities[]'?: string | undefined
            start_date?: string | undefined
            end_date?: string | undefined
            relative?: string | undefined
            page?: string | undefined
            direction?: 'ASC' | 'DESC' | undefined
            items?: '10' | '50' | '100' | undefined
            sort?: 'occurred_at' | 'member' | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { param: { workspace_slug: string } } & { json: ActivityAndIdentity }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { workspace_slug: string } } & { json: ActivityAndIdentity }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string } } & { json: ActivityAndIdentity }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/:workspace_slug/activities/:id': {
      $get: {
        input: { param: { workspace_slug: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/activity_types': {
      $get: {
        input: { param: { workspace_slug: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/members': {
      $get: {
        input: { param: { workspace_slug: string } } & {
          query: {
            affiliation?: 'member' | 'teammate' | undefined
            member_tags?: string | undefined
            orbit?: string | undefined
            activity_type?:
              | 'discourse:topic:created'
              | 'discourse:post:liked'
              | 'discourse:user:created'
              | 'discourse:post:created'
              | 'slack:message:sent'
              | 'slack:thread:replied'
              | 'slack:channel:joined'
              | 'note:created'
              | 'post:created'
              | 'issues:opened'
              | 'discord:message:sent'
              | 'issue_comment:created'
              | 'discord:thread:replied'
              | 'custom:happened'
              | 'dev:comment'
              | 'discord:message:replied'
              | 'discord:server:joined'
              | 'insided:conversation:started'
              | 'fork:created'
              | 'insided:idea:replied'
              | 'insided:article:created'
              | 'discussions:discussion_created'
              | 'insided:question:replied'
              | 'discussions:comment'
              | 'discussions:reply'
              | 'insided:article:replied'
              | 'insided:question:asked'
              | 'insided:conversation:replied'
              | 'insided:idea:submitted'
              | 'reddit:comment'
              | 'reddit:post'
              | 'stackoverflow:answer'
              | 'linkedin:comment'
              | 'pull_requests:opened'
              | 'pull_requests:merged'
              | 'star:created'
              | 'stackoverflow:question'
              | 'tweet:sent'
              | 'twitter:followed'
              | 'youtube:comment'
              | undefined
            identity?:
              | 'github'
              | 'twitter'
              | 'email'
              | 'discourse'
              | 'linkedin'
              | 'devto'
              | 'slack'
              | 'discord'
              | undefined
            'company[]'?: string | undefined
            'title[]'?: string | undefined
            'regions[]'?: string | undefined
            'countries[]'?: string | undefined
            'cities[]'?: string | undefined
            start_date?: string | undefined
            end_date?: string | undefined
            relative?: string | undefined
            query?: string | undefined
            page?: string | undefined
            direction?: 'ASC' | 'DESC' | undefined
            items?: '10' | '50' | '100' | undefined
            activities_count_min?: string | undefined
            activities_count_max?: string | undefined
            sort?:
              | 'activities_count'
              | 'company'
              | 'created_at'
              | 'first_activity'
              | 'github_followers'
              | 'id'
              | 'last_activity'
              | 'location'
              | 'love'
              | 'name'
              | 'orbit'
              | 'reach'
              | 'title'
              | 'twitter_followers'
              | 'updated_at'
              | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { param: { workspace_slug: string } } & { json: MemberAndIdentity }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { workspace_slug: string } } & { json: MemberAndIdentity }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { workspace_slug: string } } & { json: MemberAndIdentity }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string } } & { json: MemberAndIdentity }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/:workspace_slug/members/find': {
      $get:
        | {
            input: { param: { workspace_slug: string } } & {
              query: {
                source?: string | undefined
                source_host?: string | undefined
                uid?: string | undefined
                username?: string | undefined
                email?: string | undefined
                github?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { workspace_slug: string } } & {
              query: {
                source?: string | undefined
                source_host?: string | undefined
                uid?: string | undefined
                username?: string | undefined
                email?: string | undefined
                github?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:workspace_slug/members/:member_slug': {
      $delete:
        | {
            input: { param: { workspace_slug: string; member_slug: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get: {
        input: { param: { workspace_slug: string; member_slug: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put:
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Member }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Member }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/:workspace_slug/members/:member_slug/activities': {
      $get: {
        input: { param: { workspace_slug: string; member_slug: string } } & {
          query: {
            page?: string | undefined
            direction?: 'ASC' | 'DESC' | undefined
            items?: '10' | '50' | '100' | undefined
            sort?: 'occurred_at' | 'member' | undefined
            activity_type?: string | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & {
              json: CustomOrPostActivity
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & {
              json: CustomOrPostActivity
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & {
              json: CustomOrPostActivity
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/:workspace_slug/members/:member_slug/activities/:id': {
      $delete:
        | {
            input: { param: { workspace_slug: string; member_slug: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $put:
        | {
            input: { param: { workspace_slug: string; member_slug: string; id: string } } & {
              json: Activity
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string; id: string } } & {
              json: Activity
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string; id: string } } & {
              json: Activity
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/:workspace_slug/members/:member_slug/identities': {
      $delete:
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Identity }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Identity }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Identity }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Identity }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Identity }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Identity }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/:workspace_slug/members/:member_slug/notes': {
      $get: {
        input: { param: { workspace_slug: string; member_slug: string } } & {
          query: { page?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Note }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { workspace_slug: string; member_slug: string } } & { json: Note }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/:workspace_slug/members/:member_slug/notes/:id': {
      $put: {
        input: { param: { workspace_slug: string; member_slug: string; id: string } } & {
          json: Note
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:workspace_slug/organizations': {
      $get: {
        input: { param: { workspace_slug: string } } & {
          query: {
            query?: string | undefined
            page?: string | undefined
            direction?: 'ASC' | 'DESC' | undefined
            items?: '10' | '50' | '100' | undefined
            sort?: 'name' | 'website' | 'members_count' | 'employees_count' | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/organizations/:organization_id': {
      $get: {
        input: { param: { workspace_slug: string; organization_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put:
        | {
            input: { param: { workspace_slug: string; organization_id: string } } & {
              json: Organization
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; organization_id: string } } & {
              json: Organization
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspace_slug: string; organization_id: string } } & {
              json: Organization
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/:workspace_slug/organizations/:organization_id/activities': {
      $get: {
        input: { param: { workspace_slug: string; organization_id: string } } & {
          query: {
            page?: string | undefined
            direction?: 'ASC' | 'DESC' | undefined
            items?: '10' | '50' | '100' | undefined
            sort?: 'occurred_at' | 'member' | undefined
            activity_type?:
              | 'content'
              | 'custom'
              | 'discord'
              | 'discourse'
              | 'github'
              | 'slack'
              | 'twitter'
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/organizations/:organization_id/members': {
      $get: {
        input: { param: { workspace_slug: string; organization_id: string } } & {
          query: { page?: string | undefined; items?: '10' | '50' | '100' | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/reports': {
      $get: {
        input: { param: { workspace_slug: string } } & {
          query: {
            start_date?: string | undefined
            end_date?: string | undefined
            relative?: string | undefined
            properties?: string | undefined
            activity_type?: string | undefined
            type?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:workspace_slug/webhooks': {
      $get: {
        input: { param: { workspace_slug: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post:
        | {
            input: { param: { workspace_slug: string } } & { json: WebhookSubscription }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { workspace_slug: string } } & { json: WebhookSubscription }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/:workspace_slug/webhooks/:id': {
      $delete:
        | {
            input: { param: { workspace_slug: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; id: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get: {
        input: { param: { workspace_slug: string; id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put:
        | {
            input: { param: { workspace_slug: string; id: string } } & { json: WebhookSubscription }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspace_slug: string; id: string } } & { json: WebhookSubscription }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  },
  '/'
>
export default routes
