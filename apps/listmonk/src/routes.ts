import { createRoute, z } from '@hono/zod-openapi'

const SMTPSettingsSchema = z
  .object({
    uuid: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    host: z.string().exactOptional(),
    hello_hostname: z.string().exactOptional(),
    port: z.int().exactOptional(),
    auth_protocol: z.string().exactOptional(),
    username: z.string().exactOptional(),
    email_headers: z.array(z.object({})).exactOptional(),
    max_conns: z.int().exactOptional(),
    max_msg_retries: z.int().exactOptional(),
    idle_timeout: z.string().exactOptional(),
    wait_timeout: z.string().exactOptional(),
    tls_type: z.string().exactOptional(),
    tls_skip_verify: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SMTPSettings')

const MailBoxBouncesSchema = z
  .object({
    uuid: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
    host: z.string().exactOptional(),
    port: z.int().exactOptional(),
    auth_protocol: z.string().exactOptional(),
    return_path: z.string().exactOptional(),
    username: z.string().exactOptional(),
    tls_enabled: z.boolean().exactOptional(),
    tls_skip_verify: z.boolean().exactOptional(),
    scan_interval: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MailBoxBounces')

type SettingsType = {
  'app.site_name'?: string
  'app.root_url'?: string
  'app.logo_url'?: string
  'app.favicon_url'?: string
  'app.from_email'?: string[]
  'app.notify_emails'?: string[]
  'app.enable_public_subscription_page'?: boolean
  'app.enable_public_archive'?: boolean
  'app.send_optin_confirmation'?: boolean
  'app.check_updates'?: boolean
  'app.lang'?: string
  'app.batch_size'?: number
  'app.concurrency'?: number
  'app.max_send_errors'?: number
  'app.message_rate'?: number
  'app.message_sliding_window'?: boolean
  'app.message_sliding_window_duration'?: string
  'app.message_sliding_window_rate'?: number
  'privacy.individual_tracking'?: boolean
  'privacy.unsubscribe_header'?: boolean
  'privacy.allow_blocklist'?: boolean
  'privacy.allow_preferences'?: boolean
  'privacy.allow_export'?: boolean
  'privacy.allow_wipe'?: boolean
  'privacy.exportable'?: string[]
  'privacy.domain_blocklist'?: { [key: string]: unknown }[]
  'upload.provider'?: string
  'upload.filesystem.upload_path'?: string
  'upload.filesystem.upload_uri'?: string
  'upload.s3.url'?: string
  'upload.s3.public_url'?: string
  'upload.s3.aws_access_key_id'?: string
  'upload.s3.aws_default_region'?: string
  'upload.s3.bucket'?: string
  'upload.s3.bucket_domain'?: string
  'upload.s3.bucket_path'?: string
  'upload.s3.bucket_type'?: string
  'upload.s3.expiry'?: string
  smtp?: z.infer<typeof SMTPSettingsSchema>[]
  messengers?: { [key: string]: unknown }[]
  'bounce.enabled'?: boolean
  'bounce.webhooks_enabled'?: boolean
  'bounce.count'?: number
  'bounce.action'?: string
  'bounce.ses_enabled'?: boolean
  'bounce.azure.enabled'?: boolean
  'bounce.azure.shared_secret'?: string
  'bounce.azure.shared_secret_header'?: string
  'bounce.sendgrid_enabled'?: boolean
  'bounce.sendgrid_key'?: string
  'bounce.forwardemail_enabled'?: boolean
  'bounce.forwardemail_key'?: string
  'bounce.postmark_enabled'?: boolean
  'bounce.postmark_username'?: string
  'bounce.postmark_password'?: string
  'bounce.mailboxes'?: z.infer<typeof MailBoxBouncesSchema>[]
  'appearance.admin.custom_css'?: string
  'appearance.admin.custom_js'?: string
  'appearance.public.custom_css'?: string
  'appearance.public.custom_js'?: string
}

const LanguagePackSchema = z
  .object({
    data: z
      .object({ '_.code': z.string().exactOptional(), '_.name': z.string().exactOptional() })
      .catchall(z.string())
      .exactOptional()
      .openapi({
        description:
          'Translation keys and localized strings. See i18n/en.json for the current keys.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LanguagePack')

const ServerConfigSchema = z
  .object({
    data: z
      .object({
        messengers: z.array(z.string()).exactOptional(),
        langs: z
          .array(
            z
              .object({ code: z.string().exactOptional(), name: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        lang: z.string().exactOptional(),
        update: z.string().exactOptional(),
        needs_restart: z.boolean().exactOptional(),
        version: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ServerConfig')

const DashboardChartSchema = z
  .object({
    link_clicks: z
      .array(
        z
          .object({ count: z.int().exactOptional(), date: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    campaign_views: z
      .array(
        z
          .object({ count: z.int().exactOptional(), date: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardChart')

const DashboardCountSchema = z
  .object({
    data: z
      .object({
        subscribers: z
          .object({
            total: z.int().exactOptional(),
            blocklisted: z.object({}).exactOptional(),
            orphans: z.int().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        lists: z
          .object({
            total: z.int().exactOptional(),
            private: z.int().exactOptional(),
            public: z.int().exactOptional(),
            optin_single: z.int().exactOptional(),
            optin_double: z.int().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        campaigns: z
          .object({
            total: z.int().exactOptional(),
            by_status: z
              .object({ draft: z.int().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        messages: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('DashboardCount')

const SMTPTestSchema = z
  .object({
    uuid: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    host: z.string().exactOptional(),
    hello_hostname: z.string().exactOptional(),
    port: z.int().exactOptional(),
    auth_protocol: z.string().exactOptional(),
    username: z.string().exactOptional(),
    email_headers: z.array(z.object({})).exactOptional(),
    max_conns: z.int().exactOptional(),
    max_msg_retries: z.int().exactOptional(),
    idle_timeout: z.string().exactOptional(),
    wait_timeout: z.string().exactOptional(),
    tls_type: z.string().exactOptional(),
    tls_skip_verify: z.boolean().exactOptional(),
    strEmailHeaders: z.string().exactOptional(),
    password: z.string().exactOptional(),
    email: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SMTPTest')

const SettingsSchema: z.ZodType<SettingsType> = z
  .lazy(() =>
    z
      .object({
        'app.site_name': z.string().exactOptional(),
        'app.root_url': z.string().exactOptional(),
        'app.logo_url': z.string().exactOptional(),
        'app.favicon_url': z.string().exactOptional(),
        'app.from_email': z
          .array(z.string().max(2000))
          .min(1)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              'Sender addresses. The first must be a literal email address and is the default for campaigns and system emails.',
          }),
        'app.notify_emails': z.array(z.string()).exactOptional(),
        'app.enable_public_subscription_page': z.boolean().exactOptional(),
        'app.enable_public_archive': z.boolean().exactOptional(),
        'app.send_optin_confirmation': z.boolean().exactOptional(),
        'app.check_updates': z.boolean().exactOptional(),
        'app.lang': z.string().exactOptional(),
        'app.batch_size': z.int().exactOptional(),
        'app.concurrency': z.int().exactOptional(),
        'app.max_send_errors': z.int().exactOptional(),
        'app.message_rate': z.int().exactOptional(),
        'app.message_sliding_window': z.boolean().exactOptional(),
        'app.message_sliding_window_duration': z.string().exactOptional(),
        'app.message_sliding_window_rate': z.int().exactOptional(),
        'privacy.individual_tracking': z.boolean().exactOptional(),
        'privacy.unsubscribe_header': z.boolean().exactOptional(),
        'privacy.allow_blocklist': z.boolean().exactOptional(),
        'privacy.allow_preferences': z.boolean().exactOptional(),
        'privacy.allow_export': z.boolean().exactOptional(),
        'privacy.allow_wipe': z.boolean().exactOptional(),
        'privacy.exportable': z.array(z.string()).exactOptional(),
        'privacy.domain_blocklist': z.array(z.object({})).exactOptional(),
        'upload.provider': z.string().exactOptional(),
        'upload.filesystem.upload_path': z.string().exactOptional(),
        'upload.filesystem.upload_uri': z.string().exactOptional(),
        'upload.s3.url': z.string().exactOptional(),
        'upload.s3.public_url': z.string().exactOptional(),
        'upload.s3.aws_access_key_id': z.string().exactOptional(),
        'upload.s3.aws_default_region': z.string().exactOptional(),
        'upload.s3.bucket': z.string().exactOptional(),
        'upload.s3.bucket_domain': z.string().exactOptional(),
        'upload.s3.bucket_path': z.string().exactOptional(),
        'upload.s3.bucket_type': z.string().exactOptional(),
        'upload.s3.expiry': z.string().exactOptional(),
        smtp: z.array(SMTPSettingsSchema).exactOptional(),
        messengers: z.array(z.object({})).exactOptional(),
        'bounce.enabled': z.boolean().exactOptional(),
        'bounce.webhooks_enabled': z.boolean().exactOptional(),
        'bounce.count': z.int().exactOptional(),
        'bounce.action': z.string().exactOptional(),
        'bounce.ses_enabled': z.boolean().exactOptional(),
        'bounce.azure.enabled': z.boolean().exactOptional(),
        'bounce.azure.shared_secret': z.string().exactOptional(),
        'bounce.azure.shared_secret_header': z.string().exactOptional(),
        'bounce.sendgrid_enabled': z.boolean().exactOptional(),
        'bounce.sendgrid_key': z.string().exactOptional(),
        'bounce.forwardemail_enabled': z.boolean().exactOptional(),
        'bounce.forwardemail_key': z.string().exactOptional(),
        'bounce.postmark_enabled': z.boolean().exactOptional(),
        'bounce.postmark_username': z.string().exactOptional(),
        'bounce.postmark_password': z.string().exactOptional(),
        'bounce.mailboxes': z.array(MailBoxBouncesSchema).exactOptional(),
        'appearance.admin.custom_css': z.string().exactOptional(),
        'appearance.admin.custom_js': z.string().exactOptional(),
        'appearance.public.custom_css': z.string().exactOptional(),
        'appearance.public.custom_js': z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Settings')

const SubscriberProfileSchema = z
  .object({
    id: z.int().exactOptional(),
    uuid: z.string().exactOptional(),
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
    attribs: z.looseObject({}).exactOptional(),
    status: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriberProfile')

const SubscriptionsSchema = z
  .object({
    subscription_status: z.string().exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Subscriptions')

const SubscriberDataSchema = z
  .object({
    email: z.string().exactOptional(),
    profile: z.array(SubscriberProfileSchema).exactOptional(),
    subscriptions: z.array(SubscriptionsSchema).exactOptional(),
    campaign_views: z.array(z.object({})).exactOptional(),
    link_clicks: z.array(z.object({})).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriberData')

const SubscriberSchema = z
  .object({
    id: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    uuid: z.string().exactOptional(),
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
    attribs: z.looseObject({}).exactOptional(),
    status: z.string().exactOptional(),
    lists: z
      .array(
        z
          .object({
            subscription_status: z.string().exactOptional(),
            id: z.int().exactOptional(),
            uuid: z.string().exactOptional(),
            name: z.string().exactOptional(),
            type: z.string().exactOptional(),
            tags: z.array(z.string()).exactOptional(),
            created_at: z.string().exactOptional(),
            updated_at: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Subscriber')

const NewSubscriberSchema = z
  .object({
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
    status: z.string().exactOptional(),
    lists: z.array(z.int()).exactOptional(),
    list_uuids: z.array(z.string()).exactOptional(),
    preconfirm_subscriptions: z.boolean().exactOptional(),
    attribs: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewSubscriber')

const UpdateSubscriberSchema = z
  .object({
    email: z.string().exactOptional(),
    name: z.string().exactOptional(),
    status: z.string().exactOptional(),
    lists: z.array(z.int()).exactOptional(),
    list_uuids: z.array(z.string()).exactOptional(),
    preconfirm_subscriptions: z.boolean().exactOptional(),
    attribs: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateSubscriber')

const SubscriberQueryRequestSchema = z
  .object({
    query: z.string().exactOptional(),
    ids: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'The ids of the subscribers to be modified.' }),
    action: z
      .enum(['add', 'remove', 'unsubscribe'])
      .exactOptional()
      .openapi({ description: 'Whether to add, remove, or unsubscribe the users.' }),
    target_list_ids: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ids of the lists to be modified.' }),
    status: z
      .enum(['confirmed', 'unconfirmed', 'unsubscribed'])
      .exactOptional()
      .openapi({ description: 'confirmed, unconfirmed, or unsubscribed status.' }),
  })
  .openapi({ required: [] })
  .openapi('SubscriberQueryRequest')

const BounceSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            id: z.int().exactOptional(),
            type: z.string().exactOptional(),
            source: z.string().exactOptional(),
            meta: z.object({}).exactOptional(),
            created_at: z.string().exactOptional(),
            email: z.string().exactOptional(),
            subscriber_uuid: z.string().exactOptional(),
            subscriber_id: z.int().exactOptional(),
            campaign: z
              .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
              .exactOptional()
              .openapi({ required: [] }),
            campaign_uuid: z.string().exactOptional(),
            total: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Bounce')

const ListSchema = z
  .object({
    id: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    uuid: z.string().exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
    optin: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    subscriber_count: z.int().exactOptional(),
    description: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('List')

const NewListSchema = z
  .object({
    name: z.string().exactOptional(),
    type: z.enum(['public', 'private']).exactOptional(),
    optin: z.enum(['single', 'double']).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    description: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NewList')

const ImportStatusSchema = z
  .object({
    data: z
      .object({
        name: z.string().exactOptional(),
        total: z.int().exactOptional(),
        imported: z.int().exactOptional(),
        status: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ImportStatus')

const CampaignSchema = z
  .object({
    id: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    CampaignID: z.int().exactOptional(),
    views: z.int().exactOptional(),
    clicks: z.int().exactOptional(),
    lists: z
      .array(
        z
          .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    started_at: z.string().exactOptional(),
    to_send: z.int().exactOptional(),
    sent: z.int().exactOptional(),
    uuid: z.string().exactOptional(),
    type: z.enum(['regular', 'optin']).exactOptional(),
    name: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    from_email: z.string().exactOptional(),
    body: z.string().exactOptional(),
    send_at: z.string().exactOptional(),
    status: z.string().exactOptional(),
    content_type: z.enum(['richtext', 'html', 'markdown', 'plain']).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    template_id: z.int().exactOptional(),
    messenger: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Campaign')

const CampaignContentRequestSchema = z
  .object({
    id: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    CampaignID: z.int().exactOptional(),
    views: z.int().exactOptional(),
    clicks: z.int().exactOptional(),
    lists: z
      .array(
        z
          .object({ id: z.int().exactOptional(), name: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    started_at: z.string().exactOptional(),
    to_send: z.int().exactOptional(),
    sent: z.int().exactOptional(),
    uuid: z.string().exactOptional(),
    type: z.enum(['regular', 'optin']).exactOptional(),
    name: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    from_email: z.string().exactOptional(),
    body: z.string().exactOptional(),
    send_at: z.string().exactOptional(),
    status: z.string().exactOptional(),
    content_type: z.enum(['richtext', 'html', 'markdown', 'plain']).exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    template_id: z.int().exactOptional(),
    messenger: z.string().exactOptional(),
    from: z.string().exactOptional(),
    to: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CampaignContentRequest')

const CampaignRequestSchema = z
  .object({
    name: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    lists: z.array(z.number()).exactOptional(),
    from_email: z.string().exactOptional(),
    content_type: z.string().exactOptional(),
    messenger: z.string().exactOptional(),
    type: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    send_later: z.boolean().exactOptional(),
    send_at: z
      .object({
        headers: z.array(z.object({})).exactOptional(),
        template_id: z.number().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CampaignRequest')

const CampaignUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    lists: z.array(z.int()).exactOptional(),
    from_email: z.string().exactOptional(),
    messenger: z.string().exactOptional(),
    type: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    send_later: z.boolean().exactOptional(),
    send_at: z.object({}).exactOptional(),
    headers: z.array(z.object({})).exactOptional(),
    template_id: z.int().exactOptional(),
    content_type: z.string().exactOptional(),
    body: z.string().exactOptional(),
    altbody: z.string().exactOptional(),
    archive: z.boolean().exactOptional(),
    archive_template_id: z.int().exactOptional(),
    archive_meta: z.object({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CampaignUpdate')

const CampaignStatsSchema = z
  .object({
    id: z.int().exactOptional(),
    status: z.string().exactOptional(),
    to_send: z.int().exactOptional(),
    sent: z.int().exactOptional(),
    started_at: z.iso.date().exactOptional(),
    updated_at: z.iso.date().exactOptional(),
    rate: z.int().exactOptional(),
    net_rate: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CampaignStats')

const CampaignAnalyticsCountSchema = z
  .object({
    campaign_id: z.int().exactOptional(),
    count: z.int().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CampaignAnalyticsCount')

const MediaFileObjectSchema = z
  .object({
    id: z.int().exactOptional(),
    uuid: z.string().exactOptional(),
    filename: z.string().exactOptional(),
    content_type: z.string().exactOptional(),
    created_at: z.string().exactOptional(),
    thumb_url: z.string().exactOptional(),
    thumb_uri: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    meta: z.object({}).exactOptional(),
    url: z.string().exactOptional(),
    uri: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MediaFileObject')

const TemplateSchema = z
  .object({
    id: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    updated_at: z.string().exactOptional(),
    name: z.string().exactOptional(),
    body: z.string().exactOptional(),
    body_source: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    type: z.string().exactOptional(),
    is_default: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Template')

const NewTemplateSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the template' }),
    type: z
      .enum(['campaign', 'campaign_visual', 'tx'])
      .openapi({ description: 'Type of the template' }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subject line for the template (only for tx)' }),
    body_source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'JSON source for the email-builder template (only for campaign_visual)',
      }),
    body: z.string().openapi({ description: 'HTML body of the template' }),
  })
  .openapi({ required: ['name', 'type', 'body'] })
  .openapi('NewTemplate')

const UpdateTemplateSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the template' }),
    type: z
      .enum(['campaign', 'campaign_visual', 'tx'])
      .exactOptional()
      .openapi({ description: 'Type of the template' }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subject line for the template (only for tx)' }),
    body_source: z
      .string()
      .exactOptional()
      .openapi({
        description: 'JSON source for the email-builder template (only for campaign_visual)',
      }),
    body: z.string().exactOptional().openapi({ description: 'HTML body of the template' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTemplate')

const TransactionalMessageSchema = z
  .object({
    subscriber_email: z.string().exactOptional(),
    subscriber_id: z.int().exactOptional(),
    template_id: z.int().exactOptional(),
    from_email: z.string().exactOptional(),
    data: z.object({}).exactOptional(),
    headers: z.array(z.object({})).exactOptional(),
    messenger: z.string().exactOptional(),
    content_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransactionalMessage')

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Miscellaneous'],
  description: 'healthcheck endpoint',
  operationId: 'getHealthCheck',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Miscellaneous'],
  description: 'returns general server config.',
  operationId: 'getServerConfig',
  responses: {
    200: {
      description: 'A server config object',
      content: {
        'application/json': {
          schema: z.object({ data: ServerConfigSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getLangLangRoute = createRoute({
  method: 'get',
  path: '/lang/{lang}',
  tags: ['Miscellaneous'],
  description: 'returns the JSON language pack given the language code',
  operationId: 'getI18nLang',
  request: {
    params: z.object({
      lang: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'lang',
            required: true,
            description: 'JSON language pack required',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'requested language pack',
      content: {
        'application/json': {
          schema: z.object({ data: LanguagePackSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDashboardChartsRoute = createRoute({
  method: 'get',
  path: '/dashboard/charts',
  tags: ['Miscellaneous'],
  description: 'returns chart data points to render on the dashboard.',
  operationId: 'getDashboardCharts',
  responses: {
    200: {
      description: 'chart data points',
      content: {
        'application/json': {
          schema: z
            .object({ data: DashboardChartSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDashboardCountsRoute = createRoute({
  method: 'get',
  path: '/dashboard/counts',
  tags: ['Miscellaneous'],
  description: 'returns stats counts to show on the dashboard',
  operationId: 'getDashboardCounts',
  responses: {
    200: {
      description: 'stat counts',
      content: {
        'application/json': {
          schema: z
            .object({ data: DashboardCountSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  tags: ['Settings'],
  description: 'returns settings from DB',
  operationId: 'getSettings',
  responses: {
    200: {
      description: 'settings object',
      content: {
        'application/json': {
          schema: z.object({ data: SettingsSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSettingsRoute = createRoute({
  method: 'put',
  path: '/settings',
  tags: ['Settings'],
  description: 'returns updated settings from the DB.',
  operationId: 'updateSettings',
  request: {
    body: {
      description: 'updated settings field values',
      content: { 'application/json': { schema: SettingsSchema } },
    },
  },
  responses: {
    200: {
      description: 'updated settings object',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSettingsSmtpTestRoute = createRoute({
  method: 'post',
  path: '/settings/smtp/test',
  tags: ['Settings'],
  description: 'test smtp settings',
  operationId: 'testSMTPSettings',
  request: {
    body: {
      description: 'updated SMTP settings field values',
      content: { 'application/json': { schema: SMTPTestSchema } },
    },
  },
  responses: {
    200: {
      description: 'updated SMTP test settings',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postAdminReloadRoute = createRoute({
  method: 'post',
  path: '/admin/reload',
  tags: ['Admin'],
  description: 'restarts the app',
  operationId: 'reloadApp',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getLogsRoute = createRoute({
  method: 'get',
  path: '/logs',
  tags: ['Logs'],
  description: 'returns the log entries stored in the log buffer',
  operationId: 'getLogs',
  responses: {
    200: {
      description: 'stored log entries',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(z.string()).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSubscribersRoute = createRoute({
  method: 'get',
  path: '/subscribers',
  tags: ['Subscribers'],
  description: 'returns all subscribers.',
  operationId: 'getSubscribers',
  request: {
    query: z.object({
      page: z
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
            in: 'query',
            name: 'page',
            description: 'Page number for paginated results.',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      per_page: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Number of items to return per page' }),
          z.literal('all').openapi({ description: 'Return all results without pagination' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            description:
              "Number of items per page. Use an integer for specific page size or 'all' to retrieve all results",
            required: false,
            schema: {
              oneOf: [
                { type: 'integer', description: 'Number of items to return per page' },
                {
                  type: 'string',
                  enum: ['all'],
                  description: 'Return all results without pagination',
                },
              ],
            },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description: 'query subscribers with an SQL expression.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .enum(['name', 'status', 'created_at', 'updated_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description: 'Result sorting field. Options are name, status, created_at, updated_at',
            required: false,
            schema: { type: 'string', enum: ['name', 'status', 'created_at', 'updated_at'] },
          },
        }),
      order: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'ASC|DESC Sort by ascending or descending order.',
            required: false,
            schema: { type: 'string', enum: ['ASC', 'DESC'] },
          },
        }),
      subscription_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'subscription_status',
            description: 'Subscription status to filter by if there are one or more list_ids.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      list_id: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'list_id',
            description: 'ID of lists to filter by. Repeat in the query for multiple values.',
            required: false,
            schema: { type: 'array', items: { type: 'integer' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'subscribers list',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  results: z.array(SubscriberSchema).exactOptional(),
                  query: z.string().exactOptional(),
                  total: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  page: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSubscribersRoute = createRoute({
  method: 'post',
  path: '/subscribers',
  tags: ['Subscribers'],
  description: 'handles creation of new subscriber',
  operationId: 'createSubscriber',
  request: {
    body: {
      description: 'new subscriber info',
      content: { 'application/json': { schema: NewSubscriberSchema } },
    },
  },
  responses: {
    200: {
      description: 'subscriber object',
      content: {
        'application/json': {
          schema: z.object({ data: SubscriberSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteSubscribersRoute = createRoute({
  method: 'delete',
  path: '/subscribers',
  tags: ['Subscribers'],
  description: 'handles subscribers deletion',
  operationId: 'deleteSubscriberByList',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            description: 'subscriber id/s to be deleted',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSubscribersIdRoute = createRoute({
  method: 'get',
  path: '/subscribers/{id}',
  tags: ['Subscribers'],
  description: 'handles the retrieval of a single subscriber by ID.',
  operationId: 'getSubscriberById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the subscriber you want to get.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'gets a single subscriber.',
      content: {
        'application/json': {
          schema: z.object({ data: SubscriberSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersIdRoute = createRoute({
  method: 'put',
  path: '/subscribers/{id}',
  tags: ['Subscribers'],
  description: 'modify subscriber data',
  operationId: 'updateSubscriberById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id of subscriber to update',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'new subscriber info',
      content: { 'application/json': { schema: UpdateSubscriberSchema } },
    },
  },
  responses: {
    200: {
      description: 'returns updated subscriber.',
      content: {
        'application/json': {
          schema: z.object({ data: SubscriberSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteSubscribersIdRoute = createRoute({
  method: 'delete',
  path: '/subscribers/{id}',
  tags: ['Subscribers'],
  description: 'handles subscriber deletion based on id',
  operationId: 'deleteSubscriberById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the subscriber you want to get.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersListsRoute = createRoute({
  method: 'put',
  path: '/subscribers/lists',
  tags: ['Subscribers'],
  description: 'handles bulk addition or removal of subscribers',
  operationId: 'manageSubscriberLists',
  request: {
    body: {
      description: 'The list of subscribers details to add or remove',
      content: { 'application/json': { schema: SubscriberQueryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersListsIdRoute = createRoute({
  method: 'put',
  path: '/subscribers/lists/{id}',
  tags: ['Subscribers'],
  description: 'handles bulk addition or removal of subscribers for a specified list id',
  operationId: 'manageSubscriberListById',
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
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id of list you want to update',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      description: 'The list of subscribers to add or remove',
      content: { 'application/json': { schema: SubscriberQueryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersBlocklistRoute = createRoute({
  method: 'put',
  path: '/subscribers/blocklist',
  tags: ['Subscribers'],
  description: 'handles blocklisting of subscriber list',
  operationId: 'manageBlocklistBySubscriberList',
  request: {
    body: {
      description: 'The list of subscribers to blocklist',
      content: { 'application/json': { schema: SubscriberQueryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersIdBlocklistRoute = createRoute({
  method: 'put',
  path: '/subscribers/{id}/blocklist',
  tags: ['Subscribers'],
  description: 'handles the blocklisting of one or more subscribers.',
  operationId: 'manageBlocklistSubscribersById',
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
          z.int32(),
        )
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the subscriber you want to blocklist.',
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
    body: {
      description: 'The id of subscriber to add or remove',
      content: { 'application/json': { schema: SubscriberQueryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getSubscribersIdExportRoute = createRoute({
  method: 'get',
  path: '/subscribers/{id}/export',
  tags: ['Subscribers'],
  description: "retrieves a subscriber's profile",
  operationId: 'exportSubscriberDataByID',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of subscriber profile you want to export',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'subscriber data object',
      content: { 'application/json': { schema: SubscriberDataSchema } },
      headers: z.object({
        'Cache-Control': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
        'Content-Disposition': {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false }, example: 'attachment; filename="data.json"' }),
        },
      }),
    },
  },
})

export const getSubscribersIdBouncesRoute = createRoute({
  method: 'get',
  path: '/subscribers/{id}/bounces',
  tags: ['Subscribers'],
  description: "retrieves a subscriber's bounce records",
  operationId: 'getSubscriberBouncesById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'subscriber id',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of bounce records of a subscriber',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(BounceSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteSubscribersIdBouncesRoute = createRoute({
  method: 'delete',
  path: '/subscribers/{id}/bounces',
  tags: ['Subscribers'],
  description: "deletes a subscriber's bounce records",
  operationId: 'deleteSubscriberBouncesById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'subscriber id',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSubscribersIdOptinRoute = createRoute({
  method: 'post',
  path: '/subscribers/{id}/optin',
  tags: ['Subscribers'],
  description: 'sends an optin confirmation e-mail to a subscriber.',
  operationId: 'subscriberSendOptinById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'sends an optin confirmation e-mail to a subscriber',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSubscribersQueryDeleteRoute = createRoute({
  method: 'post',
  path: '/subscribers/query/delete',
  tags: ['Subscribers'],
  description: 'bulk deletes based on an arbitrary SQL expression.',
  operationId: 'deleteSubscriberByQuery',
  request: {
    body: {
      description: 'Arbitrary SQL expression.',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: SubscriberQueryRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersQueryBlocklistRoute = createRoute({
  method: 'put',
  path: '/subscribers/query/blocklist',
  tags: ['Subscribers'],
  description: 'bulk blocklists subscribers based on an arbitrary SQL expression.',
  operationId: 'blocklistSubscribersQuery',
  request: {
    body: {
      description: 'Arbitrary SQL expression.',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: SubscriberQueryRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putSubscribersQueryListsRoute = createRoute({
  method: 'put',
  path: '/subscribers/query/lists',
  tags: ['Subscribers'],
  description:
    'bulk adds/removes/unsubscribes subscribers from one or more lists based on an arbitrary SQL expression.',
  operationId: 'manageSubscriberListsByQuery',
  request: {
    body: {
      description: 'Arbitrary SQL expression.',
      content: {
        'text/plain': { schema: z.string() },
        'application/json': { schema: SubscriberQueryRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getBouncesRoute = createRoute({
  method: 'get',
  path: '/bounces',
  tags: ['Bounces'],
  description: 'handles retrieval of bounce records.',
  operationId: 'getBounces',
  request: {
    query: z.object({
      campaign_id: z
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
            in: 'query',
            name: 'campaign_id',
            description:
              'Numeric identifier for retrieving bounce records associated with a specific campaign',
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
            in: 'query',
            name: 'page',
            description: 'Page number for paginated results. Start from 1 for the first page',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      per_page: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Number of items to return per page' }),
          z.literal('all').openapi({ description: 'Return all results without pagination' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            description:
              "Number of items per page. Use an integer for specific page size or 'all' to retrieve all results",
            schema: {
              oneOf: [
                { type: 'integer', description: 'Number of items to return per page' },
                {
                  type: 'string',
                  enum: ['all'],
                  description: 'Return all results without pagination',
                },
              ],
            },
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'source',
            description: 'Filter bounce records by their source of origin',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order_by: z
        .enum(['email', 'campaign_name', 'source', 'created_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Specifies the field by which to sort the bounce records. Available options are 'email', 'campaign_name', 'source', and 'created_at'",
            schema: { type: 'string', enum: ['email', 'campaign_name', 'source', 'created_at'] },
            required: false,
          },
        }),
      order: z
        .enum(['asc', 'desc'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description:
              "Determines the sort order of results. Use 'asc' for ascending or 'desc' for descending order",
            schema: { type: 'string', enum: ['asc', 'desc'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of bounce records',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  results: z.array(BounceSchema).exactOptional(),
                  query: z.string().exactOptional(),
                  total: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  page: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteBouncesRoute = createRoute({
  method: 'delete',
  path: '/bounces',
  tags: ['Bounces'],
  description: 'handles deletion of bounce records.',
  operationId: 'deleteBounces',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'all',
            description: 'flag for multiple bounce record deletion',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            description: 'list of bounce ids to delete',
            schema: { type: 'string' },
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
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getBouncesIdRoute = createRoute({
  method: 'get',
  path: '/bounces/{id}',
  tags: ['Bounces'],
  description: 'handles retrieval of bounce record by id',
  operationId: 'getBounceById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the bounce you want to retreive.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'bounce object',
      content: {
        'application/json': {
          schema: z.object({ data: BounceSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteBouncesIdRoute = createRoute({
  method: 'delete',
  path: '/bounces/{id}',
  tags: ['Bounces'],
  description: 'handles bounce deletion, either a single one (ID in the URI), or a list.',
  operationId: 'deleteBounceById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the bounce you want to delete.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListsRoute = createRoute({
  method: 'get',
  path: '/lists',
  tags: ['Lists'],
  description: 'retrieves lists with additional metadata like subscriber counts. This may be slow.',
  operationId: 'getLists',
  request: {
    query: z.object({
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
            in: 'query',
            name: 'page',
            description: 'total number of pages',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      per_page: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Number of items to return per page' }),
          z.literal('all').openapi({ description: 'Return all results without pagination' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            description: 'number of items per page',
            required: false,
            schema: {
              oneOf: [
                { type: 'integer', description: 'Number of items to return per page' },
                {
                  type: 'string',
                  enum: ['all'],
                  description: 'Return all results without pagination',
                },
              ],
            },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description: 'Optional string to search a list by name.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      order_by: z
        .enum(['name', 'status', 'created_at', 'updated_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description: 'Field to sort results by. name|status|created_at|updated_at',
            required: false,
            schema: { type: 'string', enum: ['name', 'status', 'created_at', 'updated_at'] },
          },
        }),
      order: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'ASC|DESC Sort by ascending or descending order.',
            required: false,
            schema: { type: 'string', enum: ['ASC', 'DESC'] },
          },
        }),
      minimal: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'minimal',
            description: 'When set to true, returns response without body content',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      tag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tag',
            description: 'Tags to filter lists. Repeat in the query for multiple values.',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of metadata',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  results: z.array(ListSchema).exactOptional(),
                  total: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  page: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postListsRoute = createRoute({
  method: 'post',
  path: '/lists',
  tags: ['Lists'],
  description: 'handles list creation',
  operationId: 'createList',
  request: {
    body: {
      description: 'new list info',
      content: { 'application/json': { schema: NewListSchema } },
    },
  },
  responses: {
    200: {
      description: 'updated list object',
      content: {
        'application/json': {
          schema: z.object({ data: ListSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getListsListIdRoute = createRoute({
  method: 'get',
  path: '/lists/{list_id}',
  tags: ['Lists'],
  description: 'retrieves lists with additional metadata like subscriber counts. This may be slow.',
  operationId: 'getListById',
  request: {
    params: z.object({
      list_id: z
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
            in: 'path',
            name: 'list_id',
            required: true,
            description: 'The id value of the list you want to retreive.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list object',
      content: {
        'application/json': {
          schema: z.object({ data: ListSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putListsListIdRoute = createRoute({
  method: 'put',
  path: '/lists/{list_id}',
  tags: ['Lists'],
  description: 'handles list modification',
  operationId: 'updateListById',
  request: {
    params: z.object({
      list_id: z
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
            in: 'path',
            name: 'list_id',
            required: true,
            description: 'The id value of the list you want to update',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'updated list field values',
      content: { 'application/json': { schema: ListSchema } },
    },
  },
  responses: {
    200: {
      description: 'updated list object',
      content: {
        'application/json': {
          schema: z.object({ data: ListSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteListsListIdRoute = createRoute({
  method: 'delete',
  path: '/lists/{list_id}',
  tags: ['Lists'],
  description: 'handles list deletion, either a single one (ID in the URI), or a list.',
  operationId: 'deleteListById',
  request: {
    params: z.object({
      list_id: z
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
            in: 'path',
            name: 'list_id',
            required: true,
            description: 'The id value of the lists you want to delete.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getImportSubscribersRoute = createRoute({
  method: 'get',
  path: '/import/subscribers',
  tags: ['Import'],
  description: 'returns import status.',
  operationId: 'getImportSubscribers',
  responses: {
    200: {
      description: 'import status',
      content: {
        'application/json': {
          schema: z.object({ data: ImportStatusSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postImportSubscribersRoute = createRoute({
  method: 'post',
  path: '/import/subscribers',
  tags: ['Import'],
  description: 'handles the uploading and bulk importing of a ZIP file of one or more CSV files.',
  operationId: 'importSubscribers',
  request: {
    body: {
      description: 'uploads and bulk imports of compressed CSV files',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              params: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'JSON string containing import parameters for more detail https://listmonk.app/docs/apis/import/#params-json-string',
                  example:
                    '{"mode":"subscribe", "subscription_status":"confirmed", "delim":",", "lists":[1, 2], "overwrite": true}',
                }),
              file: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'File for upload.' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'updated import status',
      content: {
        'application/json': {
          schema: z.object({ data: ImportStatusSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteImportSubscribersRoute = createRoute({
  method: 'delete',
  path: '/import/subscribers',
  tags: ['Import'],
  description: 'sends a stop signal to the importer.',
  operationId: 'stopImportSubscribers',
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: ImportStatusSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getImportSubscribersLogsRoute = createRoute({
  method: 'get',
  path: '/import/subscribers/logs',
  tags: ['Import'],
  description: 'returns import logs from an ongoing import',
  operationId: 'getImportSubscriberLogs',
  responses: {
    200: {
      description: 'import statistics',
      content: {
        'application/json': {
          schema: z.object({ data: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCampaignsRoute = createRoute({
  method: 'get',
  path: '/campaigns',
  tags: ['Campaigns'],
  description: 'handles retrieval of campaigns',
  operationId: 'getCampaigns',
  request: {
    query: z.object({
      status: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['scheduled', 'running', 'paused', 'cancelled'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'status',
            description:
              'Filter campaigns by status. Multiple status values can be specified by repeating the parameter',
            required: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['scheduled', 'running', 'paused', 'cancelled'] },
            },
          },
        }),
      no_body: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'no_body',
            description: 'When set to true, returns response without body content',
            required: false,
            schema: { type: 'boolean' },
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
            in: 'query',
            name: 'page',
            description: 'Page number for paginated results.',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      per_page: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.int().openapi({ description: 'Number of items to return per page' }),
          z.literal('all').openapi({ description: 'Return all results without pagination' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            description:
              "Number of items per page. Use an integer for specific page size or 'all' to retrieve all results",
            required: false,
            schema: {
              oneOf: [
                { type: 'integer', description: 'Number of items to return per page' },
                {
                  type: 'string',
                  enum: ['all'],
                  description: 'Return all results without pagination',
                },
              ],
            },
          },
        }),
      tags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tags',
            description:
              'Filter campaigns by tags. Multiple tags can be specified by repeating the parameter',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      order: z
        .enum(['ASC', 'DESC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description:
              'Determines the sort order of results. ASC for ascending, DESC for descending order',
            required: false,
            schema: { type: 'string', enum: ['ASC', 'DESC'] },
          },
        }),
      order_by: z
        .enum(['name', 'status', 'created_at', 'updated_at'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order_by',
            description:
              "Specifies the field by which to sort the campaigns. Available options are 'name', 'status', 'created_at', and 'updated_at'",
            required: false,
            schema: { type: 'string', enum: ['name', 'status', 'created_at', 'updated_at'] },
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'query',
            description: 'SQL query expression to filter campaigns by custom criteria',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of campaigns',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  results: z.array(CampaignSchema).exactOptional(),
                  query: z.string().exactOptional(),
                  total: z.int().exactOptional(),
                  per_page: z.int().exactOptional(),
                  page: z.int().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCampaignsRoute = createRoute({
  method: 'post',
  path: '/campaigns',
  tags: ['Campaigns'],
  description: 'handles campaign creation',
  operationId: 'createCampaign',
  request: {
    body: {
      description: 'new campaign info',
      content: { 'application/json': { schema: CampaignRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'new campaign object',
      content: {
        'application/json': {
          schema: z
            .object({ data: CampaignUpdateSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCampaignsIdRoute = createRoute({
  method: 'get',
  path: '/campaigns/{id}',
  tags: ['Campaigns'],
  description: 'handles retrieval of campaigns.',
  operationId: 'getCampaignById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get.',
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      no_body: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'no_body',
            required: false,
            description: 'boolean flag for response with/without body',
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'campaign object',
      content: {
        'application/json': {
          schema: z.object({ data: CampaignSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putCampaignsIdRoute = createRoute({
  method: 'put',
  path: '/campaigns/{id}',
  tags: ['Campaigns'],
  description: 'handle updation of campaign',
  operationId: 'updateCampaignById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'the id value of campaign you want to update',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'updated campaign fields',
      content: { 'application/json': { schema: CampaignRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'updated campaign object',
      content: {
        'application/json': {
          schema: z
            .object({ data: CampaignUpdateSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteCampaignsIdRoute = createRoute({
  method: 'delete',
  path: '/campaigns/{id}',
  tags: ['Campaigns'],
  description: 'deletes specified campaign',
  operationId: 'deleteCampaignById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCampaignsRunningStatsRoute = createRoute({
  method: 'get',
  path: '/campaigns/running/stats',
  tags: ['Campaigns'],
  description: 'returns stats of a given set of campaign IDs.',
  operationId: 'getRunningCampaignStats',
  request: {
    query: z.object({
      campaign_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'campaign_id',
            description: 'Campaign IDs to get stats for.',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of stats for given set of campaign ids',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CampaignStatsSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCampaignsAnalyticsTypeRoute = createRoute({
  method: 'get',
  path: '/campaigns/analytics/{type}',
  tags: ['Campaigns'],
  description: 'retrieves view counts for a campaign.',
  operationId: 'getCampaignAnalytics',
  request: {
    params: z.object({
      type: z
        .enum(['links', 'views', 'clicks', 'bounces'])
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'type',
            description: 'type of stats, either links, view, click or bounce',
            schema: { type: 'string', enum: ['links', 'views', 'clicks', 'bounces'] },
          },
        }),
    }),
    query: z.object({
      from: z.iso
        .date()
        .openapi({
          param: {
            in: 'query',
            required: true,
            name: 'from',
            description: 'start value of date range',
            schema: { type: 'string', format: 'date' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            in: 'query',
            required: true,
            name: 'to',
            description: 'end value of date range',
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'id',
            description: 'campaign id/s to retrive view counts',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of stats for given set of campaign ids',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(CampaignAnalyticsCountSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getCampaignsIdPreviewRoute = createRoute({
  method: 'get',
  path: '/campaigns/{id}/preview',
  tags: ['Campaigns'],
  description: 'renders the HTML preview of a campaign body',
  operationId: 'previewCampaignById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get the preview of',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'HTML Preview of requested campaign',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              example:
                '<h3>Hi John!</h3>This is a   e-mail campaign. Your second name is Doe and you are from Bengaluru',
            }),
        },
      },
    },
  },
})

export const postCampaignsIdPreviewRoute = createRoute({
  method: 'post',
  path: '/campaigns/{id}/preview',
  tags: ['Campaigns'],
  description: 'renders the HTML preview of a campaign body',
  operationId: 'updatePreviewCampaignById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get the preview of',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'template id, body and content type',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              template_id: z
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
                .openapi({ description: 'template id' }),
              content_type: z.string().exactOptional().openapi({ description: 'content type' }),
              body: z.string().exactOptional().openapi({ description: 'template body' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'HTML Preview of requested campaign',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              example:
                '<h3>Hi John!</h3>This is a   e-mail campaign. Your second name is Doe and you are from Bengaluru',
            }),
        },
      },
    },
  },
})

export const postCampaignsIdTextRoute = createRoute({
  method: 'post',
  path: '/campaigns/{id}/text',
  tags: ['Campaigns'],
  description: 'renders the HTML preview of a campaign body',
  operationId: 'previewCampaignTextById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get the preview of',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'template id, content type and campaign body',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              template_id: z
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
                .openapi({ description: 'template id' }),
              content_type: z.string().exactOptional().openapi({ description: 'content type' }),
              body: z.string().exactOptional().openapi({ description: 'campaign body' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'text/html': {
          schema: z
            .string()
            .openapi({
              example:
                '<h3>Hi John!</h3><p>This is a test e-mail campaign. Your second name is Doe and you are from Bengaluru</p>',
            }),
        },
      },
    },
  },
})

export const putCampaignsIdStatusRoute = createRoute({
  method: 'put',
  path: '/campaigns/{id}/status',
  tags: ['Campaigns'],
  description: 'handles campaign status modification',
  operationId: 'updateCampaignStatusById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get the preview of',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'campaign status update',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.enum(['scheduled', 'running', 'paused', 'cancelled']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: CampaignSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putCampaignsIdArchiveRoute = createRoute({
  method: 'put',
  path: '/campaigns/{id}/archive',
  tags: ['Campaigns'],
  description: 'handles campaign status modification',
  operationId: 'updateCampaignArchiveById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the campaign you want to get the preview of',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'archive campaign related parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              archive: z.boolean().exactOptional(),
              archive_template_id: z.int().exactOptional(),
              archive_meta: z.object({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCampaignsIdContentRoute = createRoute({
  method: 'post',
  path: '/campaigns/{id}/content',
  tags: ['Campaigns'],
  description: 'handles campaign content (body) format conversions.',
  operationId: 'createCampaignContentById',
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
            in: 'path',
            name: 'id',
            description: 'ID of campaign that you choose to create content',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'updated campaign content',
      content: { 'application/json': { schema: CampaignContentRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postCampaignsIdTestRoute = createRoute({
  method: 'post',
  path: '/campaigns/{id}/test',
  tags: ['Campaigns'],
  description: 'handles sending of campaign message to arbitrary subscribers for testing',
  operationId: 'testCampaignById',
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
            in: 'path',
            name: 'id',
            description: 'ID of campaign that you want to test',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'template id',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              template_id: z
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
                .openapi({ description: 'template id' }),
            })
            .openapi({ required: [] }),
        },
        'application/json': { schema: CampaignRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMediaRoute = createRoute({
  method: 'get',
  path: '/media',
  tags: ['Media'],
  description: 'handles retrieval of uploaded media.',
  operationId: 'getMedia',
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(MediaFileObjectSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postMediaRoute = createRoute({
  method: 'post',
  path: '/media',
  tags: ['Media'],
  description: 'handles media file uploads.',
  operationId: 'uploadMedia',
  request: {
    body: {
      description: 'upload media file',
      content: {
        'multipart/form-data': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({ data: MediaFileObjectSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getMediaIdRoute = createRoute({
  method: 'get',
  path: '/media/{id}',
  tags: ['Media'],
  description: 'handles retrieval of uploaded media.',
  operationId: 'getMediaById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'media file id',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({ data: MediaFileObjectSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteMediaIdRoute = createRoute({
  method: 'delete',
  path: '/media/{id}',
  tags: ['Media'],
  description: 'handles deletion of uploaded media.',
  operationId: 'deleteMediaById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the list you want to delete.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['Templates'],
  description: 'handles retrieval of templates',
  operationId: 'getTemplates',
  request: {
    query: z.object({
      no_body: z
        .stringbool()
        .openapi({
          param: {
            in: 'query',
            name: 'no_body',
            description: 'boolean flag for response with/without body',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TemplateSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTemplatesRoute = createRoute({
  method: 'post',
  path: '/templates',
  tags: ['Templates'],
  description: 'handles template creation',
  operationId: 'createTemplate',
  request: {
    body: {
      description: 'new template info',
      content: { 'application/json': { schema: NewTemplateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: TemplateSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/templates/{id}',
  tags: ['Templates'],
  description: 'handles retrieval of templates',
  operationId: 'getTemplateById',
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
            description: 'The id value of the template you want to get.',
          },
        }),
    }),
    query: z.object({
      no_body: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'no_body',
            description: 'boolean flag for response with/without body',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: TemplateSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const putTemplatesIdRoute = createRoute({
  method: 'put',
  path: '/templates/{id}',
  tags: ['Templates'],
  description: 'handles template modification',
  operationId: 'updateTemplateById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the template you want to update.',
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'updated template info',
      content: { 'application/json': { schema: UpdateTemplateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: TemplateSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteTemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/templates/{id}',
  tags: ['Templates'],
  description: 'handles deletion of templates',
  operationId: 'deleteTemplateById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the template you want to delete.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const postTemplatesPreviewRoute = createRoute({
  method: 'post',
  path: '/templates/preview',
  tags: ['Templates'],
  description: 'get the HTML preview of a template.',
  operationId: 'previewTemplate',
  request: {
    body: {
      description: 'template parameters',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              template_type: z
                .string()
                .exactOptional()
                .openapi({ description: 'type of template' }),
              body: z.string().exactOptional().openapi({ description: 'template body' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: { 'text/html': { schema: z.string().openapi({ example: '<p>Hi there</p>' }) } },
    },
  },
})

export const getTemplatesIdPreviewRoute = createRoute({
  method: 'get',
  path: '/templates/{id}/preview',
  tags: ['Templates'],
  description: 'renders the HTML preview of a template.',
  operationId: 'previewTemplateById',
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
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
            description: 'The id value of the template you want to get.',
          },
        }),
    }),
    body: {
      description: 'template parameters',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              template_type: z
                .string()
                .exactOptional()
                .openapi({ description: 'type of template' }),
              body: z.string().exactOptional().openapi({ description: 'template body' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: { 'text/html': { schema: z.string().openapi({ example: '<p>Hi there</p>' }) } },
    },
  },
})

export const putTemplatesIdDefaultRoute = createRoute({
  method: 'put',
  path: '/templates/{id}/default',
  tags: ['Templates'],
  description: 'handles template modification.',
  operationId: 'setDefaultTemplateById',
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
            in: 'path',
            name: 'id',
            required: true,
            description: 'The id value of the template you want to set to the default template.',
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'response', content: { 'application/json': { schema: TemplateSchema } } },
  },
})

export const postTxRoute = createRoute({
  method: 'post',
  path: '/tx',
  tags: ['Transactional'],
  description: 'send message to a subscriber',
  operationId: 'transactWithSubscriber',
  request: {
    body: {
      description: 'email message to a subscriber',
      content: { 'application/json': { schema: TransactionalMessageSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteMaintenanceSubscribersTypeRoute = createRoute({
  method: 'delete',
  path: '/maintenance/subscribers/{type}',
  tags: ['Maintenance'],
  description: 'garbage collects (deletes) orphaned or blocklisted subscribers.',
  operationId: 'deleteGCSubscribers',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'type',
            description: 'type of GC collected subscribers',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteMaintenanceAnalyticsTypeRoute = createRoute({
  method: 'delete',
  path: '/maintenance/analytics/{type}',
  tags: ['Maintenance'],
  description: 'garbage collects (deletes) campaign analytics.',
  operationId: 'deleteCampaignAnalyticsByType',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'type',
            description: 'type of GC collected subscribers',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      description: 'date parameter',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.object({ before_date: z.iso.date().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ data: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const deleteMaintenanceSubscriptionsUnconfirmedRoute = createRoute({
  method: 'delete',
  path: '/maintenance/subscriptions/unconfirmed',
  tags: ['Maintenance'],
  description: 'garbage collects (deletes) orphaned or blocklisted subscribers.',
  operationId: 'deleteUnconfirmedSubscriptions',
  request: {
    body: {
      description: 'date parameter',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.object({ before_date: z.iso.date().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({ count: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getPublicListsRoute = createRoute({
  method: 'get',
  path: '/public/lists',
  tags: ['Public'],
  description: 'returns the list of public lists with minimal fields',
  operationId: 'getPublicLists',
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ uuid: z.string().exactOptional(), name: z.string().exactOptional() })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
})

export const postPublicSubscriptionRoute = createRoute({
  method: 'post',
  path: '/public/subscription',
  tags: ['Public'],
  description: 'handles subscription requests coming from public API calls.',
  operationId: 'handlePublicSubscription',
  request: {
    body: {
      description: 'subscription request parameters',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional(),
              email: z.string().exactOptional(),
              list_uuids: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'response',
      content: {
        'application/json': {
          schema: z.object({ has_optin: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})
