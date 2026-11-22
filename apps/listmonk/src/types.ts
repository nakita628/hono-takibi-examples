type ServerConfig = {
  data?:
    | {
        messengers?: string[] | undefined
        langs?: { code?: string | undefined; name?: string | undefined }[] | undefined
        lang?: string | undefined
        update?: string | undefined
        needs_restart?: boolean | undefined
        version?: string | undefined
      }
    | undefined
}
type LanguagePack = {
  data?: { '_.code'?: string | undefined; '_.name'?: string | undefined } | undefined
}
type DashboardChart = {
  link_clicks?: { count?: number | undefined; date?: string | undefined }[] | undefined
  campaign_views?: { count?: number | undefined; date?: string | undefined }[] | undefined
}
type DashboardCount = {
  data?:
    | {
        subscribers?:
          | {
              total?: number | undefined
              blocklisted?: { [x: string]: unknown } | undefined
              orphans?: number | undefined
            }
          | undefined
        lists?:
          | {
              total?: number | undefined
              private?: number | undefined
              public?: number | undefined
              optin_single?: number | undefined
              optin_double?: number | undefined
            }
          | undefined
        campaigns?:
          | { total?: number | undefined; by_status?: { draft?: number | undefined } | undefined }
          | undefined
        messages?: number | undefined
      }
    | undefined
}
type SMTPSettings = {
  uuid?: string | undefined
  enabled?: boolean | undefined
  host?: string | undefined
  hello_hostname?: string | undefined
  port?: number | undefined
  auth_protocol?: string | undefined
  username?: string | undefined
  email_headers?: { [x: string]: unknown }[] | undefined
  max_conns?: number | undefined
  max_msg_retries?: number | undefined
  idle_timeout?: string | undefined
  wait_timeout?: string | undefined
  tls_type?: string | undefined
  tls_skip_verify?: boolean | undefined
}
type MailBoxBounces = {
  uuid?: string | undefined
  enabled?: boolean | undefined
  type?: string | undefined
  host?: string | undefined
  port?: number | undefined
  auth_protocol?: string | undefined
  return_path?: string | undefined
  username?: string | undefined
  tls_enabled?: boolean | undefined
  tls_skip_verify?: boolean | undefined
  scan_interval?: string | undefined
}
type Settings = {
  'app.site_name'?: string | undefined
  'app.root_url'?: string | undefined
  'app.logo_url'?: string | undefined
  'app.favicon_url'?: string | undefined
  'app.from_email'?: string[] | undefined
  'app.notify_emails'?: string[] | undefined
  'app.enable_public_subscription_page'?: boolean | undefined
  'app.enable_public_archive'?: boolean | undefined
  'app.send_optin_confirmation'?: boolean | undefined
  'app.check_updates'?: boolean | undefined
  'app.lang'?: string | undefined
  'app.batch_size'?: number | undefined
  'app.concurrency'?: number | undefined
  'app.max_send_errors'?: number | undefined
  'app.message_rate'?: number | undefined
  'app.message_sliding_window'?: boolean | undefined
  'app.message_sliding_window_duration'?: string | undefined
  'app.message_sliding_window_rate'?: number | undefined
  'privacy.individual_tracking'?: boolean | undefined
  'privacy.unsubscribe_header'?: boolean | undefined
  'privacy.allow_blocklist'?: boolean | undefined
  'privacy.allow_preferences'?: boolean | undefined
  'privacy.allow_export'?: boolean | undefined
  'privacy.allow_wipe'?: boolean | undefined
  'privacy.exportable'?: string[] | undefined
  'privacy.domain_blocklist'?: { [x: string]: unknown }[] | undefined
  'upload.provider'?: string | undefined
  'upload.filesystem.upload_path'?: string | undefined
  'upload.filesystem.upload_uri'?: string | undefined
  'upload.s3.url'?: string | undefined
  'upload.s3.public_url'?: string | undefined
  'upload.s3.aws_access_key_id'?: string | undefined
  'upload.s3.aws_default_region'?: string | undefined
  'upload.s3.bucket'?: string | undefined
  'upload.s3.bucket_domain'?: string | undefined
  'upload.s3.bucket_path'?: string | undefined
  'upload.s3.bucket_type'?: string | undefined
  'upload.s3.expiry'?: string | undefined
  smtp?: SMTPSettings[] | undefined
  messengers?: { [x: string]: unknown }[] | undefined
  'bounce.enabled'?: boolean | undefined
  'bounce.webhooks_enabled'?: boolean | undefined
  'bounce.count'?: number | undefined
  'bounce.action'?: string | undefined
  'bounce.ses'?: { enabled?: boolean | undefined; topic_arns?: string[] | undefined } | undefined
  'bounce.azure'?:
    | {
        enabled?: boolean | undefined
        shared_secret?: string | undefined
        shared_secret_header?: string | undefined
      }
    | undefined
  'bounce.sendgrid'?: { enabled?: boolean | undefined; key?: string | undefined } | undefined
  'bounce.forwardemail'?: { enabled?: boolean | undefined; key?: string | undefined } | undefined
  'bounce.postmark'?:
    | {
        enabled?: boolean | undefined
        username?: string | undefined
        password?: string | undefined
      }
    | undefined
  'bounce.lettermint'?: { enabled?: boolean | undefined; key?: string | undefined } | undefined
  'bounce.mailboxes'?: MailBoxBounces[] | undefined
  'appearance.admin.custom_css'?: string | undefined
  'appearance.admin.custom_js'?: string | undefined
  'appearance.public.custom_css'?: string | undefined
  'appearance.public.custom_js'?: string | undefined
}
type SMTPTest = {
  uuid?: string | undefined
  enabled?: boolean | undefined
  host?: string | undefined
  hello_hostname?: string | undefined
  port?: number | undefined
  auth_protocol?: string | undefined
  username?: string | undefined
  email_headers?: { [x: string]: unknown }[] | undefined
  max_conns?: number | undefined
  max_msg_retries?: number | undefined
  idle_timeout?: string | undefined
  wait_timeout?: string | undefined
  tls_type?: string | undefined
  tls_skip_verify?: boolean | undefined
  strEmailHeaders?: string | undefined
  password?: string | undefined
  email?: string | undefined
}
type Subscriber = {
  id?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  uuid?: string | undefined
  email?: string | undefined
  name?: string | undefined
  attribs?: { [x: string]: unknown } | undefined
  status?: string | undefined
  lists?:
    | {
        subscription_status?: string | undefined
        id?: number | undefined
        uuid?: string | undefined
        name?: string | undefined
        type?: string | undefined
        tags?: string[] | undefined
        created_at?: string | undefined
        updated_at?: string | undefined
      }[]
    | undefined
}
type NewSubscriber = {
  email?: string | undefined
  name?: string | undefined
  status?: string | undefined
  lists?: number[] | undefined
  list_uuids?: string[] | undefined
  preconfirm_subscriptions?: boolean | undefined
  attribs?: { [x: string]: unknown } | undefined
}
type UpdateSubscriber = {
  email?: string | undefined
  name?: string | undefined
  status?: string | undefined
  lists?: number[] | undefined
  list_uuids?: string[] | undefined
  preconfirm_subscriptions?: boolean | undefined
  attribs?: { [x: string]: unknown } | undefined
}
type SubscriberQueryRequest = {
  query?: string | undefined
  ids?: number[] | undefined
  action?: 'add' | 'remove' | 'unsubscribe' | undefined
  target_list_ids?: number | undefined
  status?: 'confirmed' | 'unconfirmed' | 'unsubscribed' | undefined
}
type SubscriberProfile = {
  id?: number | undefined
  uuid?: string | undefined
  email?: string | undefined
  name?: string | undefined
  attribs?: { [x: string]: unknown } | undefined
  status?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type Subscriptions = {
  subscription_status?: string | undefined
  name?: string | undefined
  type?: string | undefined
  created_at?: string | undefined
}
type SubscriberData = {
  email?: string | undefined
  profile?: SubscriberProfile[] | undefined
  subscriptions?: Subscriptions[] | undefined
  campaign_views?: { [x: string]: unknown }[] | undefined
  link_clicks?: { [x: string]: unknown }[] | undefined
}
type Bounce = {
  results?:
    | {
        id?: number | undefined
        type?: string | undefined
        source?: string | undefined
        meta?: { [x: string]: unknown } | undefined
        created_at?: string | undefined
        email?: string | undefined
        subscriber_uuid?: string | undefined
        subscriber_id?: number | undefined
        campaign?: { id?: number | undefined; name?: string | undefined } | undefined
        campaign_uuid?: string | undefined
        total?: number | undefined
      }[]
    | undefined
}
type List = {
  id?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  uuid?: string | undefined
  name?: string | undefined
  type?: string | undefined
  optin?: string | undefined
  tags?: string[] | undefined
  subscriber_count?: number | undefined
  description?: string | undefined
}
type NewList = {
  name?: string | undefined
  type?: 'public' | 'private' | undefined
  optin?: 'single' | 'double' | undefined
  tags?: string[] | undefined
  description?: string | undefined
}
type ImportStatus = {
  data?:
    | {
        name?: string | undefined
        total?: number | undefined
        imported?: number | undefined
        status?: string | undefined
      }
    | undefined
}
type Campaign = {
  id?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  CampaignID?: number | undefined
  views?: number | undefined
  clicks?: number | undefined
  lists?: { id?: number | undefined; name?: string | undefined }[] | undefined
  started_at?: string | undefined
  to_send?: number | undefined
  sent?: number | undefined
  uuid?: string | undefined
  type?: 'regular' | 'optin' | undefined
  name?: string | undefined
  subject?: string | undefined
  from_email?: string | undefined
  body?: string | undefined
  send_at?: string | undefined
  status?: string | undefined
  content_type?: 'richtext' | 'html' | 'markdown' | 'plain' | undefined
  tags?: string[] | undefined
  template_id?: number | undefined
  messenger?: string | undefined
}
type CampaignRequest = {
  name?: string | undefined
  subject?: string | undefined
  lists?: number[] | undefined
  from_email?: string | undefined
  content_type?: string | undefined
  messenger?: string | undefined
  type?: string | undefined
  tags?: string[] | undefined
  send_later?: boolean | undefined
  send_at?:
    | { headers?: { [x: string]: unknown }[] | undefined; template_id?: number | undefined }
    | undefined
}
type CampaignUpdate = {
  name?: string | undefined
  subject?: string | undefined
  lists?: number[] | undefined
  from_email?: string | undefined
  messenger?: string | undefined
  type?: string | undefined
  tags?: string[] | undefined
  send_later?: boolean | undefined
  send_at?: { [x: string]: unknown } | undefined
  headers?: { [x: string]: unknown }[] | undefined
  template_id?: number | undefined
  content_type?: string | undefined
  body?: string | undefined
  altbody?: string | undefined
  archive?: boolean | undefined
  archive_template_id?: number | undefined
  archive_meta?: { [x: string]: unknown } | undefined
}
type CampaignStats = {
  id?: number | undefined
  status?: string | undefined
  to_send?: number | undefined
  sent?: number | undefined
  started_at?: string | undefined
  updated_at?: string | undefined
  rate?: number | undefined
  net_rate?: number | undefined
}
type CampaignAnalyticsCount = {
  campaign_id?: number | undefined
  count?: number | undefined
  timestamp?: string | undefined
}
type CampaignContentRequest = {
  id?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  CampaignID?: number | undefined
  views?: number | undefined
  clicks?: number | undefined
  lists?: { id?: number | undefined; name?: string | undefined }[] | undefined
  started_at?: string | undefined
  to_send?: number | undefined
  sent?: number | undefined
  uuid?: string | undefined
  type?: 'regular' | 'optin' | undefined
  name?: string | undefined
  subject?: string | undefined
  from_email?: string | undefined
  body?: string | undefined
  send_at?: string | undefined
  status?: string | undefined
  content_type?: 'richtext' | 'html' | 'markdown' | 'plain' | undefined
  tags?: string[] | undefined
  template_id?: number | undefined
  messenger?: string | undefined
  from?: string | undefined
  to?: string | undefined
}
type MediaFileObject = {
  id?: number | undefined
  uuid?: string | undefined
  filename?: string | undefined
  content_type?: string | undefined
  created_at?: string | undefined
  thumb_url?: string | undefined
  thumb_uri?: string | undefined
  provider?: string | undefined
  meta?: { [x: string]: unknown } | undefined
  url?: string | undefined
  uri?: string | undefined
}
type Template = {
  id?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
  body?: string | undefined
  body_source?: string | undefined
  subject?: string | undefined
  type?: string | undefined
  is_default?: boolean | undefined
}
type NewTemplate = {
  name: string
  type: 'campaign' | 'campaign_visual' | 'tx'
  subject?: string | undefined
  body_source?: string | undefined
  body: string
}
type UpdateTemplate = {
  name?: string | undefined
  type?: 'campaign' | 'campaign_visual' | 'tx' | undefined
  subject?: string | undefined
  body_source?: string | undefined
  body?: string | undefined
}
type TransactionalMessage = {
  subscriber_email?: string | undefined
  subscriber_id?: number | undefined
  template_id?: number | undefined
  from_email?: string | undefined
  data?: { [x: string]: unknown } | undefined
  headers?: { [x: string]: unknown }[] | undefined
  messenger?: string | undefined
  content_type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/health': {
      $get: { input: {}; output: { data?: boolean | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/config': {
      $get: {
        input: {}
        output: { data?: ServerConfig | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lang/:lang': {
      $get: {
        input: { param: { lang: string } }
        output: { data?: LanguagePack | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dashboard/charts': {
      $get: {
        input: {}
        output: { data?: DashboardChart | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dashboard/counts': {
      $get: {
        input: {}
        output: { data?: DashboardCount | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings': {
      $get: {
        input: {}
        output: { data?: Settings | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { json: Settings }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/settings/smtp/test': {
      $post: {
        input: { json: SMTPTest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/reload': {
      $post: {
        input: {}
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/logs': {
      $get: {
        input: {}
        output: { data?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | 'all' | undefined
            query?: string | undefined
            order_by?: 'name' | 'status' | 'created_at' | 'updated_at' | undefined
            order?: 'ASC' | 'DESC' | undefined
            subscription_status?: string | undefined
            list_id?: number[] | undefined
          }
        }
        output: {
          data?:
            | {
                results?: Subscriber[] | undefined
                query?: string | undefined
                total?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: NewSubscriber }
        output: { data?: Subscriber | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { query: { id: string } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/:id': {
      $get: {
        input: { param: { id: number } }
        output: { data?: Subscriber | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: UpdateSubscriber }
        output: { data?: Subscriber | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/lists': {
      $put: {
        input: { json: SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/lists/:id': {
      $put: {
        input: { param: { id: number } } & { json: SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/blocklist': {
      $put: {
        input: { json: SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/:id/blocklist': {
      $put: {
        input: { param: { id: number } } & { json: SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/:id/export': {
      $get: {
        input: { param: { id: number } }
        output: SubscriberData
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/:id/bounces': {
      $get: {
        input: { param: { id: number } }
        output: { data?: Bounce[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/:id/optin': {
      $post: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/query/delete': {
      $post: {
        input: { json: string | SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/query/blocklist': {
      $put: {
        input: { json: string | SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/subscribers/query/lists': {
      $put: {
        input: { json: string | SubscriberQueryRequest }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bounces': {
      $get: {
        input: {
          query: {
            campaign_id?: number | undefined
            page?: number | undefined
            per_page?: number | 'all' | undefined
            source?: string | undefined
            order_by?: 'email' | 'campaign_name' | 'source' | 'created_at' | undefined
            order?: 'asc' | 'desc' | undefined
          }
        }
        output: {
          data?:
            | {
                results?: Bounce[] | undefined
                query?: string | undefined
                total?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { query: { all?: boolean | undefined; id?: string | undefined } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bounces/:id': {
      $get: {
        input: { param: { id: number } }
        output: { data?: Bounce | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lists': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            per_page?: number | 'all' | undefined
            query?: string | undefined
            order_by?: 'name' | 'status' | 'created_at' | 'updated_at' | undefined
            order?: 'ASC' | 'DESC' | undefined
            minimal?: boolean | undefined
            tag?: string[] | undefined
          }
        }
        output: {
          data?:
            | {
                results?: List[] | undefined
                total?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: NewList }
        output: { data?: List | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lists/:list_id': {
      $get: {
        input: { param: { list_id: number } }
        output: { data?: List | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { list_id: number } } & { json: List }
        output: { data?: List | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { list_id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/import/subscribers': {
      $get: {
        input: {}
        output: { data?: ImportStatus | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { form: { params?: string | undefined; file?: File | undefined } }
        output: { data?: ImportStatus | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {}
        output: { data?: ImportStatus | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/import/subscribers/logs': {
      $get: { input: {}; output: { data?: string | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/campaigns': {
      $get: {
        input: {
          query: {
            status?: ('scheduled' | 'running' | 'paused' | 'cancelled')[] | undefined
            no_body?: boolean | undefined
            page?: number | undefined
            per_page?: number | 'all' | undefined
            tags?: string[] | undefined
            order?: 'ASC' | 'DESC' | undefined
            order_by?: 'name' | 'status' | 'created_at' | 'updated_at' | undefined
            query?: string | undefined
          }
        }
        output: {
          data?:
            | {
                results?: Campaign[] | undefined
                query?: string | undefined
                total?: number | undefined
                per_page?: number | undefined
                page?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CampaignRequest }
        output: { data?: CampaignUpdate | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/:id': {
      $get: {
        input: { param: { id: number } } & { query: { no_body?: boolean | undefined } }
        output: { data?: Campaign | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: CampaignRequest }
        output: { data?: CampaignUpdate | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/running/stats': {
      $get: {
        input: { query: { campaign_id: number } }
        output: { data?: CampaignStats[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/analytics/:type': {
      $get: {
        input: { param: { type: 'links' | 'views' | 'clicks' | 'bounces' } } & {
          query: { from: string; to: string; id: string }
        }
        output: { data?: CampaignAnalyticsCount[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/:id/preview': {
      $get: { input: { param: { id: number } }; output: string; outputFormat: 'text'; status: 200 }
      $post: {
        input: { param: { id: number } } & {
          json: {
            template_id?: number | undefined
            content_type?: string | undefined
            body?: string | undefined
          }
        } & {
          form: {
            template_id?: number | undefined
            content_type?: string | undefined
            body?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/campaigns/:id/text': {
      $post: {
        input: { param: { id: number } } & {
          json: {
            template_id?: number | undefined
            content_type?: string | undefined
            body?: string | undefined
          }
        } & {
          form: {
            template_id?: number | undefined
            content_type?: string | undefined
            body?: string | undefined
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/campaigns/:id/status': {
      $put: {
        input: { param: { id: number } } & {
          json: { status?: 'scheduled' | 'running' | 'paused' | 'cancelled' | undefined }
        }
        output: { data?: Campaign | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/:id/archive': {
      $put: {
        input: { param: { id: number } } & {
          json: {
            archive?: boolean | undefined
            archive_template_id?: number | undefined
            archive_meta?: { [x: string]: unknown } | undefined
          }
        }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/:id/content': {
      $post: {
        input: { param: { id: number } } & { json: CampaignContentRequest }
        output: { data?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/campaigns/:id/test': {
      $post: {
        input: { param: { id: number } } & {
          json: { template_id?: number | undefined } | CampaignRequest
        } & { form: { template_id?: number | undefined } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media': {
      $get: {
        input: {}
        output: { data?: MediaFileObject[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { form: File }
        output: { data?: MediaFileObject | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media/:id': {
      $get: {
        input: { param: { id: number } }
        output: { data?: MediaFileObject | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates': {
      $get: {
        input: { query: { no_body: boolean } }
        output: { data?: Template[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: NewTemplate }
        output: { data?: Template | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/:id': {
      $get: {
        input: { param: { id: number } } & { query: { no_body?: boolean | undefined } }
        output: { data?: Template | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: UpdateTemplate }
        output: { data?: Template | undefined }
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: number } }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/templates/preview': {
      $post: {
        input: { json: { template_type?: string | undefined; body?: string | undefined } } & {
          form: { template_type?: string | undefined; body?: string | undefined }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/templates/:id/preview': {
      $get: {
        input: { param: { id: number } } & {
          json: { template_type?: string | undefined; body?: string | undefined }
        } & { form: { template_type?: string | undefined; body?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/templates/:id/default': {
      $put: {
        input: { param: { id: number } }
        output: Template
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tx': {
      $post: {
        input: { json: TransactionalMessage }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/maintenance/subscribers/:type': {
      $delete: {
        input: { param: { type: string } }
        output: { data?: { count?: number | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/maintenance/analytics/:type': {
      $delete: {
        input: { param: { type: string } } & { json: { before_date?: string | undefined } } & {
          form: { before_date?: string | undefined }
        }
        output: { data?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/maintenance/subscriptions/unconfirmed': {
      $delete: {
        input: { json: { before_date?: string | undefined } } & {
          form: { before_date?: string | undefined }
        }
        output: { data?: { count?: number | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/lists': {
      $get: {
        input: {}
        output: { uuid?: string | undefined; name?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/subscription': {
      $post: {
        input: {
          json: {
            name?: string | undefined
            email?: string | undefined
            list_uuids?: string[] | undefined
          }
        }
        output: { has_optin?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
