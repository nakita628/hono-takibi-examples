import { createRoute, z } from '@hono/zod-openapi'

const EmailTemplateInputSchema = z
  .object({
    id: z.string().openapi({ description: 'The id of the published email template.' }),
    variables: z
      .record(z.string(), z.xor([z.string(), z.number()]))
      .exactOptional()
      .openapi({
        description: 'Template variables object with key/value pairs.',
        example: { variableName: 'Sign up now', variableName2: 123 },
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('EmailTemplateInput')

const AttachmentSchema = z
  .object({
    content: z
      .file()
      .exactOptional()
      .openapi({ type: 'string', format: 'binary', description: 'Content of an attached file.' }),
    filename: z.string().exactOptional().openapi({ description: 'Name of attached file.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path where the attachment file is hosted' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional content type for the attachment, if not set it will be derived from the filename property',
      }),
    content_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Content ID for embedding inline images using cid references (e.g., cid:image001).',
      }),
  })
  .openapi({ required: [] })
  .openapi('Attachment')

const TagSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the email tag. It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the email tag.It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Tag')

const SendEmailRequestSchema = z
  .object({
    from: z
      .string()
      .openapi({
        description:
          'Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".',
      }),
    to: z
      .xor([z.string(), z.array(z.string()).min(1).max(50)])
      .openapi({
        description:
          'Recipient email address. For multiple addresses, send as an array of strings. Max 50.',
      }),
    subject: z.string().openapi({ description: 'Email subject.' }),
    bcc: z
      .xor([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        description:
          'Bcc recipient email address. For multiple addresses, send as an array of strings.',
      }),
    cc: z
      .xor([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        description:
          'Cc recipient email address. For multiple addresses, send as an array of strings.',
      }),
    reply_to: z
      .xor([z.string(), z.array(z.string())])
      .exactOptional()
      .openapi({
        description: 'Reply-to email address. For multiple addresses, send as an array of strings.',
      }),
    html: z.string().exactOptional().openapi({ description: 'The HTML version of the message.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The plain text version of the message.' }),
    template: EmailTemplateInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Use a published template to send the email. If provided, do not include html or text.',
        }),
    ).exactOptional(),
    headers: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Custom headers to add to the email.' }),
    scheduled_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Schedule email to be sent later. The date should be in ISO 8601 format.',
      }),
    attachments: z.array(AttachmentSchema).exactOptional(),
    tags: z.array(TagSchema).exactOptional(),
    topic_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The topic ID to scope the email to. If the recipient is a contact and opted-in to the topic, the email is sent. If opted-out, the email is not sent. If the recipient is not a contact, the email is sent if the topic's default subscription is opt_in.",
      }),
  })
  .openapi({ required: ['from', 'to', 'subject'] })
  .openapi('SendEmailRequest')

const SendEmailResponseSchema = z
  .object({ id: z.string().exactOptional().openapi({ description: 'The ID of the sent email.' }) })
  .openapi({ required: [] })
  .openapi('SendEmailResponse')

const UpdateEmailOptionsSchema = z
  .object({
    scheduled_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Schedule email to be sent later. The date should be in ISO 8601 format.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateEmailOptions')

const ShareEmailOptionsSchema = z
  .object({
    expires_in: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How long the link stays valid for, as a duration like `10m`, `2 hours`, or `1 day`. Defaults to `48h` and cannot exceed 48 hours.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShareEmailOptions')

const ShareEmailResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'email' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the email.',
        example: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The shareable link, valid until it expires.',
        example: 'https://resend.com/shared?token=eyJhbGciOiJIUzI1NiJ9...',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShareEmailResponse')

const EmailSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'email' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the email.',
        example: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
      }),
    message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Message-ID header value of the email.',
        example: '<202301010000.4ef9a417@email.example.com>',
      }),
    to: z
      .array(z.string().openapi({ description: 'The email addresses of the recipients.' }))
      .exactOptional()
      .openapi({ example: ['delivered@resend.dev'] }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the sender.',
        example: 'Acme <onboarding@resend.dev>',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the email was created.',
        example: '2023-04-03 22:13:42.674981+00',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject line of the email.', example: 'Hello World' }),
    html: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTML body of the email.',
        example: 'Congrats on sending your <strong>first email</strong>!',
      }),
    text: z.string().exactOptional().openapi({ description: 'The plain text body of the email.' }),
    bcc: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses of the blind carbon copy recipients.' }),
    cc: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses of the carbon copy recipients.' }),
    reply_to: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses to which replies should be sent.' }),
    last_event: z
      .enum([
        'bounced',
        'canceled',
        'clicked',
        'complained',
        'delivered',
        'delivery_delayed',
        'failed',
        'opened',
        'queued',
        'scheduled',
        'sent',
        'suppressed',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the email.', example: 'delivered' }),
  })
  .openapi({ required: [] })
  .openapi('Email')

const ListEmailsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(EmailSchema)
      .exactOptional()
      .openapi({ description: 'Array containing email information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListEmailsResponse')

const EmailMetricsDataRowSchema = z
  .object({
    period: z
      .string()
      .exactOptional()
      .openapi({ description: 'Present when `period` is in `dimensions`.' }),
    domain_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Present when `domain` is in `dimensions`.' }),
    domain_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Present when `domain` is in `dimensions`.' }),
    email_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Present when `email` is in `dimensions`.' }),
    broadcast_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Present when `broadcast` is in `dimensions`.' }),
    broadcast_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Present when `broadcast` is in `dimensions`.' }),
  })
  .catchall(z.number())
  .openapi({
    description:
      'A single breakdown row. Which dimension fields are present depends on the requested `dimensions`; which metric fields are present depends on the requested `metrics`.',
  })
  .openapi('EmailMetricsDataRow')

const GetEmailsMetricsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'metrics' }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The start of the requested date range, as an ISO 8601 datetime.',
        example: '2026-07-01T00:00:00.000Z',
      }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The end of the requested date range, as an ISO 8601 datetime.',
        example: '2026-07-08T00:00:00.000Z',
      }),
    metrics: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The metrics included in the response.' }),
    dimensions: z
      .array(z.enum(['period', 'domain', 'email', 'broadcast']))
      .exactOptional()
      .openapi({ description: 'The dimensions the response is broken down by.' }),
    granularity: z
      .enum(['hourly', 'daily', 'weekly', 'monthly'])
      .exactOptional()
      .openapi({ description: 'The bucket size used when `period` is in `dimensions`.' }),
    totals: z
      .record(z.string(), z.number())
      .exactOptional()
      .openapi({ description: 'The requested metrics, totaled over the whole date range.' }),
    data: z
      .array(EmailMetricsDataRowSchema)
      .exactOptional()
      .openapi({
        description:
          'One row per unique combination of the requested `dimensions`. Omitted when `dimensions` is empty.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetEmailsMetricsResponse')

const GetUsageResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'usage' }),
    emails: z
      .object({
        daily: z
          .object({
            used: z
              .int()
              .exactOptional()
              .openapi({ description: 'Emails sent and received in the current day.' }),
            limit: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The daily plan limit, or `null` when the account has a monthly sending subscription.',
              }),
            sent: z.int().exactOptional().openapi({ description: 'Emails sent today.' }),
            received: z.int().exactOptional().openapi({ description: 'Emails received today.' }),
            resets_at: z
              .string()
              .exactOptional()
              .openapi({ description: 'When the daily counter resets, as an ISO 8601 datetime.' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        monthly: z
          .object({
            used: z
              .int()
              .exactOptional()
              .openapi({ description: 'Emails sent and received in the current billing period.' }),
            limit: z.int().exactOptional().openapi({ description: 'The monthly plan limit.' }),
            sent: z
              .int()
              .exactOptional()
              .openapi({ description: 'Emails sent this billing period.' }),
            received: z
              .int()
              .exactOptional()
              .openapi({ description: 'Emails received this billing period.' }),
            resets_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'When the monthly counter resets, as an ISO 8601 datetime.',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    contacts: z
      .object({
        used: z.int().exactOptional().openapi({ description: 'Contacts currently stored.' }),
        limit: z.int().exactOptional().openapi({ description: 'The plan limit.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    segments: z
      .object({
        used: z.int().exactOptional().openapi({ description: 'Segments currently created.' }),
        limit: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The plan limit, or `null` when the account has a contacts subscription.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    broadcasts: z
      .object({
        used: z.int().exactOptional().openapi({ description: 'Broadcasts sent.' }),
        limit: z
          .null()
          .nullable()
          .exactOptional()
          .openapi({ description: "Always `null`; broadcasts aren't limited." }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    ai_credits: z
      .object({
        used: z
          .int()
          .exactOptional()
          .openapi({ description: 'AI credits consumed in the current period.' }),
        limit: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The plan limit, or `null` when unlimited.' }),
        next_increase_at: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'When the AI credit balance next increases, as an ISO 8601 datetime, or `null` when unknown.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    automation_runs: z
      .object({
        used: z
          .int()
          .exactOptional()
          .openapi({ description: 'Automation runs in the current billing period.' }),
        limit: z.int().exactOptional().openapi({ description: 'The plan limit.' }),
        resets_at: z
          .string()
          .exactOptional()
          .openapi({ description: 'When the counter resets, as an ISO 8601 datetime.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    domains: z
      .object({
        used: z.int().exactOptional().openapi({ description: 'Domains currently added.' }),
        limit: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The plan limit, or `null` when unlimited.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    rate_limit: z
      .object({
        limit: z
          .int()
          .exactOptional()
          .openapi({ description: 'The number of requests allowed per `duration`.' }),
        duration: z
          .string()
          .exactOptional()
          .openapi({ description: "The rate-limit window, e.g. `'1000ms'`." }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('GetUsageResponseSuccess')

const CreateBatchEmailsResponseSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            id: z.string().exactOptional().openapi({ description: 'The ID of the sent email.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateBatchEmailsResponse')

const DomainCapabilitiesSchema = z
  .object({
    sending: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'Enable or disable sending emails from this domain.' }),
    receiving: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'Enable or disable receiving emails to this domain.' }),
  })
  .openapi({
    description:
      'Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.',
    required: [],
  })
  .openapi('DomainCapabilities')

const CreateDomainRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the domain you want to create.' }),
    region: z
      .enum(['us-east-1', 'eu-west-1', 'sa-east-1', 'ap-northeast-1'])
      .default('us-east-1')
      .exactOptional()
      .openapi({
        description:
          'The region where emails will be sent from. Possible values are us-east-1 | eu-west-1 | sa-east-1 | ap-northeast-1',
      }),
    custom_return_path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).",
      }),
    open_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Track the open rate of each email.' }),
    click_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Track clicks within the body of each HTML email.' }),
    tls: z
      .enum(['opportunistic', 'enforced'])
      .default('opportunistic')
      .exactOptional()
      .openapi({
        description:
          "TLS mode. Opportunistic attempts secure connection but falls back to unencrypted. Enforced requires TLS or email won't be sent.",
      }),
    capabilities: DomainCapabilitiesSchema.exactOptional(),
    tracking_subdomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subdomain to use for click and open tracking.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateDomainRequest')

const DomainRecordSchema = z
  .object({
    record: z
      .enum(['SPF', 'DKIM', 'Receiving', 'Tracking', 'TrackingCAA'])
      .exactOptional()
      .openapi({
        description:
          'The type of record (SPF for sending, DKIM for sending, Receiving for inbound emails, Tracking & TrackingCAA for click and open tracking).',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the DNS record.' }),
    type: z
      .enum(['MX', 'TXT', 'CNAME', 'CAA'])
      .exactOptional()
      .openapi({ description: 'The DNS record type.' }),
    ttl: z.string().exactOptional().openapi({ description: 'The time to live for the record.' }),
    status: z
      .enum(['pending', 'verified', 'failed', 'temporary_failure', 'not_started'])
      .exactOptional()
      .openapi({ description: 'The status of the record.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the record.' }),
    priority: z
      .int()
      .exactOptional()
      .openapi({ description: 'The priority of the record (only applicable for MX records).' }),
  })
  .openapi({ required: [] })
  .openapi('DomainRecord')

const CreateDomainResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the domain.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the domain.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the domain was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    status: z
      .enum([
        'pending',
        'verified',
        'failed',
        'not_started',
        'partially_verified',
        'partially_failed',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the domain.' }),
    capabilities: DomainCapabilitiesSchema.exactOptional(),
    records: z.array(DomainRecordSchema).exactOptional(),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region where the domain is hosted.' }),
    open_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether open tracking is enabled for this domain.' }),
    click_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether click tracking is enabled for this domain.' }),
    tracking_subdomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subdomain used for click and open tracking.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateDomainResponse')

const UpdateDomainOptionsSchema = z
  .object({
    open_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Track the open rate of each email.' }),
    click_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Track clicks within the body of each HTML email.' }),
    tls: z
      .enum(['opportunistic', 'enforced'])
      .default('opportunistic')
      .exactOptional()
      .openapi({ description: 'enforced | opportunistic.' }),
    capabilities: DomainCapabilitiesSchema.exactOptional(),
    tracking_subdomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subdomain to use for click and open tracking.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateDomainOptions')

const DomainSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'domain' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the domain.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the domain.', example: 'example.com' }),
    status: z
      .enum([
        'pending',
        'verified',
        'failed',
        'not_started',
        'partially_verified',
        'partially_failed',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the domain.', example: 'not_started' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the domain was created.',
        example: '2023-04-26 20:21:26.347412+00',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region where the domain is hosted.', example: 'us-east-1' }),
    open_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether open tracking is enabled for this domain.' }),
    click_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether click tracking is enabled for this domain.' }),
    tracking_subdomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subdomain used for click and open tracking.' }),
    capabilities: DomainCapabilitiesSchema.exactOptional(),
    records: z.array(DomainRecordSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Domain')

const CreateDomainClaimRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the domain you want to claim.' }),
    region: z
      .enum(['us-east-1', 'eu-west-1', 'sa-east-1', 'ap-northeast-1'])
      .default('us-east-1')
      .exactOptional()
      .openapi({
        description:
          'The region where emails will be sent from. Possible values are us-east-1 | eu-west-1 | sa-east-1 | ap-northeast-1',
      }),
    custom_return_path: z
      .string()
      .default('send')
      .exactOptional()
      .openapi({
        description:
          "For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).",
      }),
    open_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Track the open rate of each email.' }),
    click_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Track clicks within the body of each HTML email.' }),
    tracking_subdomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subdomain to use for click and open tracking.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateDomainClaimRequest')

const DomainClaimRecordSchema = z
  .object({
    type: z
      .literal('TXT')
      .exactOptional()
      .openapi({
        description: 'The DNS record type. Always TXT for domain claims.',
        example: 'TXT',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the DNS record (the domain being claimed).',
        example: 'example.com',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the TXT record.',
        example: 'resend-domain-verification=abc123',
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time to live for the record.', example: 'Auto' }),
  })
  .openapi({
    description: 'The TXT record to add to your DNS to prove ownership of the claimed domain.',
    required: [],
  })
  .openapi('DomainClaimRecord')

const DomainClaimSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'domain_claim' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the claim.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the domain being claimed.', example: 'example.com' }),
    status: z
      .enum([
        'pending',
        'verified',
        'completed',
        'blocked',
        'expired',
        'superseded',
        'canceled',
        'failed',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the claim.', example: 'pending' }),
    domain_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The ID of the placeholder domain created for the claim.',
        example: 'a1b2c3d4-1176-453e-8fc1-35364d380206',
      }),
    region: z
      .union([
        z.literal('us-east-1'),
        z.literal('eu-west-1'),
        z.literal('sa-east-1'),
        z.literal('ap-northeast-1'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The region where the claimed domain will send from.',
        example: 'us-east-1',
      }),
    record: DomainClaimRecordSchema.exactOptional(),
    blocked_reason: z
      .union([
        z.literal('grace_period'),
        z.literal('recent_owner_activity'),
        z.literal('pending_scheduled_emails'),
        z.literal(null),
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Why the claim is currently blocked, if applicable.',
        example: null,
      }),
    failure_reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Why the claim failed, if applicable.', example: null }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the claim was created.',
        example: '2023-04-26 20:21:26.347412+00',
      }),
    expires_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the claim expires if not verified.',
        example: '2023-05-03 20:21:26.347412+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('DomainClaim')

const VerifyDomainResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'domain' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the domain.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
  })
  .openapi({ required: [] })
  .openapi('VerifyDomainResponse')

const ListDomainsItemSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the domain.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the domain.', example: 'example.com' }),
    status: z
      .enum([
        'pending',
        'verified',
        'failed',
        'not_started',
        'partially_verified',
        'partially_failed',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the domain.', example: 'not_started' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the domain was created.',
        example: '2023-04-26 20:21:26.347412+00',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region where the domain is hosted.', example: 'us-east-1' }),
    open_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether open tracking is enabled for this domain.' }),
    click_tracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether click tracking is enabled for this domain.' }),
    capabilities: DomainCapabilitiesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsItem')

const ListDomainsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z.array(ListDomainsItemSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDomainsResponse')

const UpdateDomainResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the updated domain.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object type representing the updated domain.',
        example: 'domain',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateDomainResponseSuccess')

const DeleteDomainResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'domain' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the domain.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the domain was deleted successfully.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DeleteDomainResponse')

const CreateApiKeyRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The API key name.' }),
    permission: z
      .enum(['full_access', 'sending_access'])
      .exactOptional()
      .openapi({
        description:
          'The API key can have full access to Resend’s API or be only restricted to send emails. * full_access - Can create, delete, get, and update any resource. * sending_access - Can only send emails.',
      }),
    domain_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Restrict an API key to send emails only from a specific domain. Only used when the permission is sending_access.',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateApiKeyRequest')

const CreateApiKeyResponseSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the API key.' }),
    token: z.string().exactOptional().openapi({ description: 'The token of the API key.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateApiKeyResponse')

const ApiKeySchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the API key.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the API key.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the API key was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    last_used_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the API key was last used.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('ApiKey')

const ListApiKeysResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z.array(ApiKeySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApiKeysResponse')

const OAuthGrantSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the OAuth grant.' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the OAuth client the grant was issued to.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The scopes granted to the OAuth client.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the OAuth grant was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    revoked_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date and time the OAuth grant was revoked, or null if it is still active.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    revoked_reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason the OAuth grant was revoked, or null if it is still active.',
      }),
    client: z
      .object({
        name: z.string().exactOptional().openapi({ description: 'The name of the OAuth client.' }),
        logo_uri: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "The URL of the OAuth client's logo." }),
      })
      .exactOptional()
      .openapi({ description: 'The OAuth client the grant was issued to.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('OAuthGrant')

const ListOAuthGrantsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z.array(OAuthGrantSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOAuthGrantsResponse')

const RevokeOAuthGrantResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'oauth_grant' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the OAuth grant.' }),
    revoked_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time the OAuth grant was revoked.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    revoked_reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason the OAuth grant was revoked.' }),
  })
  .openapi({ required: [] })
  .openapi('RevokeOAuthGrantResponse')

const DeleteApiKeyResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'api_key' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the API key.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the API key was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DeleteApiKeyResponse')

const UpdateApiKeyRequestSchema = z
  .object({ name: z.string().openapi({ description: 'The API key name.' }) })
  .openapi({ required: ['name'] })
  .openapi('UpdateApiKeyRequest')

const UpdateApiKeyResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'api_key' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the API key.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateApiKeyResponse')

const CreateAudienceOptionsSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the audience you want to create.' }),
  })
  .openapi({ deprecated: true, required: ['name'] })
  .openapi('CreateAudienceOptions')

const CreateAudienceResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the audience.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object of the audience.', example: 'audience' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the audience.', example: 'Registered Users' }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('CreateAudienceResponseSuccess')

const GetAudienceResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the audience.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object of the audience.', example: 'audience' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the audience.', example: 'Registered Users' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date that the object was created.',
        example: '2023-10-06 22:59:55.977+00',
      }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('GetAudienceResponseSuccess')

const RemoveAudienceResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the audience.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object of the audience.', example: 'audience' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The deleted attribute indicates that the corresponding audience has been deleted.',
        example: true,
      }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('RemoveAudienceResponseSuccess')

const ListAudiencesResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier for the audience.',
                example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Name of the audience.', example: 'Registered Users' }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the audience was created.',
                example: '2023-10-06 22:59:55.977+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing audience information.' }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('ListAudiencesResponseSuccess')

const CreateContactOptionsSchema = z
  .object({
    email: z
      .string()
      .openapi({
        description: 'Email address of the contact.',
        example: 'steve.wozniak@gmail.com',
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the contact.', example: 'Steve' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the contact.', example: 'Wozniak' }),
    unsubscribed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.",
        example: false,
      }),
    properties: z
      .record(z.string(), z.union([z.string(), z.number()]).nullable())
      .exactOptional()
      .openapi({ description: 'A map of custom property keys and values to create.' }),
    segments: z
      .array(
        z
          .object({ id: z.string().exactOptional().openapi({ description: 'The segment ID' }) })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of segment IDs to add the contact to.' }),
    topics: z
      .array(
        z
          .object({
            id: z.string().exactOptional().openapi({ description: 'The topic ID.' }),
            subscription: z
              .enum(['opt_in', 'opt_out'])
              .exactOptional()
              .openapi({ description: 'The subscription status for this topic.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of topic subscriptions for the contact.' }),
    audience_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the audience to which the contact belongs.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
        deprecated: true,
      }),
  })
  .openapi({ required: ['email'] })
  .openapi('CreateContactOptions')

const CreateContactResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'contact' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the created contact.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateContactResponseSuccess')

const GetContactResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'contact' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the contact.',
        example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email address of the contact.',
        example: 'steve.wozniak@gmail.com',
      }),
    first_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'First name of the contact.', example: 'Steve' }),
    last_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last name of the contact.', example: 'Wozniak' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the contact was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    unsubscribed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the contact is unsubscribed.', example: false }),
    properties: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'A map of custom property keys and values.' }),
  })
  .openapi({ required: [] })
  .openapi('GetContactResponseSuccess')

const UpdateContactOptionsSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email address of the contact.',
        example: 'steve.wozniak@gmail.com',
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the contact.', example: 'Steve' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the contact.', example: 'Wozniak' }),
    unsubscribed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.",
        example: false,
      }),
    properties: z
      .record(z.string(), z.union([z.string(), z.number(), z.boolean()]).nullable())
      .exactOptional()
      .openapi({ description: 'A map of custom property keys and values to update.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateContactOptions')

const UpdateContactResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'contact' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the updated contact.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateContactResponseSuccess')

const RemoveContactResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'contact' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the removed contact.',
        example: '520784e2-887d-4c25-b53c-4ad46ad38100',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the contact was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveContactResponseSuccess')

const ListContactsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier for the contact.',
                example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
              }),
            email: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Email address of the contact.',
                example: 'steve.wozniak@gmail.com',
              }),
            first_name: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'First name of the contact.', example: 'Steve' }),
            last_name: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'Last name of the contact.', example: 'Wozniak' }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the contact was created.',
                example: '2023-10-06 23:47:56.678+00',
              }),
            unsubscribed: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Indicates if the contact is unsubscribed.',
                example: false,
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing contact information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListContactsResponseSuccess')

const CreateContactImportOptionsSchema = z
  .object({
    file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'CSV file to import. Maximum size is 50MB.',
      }),
    column_map: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSON-encoded object mapping contact fields and custom property keys to CSV column names. Supports `email`, `first_name`, `last_name`, `unsubscribed`, and `properties`. Custom property mappings can include `type` as `string`, `number`, or `boolean`; defaults to `string`.',
        example:
          '{"email":"Email","first_name":"First Name","last_name":"Last Name","unsubscribed":"Unsubscribed","properties":{"plan":{"column":"Plan","type":"string"}}}',
      }),
    on_conflict: z
      .enum(['upsert', 'skip'])
      .default('skip')
      .exactOptional()
      .openapi({
        description: 'Strategy to use when an imported contact already exists.',
        example: 'skip',
      }),
    segments: z
      .string()
      .exactOptional()
      .openapi({
        description: 'JSON-encoded array of segments to add imported contacts to.',
        example: '[{"id":"78261eea-8f8b-4381-83c6-79fa7120f1cf"}]',
      }),
    topics: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSON-encoded array of topic subscriptions to apply to imported contacts. Each `subscription` must be `opt_in` or `opt_out`.',
        example: '[{"id":"b6d24b8e-af0b-4c3c-be0c-359bbd97381e","subscription":"opt_in"}]',
      }),
  })
  .openapi({ required: ['file'] })
  .openapi('CreateContactImportOptions')

const CreateContactImportResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'contact_import' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the created contact import.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateContactImportResponseSuccess')

const ContactImportCountsSchema = z
  .object({
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of rows processed by the import.', example: 100 }),
    created: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of contacts created by the import.', example: 80 }),
    updated: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of contacts updated by the import.', example: 10 }),
    skipped: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of rows skipped by the import.', example: 5 }),
    failed: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of rows that failed during the import.', example: 5 }),
  })
  .openapi({ required: [] })
  .openapi('ContactImportCounts')

const ContactImportSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'contact_import' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the contact import.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
    status: z
      .enum(['queued', 'in_progress', 'completed', 'failed'])
      .exactOptional()
      .openapi({ description: 'Current status of the contact import.', example: 'completed' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the contact import was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    completed_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the contact import completed.',
        example: '2023-10-06 23:50:56.678+00',
      }),
    counts: ContactImportCountsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ContactImport')

const GetContactImportResponseSuccessSchema = ContactImportSchema.openapi(
  'GetContactImportResponseSuccess',
)

const ListContactImportsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(ContactImportSchema)
      .exactOptional()
      .openapi({ description: 'Array containing contact imports.' }),
  })
  .openapi({ required: [] })
  .openapi('ListContactImportsResponseSuccess')

const CreateBroadcastOptionsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the broadcast.' }),
    segment_id: z
      .string()
      .openapi({ description: 'Unique identifier of the segment this broadcast will be sent to.' }),
    audience_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Use `segment_id` instead. Unique identifier of the segment this broadcast will be sent to.',
        deprecated: true,
      }),
    from: z.string().openapi({ description: 'The email address of the sender.' }),
    subject: z.string().openapi({ description: 'The subject line of the email.' }),
    reply_to: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses to which replies should be sent.' }),
    preview_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The preview text of the email.',
        example: 'Here are our announcements',
      }),
    html: z.string().exactOptional().openapi({ description: 'The HTML version of the message.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The plain text version of the message.' }),
    topic_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The topic ID that the broadcast will be scoped to.' }),
    send: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to send the broadcast immediately or keep it as a draft.\n',
      }),
    scheduled_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Schedule time to send the broadcast. Can only be used if `send` is true.\n',
      }),
  })
  .openapi({ required: ['from', 'subject', 'segment_id'] })
  .openapi('CreateBroadcastOptions')

const CreateBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the broadcast.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'broadcast' }),
  })
  .openapi({ required: [] })
  .openapi('CreateBroadcastResponseSuccess')

const ListBroadcastsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier for the broadcast.',
                example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Name of the broadcast.',
                example: 'November announcements',
              }),
            audience_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Deprecated. Use segment_id instead.',
                example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
                deprecated: true,
              }),
            segment_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier of the segment this broadcast will be sent to.',
                example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
              }),
            status: z
              .string()
              .exactOptional()
              .openapi({ description: 'The status of the broadcast.', example: 'draft' }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the broadcast was created.',
                example: '2023-10-06 22:59:55.977+00',
              }),
            scheduled_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the broadcast is scheduled to be sent.',
                example: '2023-10-06 22:59:55.977+00',
              }),
            sent_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the broadcast was sent.',
                example: '2023-10-06 22:59:55.977+00',
              }),
            topic_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The topic ID that the broadcast is scoped to.',
                example: 'b6d24b8e-af0b-4c3c-be0c-359bbd97381e',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing broadcast information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListBroadcastsResponseSuccess')

const GetBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the broadcast.',
        example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the broadcast.', example: 'November announcements' }),
    audience_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `segment_id` instead. Unique identifier of the segment this broadcast will be sent to.',
        deprecated: true,
      }),
    segment_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the segment this broadcast will be sent to.' }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the sender.',
        example: 'Acme <onboarding@resend.dev>',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subject line of the email.', example: 'Hello World' }),
    reply_to: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses to which replies should be sent.' }),
    preview_text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The preview text of the email.',
        example: 'Here are our announcements',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the broadcast.', example: 'draft' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the broadcast was created.',
        example: '2023-10-06 22:59:55.977+00',
      }),
    scheduled_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the broadcast is scheduled to be sent.',
        example: '2023-10-06 22:59:55.977+00',
      }),
    sent_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the broadcast was sent.',
        example: '2023-10-06 22:59:55.977+00',
      }),
    text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The plain text version of the broadcast content.',
        example: 'Hello {{{FIRST_NAME|there}}}!',
      }),
    html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The HTML version of the broadcast content.',
        example: '<p>Hello {{{FIRST_NAME|there}}}!</p>',
      }),
    topic_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The topic ID that the broadcast is scoped to.',
        example: 'b6d24b8e-af0b-4c3c-be0c-359bbd97381e',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetBroadcastResponseSuccess')

const UpdateBroadcastOptionsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the broadcast.' }),
    audience_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Use `segment_id` instead. Unique identifier of the audience this broadcast will be sent to.',
        deprecated: true,
      }),
    segment_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the segment this broadcast will be sent to.' }),
    from: z.string().exactOptional().openapi({ description: 'The email address of the sender.' }),
    subject: z.string().exactOptional().openapi({ description: 'The subject line of the email.' }),
    reply_to: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses to which replies should be sent.' }),
    preview_text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The preview text of the email.' }),
    html: z.string().exactOptional().openapi({ description: 'The HTML version of the message.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The plain text version of the message.' }),
    topic_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The topic ID that the broadcast will be scoped to.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBroadcastOptions')

const UpdateBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the broadcast.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'broadcast' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBroadcastResponseSuccess')

const RemoveBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the broadcast.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'broadcast' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The deleted attribute indicates that the corresponding broadcast has been deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveBroadcastResponseSuccess')

const SendBroadcastOptionsSchema = z
  .object({
    scheduled_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Schedule email to be sent later. The date should be in ISO 8601 format.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SendBroadcastOptions')

const SendBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the broadcast.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
  })
  .openapi({ required: [] })
  .openapi('SendBroadcastResponseSuccess')

const CancelBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the broadcast.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'broadcast' }),
  })
  .openapi({ required: [] })
  .openapi('CancelBroadcastResponseSuccess')

const DuplicateBroadcastResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the duplicated broadcast.',
        example: '1f85ae38-f5b9-4c1f-8766-667a53970fea',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'broadcast' }),
  })
  .openapi({ required: [] })
  .openapi('DuplicateBroadcastResponseSuccess')

const ListBroadcastRecipientsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Opaque cursor identifying this row, used for pagination.',
                example: 'b2Zmc2V0OjA',
              }),
            contact_id: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The ID of the contact associated with this recipient, if one exists.',
                example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
              }),
            email: z
              .string()
              .exactOptional()
              .openapi({
                description: "The recipient's email address.",
                example: 'steve.wozniak@gmail.com',
              }),
            count: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The number of times this recipient triggered the event. Only present when `type` is `opened` or `clicked`.',
                example: 3,
              }),
            bounce_type: z
              .enum(['permanent', 'transient', 'undetermined'])
              .exactOptional()
              .openapi({
                description: 'The type of bounce. Only present when `type` is `bounced`.',
              }),
            clicked_links: z
              .array(
                z
                  .object({
                    url: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The clicked URL.',
                        example: 'https://resend.com/pricing',
                      }),
                    clicks: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'The number of times this recipient clicked this URL.',
                        example: 2,
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'The links this recipient clicked. Only present when `type` is `clicked`.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing broadcast recipients.' }),
  })
  .openapi({ required: [] })
  .openapi('ListBroadcastRecipientsResponseSuccess')

const ListBroadcastClickedLinksResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An opaque cursor for this row, used only for pagination. It does not identify any entity in Resend.',
                example: 'b2Zmc2V0OjA',
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The URL that was clicked.',
                example: 'https://resend.com/pricing',
              }),
            clicks: z
              .int()
              .exactOptional()
              .openapi({ description: 'Total number of clicks on this URL.', example: 42 }),
            unique_clicks: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of unique clicks on this URL.', example: 30 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: "Array containing the broadcast's clicked links." }),
  })
  .openapi({ required: [] })
  .openapi('ListBroadcastClickedLinksResponseSuccess')

const RetrievedAttachmentSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'attachment' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the attachment.',
        example: '660e8400-e29b-41d4-a716-446655440000',
      }),
    filename: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The filename of the attachment.', example: 'document.pdf' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the attachment.', example: 'application/pdf' }),
    content_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content ID for inline attachments.', example: 'img001' }),
    content_disposition: z
      .union([z.literal('inline'), z.literal('attachment'), z.literal(null)])
      .nullable()
      .exactOptional()
      .openapi({ description: 'How the attachment should be displayed.', example: 'attachment' }),
    download_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Signed URL to download the attachment content.',
        example: 'https://cloudfront.example.com/path?Signature=...',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when the download URL expires.',
        example: '2024-10-27T18:30:00.000Z',
      }),
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'Size of the attachment in bytes.', example: 2048 }),
  })
  .openapi({ required: [] })
  .openapi('RetrievedAttachment')

const ListAttachmentsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .uuid()
              .exactOptional()
              .openapi({
                description: 'The ID of the attachment.',
                example: '660e8400-e29b-41d4-a716-446655440000',
              }),
            filename: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The filename of the attachment.', example: 'document.pdf' }),
            content_type: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The MIME type of the attachment.',
                example: 'application/pdf',
              }),
            content_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The content ID for inline attachments.',
                example: 'img001',
              }),
            content_disposition: z
              .union([z.literal('inline'), z.literal('attachment'), z.literal(null)])
              .nullable()
              .exactOptional()
              .openapi({
                description: 'How the attachment should be displayed.',
                example: 'attachment',
              }),
            download_url: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Signed URL to download the attachment content.',
                example: 'https://cloudfront.example.com/path?Signature=...',
              }),
            expires_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description: 'Timestamp when the download URL expires.',
                example: '2024-10-27T18:30:00.000Z',
              }),
            size: z
              .int()
              .exactOptional()
              .openapi({ description: 'Size of the attachment in bytes.', example: 2048 }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing attachment information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListAttachmentsResponse')

const GetReceivedEmailResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'email' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the received email.',
        example: '550e8400-e29b-41d4-a716-446655440000',
      }),
    to: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The recipient email addresses.',
        example: ['delivered@resend.dev'],
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'The sender email address.', example: 'sender@example.com' }),
    subject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email subject.', example: 'Hello World' }),
    message_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique message ID from the email headers.',
        example: '<message-id@email.example.com>',
      }),
    bcc: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The BCC recipients.', example: [] }),
    cc: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The CC recipients.', example: [] }),
    reply_to: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'The reply-to addresses.', example: [] }),
    received_for: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers.",
        example: ['forwarded@example.com'],
      }),
    html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The HTML content of the email.', example: '<p>Email content</p>' }),
    text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The plain text content of the email.', example: 'Email content' }),
    headers: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The email headers.', example: { 'X-Custom-Header': 'value' } }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp when the email was received.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    attachments: z
      .array(
        z
          .object({
            id: z.uuid().exactOptional().openapi({ description: 'The ID of the attachment.' }),
            filename: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The filename of the attachment.' }),
            content_type: z
              .string()
              .exactOptional()
              .openapi({ description: 'The MIME type of the attachment.' }),
            content_id: z
              .string()
              .exactOptional()
              .openapi({ description: 'The content ID for inline attachments.' }),
            content_disposition: z
              .union([z.literal('inline'), z.literal('attachment'), z.literal(null)])
              .nullable()
              .exactOptional()
              .openapi({ description: 'How the attachment should be displayed.' }),
            size: z
              .int()
              .exactOptional()
              .openapi({ description: 'Size of the attachment in bytes.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of attachments.' }),
  })
  .openapi({ required: [] })
  .openapi('GetReceivedEmailResponse')

const ListReceivedEmailsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .uuid()
              .exactOptional()
              .openapi({
                description: 'The ID of the received email.',
                example: '550e8400-e29b-41d4-a716-446655440000',
              }),
            to: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'The recipient email addresses.',
                example: ['delivered@resend.dev'],
              }),
            from: z
              .string()
              .exactOptional()
              .openapi({ description: 'The sender email address.', example: 'sender@example.com' }),
            subject: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The email subject.', example: 'Hello World' }),
            message_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The unique message ID from the email headers.',
                example: '<message-id@email.example.com>',
              }),
            bcc: z
              .array(z.string())
              .nullable()
              .exactOptional()
              .openapi({ description: 'The BCC recipients.' }),
            cc: z
              .array(z.string())
              .nullable()
              .exactOptional()
              .openapi({ description: 'The CC recipients.' }),
            reply_to: z
              .array(z.string())
              .nullable()
              .exactOptional()
              .openapi({ description: 'The reply-to addresses.' }),
            created_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description: 'Timestamp when the email was received.',
                example: '2023-10-06T23:47:56.678Z',
              }),
            attachments: z
              .array(
                z
                  .object({
                    id: z
                      .uuid()
                      .exactOptional()
                      .openapi({ description: 'The ID of the attachment.' }),
                    filename: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'The filename of the attachment.' }),
                    content_type: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The MIME type of the attachment.' }),
                    content_id: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The content ID for inline attachments.' }),
                    content_disposition: z
                      .union([z.literal('inline'), z.literal('attachment'), z.literal(null)])
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'How the attachment should be displayed.' }),
                    size: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'Size of the attachment in bytes.' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'Array of attachments for this email.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing received email information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListReceivedEmailsResponse')

const CreateWebhookRequestSchema = z
  .object({
    endpoint: z
      .string()
      .openapi({
        description: 'The URL where webhook events will be sent.',
        example: 'https://webhook.example.com/handler',
      }),
    events: z
      .array(z.string())
      .min(1)
      .openapi({
        description: 'Array of event types to subscribe to.',
        example: ['email.sent', 'email.delivered', 'email.bounced', 'email.suppressed'],
      }),
  })
  .openapi({ required: ['endpoint', 'events'] })
  .openapi('CreateWebhookRequest')

const CreateWebhookResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the webhook.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
    signing_secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secret key used to verify webhook payloads.',
        example: 'whsec_...',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateWebhookResponse')

const GetWebhookResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the webhook.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL where webhook events are sent.',
        example: 'https://webhook.example.com/handler',
      }),
    events: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Array of event types subscribed to.',
        example: ['email.sent', 'email.delivered'],
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the webhook.', example: 'enabled' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the webhook was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    signing_secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secret key used to verify webhook payloads.',
        example: 'whsec_...',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetWebhookResponse')

const ListWebhooksResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .uuid()
              .exactOptional()
              .openapi({
                description: 'The ID of the webhook.',
                example: '479e3145-dd38-476b-932c-529ceb705947',
              }),
            endpoint: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The URL where webhook events are sent.',
                example: 'https://webhook.example.com/handler',
              }),
            events: z
              .array(z.string())
              .nullable()
              .exactOptional()
              .openapi({
                description: 'Array of event types subscribed to.',
                example: ['email.sent'],
              }),
            status: z
              .string()
              .exactOptional()
              .openapi({ description: 'The status of the webhook.', example: 'enabled' }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the webhook was created.',
                example: '2023-10-06 23:47:56.678+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing webhook information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListWebhooksResponse')

const UpdateWebhookRequestSchema = z
  .object({
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL where webhook events will be sent.',
        example: 'https://webhook.example.com/new-handler',
      }),
    events: z
      .array(z.string())
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Array of event types to subscribe to.',
        example: ['email.sent', 'email.delivered'],
      }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'The status of the webhook.', example: 'enabled' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebhookRequest')

const UpdateWebhookResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the updated webhook.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebhookResponse')

const RotateWebhookSigningSecretResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the webhook.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
    signing_secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The new secret key used to verify webhook payloads.',
        example: 'whsec_...',
      }),
  })
  .openapi({ required: [] })
  .openapi('RotateWebhookSigningSecretResponse')

const DeleteWebhookResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the deleted webhook.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the webhook was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DeleteWebhookResponse')

const ListWebhookEventsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the webhook event.',
                example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              }),
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'The type of the event.', example: 'email.sent' }),
            created_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the event was created.',
                example: '2026-08-22T15:28:00.000Z',
              }),
            status: z
              .enum(['pending', 'attempting', 'success', 'failed'])
              .exactOptional()
              .openapi({
                description: 'The delivery status of the event for this webhook.',
                example: 'success',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing webhook event information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListWebhookEventsResponse')

const GetWebhookEventResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook_event' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the webhook event.',
        example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the event.', example: 'email.sent' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the event was created.',
        example: '2026-08-22T15:28:00.000Z',
      }),
    status: z
      .enum(['pending', 'attempting', 'success', 'failed'])
      .exactOptional()
      .openapi({
        description: 'The delivery status of the event for this webhook.',
        example: 'attempting',
      }),
    next_attempt_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the next scheduled delivery attempt, or null when none is scheduled. Always null once the event has succeeded or permanently failed.',
        example: '2026-08-22T15:33:00.000Z',
      }),
    payload: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'The event payload sent to the webhook endpoint.',
        example: {
          type: 'email.sent',
          created_at: '2026-08-22T15:28:00.000Z',
          data: {
            email_id: '571f1f42-1c2d-4b1f-8f8e-8b3b5b3b5b3b',
            from: 'onboarding@resend.dev',
            to: ['delivered@resend.dev'],
            subject: 'Welcome',
            created_at: '2026-08-22T15:27:59.000Z',
          },
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('GetWebhookEventResponse')

const ListWebhookEventAttemptsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the webhook event attempt.',
                example: 'atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2',
              }),
            http_status_code: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The HTTP status code returned by the webhook endpoint.',
                example: 200,
              }),
            response: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The response body returned by the webhook endpoint.',
                example: '{"ok":true}',
              }),
            sent_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the attempt was sent.',
                example: '2026-08-22T15:33:12.000Z',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing webhook event attempt information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListWebhookEventAttemptsResponse')

const ReplayWebhookEventResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'webhook_event' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the replayed webhook event.',
        example: 'msg_1srOrx2ZWZBpBUvZwXKQmoEYga2',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReplayWebhookEventResponse')

const TemplateVariableSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the template variable.' }),
    key: z.string().openapi({ description: 'The key of the variable.' }),
    type: z
      .enum(['string', 'number', 'boolean', 'object', 'list'])
      .openapi({ description: 'The type of the variable.' }),
    fallback_value: z
      .xor([z.string(), z.number(), z.boolean(), z.object({}), z.array(z.any())])
      .exactOptional()
      .openapi({ description: 'The fallback value of the variable.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the variable was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the variable was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: ['key', 'type'] })
  .openapi('TemplateVariable')

const TemplateVariableInputSchema = z
  .object({
    key: z.string().openapi({ description: 'The key of the variable.' }),
    type: z
      .enum(['string', 'number', 'boolean', 'object', 'list'])
      .openapi({ description: 'The type of the variable.' }),
    fallback_value: z
      .xor([z.string(), z.number(), z.boolean(), z.object({}), z.array(z.any())])
      .exactOptional()
      .openapi({ description: 'The fallback value of the variable.' }),
  })
  .openapi({ required: ['key', 'type'] })
  .openapi('TemplateVariableInput')

const TemplateSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of object.', example: 'template' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the template.' }),
    current_version_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the current version of the template.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the template.' }),
    alias: z.string().exactOptional().openapi({ description: 'The alias of the template.' }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".',
      }),
    subject: z.string().exactOptional().openapi({ description: 'Email subject.' }),
    reply_to: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reply-to email addresses.' }),
    html: z.string().exactOptional().openapi({ description: 'The HTML version of the template.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The plain text version of the template.' }),
    variables: z.array(TemplateVariableSchema).exactOptional(),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the template was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the template was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    status: z
      .enum(['draft', 'published'])
      .exactOptional()
      .openapi({ description: 'The publication status of the template.' }),
    published_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the template was published.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    has_unpublished_versions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the template has unpublished versions.' }),
  })
  .openapi({ required: [] })
  .openapi('Template')

const TemplateListItemSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the template.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the template.' }),
    status: z
      .enum(['draft', 'published'])
      .exactOptional()
      .openapi({ description: 'The publication status of the template.' }),
    published_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the template was published.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the template was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the template was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    alias: z.string().exactOptional().openapi({ description: 'The alias of the template.' }),
  })
  .openapi({ required: [] })
  .openapi('TemplateListItem')

const CreateTemplateRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the template.' }),
    alias: z.string().exactOptional().openapi({ description: 'The alias of the template.' }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".',
      }),
    subject: z.string().exactOptional().openapi({ description: 'Email subject.' }),
    reply_to: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Reply-to email addresses.' }),
    html: z.string().openapi({ description: 'The HTML version of the template.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The plain text version of the template.' }),
    variables: z.array(TemplateVariableInputSchema).exactOptional(),
  })
  .openapi({ required: ['name', 'html'] })
  .openapi('CreateTemplateRequest')

const CreateTemplateResponseSuccessSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the template.' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'template' }),
  })
  .openapi({ required: [] })
  .openapi('CreateTemplateResponseSuccess')

const ListTemplatesResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    data: z
      .array(TemplateListItemSchema)
      .exactOptional()
      .openapi({ description: 'Array containing templates information.' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more templates to retrieve.' }),
  })
  .openapi({ required: [] })
  .openapi('ListTemplatesResponseSuccess')

const UpdateTemplateOptionsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the template.' }),
    alias: z.string().exactOptional().openapi({ description: 'The alias of the template.' }),
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sender email address. To include a friendly name, use the format "Your Name <sender@domain.com>".',
      }),
    subject: z.string().exactOptional().openapi({ description: 'Email subject.' }),
    reply_to: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Reply-to email addresses.' }),
    html: z.string().exactOptional().openapi({ description: 'The HTML version of the template.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The plain text version of the template.' }),
    variables: z.array(TemplateVariableInputSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateTemplateOptions')

const UpdateTemplateResponseSuccessSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the template.' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'template' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTemplateResponseSuccess')

const RemoveTemplateResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'template' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the template.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the template was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveTemplateResponseSuccess')

const PublishTemplateResponseSuccessSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the template.' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'template' }),
  })
  .openapi({ required: [] })
  .openapi('PublishTemplateResponseSuccess')

const DuplicateTemplateResponseSuccessSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the duplicated template.' }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'template' }),
  })
  .openapi({ required: [] })
  .openapi('DuplicateTemplateResponseSuccess')

const CreateSegmentOptionsSchema = z
  .object({
    name: z.string().openapi({ description: 'The name of the segment.' }),
    audience_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the audience this segment belongs to.',
        deprecated: true,
      }),
    filter: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Filter conditions for the segment.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateSegmentOptions')

const CreateSegmentResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the segment.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'segment' }),
  })
  .openapi({ required: [] })
  .openapi('CreateSegmentResponseSuccess')

const GetSegmentResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the segment.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'segment' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the segment.', example: 'Active Users' }),
    audience_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the audience this segment belongs to.',
        deprecated: true,
      }),
    filter: z
      .object({})
      .exactOptional()
      .openapi({ description: 'Filter conditions for the segment.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the segment was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetSegmentResponseSuccess')

const UpdateSegmentOptionsSchema = z
  .object({ name: z.string().openapi({ description: 'The name of the segment.' }) })
  .openapi({ required: ['name'] })
  .openapi('UpdateSegmentOptions')

const UpdateSegmentResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the segment.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'segment' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSegmentResponseSuccess')

const ListSegmentsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier for the segment.' }),
            name: z.string().exactOptional().openapi({ description: 'Name of the segment.' }),
            audience_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the audience this segment belongs to.',
                deprecated: true,
              }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the segment was created.',
                example: '2023-10-06 23:47:56.678+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing segment information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListSegmentsResponseSuccess')

const RemoveSegmentResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the segment.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'segment' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the segment was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveSegmentResponseSuccess')

const CreateTopicOptionsSchema = z
  .object({
    name: z.string().max(50).openapi({ description: 'The name of the topic. Max 50 characters.' }),
    default_subscription: z
      .enum(['opt_in', 'opt_out'])
      .openapi({
        description:
          'The default subscription status for the topic. Cannot be changed after creation.',
      }),
    description: z
      .string()
      .max(200)
      .exactOptional()
      .openapi({ description: 'A description of the topic. Max 200 characters.' }),
    visibility: z
      .enum(['public', 'private'])
      .default('private')
      .exactOptional()
      .openapi({
        description:
          'The visibility of the topic. Public topics are visible to all contacts on the unsubscribe page. Private topics are only visible to opted-in contacts.',
      }),
  })
  .openapi({ required: ['name', 'default_subscription'] })
  .openapi('CreateTopicOptions')

const CreateTopicResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the topic.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'topic' }),
  })
  .openapi({ required: [] })
  .openapi('CreateTopicResponseSuccess')

const GetTopicResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the topic.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'topic' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the topic.', example: 'Newsletter' }),
    description: z.string().exactOptional().openapi({ description: 'A description of the topic.' }),
    default_subscription: z
      .enum(['opt_in', 'opt_out'])
      .exactOptional()
      .openapi({ description: 'The default subscription status for the topic.' }),
    visibility: z
      .enum(['public', 'private'])
      .exactOptional()
      .openapi({ description: 'The visibility of the topic.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the topic was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetTopicResponseSuccess')

const ListTopicsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier for the topic.' }),
            name: z.string().exactOptional().openapi({ description: 'Name of the topic.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'A description of the topic.' }),
            default_subscription: z
              .enum(['opt_in', 'opt_out'])
              .exactOptional()
              .openapi({ description: 'The default subscription status for the topic.' }),
            visibility: z
              .enum(['public', 'private'])
              .exactOptional()
              .openapi({ description: 'The visibility of the topic.' }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the topic was created.',
                example: '2023-10-06 23:47:56.678+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing topic information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListTopicsResponseSuccess')

const UpdateTopicOptionsSchema = z
  .object({
    name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: 'The name of the topic. Max 50 characters.' }),
    description: z
      .string()
      .max(200)
      .exactOptional()
      .openapi({ description: 'A description of the topic. Max 200 characters.' }),
    visibility: z
      .enum(['public', 'private'])
      .exactOptional()
      .openapi({ description: 'The visibility of the topic.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTopicOptions')

const UpdateTopicResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the topic.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'topic' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTopicResponseSuccess')

const RemoveTopicResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the topic.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'topic' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the topic was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveTopicResponseSuccess')

const CreateContactPropertyOptionsSchema = z
  .object({
    key: z
      .string()
      .openapi({
        description:
          'The property key. Max length is 50 characters. Only alphanumeric characters and underscores are allowed.',
      }),
    type: z.enum(['string', 'number']).openapi({ description: 'The property type.' }),
    fallback_value: z
      .xor([z.string(), z.number()])
      .exactOptional()
      .openapi({
        description:
          'The default value to use when the property is not set for a contact. Must match the type specified in the type field.',
      }),
  })
  .openapi({ required: ['key', 'type'] })
  .openapi('CreateContactPropertyOptions')

const CreateContactPropertyResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the contact property.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type of the response.', example: 'contact_property' }),
  })
  .openapi({ required: [] })
  .openapi('CreateContactPropertyResponseSuccess')

const GetContactPropertyResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'contact_property' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the contact property.',
        example: 'b6d24b8e-af0b-4c3c-be0c-359bbd97381e',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The property key.', example: 'company_name' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The property type.', example: 'string' }),
    fallback_value: z
      .xor([z.string(), z.number()])
      .exactOptional()
      .openapi({
        description: 'The default value when the property is not set for a contact.',
        example: 'Acme Corp',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the contact property was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetContactPropertyResponseSuccess')

const ListContactPropertiesResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier for the contact property.' }),
            key: z.string().exactOptional().openapi({ description: 'The property key.' }),
            type: z.string().exactOptional().openapi({ description: 'The property type.' }),
            fallback_value: z
              .xor([z.string(), z.number()])
              .exactOptional()
              .openapi({
                description: 'The default value when the property is not set for a contact.',
              }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the contact property was created.',
                example: '2023-10-06 23:47:56.678+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing contact property information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListContactPropertiesResponseSuccess')

const UpdateContactPropertyOptionsSchema = z
  .object({
    fallback_value: z
      .xor([z.string(), z.number()])
      .exactOptional()
      .openapi({
        description:
          'The default value to use when the property is not set for a contact. Must match the type of the property.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateContactPropertyOptions')

const UpdateContactPropertyResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the contact property.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'contact_property' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateContactPropertyResponseSuccess')

const RemoveContactPropertyResponseSuccessSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the contact property.',
        example: '78261eea-8f8b-4381-83c6-79fa7120f1cf',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'contact_property' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the contact property was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveContactPropertyResponseSuccess')

const AddContactToSegmentResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'contact_segment' }),
    contact_id: z.string().exactOptional().openapi({ description: 'The ID of the contact.' }),
    segment_id: z.string().exactOptional().openapi({ description: 'The ID of the segment.' }),
  })
  .openapi({ required: [] })
  .openapi('AddContactToSegmentResponseSuccess')

const ListContactSegmentsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier for the segment.' }),
            name: z.string().exactOptional().openapi({ description: 'Name of the segment.' }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the contact was added to the segment.',
                example: '2023-10-06 23:47:56.678+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing segment information for this contact.' }),
  })
  .openapi({ required: [] })
  .openapi('ListContactSegmentsResponseSuccess')

const RemoveContactFromSegmentResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'contact_segment' }),
    contact_id: z.string().exactOptional().openapi({ description: 'The ID of the contact.' }),
    segment_id: z.string().exactOptional().openapi({ description: 'The ID of the segment.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the contact was successfully removed from the segment.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveContactFromSegmentResponseSuccess')

const GetContactTopicsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({ description: 'Unique identifier for the topic.' }),
            name: z.string().exactOptional().openapi({ description: 'Name of the topic.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'Description of the topic.' }),
            subscription: z
              .enum(['opt_in', 'opt_out'])
              .exactOptional()
              .openapi({ description: 'The subscription status for this topic.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing topic subscriptions for this contact.' }),
  })
  .openapi({ required: [] })
  .openapi('GetContactTopicsResponseSuccess')

const UpdateContactTopicsOptionsSchema = z
  .object({
    topics: z.array(
      z
        .object({
          id: z.string().exactOptional().openapi({ description: 'The ID of the topic.' }),
          subscription: z
            .enum(['opt_in', 'opt_out'])
            .exactOptional()
            .openapi({ description: 'The subscription status (opt_in or opt_out).' }),
        })
        .openapi({ required: [] }),
    ),
  })
  .openapi({ required: ['topics'] })
  .openapi('UpdateContactTopicsOptions')

const UpdateContactTopicsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'The object type.', example: 'contact_topics' }),
    contact_id: z.string().exactOptional().openapi({ description: 'The ID of the contact.' }),
    topics: z
      .array(
        z
          .object({
            id: z.string().exactOptional().openapi({ description: 'The ID of the topic.' }),
            subscription: z
              .enum(['opt_in', 'opt_out'])
              .exactOptional()
              .openapi({ description: 'The subscription status.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of updated topic subscriptions.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateContactTopicsResponseSuccess')

const LogSummarySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The log ID.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date the log was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API endpoint that was called.' }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'])
      .exactOptional()
      .openapi({ description: 'The HTTP method used.' }),
    response_status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP status code of the response.' }),
    user_agent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user agent of the request.' }),
  })
  .openapi({ required: [] })
  .openapi('LogSummary')

const LogSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'log' }),
    id: z.uuid().exactOptional().openapi({ description: 'The log ID.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date the log was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The API endpoint that was called.' }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'])
      .exactOptional()
      .openapi({ description: 'The HTTP method used.' }),
    response_status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP status code of the response.' }),
    user_agent: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The user agent of the request.' }),
    request_body: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The request body sent to the API.' }),
    response_body: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The response body returned by the API.' }),
  })
  .openapi({ required: [] })
  .openapi('Log')

const ListLogsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(LogSummarySchema)
      .exactOptional()
      .openapi({ description: 'Array containing log information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListLogsResponse')

const AutomationStepSchema = z
  .object({
    key: z
      .string()
      .openapi({ description: 'A unique key for this step within the automation graph.' }),
    type: z
      .enum([
        'trigger',
        'send_email',
        'delay',
        'wait_for_event',
        'condition',
        'contact_update',
        'contact_delete',
        'add_to_segment',
      ])
      .openapi({ description: 'The type of automation step.' }),
    config: z
      .object({})
      .openapi({
        description:
          'Configuration for the step. Shape depends on `type`: - **trigger**: `{ event_name: string }` - **send_email**: `{ template: { id: string, variables?: object }, subject?: string, from?: string, reply_to?: string }` - **delay**: `{ duration: string }` — a human-readable duration (e.g. `"30 minutes"`) - **wait_for_event**: `{ event_name: string, timeout?: string, filter_rule?: object }` — `timeout` is a human-readable duration (e.g. `"1 hour"`) - **condition**: A rule tree with `type` (`rule`, `and`, `or`), `field`, `operator`, and `value` - **contact_update**: `{ first_name?: string|object, last_name?: string|object, unsubscribed?: boolean|object, properties?: object }` - **contact_delete**: `{}` - **add_to_segment**: `{ segment_id: string }`\n',
      }),
  })
  .openapi({
    description:
      'A step in an automation workflow. The `config` object varies based on the step `type`.',
    required: ['key', 'type', 'config'],
  })
  .openapi('AutomationStep')

const AutomationStepResponseSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique key of this step within the automation graph.' }),
    type: z
      .enum([
        'trigger',
        'send_email',
        'delay',
        'wait_for_event',
        'condition',
        'contact_update',
        'contact_delete',
        'add_to_segment',
      ])
      .exactOptional()
      .openapi({ description: 'The type of automation step.' }),
    config: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Configuration for the step. Shape depends on `type`. For `delay` steps, config contains `{ duration: string }` with a human-readable duration (e.g. `"30 minutes"`). For `wait_for_event` steps, config contains `{ event_name: string, timeout?: string, filter_rule?: object }` where `timeout` is a human-readable duration.\n',
      }),
  })
  .openapi({ description: 'A step as returned when retrieving an automation.', required: [] })
  .openapi('AutomationStepResponse')

const AutomationConnectionSchema = z
  .object({
    from: z.string().openapi({ description: 'The `key` of the source step.' }),
    to: z.string().openapi({ description: 'The `key` of the target step.' }),
    type: z
      .enum(['default', 'condition_met', 'condition_not_met', 'timeout', 'event_received'])
      .default('default')
      .exactOptional()
      .openapi({ description: 'The type of connection. Defaults to `default`.' }),
  })
  .openapi({
    description: 'A connection between two steps in the automation graph.',
    required: ['from', 'to'],
  })
  .openapi('AutomationConnection')

const CreateAutomationRequestSchema = z
  .object({
    name: z.string().min(1).openapi({ description: 'The name of the automation.' }),
    status: z
      .enum(['enabled', 'disabled'])
      .default('disabled')
      .exactOptional()
      .openapi({ description: 'The initial status of the automation. Defaults to `disabled`.' }),
    steps: z
      .array(AutomationStepSchema)
      .min(1)
      .max(150)
      .openapi({
        description:
          'The steps that compose the automation workflow. Must include at least one `trigger` step.',
      }),
    connections: z
      .array(AutomationConnectionSchema)
      .openapi({ description: 'The connections between steps in the automation graph.' }),
  })
  .openapi({ required: ['name', 'steps', 'connections'] })
  .openapi('CreateAutomationRequest')

const CreateAutomationResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the created automation.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateAutomationResponse')

const AutomationSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the automation.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the automation.' }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'The current status of the automation.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the automation was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the automation was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    steps: z
      .array(AutomationStepResponseSchema)
      .exactOptional()
      .openapi({ description: 'The steps in the active version of the automation.' }),
    connections: z
      .array(AutomationConnectionSchema)
      .exactOptional()
      .openapi({
        description: 'The connections between steps in the active version of the automation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Automation')

const AutomationListItemSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the automation.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the automation.' }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'The current status of the automation.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the automation was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the automation was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('AutomationListItem')

const ListAutomationsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(AutomationListItemSchema)
      .exactOptional()
      .openapi({ description: 'Array of automations.' }),
  })
  .openapi({ required: [] })
  .openapi('ListAutomationsResponse')

const PatchAutomationRequestSchema = z
  .object({
    name: z.string().min(1).exactOptional().openapi({ description: 'The name of the automation.' }),
    status: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'The status of the automation.' }),
    steps: z
      .array(AutomationStepSchema)
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          'The steps that compose the automation workflow. Must be provided together with `connections`.',
      }),
    connections: z
      .array(AutomationConnectionSchema)
      .exactOptional()
      .openapi({
        description:
          'The connections between steps in the automation graph. Must be provided together with `steps`.',
      }),
  })
  .openapi({
    description:
      'At least one of `name`, `status`, or `steps` and `connections` must be provided. When updating the workflow graph, both `steps` and `connections` must be provided together.\n',
    required: [],
  })
  .openapi('PatchAutomationRequest')

const PatchAutomationResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the updated automation.' }),
  })
  .openapi({ required: [] })
  .openapi('PatchAutomationResponse')

const DeleteAutomationResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the deleted automation.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the automation was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('DeleteAutomationResponse')

const DuplicateAutomationResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the duplicated automation.' }),
  })
  .openapi({ required: [] })
  .openapi('DuplicateAutomationResponse')

const StopAutomationResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the stopped automation.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status of the automation after stopping.',
        example: 'disabled',
      }),
  })
  .openapi({ required: [] })
  .openapi('StopAutomationResponse')

const AutomationRunStepSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'The key of the automation step.' }),
    type: z
      .enum([
        'trigger',
        'send_email',
        'delay',
        'wait_for_event',
        'condition',
        'contact_update',
        'contact_delete',
        'add_to_segment',
      ])
      .exactOptional()
      .openapi({ description: 'The type of automation step.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The execution status of this step.' }),
    started_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the step started executing.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    completed_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the step completed executing.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    output: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The output produced by the step, if any.' }),
    error: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'The error produced by the step, if any.' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the step record was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ description: 'A step execution within an automation run.', required: [] })
  .openapi('AutomationRunStep')

const AutomationRunSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'automation_run' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the automation run.' }),
    status: z
      .enum(['running', 'completed', 'failed', 'cancelled'])
      .exactOptional()
      .openapi({ description: 'The current status of the automation run.' }),
    started_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the run started.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    completed_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the run completed.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the run was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    steps: z
      .array(AutomationRunStepSchema)
      .exactOptional()
      .openapi({ description: 'The steps executed in this run, sorted in graph order.' }),
  })
  .openapi({ required: [] })
  .openapi('AutomationRun')

const AutomationRunListItemSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The ID of the automation run.' }),
    status: z
      .enum(['running', 'completed', 'failed', 'cancelled'])
      .exactOptional()
      .openapi({ description: 'The current status of the automation run.' }),
    started_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the run started.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    completed_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the run completed.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the run was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('AutomationRunListItem')

const ListAutomationRunsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(AutomationRunListItemSchema)
      .exactOptional()
      .openapi({ description: 'Array of automation runs.' }),
  })
  .openapi({ required: [] })
  .openapi('ListAutomationRunsResponse')

const EventSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'event' }),
    id: z.uuid().exactOptional().openapi({ description: 'The event ID.' }),
    name: z.string().exactOptional().openapi({ description: 'The event name.' }),
    schema: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the event was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the event was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('Event')

const EventSummarySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The event ID.' }),
    name: z.string().exactOptional().openapi({ description: 'The event name.' }),
    schema: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time the event was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
    updated_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time the event was last updated.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('EventSummary')

const CreateEventRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'The name of the event. Cannot start with the reserved `resend:` prefix.',
      }),
    schema: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateEventRequest')

const CreateEventResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'event' }),
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the created event.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateEventResponse')

const ListEventsResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(EventSummarySchema)
      .exactOptional()
      .openapi({ description: 'Array containing event information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListEventsResponse')

const UpdateEventRequestSchema = z
  .object({
    schema: z
      .object({})
      .nullable()
      .openapi({
        description:
          'A flat key/type map defining the event payload schema. Set to `null` to clear the schema. Supported types are `string`, `number`, `boolean`, and `date`.',
      }),
  })
  .openapi({ required: ['schema'] })
  .openapi('UpdateEventRequest')

const UpdateEventResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'event' }),
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the updated event.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateEventResponse')

const RemoveEventResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'event' }),
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the deleted event.' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the event was deleted.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('RemoveEventResponse')

const SendEventRequestSchema = z
  .object({
    event: z.string().openapi({ description: 'The name of the event to send.' }),
    contact_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the contact to associate with this event. Exactly one of `contact_id` or `email` must be provided.',
      }),
    email: z
      .email()
      .exactOptional()
      .openapi({
        description:
          'The email address to associate with this event. Exactly one of `contact_id` or `email` must be provided.',
      }),
    payload: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'An optional payload of key/value pairs to include with the event.',
      }),
  })
  .openapi({ required: ['event'] })
  .openapi('SendEventRequest')

const SendEventResponseSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'event' }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the event that was sent.' }),
  })
  .openapi({ required: [] })
  .openapi('SendEventResponse')

const WebhookEventBounceSchema = z
  .object({
    diagnosticCode: z
      .array(z.string())
      .openapi({
        description:
          'Array of SMTP diagnostic responses from the receiving server, one entry per recipient (e.g., `smtp; 550 5.1.1 user unknown`).',
      }),
    message: z
      .string()
      .openapi({ description: 'Detailed bounce message describing why the email bounced.' }),
    subType: z
      .enum([
        'Undetermined',
        'General',
        'NoEmail',
        'MailboxFull',
        'MessageTooLarge',
        'ContentRejected',
        'AttachmentRejected',
      ])
      .openapi({ description: 'Bounce sub-type.' }),
    type: z
      .enum(['Undetermined', 'Transient', 'Permanent'])
      .openapi({ description: 'Bounce type.' }),
  })
  .openapi({ required: ['diagnosticCode', 'message', 'subType', 'type'] })
  .openapi('WebhookEventBounce')

const WebhookEventClickSchema = z
  .object({
    ipAddress: z.string().openapi({ description: 'IP address of the user who clicked the link.' }),
    link: z.string().openapi({ description: 'The URL that was clicked.' }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the click occurred.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    userAgent: z
      .string()
      .openapi({ description: 'User agent string of the browser that clicked the link.' }),
  })
  .openapi({ required: ['ipAddress', 'link', 'timestamp', 'userAgent'] })
  .openapi('WebhookEventClick')

const WebhookEventFailedSchema = z
  .object({
    reason: z
      .string()
      .openapi({ description: 'Reason for the email failure (e.g., `reached_daily_quota`).' }),
  })
  .openapi({ required: ['reason'] })
  .openapi('WebhookEventFailed')

const WebhookEventSuppressedSchema = z
  .object({
    diagnosticCode: z
      .array(z.string())
      .openapi({
        description:
          'Array of SMTP diagnostic responses from the receiving server, one entry per recipient.',
      }),
    message: z
      .string()
      .openapi({
        description: 'Detailed suppression message describing why the email was suppressed.',
      }),
    reason: z
      .enum(['previous_bounce', 'previous_complaint'])
      .openapi({ description: 'Reason the address is suppressed.' }),
    type: z
      .enum(['Suppressed', 'OnAccountSuppressionList'])
      .openapi({ description: 'Suppression type.' }),
  })
  .openapi({ required: ['diagnosticCode', 'message', 'reason', 'type'] })
  .openapi('WebhookEventSuppressed')

const WebhookEventAttachmentSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the attachment.' }),
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'The filename of the attachment.' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the attachment.' }),
    content_disposition: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content disposition (e.g., `inline` or `attachment`).' }),
    content_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content-ID header used for referencing inline images.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('WebhookEventAttachment')

const WebhookDomainRecordSchema = z
  .object({
    record: z
      .enum(['SPF', 'DKIM', 'Receiving MX', 'Tracking', 'TrackingCAA'])
      .openapi({
        description:
          'The purpose of the DNS record (SPF and DKIM for sending; Receiving MX for inbound emails; Tracking and TrackingCAA for click and open tracking).',
      }),
    name: z.string().openapi({ description: 'DNS record name or subdomain.' }),
    value: z.string().openapi({ description: 'DNS record value to be set.' }),
    type: z.enum(['MX', 'TXT', 'CNAME', 'CAA']).openapi({ description: 'DNS record type.' }),
    ttl: z
      .string()
      .openapi({ description: 'Time to live for the DNS record (e.g., `Auto`, `60`).' }),
    status: z
      .enum(['pending', 'verified', 'failed', 'temporary_failure', 'not_started'])
      .openapi({ description: 'Verification status of this specific record.' }),
    priority: z
      .int()
      .exactOptional()
      .openapi({ description: 'Priority value (only applicable for MX records).' }),
  })
  .openapi({ required: ['record', 'name', 'value', 'type', 'ttl', 'status'] })
  .openapi('WebhookDomainRecord')

const OutboundEmailEventDataSchema = z
  .object({
    email_id: z.string().openapi({ description: 'Unique identifier for the email.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the email was created.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    from: z
      .string()
      .openapi({
        description: 'Sender email address and name in the format `Name <email@domain.com>`.',
      }),
    to: z
      .array(z.string())
      .openapi({ description: 'Array of impacted recipient email addresses.' }),
    subject: z.string().openapi({ description: 'Email subject line.' }),
    broadcast_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the broadcast campaign, if applicable.' }),
    template_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the template used, if applicable.' }),
    tags: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Tag key-value pairs associated with the email.' }),
    headers: z
      .array(
        z.object({ name: z.string(), value: z.string() }).openapi({ required: ['name', 'value'] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Custom headers included with the email (omitted when no custom headers are set).',
      }),
  })
  .openapi({ required: ['email_id', 'created_at', 'from', 'to', 'subject'] })
  .openapi('OutboundEmailEventData')

const EmailBouncedEventDataSchema = OutboundEmailEventDataSchema.and(
  z.object({ bounce: WebhookEventBounceSchema }).openapi({ required: ['bounce'] }),
).openapi('EmailBouncedEventData')

const EmailClickedEventDataSchema = OutboundEmailEventDataSchema.and(
  z.object({ click: WebhookEventClickSchema }).openapi({ required: ['click'] }),
).openapi('EmailClickedEventData')

const EmailFailedEventDataSchema = OutboundEmailEventDataSchema.and(
  z.object({ failed: WebhookEventFailedSchema }).openapi({ required: ['failed'] }),
).openapi('EmailFailedEventData')

const EmailSuppressedEventDataSchema = OutboundEmailEventDataSchema.and(
  z.object({ suppressed: WebhookEventSuppressedSchema }).openapi({ required: ['suppressed'] }),
).openapi('EmailSuppressedEventData')

const EmailReceivedEventDataSchema = z
  .object({
    email_id: z.string().openapi({ description: 'Unique identifier for the email.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the email was received.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    from: z.string().openapi({ description: 'Sender email address.' }),
    to: z.array(z.string()).openapi({ description: 'Array of recipient email addresses.' }),
    subject: z.string().openapi({ description: 'Email subject line.' }),
    message_id: z
      .string()
      .openapi({ description: 'The unique message ID from the email headers.' }),
    bcc: z.array(z.string()).openapi({ description: 'BCC recipients.' }),
    cc: z.array(z.string()).openapi({ description: 'CC recipients.' }),
    received_for: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers.",
        example: ['forwarded@example.com'],
      }),
    attachments: z
      .array(WebhookEventAttachmentSchema)
      .openapi({ description: 'Array of attachment metadata.' }),
  })
  .openapi({
    required: [
      'email_id',
      'created_at',
      'from',
      'to',
      'subject',
      'message_id',
      'bcc',
      'cc',
      'attachments',
    ],
  })
  .openapi('EmailReceivedEventData')

const ContactEventDataSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the contact.' }),
    audience_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the audience this contact belongs to.' }),
    segment_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Array of segment IDs the contact belongs to.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the contact was created.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the contact was last updated.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    email: z.string().openapi({ description: "Contact's email address." }),
    first_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Contact's first name." }),
    last_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Contact's last name." }),
    unsubscribed: z
      .boolean()
      .openapi({
        description: 'Whether the contact has unsubscribed from all emails sent from your team.',
      }),
  })
  .openapi({ required: ['id', 'created_at', 'updated_at', 'email', 'unsubscribed'] })
  .openapi('ContactEventData')

const ContactTopicsEventDataSchema = z
  .object({
    email: z.string().openapi({ description: "Contact's email address." }),
    topics: z
      .array(
        z
          .object({
            id: z.string().openapi({ description: 'Unique identifier for the topic.' }),
            subscription: z
              .enum(['opt_in', 'opt_out'])
              .openapi({ description: 'The new subscription status for this topic.' }),
          })
          .openapi({ required: ['id', 'subscription'] }),
      )
      .openapi({ description: 'Topics whose subscription changed in this update.' }),
  })
  .openapi({ required: ['email', 'topics'] })
  .openapi('ContactTopicsEventData')

const DomainEventDataSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the domain.' }),
    name: z.string().openapi({ description: 'The domain name (e.g., `example.com`).' }),
    status: z
      .enum([
        'verified',
        'partially_verified',
        'partially_failed',
        'failed',
        'pending',
        'not_started',
      ])
      .openapi({ description: 'Aggregated verification status of the domain.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the domain was created.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    region: z
      .enum(['us-east-1', 'eu-west-1', 'sa-east-1', 'ap-northeast-1'])
      .openapi({ description: 'AWS region where the domain is configured.' }),
    records: z
      .array(WebhookDomainRecordSchema)
      .openapi({ description: 'DNS records required for domain verification.' }),
  })
  .openapi({ required: ['id', 'name', 'status', 'created_at', 'region', 'records'] })
  .openapi('DomainEventData')

const SuppressionEventDataSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the suppression.' }),
    email: z.string().openapi({ description: 'Email address that is suppressed.' }),
    origin: z
      .enum(['bounce', 'complaint', 'manual'])
      .openapi({ description: 'Origin of the suppression.' }),
    source_id: z
      .string()
      .nullable()
      .openapi({
        description:
          'Identifier of the event that caused the suppression, such as the email that bounced or complained. Null for manually added suppressions.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the suppression was created.',
        example: '2023-10-06T23:47:56.678Z',
      }),
  })
  .openapi({ required: ['id', 'email', 'origin', 'source_id', 'created_at'] })
  .openapi('SuppressionEventData')

const TopicEventDataSchema = z
  .object({
    id: z.string().openapi({ description: 'Unique identifier for the topic.' }),
    name: z.string().openapi({ description: 'The name of the topic.' }),
    description: z.string().nullable().openapi({ description: 'A description of the topic.' }),
    default_subscription: z
      .enum(['opt_in', 'opt_out'])
      .openapi({ description: 'The default subscription status for the topic.' }),
    deleted: z.boolean().openapi({ description: 'Whether the topic has been deleted.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the topic was created.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the topic was last updated.',
        example: '2023-10-06T23:47:56.678Z',
      }),
  })
  .openapi({
    required: [
      'id',
      'name',
      'description',
      'default_subscription',
      'deleted',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('TopicEventData')

const EmailSentEventSchema = z
  .object({
    type: z.literal('email.sent').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: OutboundEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailSentEvent')

const EmailDeliveredEventSchema = z
  .object({
    type: z.literal('email.delivered').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: OutboundEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailDeliveredEvent')

const EmailDeliveryDelayedEventSchema = z
  .object({
    type: z.literal('email.delivery_delayed').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: OutboundEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailDeliveryDelayedEvent')

const EmailBouncedEventSchema = z
  .object({
    type: z.literal('email.bounced').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: EmailBouncedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailBouncedEvent')

const EmailComplainedEventSchema = z
  .object({
    type: z.literal('email.complained').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: OutboundEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailComplainedEvent')

const EmailOpenedEventSchema = z
  .object({
    type: z.literal('email.opened').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: OutboundEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailOpenedEvent')

const EmailClickedEventSchema = z
  .object({
    type: z.literal('email.clicked').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: EmailClickedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailClickedEvent')

const EmailFailedEventSchema = z
  .object({
    type: z.literal('email.failed').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: EmailFailedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailFailedEvent')

const EmailScheduledEventSchema = z
  .object({
    type: z.literal('email.scheduled').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: OutboundEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailScheduledEvent')

const EmailSuppressedEventSchema = z
  .object({
    type: z.literal('email.suppressed').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: EmailSuppressedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailSuppressedEvent')

const EmailReceivedEventSchema = z
  .object({
    type: z.literal('email.received').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: EmailReceivedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('EmailReceivedEvent')

const ContactCreatedEventSchema = z
  .object({
    type: z.literal('contact.created').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: ContactEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('ContactCreatedEvent')

const ContactUpdatedEventSchema = z
  .object({
    type: z.literal('contact.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: ContactEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('ContactUpdatedEvent')

const ContactDeletedEventSchema = z
  .object({
    type: z.literal('contact.deleted').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: ContactEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('ContactDeletedEvent')

const ContactTopicsUpdatedEventSchema = z
  .object({
    type: z.literal('contact.topics.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: ContactTopicsEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('ContactTopicsUpdatedEvent')

const DomainCreatedEventSchema = z
  .object({
    type: z.literal('domain.created').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: DomainEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('DomainCreatedEvent')

const DomainUpdatedEventSchema = z
  .object({
    type: z.literal('domain.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: DomainEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('DomainUpdatedEvent')

const DomainDeletedEventSchema = z
  .object({
    type: z.literal('domain.deleted').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: DomainEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('DomainDeletedEvent')

const SuppressionAddedEventSchema = z
  .object({
    type: z.literal('suppression.added').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: SuppressionEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('SuppressionAddedEvent')

const SuppressionRemovedEventSchema = z
  .object({
    type: z.literal('suppression.removed').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: SuppressionEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('SuppressionRemovedEvent')

const TopicCreatedEventSchema = z
  .object({
    type: z.literal('topic.created').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: TopicEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('TopicCreatedEvent')

const TopicUpdatedEventSchema = z
  .object({
    type: z.literal('topic.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: TopicEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('TopicUpdatedEvent')

const TopicDeletedEventSchema = z
  .object({
    type: z.literal('topic.deleted').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2023-10-06T23:47:56.678Z',
      }),
    data: TopicEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('TopicDeletedEvent')

const CreateSuppressionOptionsSchema = z
  .object({
    email: z
      .string()
      .openapi({ description: 'Email address to suppress.', example: 'steve.wozniak@gmail.com' }),
  })
  .openapi({ required: ['email'] })
  .openapi('CreateSuppressionOptions')

const CreateSuppressionResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'suppression' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the created suppression.',
        example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateSuppressionResponseSuccess')

const BatchAddSuppressionsOptionsSchema = z
  .object({
    emails: z
      .array(z.string())
      .min(1)
      .max(100)
      .openapi({
        description: 'Email addresses to suppress.',
        example: ['steve.wozniak@gmail.com'],
      }),
  })
  .openapi({ required: ['emails'] })
  .openapi('BatchAddSuppressionsOptions')

const BatchAddSuppressionsResponseSuccessSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            object: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of the object.', example: 'suppression' }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier for the suppression.',
                example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing the created suppressions.' }),
  })
  .openapi({ required: [] })
  .openapi('BatchAddSuppressionsResponseSuccess')

const BatchRemoveSuppressionsOptionsSchema = z
  .object({
    emails: z
      .array(z.string())
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Email addresses to remove from the suppression list.',
        example: ['steve.wozniak@gmail.com'],
      }),
    ids: z
      .array(z.string())
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Suppression IDs to remove from the suppression list.',
        example: ['e169aa45-1ecf-4183-9955-b1499d5701d3'],
      }),
  })
  .openapi({ description: 'Provide either `emails` or `ids`, but not both.', required: [] })
  .openapi('BatchRemoveSuppressionsOptions')

const BatchRemoveSuppressionsResponseSuccessSchema = z
  .object({
    data: z
      .array(
        z
          .object({
            object: z
              .string()
              .exactOptional()
              .openapi({ description: 'Type of the object.', example: 'suppression' }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier for the suppression.',
                example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
              }),
            deleted: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Indicates whether the suppression was successfully deleted.',
                example: true,
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing the removed suppressions.' }),
  })
  .openapi({ required: [] })
  .openapi('BatchRemoveSuppressionsResponseSuccess')

const RemoveSuppressionResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'suppression' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the removed suppression.',
        example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the suppression was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RemoveSuppressionResponseSuccess')

const GetSuppressionResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'suppression' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the suppression.',
        example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email address that is suppressed.',
        example: 'steve.wozniak@gmail.com',
      }),
    origin: z
      .enum(['bounce', 'complaint', 'manual'])
      .exactOptional()
      .openapi({ description: 'Origin of the suppression.', example: 'manual' }),
    source_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the event that caused the suppression, such as the email that bounced or complained.',
        example: '479e3145-dd38-476b-932c-529ceb705947',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp indicating when the suppression was created.',
        example: '2023-10-06 23:47:56.678+00',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetSuppressionResponseSuccess')

const ListSuppressionsResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if there are more results available.' }),
    data: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier for the suppression.',
                example: 'e169aa45-1ecf-4183-9955-b1499d5701d3',
              }),
            email: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Email address that is suppressed.',
                example: 'steve.wozniak@gmail.com',
              }),
            origin: z
              .enum(['bounce', 'complaint', 'manual'])
              .exactOptional()
              .openapi({ description: 'Origin of the suppression.', example: 'manual' }),
            source_id: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Identifier of the event that caused the suppression, such as the email that bounced or complained.',
                example: '479e3145-dd38-476b-932c-529ceb705947',
              }),
            created_at: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Timestamp indicating when the suppression was created.',
                example: '2023-10-06 23:47:56.678+00',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array containing suppression information.' }),
  })
  .openapi({ required: [] })
  .openapi('ListSuppressionsResponseSuccess')

const InboxSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'The object type. Always `inbox`.', example: 'inbox' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    name: z
      .string()
      .openapi({
        description:
          'Internal name for the inbox. Recipients do not see it. Falls back to the inbox email address.',
        example: 'Customer Support',
      }),
    email_address: z
      .string()
      .openapi({ description: 'The address of the inbox.', example: 'support@acme.com' }),
    domain_id: z
      .uuid()
      .openapi({
        description: 'The ID of the domain that owns the address.',
        example: 'd91cd9bd-1176-453e-8fc1-35364d380206',
      }),
    receiving_address: z
      .string()
      .nullable()
      .openapi({
        description: 'The address to forward mail to when forwarding is enabled. `null` otherwise.',
        example: null,
      }),
    from_name: z
      .string()
      .nullable()
      .openapi({
        description:
          'The name recipients see when mail is sent from this inbox. `null` when not set.',
        example: 'Ada from Support',
      }),
    unread: z
      .int()
      .openapi({ description: 'The number of unread threads in the Inbox folder.', example: 3 }),
    drafts: z.int().openapi({ description: 'The number of unsent drafts.', example: 2 }),
    last_received: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'ISO 8601 timestamp of the newest received email in the Inbox folder. `null` when the folder has no received email.',
        example: '2026-08-05T14:03:11.229Z',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'ISO 8601 timestamp when the inbox was created.',
        example: '2026-08-01T09:12:44.512Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'ISO 8601 timestamp when the inbox was last updated.',
        example: '2026-08-03T10:20:05.118Z',
      }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'name',
      'email_address',
      'domain_id',
      'receiving_address',
      'from_name',
      'unread',
      'drafts',
      'last_received',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('Inbox')

const CreateInboxOptionsSchema = z
  .object({
    email_address: z
      .string()
      .openapi({
        description:
          'The inbox email address on one of your domains. The API trims and lowercases it. The part before the `@` is at most 64 characters and contains only letters, numbers, and `. _ % -`. A `+` returns a 422. It cannot start or end with a dot or contain two dots in a row.',
        example: 'support@acme.com',
      }),
    name: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'Internal name for the inbox. Recipients do not see it. Max 64 characters. Defaults to `email_address`.',
        example: 'Customer Support',
      }),
    from_name: z
      .string()
      .max(78)
      .exactOptional()
      .openapi({
        description:
          'The name recipients see when mail is sent from this inbox. A plain name, not a `Name <email>` address. Max 78 characters. It cannot contain a colon, `<`, `>`, line breaks, or other control characters. An email address inside the name must be on a domain the team has verified for sending. An empty string leaves it unset.',
        example: 'Ada from Support',
      }),
    forwarding: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When `true`, Resend provisions a receiving address so you can receive mail without adding an MX record. The address is returned in `receiving_address`.',
      }),
  })
  .openapi({ required: ['email_address'] })
  .openapi('CreateInboxOptions')

const CreateInboxResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'inbox' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('CreateInboxResponseSuccess')

const GetInboxResponseSuccessSchema = InboxSchema.openapi('GetInboxResponseSuccess')

const ListInboxesResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(
        z
          .object({
            id: z
              .uuid()
              .openapi({
                description: 'The ID of the inbox.',
                example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
              }),
            name: z
              .string()
              .nullable()
              .openapi({
                description: 'Internal name for the inbox. Recipients do not see it.',
                example: 'Customer Support',
              }),
            email_address: z
              .string()
              .openapi({ description: 'The address of the inbox.', example: 'support@acme.com' }),
            from_name: z
              .string()
              .nullable()
              .openapi({
                description:
                  'The name recipients see when mail is sent from this inbox. `null` when not set.',
                example: 'Ada from Support',
              }),
            unread: z
              .int()
              .openapi({
                description: 'The number of unread threads in the Inbox folder.',
                example: 3,
              }),
            last_received: z.iso
              .datetime({ offset: true })
              .nullable()
              .openapi({
                description:
                  'ISO 8601 timestamp of the newest received email in the Inbox folder. `null` when the folder has no received email.',
                example: '2026-08-05T14:03:11.229Z',
              }),
            created_at: z.iso
              .datetime({ offset: true })
              .openapi({
                description: 'ISO 8601 timestamp when the inbox was created.',
                example: '2026-08-01T09:12:44.512Z',
              }),
            updated_at: z.iso
              .datetime({ offset: true })
              .openapi({
                description: 'ISO 8601 timestamp when the inbox was last updated.',
                example: '2026-08-03T10:20:05.118Z',
              }),
          })
          .openapi({
            required: [
              'id',
              'name',
              'email_address',
              'from_name',
              'unread',
              'last_received',
              'created_at',
              'updated_at',
            ],
          }),
      )
      .openapi({ description: 'Array containing inbox information.' }),
  })
  .openapi({ required: ['object', 'has_more', 'data'] })
  .openapi('ListInboxesResponseSuccess')

const UpdateInboxOptionsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'name')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['name'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'from_name')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['from_name'] }),
  ])
  .and(
    z
      .object({
        name: z
          .string()
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            description:
              'New internal name for the inbox. Recipients do not see it. Between 1 and 64 characters after trimming.',
            example: 'Customer Support',
          }),
        from_name: z
          .string()
          .max(78)
          .exactOptional()
          .openapi({
            description:
              'The name recipients see when mail is sent from this inbox. A plain name, not a `Name <email>` address. Max 78 characters. It cannot contain a colon, `<`, `>`, line breaks, or other control characters. An email address inside the name must be on a domain the team has verified for sending. An empty string removes it.',
            example: 'Ada from Support',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'Provide at least one of `name` or `from_name`.' })
  .openapi('UpdateInboxOptions')

const UpdateInboxResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'The object type.', example: 'inbox' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('UpdateInboxResponseSuccess')

const RemoveInboxResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'The object type.', example: 'inbox' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    deleted: z
      .boolean()
      .openapi({
        description: 'Indicates whether the inbox was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: ['object', 'id', 'deleted'] })
  .openapi('RemoveInboxResponseSuccess')

const InboxAgentSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'The object type. Always `inbox_agent`.', example: 'inbox_agent' }),
    instructions: z
      .string()
      .nullable()
      .openapi({
        description:
          'Instructions the agent follows when it handles the threads of the inbox. Null when no instructions are set.',
        example: 'Answer refund questions yourself. Escalate legal threats.',
      }),
    tone: z
      .union([
        z.literal('concise_professional'),
        z.literal('concise_casual'),
        z.literal('expanded_professional'),
        z.literal('expanded_casual'),
        z.literal(null),
      ])
      .nullable()
      .openapi({
        description: 'The tone the agent writes in. Null when no tone is set.',
        example: 'concise_professional',
      }),
    actions: z
      .array(
        z.enum([
          'draft_reply',
          'forward_thread',
          'add_labels',
          'assign_thread',
          'mark_as_spam',
          'archive',
          'move_to_trash',
        ]),
      )
      .openapi({
        description:
          'The actions the agent can take, in the order of the enum. Empty when no actions are enabled.',
        example: ['draft_reply', 'add_labels'],
      }),
  })
  .openapi({ required: ['object', 'instructions', 'tone', 'actions'] })
  .openapi('InboxAgent')

const GetInboxAgentResponseSuccessSchema = InboxAgentSchema.openapi('GetInboxAgentResponseSuccess')

const UpdateInboxAgentOptionsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'instructions')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['instructions'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'tone')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['tone'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'actions')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['actions'] }),
  ])
  .and(
    z
      .object({
        instructions: z
          .string()
          .min(1)
          .max(4000)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Instructions the agent follows when it handles the threads of the inbox. Max 4000 characters. Leading and trailing whitespace is trimmed, and the trimmed value must not be empty. Send null to clear the instructions.',
            example: 'Answer refund questions yourself. Escalate legal threats.',
          }),
        tone: z
          .union([
            z.literal('concise_professional'),
            z.literal('concise_casual'),
            z.literal('expanded_professional'),
            z.literal('expanded_casual'),
            z.literal(null),
          ])
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The tone the agent writes in. Send null to clear the tone.',
            example: 'concise_professional',
          }),
        actions: z
          .array(
            z.enum([
              'draft_reply',
              'forward_thread',
              'add_labels',
              'assign_thread',
              'mark_as_spam',
              'archive',
              'move_to_trash',
            ]),
          )
          .exactOptional()
          .openapi({
            description:
              'The actions the agent can take. Replaces the whole set. Duplicates are removed. Send an empty array to disable all actions. The old names `archive_thread` and `delete_thread` return a 422. Use `archive` and `move_to_trash`.',
            example: ['draft_reply', 'add_labels'],
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description:
      'At least one of `instructions`, `tone`, or `actions` must be provided. Omitted fields keep their current value.',
  })
  .openapi('UpdateInboxAgentOptions')

const UpdateInboxAgentResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'The object type. Always `inbox_agent`.', example: 'inbox_agent' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox agent.',
        example: 'a1f84a4e-6f2b-4f0a-9c1d-8a2e5b3c7d90',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('UpdateInboxAgentResponseSuccess')

const InboxLabelSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the label.',
        example: '7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34',
      }),
    name: z.string().openapi({ description: 'The name of the label.', example: 'Urgent' }),
    color: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/)
      .openapi({
        description: 'The color of the label, as a `#RRGGBB` hex color in uppercase.',
        example: '#E93D82',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the label was created.',
        example: '2026-08-05T14:07:42.881Z',
      }),
  })
  .openapi({ required: ['id', 'name', 'color', 'created_at'] })
  .openapi('InboxLabel')

const ListInboxLabelsResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    data: z
      .array(InboxLabelSchema)
      .openapi({ description: 'The labels on the inbox, oldest first.' }),
  })
  .openapi({ required: ['object', 'data'] })
  .openapi('ListInboxLabelsResponseSuccess')

const CreateInboxLabelOptionsSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(64)
      .openapi({
        description:
          'The name of the label. Max 64 characters. Leading and trailing whitespace is trimmed. Must not match another label on the inbox, compared without case.',
        example: 'Urgent',
      }),
    color: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/)
      .exactOptional()
      .openapi({
        description:
          'The color of the label, as a `#RRGGBB` hex color. It is stored in uppercase. When omitted, a random color from the dashboard palette is used.',
        example: '#E93D82',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateInboxLabelOptions')

const CreateInboxLabelResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'Type of the response object.', example: 'inbox_label' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the label.',
        example: '7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('CreateInboxLabelResponseSuccess')

const UpdateInboxLabelOptionsSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'A new name for the label. Max 64 characters. Leading and trailing whitespace is trimmed. Must not match another label on the inbox, compared without case.',
        example: 'Billing',
      }),
    color: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/)
      .exactOptional()
      .openapi({
        description:
          'A new color for the label, as a `#RRGGBB` hex color. It is stored in uppercase.',
        example: '#F76B15',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateInboxLabelOptions')

const UpdateInboxLabelResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'Type of the response object.', example: 'inbox_label' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the updated label.',
        example: '7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('UpdateInboxLabelResponseSuccess')

const RemoveInboxLabelResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'Type of the response object.', example: 'inbox_label' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the removed label.',
        example: '7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34',
      }),
    deleted: z
      .boolean()
      .openapi({ description: 'Indicates whether the label was deleted.', example: true }),
  })
  .openapi({ required: ['object', 'id', 'deleted'] })
  .openapi('RemoveInboxLabelResponseSuccess')

const InboxThreadLabelSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the label.',
        example: '7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34',
      }),
    name: z.string().openapi({ description: 'The name of the label.', example: 'Urgent' }),
    color: z
      .string()
      .regex(/^#[0-9A-Fa-f]{6}$/)
      .openapi({
        description: 'The color of the label, as a `#RRGGBB` hex color in uppercase.',
        example: '#E93D82',
      }),
  })
  .openapi({ required: ['id', 'name', 'color'] })
  .openapi('InboxThreadLabel')

const InboxThreadSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12',
      }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject of the thread.', example: 'Refund for order 1041' }),
    from: z
      .string()
      .nullable()
      .openapi({
        description: 'The sender email address. Can include the display name.',
        example: 'ada@example.org',
      }),
    to: z
      .array(z.string())
      .openapi({
        description:
          'The recipients of the most recent email. For a received email, these are the addresses it was delivered to, not the full `To` header.',
        example: ['support@example.com'],
      }),
    cc: z
      .array(z.string())
      .openapi({ description: 'The CC recipients of the most recent email.', example: [] }),
    bcc: z
      .array(z.string())
      .openapi({
        description:
          'The BCC recipients of the most recent email. Always empty for a received email.',
        example: [],
      }),
    labels: z
      .array(InboxThreadLabelSchema)
      .openapi({ description: 'The labels attached to the thread.' }),
    email_count: z
      .int()
      .openapi({ description: 'The number of emails in the thread.', example: 2 }),
    has_attachment: z
      .boolean()
      .openapi({
        description: 'Whether the most recent email in the thread has an attachment.',
        example: true,
      }),
    has_draft: z
      .boolean()
      .openapi({ description: 'Whether the thread has an unsent draft.', example: false }),
    read: z
      .boolean()
      .openapi({
        description: 'True only when every email in the thread is read.',
        example: false,
      }),
    received_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the thread was last active.',
        example: '2026-08-05T14:03:11.229Z',
      }),
    folder: z
      .enum(['inbox', 'archive', 'spam', 'sent', 'trash'])
      .openapi({
        description:
          'The folder the thread is in. Every thread is in exactly one folder. `inbox` holds threads with at least one received email. `archive` and `spam` hold threads moved there. `trash` holds threads scheduled for deletion in 30 days. `sent` holds threads whose emails are all outbound, and is assigned automatically.',
        example: 'inbox',
      }),
  })
  .openapi({
    description: "A thread as it appears in the list of an inbox's threads.",
    required: [
      'id',
      'subject',
      'from',
      'to',
      'cc',
      'bcc',
      'labels',
      'email_count',
      'has_attachment',
      'has_draft',
      'read',
      'received_at',
      'folder',
    ],
  })
  .openapi('InboxThread')

const InboxThreadSearchResultSchema = InboxThreadSchema.and(
  z
    .object({
      matched_email_id: z
        .uuid()
        .nullable()
        .openapi({
          description:
            'The ID of the email in the thread that matched the search. When `query` has words or phrases, it is the most relevant match. Otherwise, it is the newest. It is the same `id` that the list thread emails endpoint returns, so use it as `email_id` with the get, reply and forward endpoints. Null when the search index returns no matched email for the thread.',
          example: 'e8a3f1c6-2b9d-4e5a-a7c4-9d1b6f3e2a80',
        }),
    })
    .openapi({ required: ['matched_email_id'] }),
).openapi('InboxThreadSearchResult')

const InboxThreadSummarySchema = z
  .object({
    object: z.string().openapi({ description: 'The object type.', example: 'inbox_thread' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12',
      }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject of the thread.', example: 'Refund for order 1041' }),
    folder: z
      .enum(['inbox', 'archive', 'spam', 'sent', 'trash'])
      .openapi({ description: 'The folder the thread is in.', example: 'inbox' }),
    labels: z
      .array(InboxThreadLabelSchema)
      .openapi({ description: 'The labels attached to the thread.' }),
    read: z
      .boolean()
      .openapi({
        description: 'True only when every email in the thread is read.',
        example: false,
      }),
  })
  .openapi({
    description: 'The summary of a single thread.',
    required: ['object', 'id', 'subject', 'folder', 'labels', 'read'],
  })
  .openapi('InboxThreadSummary')

const ListInboxThreadsResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .openapi({ description: 'Indicates if there are more results available.', example: true }),
    data: z
      .array(InboxThreadSchema)
      .openapi({ description: 'The matching threads, most recently active first.' }),
  })
  .openapi({ required: ['object', 'has_more', 'data'] })
  .openapi('ListInboxThreadsResponseSuccess')

const SearchInboxThreadsResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .openapi({ description: 'Indicates if there are more results available.', example: true }),
    data: z
      .array(InboxThreadSearchResultSchema)
      .openapi({ description: 'The matching threads, most recently active first.' }),
  })
  .openapi({ required: ['object', 'has_more', 'data'] })
  .openapi('SearchInboxThreadsResponseSuccess')

const GetInboxThreadResponseSuccessSchema = InboxThreadSummarySchema.openapi(
  'GetInboxThreadResponseSuccess',
)

const UpdateInboxThreadOptionsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'read')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['read'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'folder')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['folder'] }),
  ])
  .and(
    z
      .object({
        read: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Marks every email in the thread read or unread.',
            example: true,
          }),
        folder: z
          .enum(['inbox', 'archive', 'spam', 'trash'])
          .exactOptional()
          .openapi({
            description:
              'Moves the thread to this folder. `sent` is assigned automatically and cannot be set.',
            example: 'archive',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description:
      'At least one of `read` or `folder` is required. Use the thread labels endpoints to change labels.',
  })
  .openapi('UpdateInboxThreadOptions')

const UpdateInboxThreadResponseSuccessSchema = InboxThreadSummarySchema.openapi(
  'UpdateInboxThreadResponseSuccess',
)

const AddInboxThreadLabelsOptionsSchema = z
  .object({
    labels: z
      .array(z.uuid())
      .min(1)
      .max(10)
      .openapi({
        description:
          'The IDs of the labels to apply to the thread. Between 1 and 10 IDs, each a label of the inbox.',
        example: ['7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34'],
      }),
  })
  .openapi({ required: ['labels'] })
  .openapi('AddInboxThreadLabelsOptions')

const SetInboxThreadLabelsOptionsSchema = z
  .object({
    labels: z
      .array(z.uuid())
      .max(100)
      .openapi({
        description:
          'The IDs of the labels the thread carries after the change. Up to 100 IDs, each a label of the inbox. Pass an empty array to take every label off the thread.',
        example: ['7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34'],
      }),
  })
  .openapi({ required: ['labels'] })
  .openapi('SetInboxThreadLabelsOptions')

const InboxThreadLabelListSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    data: z
      .array(InboxThreadLabelSchema)
      .openapi({ description: 'Every label on the thread after the change.' }),
  })
  .openapi({ required: ['object', 'data'] })
  .openapi('InboxThreadLabelList')

const AddInboxThreadLabelsResponseSuccessSchema = InboxThreadLabelListSchema.openapi(
  'AddInboxThreadLabelsResponseSuccess',
)

const SetInboxThreadLabelsResponseSuccessSchema = InboxThreadLabelListSchema.openapi(
  'SetInboxThreadLabelsResponseSuccess',
)

const RemoveInboxThreadLabelResponseSuccessSchema = InboxThreadLabelListSchema.openapi(
  'RemoveInboxThreadLabelResponseSuccess',
)

const RemoveInboxThreadResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'The object type.', example: 'inbox_thread' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12',
      }),
    deleted: z
      .boolean()
      .openapi({
        description:
          'True when this call moved the thread to `trash`. False when the thread was already there.',
        example: true,
      }),
  })
  .openapi({ required: ['object', 'id', 'deleted'] })
  .openapi('RemoveInboxThreadResponseSuccess')

const InboxThreadEmailAttachmentSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The ID of the attachment.',
        example: '9d4f2b81-6c3a-4e7d-8b12-0a5c6d7e8f90',
      }),
    filename: z
      .string()
      .nullable()
      .openapi({ description: 'The filename of the attachment.', example: 'receipt.pdf' }),
    size: z
      .int()
      .nullable()
      .openapi({ description: 'The size of the attachment in bytes.', example: 20841 }),
  })
  .openapi({ required: ['id', 'filename', 'size'] })
  .openapi('InboxThreadEmailAttachment')

const InboxThreadEmailSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the message.',
        example: '5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60',
      }),
    direction: z
      .enum(['inbound', 'outbound'])
      .openapi({
        description:
          'Whether the inbox received the message (`inbound`) or sent it (`outbound`). A message the inbox sent to itself is `inbound`, so a reply to it goes to its sender.',
        example: 'inbound',
      }),
    from: z
      .string()
      .openapi({
        description:
          'Sender email address. Includes the display name when the sender has one, in the format "Name <sender@domain.com>".',
        example: 'Ada Lovelace <ada@example.org>',
      }),
    to: z
      .array(z.string())
      .openapi({
        description:
          'The recipients of the message. For a received message, these are the addresses it was delivered to, not the full `To` header.',
        example: ['support@acme.com'],
      }),
    cc: z
      .array(z.string())
      .openapi({ description: 'The CC recipients of the message.', example: [] }),
    bcc: z
      .array(z.string())
      .openapi({
        description: 'The BCC recipients of the message. Always empty for a received message.',
        example: [],
      }),
    reply_to: z
      .array(z.string())
      .openapi({
        description: 'The Reply-To addresses of the message.',
        example: ['replies@example.org'],
      }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject of the message.', example: 'Refund for order 1041' }),
    message_id: z
      .string()
      .nullable()
      .openapi({
        description: 'The Message-ID header of the message.',
        example: '<1041@example.org>',
      }),
    html: z
      .string()
      .nullable()
      .openapi({
        description: 'The HTML body.',
        example: '<p>Could I get a refund for order 1041?</p>',
      }),
    text: z
      .string()
      .nullable()
      .openapi({
        description: 'The plain-text body.',
        example: 'Could I get a refund for order 1041?',
      }),
    attachments: z
      .array(InboxThreadEmailAttachmentSchema)
      .openapi({ description: 'The attachments of the message.' }),
    read: z
      .boolean()
      .openapi({ description: 'Whether the message has been read.', example: false }),
    received_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the inbox received the message, or when the inbox sent it.',
        example: '2026-08-05T14:03:11.229Z',
      }),
  })
  .openapi({
    required: [
      'id',
      'direction',
      'from',
      'to',
      'cc',
      'bcc',
      'reply_to',
      'subject',
      'message_id',
      'html',
      'text',
      'attachments',
      'read',
      'received_at',
    ],
  })
  .openapi('InboxThreadEmail')

const ListInboxThreadEmailsResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(InboxThreadEmailSchema)
      .openapi({ description: 'The messages of the thread on this page, oldest first.' }),
  })
  .openapi({ required: ['object', 'has_more', 'data'] })
  .openapi('ListInboxThreadEmailsResponseSuccess')

const GetInboxThreadEmailResponseSuccessSchema = InboxThreadEmailSchema.openapi(
  'GetInboxThreadEmailResponseSuccess',
)

const ReplyInboxThreadEmailOptionsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'html')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['html'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'text')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['text'] }),
  ])
  .and(
    z
      .object({
        cc: z
          .xor([z.string(), z.array(z.string()).max(49), z.null().nullable()])
          .exactOptional()
          .openapi({
            description:
              'CC recipient email address. For multiple addresses, send as an array of strings. Without `reply_all`, the reply copies only these addresses. With `reply_all`, these addresses are merged with the copied recipients, without duplicates. `cc` and `bcc` combined must be fewer than 50 addresses. After the `to` recipients are added, the reply cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
            example: ['billing@acme.com'],
          }),
        bcc: z
          .xor([z.string(), z.array(z.string()).max(49), z.null().nullable()])
          .exactOptional()
          .openapi({
            description:
              'BCC recipient email address. For multiple addresses, send as an array of strings. BCC recipients of the original message are never copied. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
            example: ['records@acme.com'],
          }),
        html: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The HTML body of the reply.',
            example: '<p>Refund issued for order 1041.</p>',
          }),
        text: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The plain-text body of the reply.',
            example: 'Refund issued for order 1041.',
          }),
        subject: z
          .string()
          .min(1)
          .max(2000)
          .exactOptional()
          .openapi({
            description:
              'The subject of the reply. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Re:` if it does not already start with it.',
            example: 'Re: Refund for order 1041',
          }),
        reply_all: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              "Reply to everyone on the original message. For a message the inbox received, the reply goes to its `Reply-To` addresses, or to its sender when it has none, and copies the other addresses of its `To` header and its `cc` recipients in `cc`. For a message the inbox sent, the reply goes to that message's `Reply-To` addresses when they are not the inbox address, otherwise to its `to` recipients, and copies its `cc` recipients. The inbox address is always excluded, and duplicates are removed.",
            example: false,
          }),
        attachments: z
          .array(AttachmentSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Files to attach, as on `POST /emails`. Each one needs `content` or `path`. The `content` of all files can total at most 25 MB. A `path` file does not count toward the 25 MB, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that does not start with `http` or that starts with `http://localhost:`, or a `content_type` that is not a valid MIME type returns a 422. Other `path` problems fail the email when it is sent, not the request.',
          }),
        headers: z
          .record(z.string(), z.string())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.',
            example: { 'X-Ticket-Id': '4821' },
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ description: 'At least one of `html` or `text` must contain more than whitespace.' })
  .openapi('ReplyInboxThreadEmailOptions')

const ReplyInboxThreadEmailResponseSuccessSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the sent email. Use it with the emails endpoints.',
        example: '6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ReplyInboxThreadEmailResponseSuccess')

const ForwardInboxThreadEmailOptionsSchema = z
  .object({
    to: z
      .xor([z.string(), z.array(z.string()).min(1).max(50)])
      .openapi({
        description:
          'Recipient email address. For multiple addresses, send as an array of strings. Must name at least one address. `to`, `cc` and `bcc` combined cannot exceed 50 recipients. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
        example: ['colleague@example.org'],
      }),
    cc: z
      .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'CC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
        example: ['billing@acme.com'],
      }),
    bcc: z
      .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'BCC recipient email address. For multiple addresses, send as an array of strings. Counts toward the 50-recipient limit. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
        example: ['records@acme.com'],
      }),
    html: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An HTML note sent above the quoted original.',
        example: '<p>Flagging this refund request for you.</p>',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A plain-text note sent above the quoted original.',
        example: 'Flagging this refund request for you.',
      }),
    subject: z
      .string()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'The subject of the forward. Cannot be only whitespace or contain a line break. When omitted, the thread subject is used, prefixed with `Fwd:` if it does not already start with it.',
        example: 'Fwd: Refund for order 1041',
      }),
    attachments: z
      .array(AttachmentSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Files to attach, as on `POST /emails`. Each one needs `content` or `path`. They share one limit with the attachments of the original message, which the forward also sends. Together they can have at most 25 MB of `content`. A `path` file does not count toward the 25 MB, because it is fetched when the email is sent. An empty file, a blocked file type, a `path` that does not start with `http` or that starts with `http://localhost:`, or a `content_type` that is not a valid MIME type returns a 422. Other `path` problems fail the email when it is sent, not the request.',
      }),
    headers: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.',
        example: { 'X-Ticket-Id': '4821' },
      }),
  })
  .openapi({ required: ['to'] })
  .openapi('ForwardInboxThreadEmailOptions')

const ForwardInboxThreadEmailResponseSuccessSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the sent email. Use it with the emails endpoints.',
        example: '6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ForwardInboxThreadEmailResponseSuccess')

const InboxDraftAttachmentInputSchema = z
  .object({
    content: z
      .string()
      .openapi({
        description: 'The content of the file, encoded in base64. It cannot be empty.',
        example: 'aGVsbG8gZTJl',
      }),
    filename: z
      .string()
      .min(1)
      .openapi({
        description: 'The filename of the attachment. A blocked file type returns a 422.',
        example: 'receipt.pdf',
      }),
    content_type: z
      .string()
      .min(1)
      .openapi({
        description:
          'The MIME type of the attachment. It must be a valid MIME type, such as `application/pdf`, or the request returns a 422.',
        example: 'application/pdf',
      }),
  })
  .openapi({
    description:
      'A file to store on a draft. Unlike `POST /emails` attachments, a draft attachment cannot use `path` or `content_id`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored.',
    required: ['content', 'filename', 'content_type'],
  })
  .openapi('InboxDraftAttachmentInput')

const InboxDraftAttachmentSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the attachment.',
        example: '5c1e9d2a-7b3f-4e8a-9c6d-2f0a1b3c4d5e',
      }),
    filename: z
      .string()
      .openapi({ description: 'The filename of the attachment.', example: 'receipt.pdf' }),
    content_type: z
      .string()
      .openapi({ description: 'The MIME type of the attachment.', example: 'application/pdf' }),
    size: z.int().openapi({ description: 'The size of the attachment in bytes.', example: 20841 }),
  })
  .openapi({
    description: 'A file stored on a draft.',
    required: ['id', 'filename', 'content_type', 'size'],
  })
  .openapi('InboxDraftAttachment')

const InboxDraftSchema = z
  .object({
    object: z.string().openapi({ description: 'The object type.', example: 'inbox_draft' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: 'c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32',
      }),
    type: z
      .enum(['standalone', 'reply'])
      .openapi({
        description:
          '`reply` when the draft replies to an email in an existing thread. `standalone` when the draft starts a new thread.',
        example: 'standalone',
      }),
    to: z
      .array(z.string())
      .nullable()
      .openapi({
        description: 'The recipients. `null` or empty when no recipients are set.',
        example: ['ada@example.org'],
      }),
    cc: z.array(z.string()).openapi({ description: 'The CC recipients.', example: [] }),
    bcc: z.array(z.string()).openapi({ description: 'The BCC recipients.', example: [] }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject.', example: 'Refund for order 1041' }),
    html: z
      .string()
      .nullable()
      .openapi({ description: 'The HTML body.', example: '<p>Refund issued for order 1041.</p>' }),
    text: z
      .string()
      .nullable()
      .openapi({
        description:
          'The plain text body. A reply draft created without a body has an empty string.',
        example: 'Refund issued for order 1041.',
      }),
    thread_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The Thread ID when the draft is a reply. `null` otherwise.',
        example: null,
      }),
    reply_to_email_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The Email ID the draft replies to. `null` otherwise.',
        example: null,
      }),
    email_id: z
      .uuid()
      .nullable()
      .openapi({
        description:
          'The ID of the outbound email queued when the draft was sent. `null` until the draft is sent.',
        example: null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the draft was created.',
        example: '2026-08-05T14:12:04.110Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the draft was last saved.',
        example: '2026-08-05T14:12:04.110Z',
      }),
    attachments: z
      .array(InboxDraftAttachmentSchema)
      .openapi({ description: 'The files stored on the draft.' }),
  })
  .openapi({
    required: [
      'object',
      'id',
      'type',
      'to',
      'cc',
      'bcc',
      'subject',
      'html',
      'text',
      'thread_id',
      'reply_to_email_id',
      'email_id',
      'created_at',
      'updated_at',
      'attachments',
    ],
  })
  .openapi('InboxDraft')

const InboxDraftListItemSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: 'c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32',
      }),
    type: z
      .enum(['standalone', 'reply'])
      .openapi({
        description:
          '`reply` when the draft replies to an email in an existing thread. `standalone` when the draft starts a new thread.',
        example: 'standalone',
      }),
    to: z
      .array(z.string())
      .nullable()
      .openapi({
        description: 'The recipients. `null` or empty when no recipients are set.',
        example: ['ada@example.org'],
      }),
    cc: z.array(z.string()).openapi({ description: 'The CC recipients.', example: [] }),
    bcc: z.array(z.string()).openapi({ description: 'The BCC recipients.', example: [] }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject.', example: 'Refund for order 1041' }),
    snippet: z
      .string()
      .nullable()
      .openapi({
        description: 'A short preview of the body.',
        example: 'Refund issued for order 1041.',
      }),
    thread_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The Thread ID when the draft is a reply. `null` otherwise.',
        example: null,
      }),
    reply_to_email_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The Email ID the draft replies to. `null` otherwise.',
        example: null,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the draft was last saved.',
        example: '2026-08-05T14:12:04.110Z',
      }),
    attachments: z
      .array(InboxDraftAttachmentSchema)
      .openapi({ description: 'The files stored on the draft.' }),
  })
  .openapi({
    required: [
      'id',
      'type',
      'to',
      'cc',
      'bcc',
      'subject',
      'snippet',
      'thread_id',
      'reply_to_email_id',
      'updated_at',
      'attachments',
    ],
  })
  .openapi('InboxDraftListItem')

const ListInboxDraftsResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'Type of the response object.', example: 'list' }),
    has_more: z
      .boolean()
      .openapi({ description: 'Indicates if there are more results available.', example: false }),
    data: z
      .array(InboxDraftListItemSchema)
      .openapi({ description: 'The unsent drafts on this page, most recently updated first.' }),
  })
  .openapi({ required: ['object', 'has_more', 'data'] })
  .openapi('ListInboxDraftsResponseSuccess')

const CreateInboxDraftOptionsSchema = z
  .object({
    to: z
      .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name, for example `Ada Lovelace <ada@example.org>`. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
        example: ['ada@example.org'],
      }),
    cc: z
      .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The CC recipients. For multiple addresses, send an array of strings. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
      }),
    bcc: z
      .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'The BCC recipients. For multiple addresses, send an array of strings. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
      }),
    subject: z
      .string()
      .min(1)
      .max(2000)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The subject. Max 2000 characters. A string that is only whitespace, or that contains a line break, is rejected.',
        example: 'Refund for order 1041',
      }),
    html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The HTML body.', example: '<p>Refund issued for order 1041.</p>' }),
    text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The plain text body.', example: 'Refund issued for order 1041.' }),
    attachments: z
      .array(InboxDraftAttachmentInputSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422.',
      }),
    thread_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Thread ID to reply in. Must be sent with `reply_to_email_id`.',
        example: '4d8e2a1c-9b3f-4c6d-8a21-3e5f7c9c0d12',
      }),
    reply_to_email_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Email ID to reply to, as returned in `data[].id` by the list thread emails endpoint. Must be sent with `thread_id`.',
        example: '5b1a9f47-2c8d-4e6f-9a03-1d2e3f4a5b60',
      }),
  })
  .openapi({
    description:
      'At least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments` must be non-empty. The combined recipients of `to`, `cc` and `bcc` cannot exceed 50. `thread_id` and `reply_to_email_id` must be sent together or not at all.',
    required: [],
  })
  .openapi('CreateInboxDraftOptions')

const CreateInboxDraftResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'Type of the response object.', example: 'inbox_draft' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: 'c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('CreateInboxDraftResponseSuccess')

const GetInboxDraftResponseSuccessSchema = InboxDraftSchema.openapi('GetInboxDraftResponseSuccess')

const UpdateInboxDraftOptionsSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'to')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['to'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'cc')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['cc'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'bcc')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['bcc'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'subject')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['subject'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'text')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['text'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'html')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['html'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'attachments')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['attachments'] }),
  ])
  .and(
    z
      .object({
        to: z
          .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
          .exactOptional()
          .openapi({
            description:
              'The recipients. For multiple addresses, send an array of strings. Each value can include a friendly name. Pass `null` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
            example: ['ada@example.org'],
          }),
        cc: z
          .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
          .exactOptional()
          .openapi({
            description:
              'The CC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
          }),
        bcc: z
          .xor([z.string(), z.array(z.string()).max(50), z.null().nullable()])
          .exactOptional()
          .openapi({
            description:
              'The BCC recipients. Pass `null` or `[]` to clear. Each address is `email@example.com` or `Name <email@example.com>`. An address that is not valid returns a 422.',
          }),
        subject: z
          .string()
          .min(1)
          .max(2000)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The subject. Max 2000 characters. Cannot be only whitespace or contain a line break. Pass `null` to clear.',
            example: 'Refund issued for order 1041',
          }),
        html: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The HTML body. Pass `null` to clear.' }),
        text: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The plain text body. Pass `null` to clear.' }),
        attachments: z
          .array(InboxDraftAttachmentInputSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Files to store on the draft. Each one needs `content`, `filename` and `content_type`. A `path` without `content` returns a 422, and when both are sent, `path` is ignored. A `content_id` returns a 422. The files on a draft can total at most 25 MB. An empty file or a blocked file type returns a 422. Sending the field replaces every attachment on the draft. Send `[]` to remove them all. `null` also removes them all.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description:
      'Send at least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments`. Omitted fields are left unchanged. Setting `text` or `html` replaces the whole body, so the body part you omit becomes `null`. The merged draft must contain at least one non-empty field, and its combined recipients cannot exceed 50.',
  })
  .openapi('UpdateInboxDraftOptions')

const UpdateInboxDraftResponseSuccessSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'The object type. Always `inbox_draft`.', example: 'inbox_draft' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: 'c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32',
      }),
  })
  .openapi({ required: ['object', 'id'] })
  .openapi('UpdateInboxDraftResponseSuccess')

const RemoveInboxDraftResponseSuccessSchema = z
  .object({
    object: z.string().openapi({ description: 'The object type.', example: 'inbox_draft' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: 'c3a1e8b4-2d5f-4a7c-9e10-6b8d7f5a4c32',
      }),
    deleted: z
      .literal(true)
      .openapi({
        description: 'Indicates whether the draft was successfully deleted.',
        example: true,
      }),
  })
  .openapi({ required: ['object', 'id', 'deleted'] })
  .openapi('RemoveInboxDraftResponseSuccess')

const SendInboxDraftOptionsSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Custom headers to add to the email. The `In-Reply-To`, `References` and `Reply-To` headers are set by Resend and cannot be set here. Sending one of them, in any letter case, returns a 422. Header names cannot be empty, and names and values cannot contain line breaks or null characters, or the request returns a 422. `null` means no custom headers.',
        example: { 'X-Ticket-Id': '4821' },
      }),
  })
  .openapi({ required: [] })
  .openapi('SendInboxDraftOptions')

const SendInboxDraftResponseSuccessSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the sent email. Use it with the emails endpoints.',
        example: '6a0c8e58-3d9e-4f7a-8b14-2e3f4a5b6c71',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('SendInboxDraftResponseSuccess')

const InboxEventSourceSchema = z
  .enum(['api', 'dashboard', 'agent', 'system'])
  .openapi({ description: 'What made the change.', example: 'dashboard' })
  .openapi('InboxEventSource')

const InboxEventEmailAttachmentSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The ID of the attachment.',
        example: '2a0c9ce0-3112-4728-976e-47ddcd16a318',
      }),
    filename: z
      .string()
      .nullable()
      .openapi({ description: 'The filename of the attachment.', example: 'invoice.pdf' }),
    size: z
      .int()
      .nullable()
      .openapi({ description: 'The size of the attachment in bytes.', example: 48213 }),
  })
  .openapi({
    description: 'An attachment on an email in an inbox webhook event.',
    required: ['id', 'filename', 'size'],
  })
  .openapi('InboxEventEmailAttachment')

const InboxEventEmailSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the email.',
        example: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
      }),
    direction: z
      .enum(['inbound', 'outbound'])
      .openapi({
        description: 'Whether the email was received by the inbox or sent from it.',
        example: 'inbound',
      }),
    from: z
      .string()
      .openapi({
        description: 'The sender, as an address or as `Name <address>`.',
        example: 'Steve Wozniak <steve@acme.com>',
      }),
    to: z
      .array(z.string())
      .openapi({ description: 'The recipients of the email.', example: ['support@acme.com'] }),
    cc: z.array(z.string()).openapi({ description: 'The CC recipients of the email.' }),
    bcc: z.array(z.string()).openapi({ description: 'The BCC recipients of the email.' }),
    reply_to: z.array(z.string()).openapi({ description: 'The Reply-To addresses.' }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject of the email.', example: 'Question about my invoice' }),
    message_id: z
      .string()
      .nullable()
      .openapi({
        description: 'The Message-ID header of the email.',
        example: '<CAF7c1f0a2e5d3b@mail.acme.com>',
      }),
    attachments: z
      .array(InboxEventEmailAttachmentSchema)
      .openapi({ description: 'The attachments on the email.' }),
    read: z.boolean().openapi({ description: 'Whether the email has been read.', example: false }),
    received_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the email arrived or was sent.',
        example: '2026-09-29T12:00:00.000Z',
      }),
  })
  .openapi({
    description: 'The email carried by an inbox webhook event. It has no `html` or `text`.',
    required: [
      'id',
      'direction',
      'from',
      'to',
      'cc',
      'bcc',
      'reply_to',
      'subject',
      'message_id',
      'attachments',
      'read',
      'received_at',
    ],
  })
  .openapi('InboxEventEmail')

const InboxEventDraftSchema = z
  .object({
    object: z
      .string()
      .openapi({ description: 'The object type. Always `inbox_draft`.', example: 'inbox_draft' }),
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: '9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d',
      }),
    type: z
      .enum(['standalone', 'reply'])
      .openapi({
        description: '`standalone` for a new conversation, or `reply`.',
        example: 'reply',
      }),
    to: z
      .array(z.string())
      .nullable()
      .openapi({ description: 'The recipients.', example: ['steve@acme.com'] }),
    cc: z.array(z.string()).openapi({ description: 'The CC recipients.' }),
    bcc: z.array(z.string()).openapi({ description: 'The BCC recipients.' }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'The subject.', example: 'Re: Question about my invoice' }),
    thread_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The ID of the thread when this draft is a reply. Null otherwise.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    reply_to_email_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The ID of the email this draft replies to. Null otherwise.',
        example: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
      }),
    email_id: z
      .uuid()
      .nullable()
      .openapi({
        description: 'The ID of the queued outbound email after send. Null until then.',
        example: null,
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the draft was created.',
        example: '2026-09-29T11:58:00.000Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the draft was last saved.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    attachments: z
      .array(InboxDraftAttachmentSchema)
      .openapi({ description: 'The files stored on the draft.' }),
  })
  .openapi({
    description: 'The draft carried by an inbox webhook event. It has no `html` or `text`.',
    required: [
      'object',
      'id',
      'type',
      'to',
      'cc',
      'bcc',
      'subject',
      'thread_id',
      'reply_to_email_id',
      'email_id',
      'created_at',
      'updated_at',
      'attachments',
    ],
  })
  .openapi('InboxEventDraft')

const InboxEventDataSchema = z
  .object({
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    inbox: InboxSchema.exactOptional().openapi({
      description:
        'The inbox as it is when the webhook is sent. Absent when the inbox no longer exists.',
    }),
  })
  .openapi({
    description: 'The data of an `inbox.created` or `inbox.updated` event.',
    required: ['source', 'inbox_id'],
  })
  .openapi('InboxEventData')

const InboxDeletedEventDataSchema = z
  .object({
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
  })
  .openapi({
    description: 'The data of an `inbox.deleted` event.',
    required: ['source', 'inbox_id'],
  })
  .openapi('InboxDeletedEventData')

const InboxThreadEmailEventDataSchema = z
  .object({
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    email_id: z
      .uuid()
      .openapi({
        description: 'The ID of the email.',
        example: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists.',
    }),
    email: InboxEventEmailSchema.exactOptional().openapi({
      description:
        'The email as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Thread Email. Absent when the email no longer exists.',
    }),
  })
  .openapi({
    description:
      'The data of an `inbox.thread.created`, `inbox.email.received` or `inbox.email.sent` event.',
    required: ['source', 'inbox_id', 'thread_id', 'email_id'],
  })
  .openapi('InboxThreadEmailEventData')

const InboxThreadFolderUpdatedEventDataSchema = z
  .object({
    from: z
      .enum(['inbox', 'archive', 'spam', 'trash'])
      .openapi({ description: 'The folder the thread was in.', example: 'inbox' }),
    to: z
      .enum(['inbox', 'archive', 'spam', 'trash'])
      .openapi({ description: 'The folder the thread moved to.', example: 'archive' }),
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists.',
    }),
  })
  .openapi({
    description: 'The data of an `inbox.thread.folder.updated` event.',
    required: ['from', 'to', 'source', 'inbox_id', 'thread_id'],
  })
  .openapi('InboxThreadFolderUpdatedEventData')

const InboxThreadAssignedEventDataSchema = z
  .object({
    assignee_email: z
      .string()
      .nullable()
      .openapi({
        description: 'The email of the member the thread is now assigned to.',
        example: 'ada@acme.com',
      }),
    assigned_by_email: z
      .string()
      .nullable()
      .openapi({
        description:
          'The email of the member who made the assignment. Null when no member made it.',
        example: 'grace@acme.com',
      }),
    previous_assignee_email: z
      .string()
      .nullable()
      .openapi({
        description:
          'The email of the member the thread was assigned to before. Null when it was unassigned.',
        example: null,
      }),
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists.',
    }),
  })
  .openapi({
    description: 'The data of an `inbox.thread.assigned` event.',
    required: [
      'assignee_email',
      'assigned_by_email',
      'previous_assignee_email',
      'source',
      'inbox_id',
      'thread_id',
    ],
  })
  .openapi('InboxThreadAssignedEventData')

const InboxThreadUnassignedEventDataSchema = z
  .object({
    previous_assignee_email: z
      .string()
      .nullable()
      .openapi({
        description: 'The email of the member the thread was assigned to.',
        example: 'ada@acme.com',
      }),
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists.',
    }),
  })
  .openapi({
    description: 'The data of an `inbox.thread.unassigned` event.',
    required: ['previous_assignee_email', 'source', 'inbox_id', 'thread_id'],
  })
  .openapi('InboxThreadUnassignedEventData')

const InboxThreadLabelsUpdatedEventDataSchema = z
  .object({
    added: z
      .array(InboxThreadLabelSchema)
      .openapi({ description: 'The labels applied to the thread.' }),
    removed: z
      .array(InboxThreadLabelSchema)
      .openapi({ description: 'The labels removed from the thread.' }),
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists.',
    }),
  })
  .openapi({
    description:
      'The data of an `inbox.thread.labels.updated` event. Adding labels fills only `added`. Removing one label fills only `removed`. Setting the labels of a thread can fill both.',
    required: ['added', 'removed', 'source', 'inbox_id', 'thread_id'],
  })
  .openapi('InboxThreadLabelsUpdatedEventData')

const InboxDraftEventDataSchema = z
  .object({
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of the thread. Only on reply drafts.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    draft_id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: '9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists. Only on reply drafts.',
    }),
    draft: InboxEventDraftSchema.exactOptional().openapi({
      description:
        'The draft as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Draft. Absent when the draft no longer exists.',
    }),
  })
  .openapi({
    description:
      'The data of an `inbox.draft.created`, `inbox.draft.updated` or `inbox.draft.deleted` event.',
    required: ['source', 'inbox_id', 'draft_id'],
  })
  .openapi('InboxDraftEventData')

const InboxDraftSentEventDataSchema = z
  .object({
    source: InboxEventSourceSchema,
    inbox_id: z
      .uuid()
      .openapi({
        description: 'The ID of the inbox.',
        example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
      }),
    thread_id: z
      .uuid()
      .openapi({
        description: 'The ID of the thread.',
        example: '7c1f0a2e-5d3b-4e8a-9f61-2b8d4c6e1a90',
      }),
    email_id: z
      .uuid()
      .openapi({
        description: 'The ID of the email.',
        example: '4ef9a417-02e9-4d39-ad75-9611e0fcc33c',
      }),
    draft_id: z
      .uuid()
      .openapi({
        description: 'The ID of the draft.',
        example: '9a2b7c4d-1e3f-4a5b-8c6d-0e1f2a3b4c5d',
      }),
    thread: InboxThreadSummarySchema.exactOptional().openapi({
      description:
        'The thread as it is when the webhook is sent. Absent when the thread no longer exists.',
    }),
    email: InboxEventEmailSchema.exactOptional().openapi({
      description:
        'The email as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Thread Email. Only when the email is already on the thread when the webhook is sent.',
    }),
    draft: InboxEventDraftSchema.exactOptional().openapi({
      description:
        'The draft as it is when the webhook is sent, without `html` or `text`. Fetch the body with Retrieve Draft. Absent when the draft no longer exists.',
    }),
  })
  .openapi({
    description: 'The data of an `inbox.draft.sent` event.',
    required: ['source', 'inbox_id', 'thread_id', 'email_id', 'draft_id'],
  })
  .openapi('InboxDraftSentEventData')

const InboxCreatedEventSchema = z
  .object({
    type: z.literal('inbox.created').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxCreatedEvent')

const InboxUpdatedEventSchema = z
  .object({
    type: z.literal('inbox.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxUpdatedEvent')

const InboxDeletedEventSchema = z
  .object({
    type: z.literal('inbox.deleted').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxDeletedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxDeletedEvent')

const InboxThreadCreatedEventSchema = z
  .object({
    type: z.literal('inbox.thread.created').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxThreadCreatedEvent')

const InboxEmailReceivedEventSchema = z
  .object({
    type: z.literal('inbox.email.received').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxEmailReceivedEvent')

const InboxEmailSentEventSchema = z
  .object({
    type: z.literal('inbox.email.sent').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadEmailEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxEmailSentEvent')

const InboxThreadFolderUpdatedEventSchema = z
  .object({
    type: z.literal('inbox.thread.folder.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadFolderUpdatedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxThreadFolderUpdatedEvent')

const InboxThreadAssignedEventSchema = z
  .object({
    type: z.literal('inbox.thread.assigned').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadAssignedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxThreadAssignedEvent')

const InboxThreadUnassignedEventSchema = z
  .object({
    type: z.literal('inbox.thread.unassigned').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadUnassignedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxThreadUnassignedEvent')

const InboxThreadLabelsUpdatedEventSchema = z
  .object({
    type: z.literal('inbox.thread.labels.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxThreadLabelsUpdatedEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxThreadLabelsUpdatedEvent')

const InboxDraftCreatedEventSchema = z
  .object({
    type: z.literal('inbox.draft.created').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxDraftEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxDraftCreatedEvent')

const InboxDraftUpdatedEventSchema = z
  .object({
    type: z.literal('inbox.draft.updated').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxDraftEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxDraftUpdatedEvent')

const InboxDraftSentEventSchema = z
  .object({
    type: z.literal('inbox.draft.sent').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxDraftSentEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxDraftSentEvent')

const InboxDraftDeletedEventSchema = z
  .object({
    type: z.literal('inbox.draft.deleted').openapi({ description: 'The event type.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Timestamp when the event was emitted.',
        example: '2026-09-29T12:00:00.000Z',
      }),
    data: InboxDraftEventDataSchema,
  })
  .openapi({ required: ['type', 'created_at', 'data'] })
  .openapi('InboxDraftDeletedEvent')

const PaginationLimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'limit',
      required: false,
      schema: { type: 'integer', minimum: 1, maximum: 100 },
      description: 'Number of items to return.',
    },
  })

const PaginationAfterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'after',
      required: false,
      schema: { type: 'string' },
      description: 'Return items after this cursor.',
    },
  })

const PaginationBeforeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'before',
      required: false,
      schema: { type: 'string' },
      description: 'Return items before this cursor.',
    },
  })

const InboxIdOrEmailAddressParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'path',
      name: 'inbox_id',
      required: true,
      schema: { type: 'string' },
      description:
        'The Inbox ID or the inbox email address, such as `support@acme.com`. A value that contains `@` must be a valid email address, and any other value must be a UUID, or the request returns a 422. The address match is case-insensitive and never falls back to the inbox `name`. An address that matches no inbox returns a 404.',
      example: 'b3e2b2b6-3f0e-4c8e-9ad3-2f43a1e2c7f1',
    },
  })

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getEmailsRoute = createRoute({
  method: 'get',
  path: '/emails',
  tags: ['Emails'],
  summary: 'Retrieve a list of emails',
  operationId: 'emails/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListEmailsResponseSchema } },
    },
  },
})

export const postEmailsRoute = createRoute({
  method: 'post',
  path: '/emails',
  tags: ['Emails'],
  summary: 'Send an email',
  operationId: 'emails/send',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Idempotency-Key',
            required: false,
            schema: { type: 'string', maxLength: 256 },
            description:
              'A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendEmailRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SendEmailResponseSchema } },
    },
  },
})

export const getEmailsEmailIdRoute = createRoute({
  method: 'get',
  path: '/emails/{email_id}',
  tags: ['Emails'],
  summary: 'Retrieve a single email',
  operationId: 'emails/get',
  request: {
    params: z.object({
      email_id: z
        .string()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the email.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EmailSchema } } },
  },
})

export const patchEmailsEmailIdRoute = createRoute({
  method: 'patch',
  path: '/emails/{email_id}',
  tags: ['Emails'],
  summary: 'Update a single email',
  operationId: 'emails/update',
  request: {
    params: z.object({
      email_id: z
        .string()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the email.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateEmailOptionsSchema } },
    },
  },
})

export const postEmailsEmailIdCancelRoute = createRoute({
  method: 'post',
  path: '/emails/{email_id}/cancel',
  tags: ['Emails'],
  summary: 'Cancel the schedule of the e-mail.',
  operationId: 'emails/cancel',
  request: {
    params: z.object({
      email_id: z
        .string()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the email.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EmailSchema } } },
  },
})

export const postEmailsEmailIdShareRoute = createRoute({
  method: 'post',
  path: '/emails/{email_id}/share',
  tags: ['Emails'],
  summary: 'Create a shareable link for a sent or received email.',
  operationId: 'emails/share',
  request: {
    params: z.object({
      email_id: z
        .string()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the email.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ShareEmailOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ShareEmailResponseSchema } },
    },
  },
})

export const postEmailsBatchRoute = createRoute({
  method: 'post',
  path: '/emails/batch',
  tags: ['Emails'],
  summary: 'Trigger up to 100 batch emails at once.',
  operationId: 'emails/send-batch',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Idempotency-Key',
            required: false,
            schema: { type: 'string', maxLength: 256 },
            description:
              'A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(SendEmailRequestSchema) } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreateBatchEmailsResponseSchema } },
    },
  },
})

export const getEmailsEmailIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/emails/{email_id}/attachments',
  tags: ['Emails'],
  summary: 'Retrieve a list of attachments for a sent email',
  operationId: 'emails/list-attachments',
  request: {
    params: z.object({
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the email.',
          },
        }),
    }),
    query: z.object({
      limit: z
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
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Maximum number of attachments to return.',
          },
        }),
      after: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.",
          },
        }),
      before: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAttachmentsResponseSchema } },
    },
  },
})

export const getEmailsEmailIdAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/emails/{email_id}/attachments/{attachment_id}',
  tags: ['Emails'],
  summary: 'Retrieve a single attachment for a sent email',
  operationId: 'emails/get-attachment',
  request: {
    params: z.object({
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the email.',
          },
        }),
      attachment_id: z
        .uuid()
        .openapi({
          param: {
            name: 'attachment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the attachment.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RetrievedAttachmentSchema } },
    },
  },
})

export const getEmailsReceivingRoute = createRoute({
  method: 'get',
  path: '/emails/receiving',
  tags: ['Receiving Emails'],
  summary: 'Retrieve a list of received emails',
  operationId: 'emails/list-receiving',
  request: {
    query: z.object({
      limit: z
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
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Maximum number of received emails to return.',
          },
        }),
      after: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results after this email ID. Cannot be used with 'before'.",
          },
        }),
      before: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results before this email ID. Cannot be used with 'after'.",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListReceivedEmailsResponseSchema } },
    },
  },
})

export const getEmailsReceivingEmailIdRoute = createRoute({
  method: 'get',
  path: '/emails/receiving/{email_id}',
  tags: ['Receiving Emails'],
  summary: 'Retrieve a single received email',
  operationId: 'emails/get-receiving',
  request: {
    params: z.object({
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the received email.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetReceivedEmailResponseSchema } },
    },
  },
})

export const getEmailsReceivingEmailIdAttachmentsRoute = createRoute({
  method: 'get',
  path: '/emails/receiving/{email_id}/attachments',
  tags: ['Receiving Emails'],
  summary: 'Retrieve a list of attachments for a received email',
  operationId: 'emails/list-receiving-attachments',
  request: {
    params: z.object({
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the received email.',
          },
        }),
    }),
    query: z.object({
      limit: z
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
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Maximum number of attachments to return.',
          },
        }),
      after: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.",
          },
        }),
      before: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAttachmentsResponseSchema } },
    },
  },
})

export const getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute = createRoute({
  method: 'get',
  path: '/emails/receiving/{email_id}/attachments/{attachment_id}',
  tags: ['Receiving Emails'],
  summary: 'Retrieve a single attachment for a received email',
  operationId: 'emails/get-receiving-attachment',
  request: {
    params: z.object({
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the received email.',
          },
        }),
      attachment_id: z
        .uuid()
        .openapi({
          param: {
            name: 'attachment_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the attachment.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RetrievedAttachmentSchema } },
    },
  },
})

export const getEmailsMetricsRoute = createRoute({
  method: 'get',
  path: '/emails/metrics',
  tags: ['Emails'],
  summary: 'Retrieve account-level email metrics',
  operationId: 'emails/metrics',
  request: {
    query: z.object({
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The start of the date range, as an ISO 8601 date or datetime. Must be on or before `end_date`. Defaults to 6 days before `end_date`.',
            required: false,
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The end of the date range, as an ISO 8601 date or datetime. Values in the future are clamped to the current time. Defaults to now.',
            required: false,
          },
        }),
      timezone: z
        .string()
        .default('UTC')
        .exactOptional()
        .openapi({
          param: {
            name: 'timezone',
            in: 'query',
            schema: { type: 'string', default: 'UTC' },
            description:
              'The IANA timezone (e.g. `America/New_York`) used to bucket periods when `period` is in `dimensions`.',
            required: false,
          },
        }),
      granularity: z
        .enum(['hourly', 'daily', 'weekly', 'monthly'])
        .default('daily')
        .exactOptional()
        .openapi({
          param: {
            name: 'granularity',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['hourly', 'daily', 'weekly', 'monthly'],
              default: 'daily',
            },
            description:
              "The bucket size used when `period` is in `dimensions`. The date range can't produce more than 10,000 periods at the chosen granularity.",
            required: false,
          },
        }),
      metrics: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'received',
              'delivered',
              'complained',
              'suppressed',
              'bounced',
              'bounced_transient',
              'bounced_permanent',
              'bounced_undetermined',
              'opened',
              'clicked',
              'unsubscribed',
              'delivery_delayed',
              'failed',
              'sent',
              'unique_opened',
              'unique_clicked',
              'delivery_rate',
              'open_rate',
              'click_rate',
              'bounce_rate',
              'complaint_rate',
              'unsubscribe_rate',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'metrics',
            in: 'query',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: [
                  'received',
                  'delivered',
                  'complained',
                  'suppressed',
                  'bounced',
                  'bounced_transient',
                  'bounced_permanent',
                  'bounced_undetermined',
                  'opened',
                  'clicked',
                  'unsubscribed',
                  'delivery_delayed',
                  'failed',
                  'sent',
                  'unique_opened',
                  'unique_clicked',
                  'delivery_rate',
                  'open_rate',
                  'click_rate',
                  'bounce_rate',
                  'complaint_rate',
                  'unsubscribe_rate',
                ],
              },
            },
            description:
              'List of metrics to include in the response. Defaults to all metrics. Accepts a comma-separated value, the parameter repeated, or a mix of both.',
            required: false,
          },
        }),
      dimensions: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['period', 'domain', 'email', 'broadcast'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'dimensions',
            in: 'query',
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['period', 'domain', 'email', 'broadcast'] },
            },
            description:
              'List of dimensions to break the response down by. `email` cannot be combined with `broadcast`. Defaults to `[]`, returning a single `totals` row for the whole range, with no `data`. Accepts a comma-separated value, the parameter repeated, or a mix of both.',
            required: false,
          },
        }),
      domain_id: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'query',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            description:
              'List of sending domain IDs to restrict the response to, up to 100. Accepts a comma-separated value, the parameter repeated, or a mix of both.',
            required: false,
          },
        }),
      email_id: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'email_id',
            in: 'query',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            description:
              'List of email IDs to restrict the response to, up to 100. Cannot be combined with the `broadcast` dimension or `broadcast_id`. Accepts a comma-separated value, the parameter repeated, or a mix of both.',
            required: false,
          },
        }),
      broadcast_id: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'broadcast_id',
            in: 'query',
            style: 'form',
            explode: false,
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            description:
              'List of broadcast IDs to restrict the response to, up to 100. Cannot be combined with the `email` dimension or `email_id`. Accepts a comma-separated value, the parameter repeated, or a mix of both.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetEmailsMetricsResponseSchema } },
    },
  },
})

export const getDomainsRoute = createRoute({
  method: 'get',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Retrieve a list of domains',
  operationId: 'domains/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
  },
})

export const postDomainsRoute = createRoute({
  method: 'post',
  path: '/domains',
  tags: ['Domains'],
  summary: 'Create a new domain',
  operationId: 'domains/create',
  request: { body: { content: { 'application/json': { schema: CreateDomainRequestSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateDomainResponseSchema } },
    },
  },
})

export const getDomainsDomainIdRoute = createRoute({
  method: 'get',
  path: '/domains/{domain_id}',
  tags: ['Domains'],
  summary: 'Retrieve a single domain',
  operationId: 'domains/get',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the domain.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DomainSchema } } },
  },
})

export const deleteDomainsDomainIdRoute = createRoute({
  method: 'delete',
  path: '/domains/{domain_id}',
  tags: ['Domains'],
  summary: 'Remove an existing domain',
  operationId: 'domains/remove',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the domain.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteDomainResponseSchema } },
    },
  },
})

export const patchDomainsDomainIdRoute = createRoute({
  method: 'patch',
  path: '/domains/{domain_id}',
  tags: ['Domains'],
  summary: 'Update an existing domain',
  operationId: 'domains/update',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the domain.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateDomainOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateDomainResponseSuccessSchema } },
    },
  },
})

export const postDomainsDomainIdVerifyRoute = createRoute({
  method: 'post',
  path: '/domains/{domain_id}/verify',
  tags: ['Domains'],
  summary: 'Verify an existing domain',
  description:
    "Triggers verification of the domain's DNS records including DKIM, SPF, and the tracking CNAME (if a tracking subdomain is configured).",
  operationId: 'domains/verify',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the domain.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: VerifyDomainResponseSchema } },
    },
  },
})

export const postDomainsClaimRoute = createRoute({
  method: 'post',
  path: '/domains/claim',
  tags: ['Domains'],
  summary: 'Claim a domain',
  description:
    "Start a claim for a domain that another Resend account has already verified. The domain is recreated under your account with fresh DKIM keys, so the previous account's DNS records cannot be reused. Returns a TXT record to add to your DNS to prove ownership. Uses the same request body as creating a domain.",
  operationId: 'domains/create-claim',
  request: {
    body: { content: { 'application/json': { schema: CreateDomainClaimRequestSchema } } },
  },
  responses: {
    200: {
      description: 'An identical pending claim already existed and was returned unchanged.',
      content: { 'application/json': { schema: DomainClaimSchema } },
    },
    201: {
      description: 'Claim created.',
      content: { 'application/json': { schema: DomainClaimSchema } },
    },
  },
})

export const getDomainsDomainIdClaimRoute = createRoute({
  method: 'get',
  path: '/domains/{domain_id}/claim',
  tags: ['Domains'],
  summary: 'Retrieve a domain claim',
  description: 'Retrieve the latest claim for the placeholder domain created by the claim.',
  operationId: 'domains/get-claim',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the placeholder domain created by the claim.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DomainClaimSchema } } },
  },
})

export const postDomainsDomainIdClaimVerifyRoute = createRoute({
  method: 'post',
  path: '/domains/{domain_id}/claim/verify',
  tags: ['Domains'],
  summary: 'Verify a domain claim',
  description:
    'Trigger asynchronous DNS verification and ownership transfer for a domain claim. The claim stays `pending` while verification runs; poll the retrieve endpoint for status. Once `completed`, the transferred domain has new DKIM records that must be added to DNS and verified via the standard domain verify endpoint.',
  operationId: 'domains/verify-claim',
  request: {
    params: z.object({
      domain_id: z
        .string()
        .openapi({
          param: {
            name: 'domain_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The ID of the placeholder domain created by the claim.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: DomainClaimSchema } } },
  },
})

export const getApiKeysRoute = createRoute({
  method: 'get',
  path: '/api-keys',
  tags: ['API Keys'],
  summary: 'Retrieve a list of API keys',
  operationId: 'api-keys/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListApiKeysResponseSchema } },
    },
  },
})

export const postApiKeysRoute = createRoute({
  method: 'post',
  path: '/api-keys',
  tags: ['API Keys'],
  summary: 'Create a new API key',
  operationId: 'api-keys/create',
  request: { body: { content: { 'application/json': { schema: CreateApiKeyRequestSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateApiKeyResponseSchema } },
    },
  },
})

export const deleteApiKeysApiKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api-keys/{api_key_id}',
  tags: ['API Keys'],
  summary: 'Remove an existing API key',
  operationId: 'api-keys/remove',
  request: {
    params: z.object({
      api_key_id: z
        .string()
        .openapi({
          param: {
            name: 'api_key_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The API key ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteApiKeyResponseSchema } },
    },
  },
})

export const patchApiKeysApiKeyIdRoute = createRoute({
  method: 'patch',
  path: '/api-keys/{api_key_id}',
  tags: ['API Keys'],
  summary: 'Update an existing API key',
  operationId: 'api-keys/update',
  request: {
    params: z.object({
      api_key_id: z
        .string()
        .openapi({
          param: {
            name: 'api_key_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The API key ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateApiKeyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateApiKeyResponseSchema } },
    },
  },
})

export const getOauthGrantsRoute = createRoute({
  method: 'get',
  path: '/oauth/grants',
  tags: ['OAuth'],
  summary: 'Retrieve a list of OAuth grants',
  operationId: 'oauth/list-grants',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListOAuthGrantsResponseSchema } },
    },
  },
})

export const deleteOauthGrantsOauthGrantIdRoute = createRoute({
  method: 'delete',
  path: '/oauth/grants/{oauth_grant_id}',
  tags: ['OAuth'],
  summary: 'Revoke an OAuth grant',
  operationId: 'oauth/revoke-grant',
  request: {
    params: z.object({
      oauth_grant_id: z
        .string()
        .openapi({
          param: {
            name: 'oauth_grant_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The OAuth grant ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RevokeOAuthGrantResponseSchema } },
    },
  },
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['Templates'],
  summary: 'Retrieve a list of templates',
  operationId: 'templates/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListTemplatesResponseSuccessSchema } },
    },
  },
})

export const postTemplatesRoute = createRoute({
  method: 'post',
  path: '/templates',
  tags: ['Templates'],
  summary: 'Create a template',
  operationId: 'templates/create',
  request: { body: { content: { 'application/json': { schema: CreateTemplateRequestSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateTemplateResponseSuccessSchema } },
    },
  },
})

export const getTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/templates/{id}',
  tags: ['Templates'],
  summary: 'Retrieve a single template',
  operationId: 'templates/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Template ID or alias.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: TemplateSchema } } },
  },
})

export const deleteTemplatesIdRoute = createRoute({
  method: 'delete',
  path: '/templates/{id}',
  tags: ['Templates'],
  summary: 'Remove an existing template',
  operationId: 'templates/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Template ID or alias.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveTemplateResponseSuccessSchema } },
    },
  },
})

export const patchTemplatesIdRoute = createRoute({
  method: 'patch',
  path: '/templates/{id}',
  tags: ['Templates'],
  summary: 'Update an existing template',
  operationId: 'templates/update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Template ID or alias.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTemplateOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateTemplateResponseSuccessSchema } },
    },
  },
})

export const postTemplatesIdPublishRoute = createRoute({
  method: 'post',
  path: '/templates/{id}/publish',
  tags: ['Templates'],
  summary: 'Publish a template',
  operationId: 'templates/publish',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Template ID or alias.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PublishTemplateResponseSuccessSchema } },
    },
  },
})

export const postTemplatesIdDuplicateRoute = createRoute({
  method: 'post',
  path: '/templates/{id}/duplicate',
  tags: ['Templates'],
  summary: 'Duplicate a template',
  operationId: 'templates/duplicate',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Template ID or alias.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DuplicateTemplateResponseSuccessSchema } },
    },
  },
})

export const getAudiencesRoute = createRoute({
  method: 'get',
  path: '/audiences',
  tags: ['Audiences'],
  summary: 'Retrieve a list of audiences',
  description:
    'Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.',
  operationId: 'audiences/list',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAudiencesResponseSuccessSchema } },
    },
  },
  deprecated: true,
})

export const postAudiencesRoute = createRoute({
  method: 'post',
  path: '/audiences',
  tags: ['Audiences'],
  summary: 'Create a list of contacts',
  description:
    'Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.',
  operationId: 'audiences/create',
  request: { body: { content: { 'application/json': { schema: CreateAudienceOptionsSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateAudienceResponseSuccessSchema } },
    },
  },
  deprecated: true,
})

export const getAudiencesIdRoute = createRoute({
  method: 'get',
  path: '/audiences/{id}',
  tags: ['Audiences'],
  summary: 'Retrieve a single audience',
  description:
    'Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.',
  operationId: 'audiences/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Audience ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetAudienceResponseSuccessSchema } },
    },
  },
  deprecated: true,
})

export const deleteAudiencesIdRoute = createRoute({
  method: 'delete',
  path: '/audiences/{id}',
  tags: ['Audiences'],
  summary: 'Remove an existing audience',
  description:
    'Deprecated: Use Segments instead. These endpoints still work, but will be removed in the future.',
  operationId: 'audiences/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Audience ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveAudienceResponseSuccessSchema } },
    },
  },
  deprecated: true,
})

export const getContactsRoute = createRoute({
  method: 'get',
  path: '/contacts',
  tags: ['Contacts'],
  summary: 'Retrieve a list of contacts',
  operationId: 'contacts/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListContactsResponseSuccessSchema } },
    },
  },
})

export const postContactsRoute = createRoute({
  method: 'post',
  path: '/contacts',
  tags: ['Contacts'],
  summary: 'Create a new contact',
  operationId: 'contacts/create',
  request: { body: { content: { 'application/json': { schema: CreateContactOptionsSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateContactResponseSuccessSchema } },
    },
  },
})

export const getContactsImportsRoute = createRoute({
  method: 'get',
  path: '/contacts/imports',
  tags: ['Contacts'],
  summary: 'Retrieve a list of contact imports',
  operationId: 'contacts/list-imports',
  request: {
    query: z.object({
      status: z
        .enum(['queued', 'in_progress', 'completed', 'failed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['queued', 'in_progress', 'completed', 'failed'] },
            description: 'Filter contact imports by status.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListContactImportsResponseSuccessSchema } },
    },
  },
})

export const postContactsImportsRoute = createRoute({
  method: 'post',
  path: '/contacts/imports',
  tags: ['Contacts'],
  summary: 'Create a contact import',
  operationId: 'contacts/create-import',
  request: {
    body: {
      content: { 'multipart/form-data': { schema: CreateContactImportOptionsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateContactImportResponseSuccessSchema } },
    },
  },
})

export const getContactsImportsIdRoute = createRoute({
  method: 'get',
  path: '/contacts/imports/{id}',
  tags: ['Contacts'],
  summary: 'Retrieve a single contact import',
  operationId: 'contacts/get-import',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Contact Import ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetContactImportResponseSuccessSchema } },
    },
  },
})

export const getContactsIdRoute = createRoute({
  method: 'get',
  path: '/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Retrieve a single contact by ID or email',
  operationId: 'contacts/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetContactResponseSuccessSchema } },
    },
  },
})

export const deleteContactsIdRoute = createRoute({
  method: 'delete',
  path: '/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Remove an existing contact by ID or email',
  operationId: 'contacts/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveContactResponseSuccessSchema } },
    },
  },
})

export const patchContactsIdRoute = createRoute({
  method: 'patch',
  path: '/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Update a single contact by ID or email',
  operationId: 'contacts/update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateContactOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateContactResponseSuccessSchema } },
    },
  },
})

export const getBroadcastsRoute = createRoute({
  method: 'get',
  path: '/broadcasts',
  tags: ['Broadcasts'],
  summary: 'Retrieve a list of broadcasts',
  operationId: 'broadcasts/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListBroadcastsResponseSuccessSchema } },
    },
  },
})

export const postBroadcastsRoute = createRoute({
  method: 'post',
  path: '/broadcasts',
  tags: ['Broadcasts'],
  summary: 'Create a broadcast',
  operationId: 'broadcasts/create',
  request: { body: { content: { 'application/json': { schema: CreateBroadcastOptionsSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateBroadcastResponseSuccessSchema } },
    },
  },
})

export const getBroadcastsIdRoute = createRoute({
  method: 'get',
  path: '/broadcasts/{id}',
  tags: ['Broadcasts'],
  summary: 'Retrieve a single broadcast',
  operationId: 'broadcasts/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetBroadcastResponseSuccessSchema } },
    },
  },
})

export const deleteBroadcastsIdRoute = createRoute({
  method: 'delete',
  path: '/broadcasts/{id}',
  tags: ['Broadcasts'],
  summary: 'Remove an existing broadcast that is in the draft status',
  operationId: 'broadcasts/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveBroadcastResponseSuccessSchema } },
    },
  },
})

export const patchBroadcastsIdRoute = createRoute({
  method: 'patch',
  path: '/broadcasts/{id}',
  tags: ['Broadcasts'],
  summary: 'Update an existing broadcast',
  operationId: 'broadcasts/update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateBroadcastOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateBroadcastResponseSuccessSchema } },
    },
  },
})

export const postBroadcastsIdSendRoute = createRoute({
  method: 'post',
  path: '/broadcasts/{id}/send',
  tags: ['Broadcasts'],
  summary: 'Send or schedule a broadcast',
  operationId: 'broadcasts/send',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendBroadcastOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SendBroadcastResponseSuccessSchema } },
    },
  },
})

export const postBroadcastsIdCancelRoute = createRoute({
  method: 'post',
  path: '/broadcasts/{id}/cancel',
  tags: ['Broadcasts'],
  summary: 'Cancel a broadcast',
  description:
    'Cancels a broadcast that is queued or scheduled. Canceling a queued broadcast stops it mid-send; emails already sent are not affected, but no further emails will go out.',
  operationId: 'broadcasts/cancel',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CancelBroadcastResponseSuccessSchema } },
    },
  },
})

export const postBroadcastsIdDuplicateRoute = createRoute({
  method: 'post',
  path: '/broadcasts/{id}/duplicate',
  tags: ['Broadcasts'],
  summary: 'Duplicate a broadcast',
  description:
    'Creates a new draft broadcast with the same segment, topic, sender, subject, reply-to, preview text, and content as the source. The copy is named after the source with " (copy)" appended, truncated to 70 characters.',
  operationId: 'broadcasts/duplicate',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DuplicateBroadcastResponseSuccessSchema } },
    },
  },
})

export const getBroadcastsIdRecipientsRoute = createRoute({
  method: 'get',
  path: '/broadcasts/{id}/recipients',
  tags: ['Broadcasts'],
  summary: 'Retrieve broadcast recipients',
  description:
    'Retrieve the recipients of a broadcast for a given event type, such as who opened, clicked, or bounced.',
  operationId: 'broadcasts/recipients',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
    query: z.object({
      type: z
        .enum([
          'sent',
          'delivered',
          'opened',
          'clicked',
          'bounced',
          'complained',
          'unsubscribed',
          'suppressed',
        ])
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: true,
            schema: {
              type: 'string',
              enum: [
                'sent',
                'delivered',
                'opened',
                'clicked',
                'bounced',
                'complained',
                'unsubscribed',
                'suppressed',
              ],
            },
            description: 'The recipient event type to filter by.',
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description: 'Filter recipients whose email address contains this value.',
          },
        }),
      bounce_type: z
        .enum(['permanent', 'transient', 'undetermined'])
        .exactOptional()
        .openapi({
          param: {
            name: 'bounce_type',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['permanent', 'transient', 'undetermined'] },
            description:
              'Filter bounced recipients by bounce type. Only valid when `type` is `bounced`.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListBroadcastRecipientsResponseSuccessSchema } },
    },
  },
})

export const getBroadcastsIdClickedLinksRoute = createRoute({
  method: 'get',
  path: '/broadcasts/{id}/clicked-links',
  tags: ['Broadcasts'],
  summary: "Retrieve a broadcast's clicked links",
  operationId: 'broadcasts/list-clicked-links',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Broadcast ID.',
          },
        }),
    }),
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListBroadcastClickedLinksResponseSuccessSchema } },
    },
  },
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Retrieve a list of webhooks',
  operationId: 'webhooks/list',
  request: {
    query: z.object({
      limit: z
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
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer' },
            description: 'Maximum number of webhooks to return.',
          },
        }),
      after: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'after',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results after this webhook ID. Cannot be used with 'before'.",
          },
        }),
      before: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'before',
            in: 'query',
            required: false,
            schema: { type: 'string', format: 'uuid' },
            description:
              "Pagination cursor to fetch results before this webhook ID. Cannot be used with 'after'.",
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWebhooksResponseSchema } },
    },
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a new webhook',
  operationId: 'webhooks/create',
  request: { body: { content: { 'application/json': { schema: CreateWebhookRequestSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: CreateWebhookResponseSchema } },
    },
  },
})

export const getWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Retrieve a single webhook',
  operationId: 'webhooks/get',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWebhookResponseSchema } },
    },
  },
})

export const deleteWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Remove an existing webhook',
  operationId: 'webhooks/remove',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteWebhookResponseSchema } },
    },
  },
})

export const patchWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Update an existing webhook',
  operationId: 'webhooks/update',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateWebhookRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateWebhookResponseSchema } },
    },
  },
})

export const postWebhooksWebhookIdSigningSecretRotateRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhook_id}/signing-secret/rotate',
  tags: ['Webhooks'],
  summary: 'Rotate a webhook signing secret',
  description:
    'Generates a new signing secret for the webhook and returns it. Payloads delivered after the rotation are signed with the new secret. The previous secret keeps verifying payloads for 24 hours, so both secrets are accepted during that window. A webhook that does not exist or was removed returns a 404 not_found.',
  operationId: 'webhooks/rotate-signing-secret',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RotateWebhookSigningSecretResponseSchema } },
    },
  },
})

export const getWebhooksWebhookIdEventsRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}/events',
  tags: ['Webhooks'],
  summary: 'Retrieve a list of webhook events',
  operationId: 'webhooks/list-events',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
    }),
    query: z.object({ limit: PaginationLimitParamsSchema, after: PaginationAfterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWebhookEventsResponseSchema } },
    },
  },
})

export const getWebhooksWebhookIdEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}/events/{event_id}',
  tags: ['Webhooks'],
  summary: 'Retrieve a single webhook event',
  operationId: 'webhooks/get-event',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Webhook Event ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetWebhookEventResponseSchema } },
    },
  },
})

export const postWebhooksWebhookIdEventsEventIdReplayRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhook_id}/events/{event_id}/replay',
  tags: ['Webhooks'],
  summary: 'Replay a webhook event',
  description:
    'Queues one more delivery of the event to the webhook. The event must be retrievable through the get event endpoint and the webhook must be enabled; a disabled webhook returns a 422 validation_error. A manual replay does not schedule automatic retries.',
  operationId: 'webhooks/replay-event',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Webhook Event ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ReplayWebhookEventResponseSchema } },
    },
  },
})

export const getWebhooksWebhookIdEventsEventIdAttemptsRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}/events/{event_id}/attempts',
  tags: ['Webhooks'],
  summary: 'Retrieve a list of webhook event attempts',
  operationId: 'webhooks/list-event-attempts',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Webhook ID.',
          },
        }),
      event_id: z
        .string()
        .openapi({
          param: {
            name: 'event_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Webhook Event ID.',
          },
        }),
    }),
    query: z.object({ limit: PaginationLimitParamsSchema, after: PaginationAfterParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListWebhookEventAttemptsResponseSchema } },
    },
  },
})

export const getSegmentsRoute = createRoute({
  method: 'get',
  path: '/segments',
  tags: ['Segments'],
  summary: 'Retrieve a list of segments',
  operationId: 'segments/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSegmentsResponseSuccessSchema } },
    },
  },
})

export const postSegmentsRoute = createRoute({
  method: 'post',
  path: '/segments',
  tags: ['Segments'],
  summary: 'Create a new segment',
  operationId: 'segments/create',
  request: { body: { content: { 'application/json': { schema: CreateSegmentOptionsSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateSegmentResponseSuccessSchema } },
    },
  },
})

export const getSegmentsIdRoute = createRoute({
  method: 'get',
  path: '/segments/{id}',
  tags: ['Segments'],
  summary: 'Retrieve a single segment',
  operationId: 'segments/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Segment ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetSegmentResponseSuccessSchema } },
    },
  },
})

export const deleteSegmentsIdRoute = createRoute({
  method: 'delete',
  path: '/segments/{id}',
  tags: ['Segments'],
  summary: 'Remove an existing segment',
  operationId: 'segments/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Segment ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveSegmentResponseSuccessSchema } },
    },
  },
})

export const patchSegmentsIdRoute = createRoute({
  method: 'patch',
  path: '/segments/{id}',
  tags: ['Segments'],
  summary: 'Update an existing segment',
  operationId: 'segments/update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Segment ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateSegmentOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateSegmentResponseSuccessSchema } },
    },
  },
})

export const getSegmentsIdContactsRoute = createRoute({
  method: 'get',
  path: '/segments/{id}/contacts',
  tags: ['Segments'],
  summary: 'Retrieve a list of contacts in a segment',
  operationId: 'segments/list-contacts',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Segment ID.',
          },
        }),
    }),
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListContactsResponseSuccessSchema } },
    },
  },
})

export const getTopicsRoute = createRoute({
  method: 'get',
  path: '/topics',
  tags: ['Topics'],
  summary: 'Retrieve a list of topics',
  operationId: 'topics/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListTopicsResponseSuccessSchema } },
    },
  },
})

export const postTopicsRoute = createRoute({
  method: 'post',
  path: '/topics',
  tags: ['Topics'],
  summary: 'Create a new topic',
  operationId: 'topics/create',
  request: { body: { content: { 'application/json': { schema: CreateTopicOptionsSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateTopicResponseSuccessSchema } },
    },
  },
})

export const getTopicsIdRoute = createRoute({
  method: 'get',
  path: '/topics/{id}',
  tags: ['Topics'],
  summary: 'Retrieve a single topic',
  operationId: 'topics/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Topic ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetTopicResponseSuccessSchema } },
    },
  },
})

export const deleteTopicsIdRoute = createRoute({
  method: 'delete',
  path: '/topics/{id}',
  tags: ['Topics'],
  summary: 'Remove an existing topic',
  operationId: 'topics/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Topic ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveTopicResponseSuccessSchema } },
    },
  },
})

export const patchTopicsIdRoute = createRoute({
  method: 'patch',
  path: '/topics/{id}',
  tags: ['Topics'],
  summary: 'Update an existing topic',
  operationId: 'topics/update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Topic ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateTopicOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateTopicResponseSuccessSchema } },
    },
  },
})

export const getContactPropertiesRoute = createRoute({
  method: 'get',
  path: '/contact-properties',
  tags: ['Contact Properties'],
  summary: 'Retrieve a list of contact properties',
  operationId: 'contact-properties/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListContactPropertiesResponseSuccessSchema } },
    },
  },
})

export const postContactPropertiesRoute = createRoute({
  method: 'post',
  path: '/contact-properties',
  tags: ['Contact Properties'],
  summary: 'Create a new contact property',
  operationId: 'contact-properties/create',
  request: {
    body: { content: { 'application/json': { schema: CreateContactPropertyOptionsSchema } } },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateContactPropertyResponseSuccessSchema } },
    },
  },
})

export const getContactPropertiesIdRoute = createRoute({
  method: 'get',
  path: '/contact-properties/{id}',
  tags: ['Contact Properties'],
  summary: 'Retrieve a single contact property',
  operationId: 'contact-properties/get',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact Property ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetContactPropertyResponseSuccessSchema } },
    },
  },
})

export const deleteContactPropertiesIdRoute = createRoute({
  method: 'delete',
  path: '/contact-properties/{id}',
  tags: ['Contact Properties'],
  summary: 'Remove an existing contact property',
  operationId: 'contact-properties/remove',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact Property ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveContactPropertyResponseSuccessSchema } },
    },
  },
})

export const patchContactPropertiesIdRoute = createRoute({
  method: 'patch',
  path: '/contact-properties/{id}',
  tags: ['Contact Properties'],
  summary: 'Update an existing contact property',
  operationId: 'contact-properties/update',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact Property ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateContactPropertyOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateContactPropertyResponseSuccessSchema } },
    },
  },
})

export const getContactsContactIdSegmentsRoute = createRoute({
  method: 'get',
  path: '/contacts/{contact_id}/segments',
  tags: ['Contacts'],
  summary: 'Retrieve a list of segments for a contact',
  operationId: 'contacts/list-segments',
  request: {
    params: z.object({
      contact_id: z
        .string()
        .openapi({
          param: {
            name: 'contact_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
    }),
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListContactSegmentsResponseSuccessSchema } },
    },
  },
})

export const postContactsContactIdSegmentsSegmentIdRoute = createRoute({
  method: 'post',
  path: '/contacts/{contact_id}/segments/{segment_id}',
  tags: ['Contacts'],
  summary: 'Add a contact to a segment',
  operationId: 'contacts/add-segment',
  request: {
    params: z.object({
      contact_id: z
        .string()
        .openapi({
          param: {
            name: 'contact_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
      segment_id: z
        .string()
        .openapi({
          param: {
            name: 'segment_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Segment ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AddContactToSegmentResponseSuccessSchema } },
    },
  },
})

export const deleteContactsContactIdSegmentsSegmentIdRoute = createRoute({
  method: 'delete',
  path: '/contacts/{contact_id}/segments/{segment_id}',
  tags: ['Contacts'],
  summary: 'Remove a contact from a segment',
  operationId: 'contacts/remove-segment',
  request: {
    params: z.object({
      contact_id: z
        .string()
        .openapi({
          param: {
            name: 'contact_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
      segment_id: z
        .string()
        .openapi({
          param: {
            name: 'segment_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Segment ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveContactFromSegmentResponseSuccessSchema } },
    },
  },
})

export const getContactsContactIdTopicsRoute = createRoute({
  method: 'get',
  path: '/contacts/{contact_id}/topics',
  tags: ['Contacts'],
  summary: 'Retrieve topics for a contact',
  operationId: 'contacts/list-topics',
  request: {
    params: z.object({
      contact_id: z
        .string()
        .openapi({
          param: {
            name: 'contact_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
    }),
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetContactTopicsResponseSuccessSchema } },
    },
  },
})

export const patchContactsContactIdTopicsRoute = createRoute({
  method: 'patch',
  path: '/contacts/{contact_id}/topics',
  tags: ['Contacts'],
  summary: 'Update topics for a contact',
  operationId: 'contacts/update-topics',
  request: {
    params: z.object({
      contact_id: z
        .string()
        .openapi({
          param: {
            name: 'contact_id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Contact ID or email address.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateContactTopicsOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateContactTopicsResponseSuccessSchema } },
    },
  },
})

export const getLogsRoute = createRoute({
  method: 'get',
  path: '/logs',
  tags: ['Logs'],
  summary: 'Retrieve a list of logs',
  operationId: 'logs/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ListLogsResponseSchema } } },
  },
})

export const getLogsLogIdRoute = createRoute({
  method: 'get',
  path: '/logs/{log_id}',
  tags: ['Logs'],
  summary: 'Retrieve a single log',
  operationId: 'logs/get',
  request: {
    params: z.object({
      log_id: z
        .uuid()
        .openapi({
          param: {
            name: 'log_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the log.',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', content: { 'application/json': { schema: LogSchema } } } },
})

export const getAutomationsRoute = createRoute({
  method: 'get',
  path: '/automations',
  tags: ['Automations'],
  summary: 'Retrieve a list of automations',
  operationId: 'automations/list',
  request: {
    query: z.object({
      status: z
        .enum(['enabled', 'disabled'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['enabled', 'disabled'] },
            description: 'Filter automations by status.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAutomationsResponseSchema } },
    },
  },
})

export const postAutomationsRoute = createRoute({
  method: 'post',
  path: '/automations',
  tags: ['Automations'],
  summary: 'Create an automation',
  operationId: 'automations/create',
  request: { body: { content: { 'application/json': { schema: CreateAutomationRequestSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateAutomationResponseSchema } },
    },
  },
})

export const getAutomationsAutomationIdRoute = createRoute({
  method: 'get',
  path: '/automations/{automation_id}',
  tags: ['Automations'],
  summary: 'Retrieve a single automation',
  operationId: 'automations/get',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AutomationSchema } } },
  },
})

export const deleteAutomationsAutomationIdRoute = createRoute({
  method: 'delete',
  path: '/automations/{automation_id}',
  tags: ['Automations'],
  summary: 'Delete an automation',
  operationId: 'automations/remove',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DeleteAutomationResponseSchema } },
    },
  },
})

export const patchAutomationsAutomationIdRoute = createRoute({
  method: 'patch',
  path: '/automations/{automation_id}',
  tags: ['Automations'],
  summary: 'Update an automation',
  operationId: 'automations/update',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchAutomationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PatchAutomationResponseSchema } },
    },
  },
})

export const postAutomationsAutomationIdDuplicateRoute = createRoute({
  method: 'post',
  path: '/automations/{automation_id}/duplicate',
  tags: ['Automations'],
  summary: 'Duplicate an automation',
  operationId: 'automations/duplicate',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: DuplicateAutomationResponseSchema } },
    },
  },
})

export const postAutomationsAutomationIdStopRoute = createRoute({
  method: 'post',
  path: '/automations/{automation_id}/stop',
  tags: ['Automations'],
  summary: 'Stop an automation',
  operationId: 'automations/stop',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: StopAutomationResponseSchema } },
    },
  },
})

export const getAutomationsAutomationIdRunsRoute = createRoute({
  method: 'get',
  path: '/automations/{automation_id}/runs',
  tags: ['Automations'],
  summary: 'Retrieve a list of automation runs',
  operationId: 'automations/list-runs',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
    }),
    query: z.object({
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'Filter runs by status. Comma-separated list of: running, completed, failed, cancelled.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAutomationRunsResponseSchema } },
    },
  },
})

export const getAutomationsAutomationIdRunsRunIdRoute = createRoute({
  method: 'get',
  path: '/automations/{automation_id}/runs/{run_id}',
  tags: ['Automations'],
  summary: 'Retrieve a single automation run',
  operationId: 'automations/get-run',
  request: {
    params: z.object({
      automation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'automation_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation.',
          },
        }),
      run_id: z
        .uuid()
        .openapi({
          param: {
            name: 'run_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the automation run.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AutomationRunSchema } } },
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'Retrieve a list of events',
  operationId: 'events/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListEventsResponseSchema } },
    },
  },
})

export const postEventsRoute = createRoute({
  method: 'post',
  path: '/events',
  tags: ['Events'],
  summary: 'Create an event',
  operationId: 'events/create',
  request: { body: { content: { 'application/json': { schema: CreateEventRequestSchema } } } },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateEventResponseSchema } },
    },
  },
})

export const postEventsSendRoute = createRoute({
  method: 'post',
  path: '/events/send',
  tags: ['Events'],
  summary: 'Send an event',
  operationId: 'events/send',
  request: { body: { content: { 'application/json': { schema: SendEventRequestSchema } } } },
  responses: {
    202: {
      description: 'Accepted',
      content: { 'application/json': { schema: SendEventResponseSchema } },
    },
  },
})

export const getEventsIdentifierRoute = createRoute({
  method: 'get',
  path: '/events/{identifier}',
  tags: ['Events'],
  summary: 'Retrieve a single event',
  operationId: 'events/get',
  request: {
    params: z.object({
      identifier: z
        .string()
        .openapi({
          param: {
            name: 'identifier',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The event ID (UUID) or event name.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EventSchema } } },
  },
})

export const deleteEventsIdentifierRoute = createRoute({
  method: 'delete',
  path: '/events/{identifier}',
  tags: ['Events'],
  summary: 'Delete an event',
  operationId: 'events/remove',
  request: {
    params: z.object({
      identifier: z
        .string()
        .openapi({
          param: {
            name: 'identifier',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The event ID (UUID) or event name.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveEventResponseSchema } },
    },
  },
})

export const patchEventsIdentifierRoute = createRoute({
  method: 'patch',
  path: '/events/{identifier}',
  tags: ['Events'],
  summary: 'Update an event',
  operationId: 'events/update',
  request: {
    params: z.object({
      identifier: z
        .string()
        .openapi({
          param: {
            name: 'identifier',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The event ID (UUID) or event name.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateEventRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateEventResponseSchema } },
    },
  },
})

export const getSuppressionsRoute = createRoute({
  method: 'get',
  path: '/suppressions',
  tags: ['Suppressions'],
  summary: 'Retrieve a list of suppressions',
  operationId: 'suppressions/list',
  request: {
    query: z.object({
      origin: z
        .enum(['bounce', 'complaint', 'manual'])
        .exactOptional()
        .openapi({
          param: {
            name: 'origin',
            in: 'query',
            required: false,
            schema: { type: 'string', enum: ['bounce', 'complaint', 'manual'] },
            description: 'Filter suppressions by origin.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSuppressionsResponseSuccessSchema } },
    },
  },
})

export const postSuppressionsRoute = createRoute({
  method: 'post',
  path: '/suppressions',
  tags: ['Suppressions'],
  summary: 'Create a suppression',
  operationId: 'suppressions/add',
  request: {
    body: {
      content: { 'application/json': { schema: CreateSuppressionOptionsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateSuppressionResponseSuccessSchema } },
    },
  },
})

export const postSuppressionsBatchAddRoute = createRoute({
  method: 'post',
  path: '/suppressions/batch/add',
  tags: ['Suppressions'],
  summary: 'Add up to 100 suppressions at once',
  operationId: 'suppressions/batch-add',
  request: {
    body: {
      content: { 'application/json': { schema: BatchAddSuppressionsOptionsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: BatchAddSuppressionsResponseSuccessSchema } },
    },
  },
})

export const postSuppressionsBatchRemoveRoute = createRoute({
  method: 'post',
  path: '/suppressions/batch/remove',
  tags: ['Suppressions'],
  summary: 'Remove up to 100 suppressions at once',
  operationId: 'suppressions/batch-remove',
  request: {
    body: {
      content: { 'application/json': { schema: BatchRemoveSuppressionsOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchRemoveSuppressionsResponseSuccessSchema } },
    },
  },
})

export const getSuppressionsSuppressionRoute = createRoute({
  method: 'get',
  path: '/suppressions/{suppression}',
  tags: ['Suppressions'],
  summary: 'Retrieve a single suppression by ID or email',
  operationId: 'suppressions/get',
  request: {
    params: z.object({
      suppression: z
        .string()
        .openapi({
          param: {
            name: 'suppression',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Suppression ID or email address.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetSuppressionResponseSuccessSchema } },
    },
  },
})

export const deleteSuppressionsSuppressionRoute = createRoute({
  method: 'delete',
  path: '/suppressions/{suppression}',
  tags: ['Suppressions'],
  summary: 'Remove a single suppression by ID or email',
  operationId: 'suppressions/remove',
  request: {
    params: z.object({
      suppression: z
        .string()
        .openapi({
          param: {
            name: 'suppression',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'The Suppression ID or email address.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveSuppressionResponseSuccessSchema } },
    },
  },
})

export const getUsageRoute = createRoute({
  method: 'get',
  path: '/usage',
  tags: ['Usage'],
  summary: 'Retrieve account usage',
  description: "Retrieve your account's current usage and plan limits.",
  operationId: 'usage/get',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetUsageResponseSuccessSchema } },
    },
  },
})

export const getInboxesRoute = createRoute({
  method: 'get',
  path: '/inboxes',
  tags: ['Inboxes'],
  summary: 'Retrieve a list of inboxes',
  description:
    'Returns the inboxes of the team, newest first. The list items carry fewer fields than a single inbox. Retrieve an inbox to get all its fields. The `after` and `before` cursors take an inbox ID, and only one of them can be passed, or the request returns a 422. A value that is not a UUID returns a 422, and an unknown ID returns a 404.',
  operationId: 'inboxes/list',
  request: {
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListInboxesResponseSuccessSchema } },
    },
  },
})

export const postInboxesRoute = createRoute({
  method: 'post',
  path: '/inboxes',
  tags: ['Inboxes'],
  summary: 'Create an inbox',
  description:
    'Creates an inbox that sends and receives email at an address on one of your domains. The domain must belong to the team. Without `forwarding`, the domain must have receiving enabled, with DKIM and SPF verified and the inbound MX record verified or pending. With `forwarding` set to `true`, the domain only needs DKIM and SPF verified for sending, and Resend generates a `receiving_address` on the team inbound domain, and a team without an inbound domain gets a 422. A domain that does not meet these rules returns a 422 validation_error. An address or receiving address that is already in use returns a 409. A team that has reached the inbox limit of its plan returns a 403 validation_error. A blocked account returns a 451.',
  operationId: 'inboxes/create',
  request: {
    body: { content: { 'application/json': { schema: CreateInboxOptionsSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateInboxResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}',
  tags: ['Inboxes'],
  summary: 'Retrieve a single inbox by ID or email address',
  operationId: 'inboxes/get',
  request: { params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InboxSchema } } },
  },
})

export const deleteInboxesInboxIdRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}',
  tags: ['Inboxes'],
  summary: 'Remove an existing inbox by ID or email address',
  description:
    'Removes the inbox. An inbox that does not exist or was already removed returns a 404 not_found.',
  operationId: 'inboxes/remove',
  request: { params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveInboxResponseSuccessSchema } },
    },
  },
})

export const patchInboxesInboxIdRoute = createRoute({
  method: 'patch',
  path: '/inboxes/{inbox_id}',
  tags: ['Inboxes'],
  summary: 'Update an existing inbox by ID or email address',
  description:
    'Updates the internal name of the inbox or the name recipients see when mail is sent from it. At least one of `name` or `from_name` is required.',
  operationId: 'inboxes/update',
  request: {
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    body: { content: { 'application/json': { schema: UpdateInboxOptionsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateInboxResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdAgentRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/agent',
  tags: ['Inboxes'],
  summary: 'Retrieve the agent settings for an inbox',
  description:
    'Returns the agent settings of the inbox. An inbox without a configured agent returns empty settings: `instructions` and `tone` are null and `actions` is an empty array.',
  operationId: 'inboxes/get-agent',
  request: { params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }) },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InboxAgentSchema } } },
  },
})

export const patchInboxesInboxIdAgentRoute = createRoute({
  method: 'patch',
  path: '/inboxes/{inbox_id}/agent',
  tags: ['Inboxes'],
  summary: 'Update the agent settings for an inbox',
  description:
    'Updates the agent settings of the inbox. The agent is created when the inbox has none. Omitted fields keep their current value.',
  operationId: 'inboxes/update-agent',
  request: {
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    body: {
      content: { 'application/json': { schema: UpdateInboxAgentOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateInboxAgentResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdLabelsRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/labels',
  tags: ['Inboxes'],
  summary: 'Retrieve a list of inbox labels',
  description: 'Returns every label on the inbox, oldest first. The list is not paginated.',
  operationId: 'inboxes/list-labels',
  request: { params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }) },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListInboxLabelsResponseSuccessSchema } },
    },
  },
})

export const postInboxesInboxIdLabelsRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/labels',
  tags: ['Inboxes'],
  summary: 'Create a label on an inbox',
  description:
    'A label is a named, colored tag that belongs to one inbox. An inbox can have at most 100 labels. Label names are unique per inbox, compared without case. A duplicate name or a full inbox returns a 422 validation_error.',
  operationId: 'inboxes/create-label',
  request: {
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateInboxLabelOptionsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateInboxLabelResponseSuccessSchema } },
    },
  },
})

export const deleteInboxesInboxIdLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}/labels/{label_id}',
  tags: ['Inboxes'],
  summary: 'Remove an existing inbox label',
  description: 'Deletes the label and removes it from every thread that carries it.',
  operationId: 'inboxes/remove-label',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      label_id: z
        .uuid()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Label ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveInboxLabelResponseSuccessSchema } },
    },
  },
})

export const patchInboxesInboxIdLabelsLabelIdRoute = createRoute({
  method: 'patch',
  path: '/inboxes/{inbox_id}/labels/{label_id}',
  tags: ['Inboxes'],
  summary: 'Update an existing inbox label',
  description:
    'Renames or recolors a label. Omitted fields keep their current value. A new name must not match another label on the inbox, compared without case, or the request returns a 422 validation_error.',
  operationId: 'inboxes/update-label',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      label_id: z
        .uuid()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Label ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateInboxLabelOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateInboxLabelResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdThreadsRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/threads',
  tags: ['Inboxes'],
  summary: 'Retrieve a list of inbox threads',
  description:
    'Returns the threads in an inbox, most recently active first. A thread is a conversation made up of one or more emails. The `after` and `before` cursors take a thread ID, and only one of them can be passed. A cursor that is not a UUID, such as a date, returns a 422 validation_error. A cursor thread that is not in the selected folders returns a 404. To find threads by text, sender, recipient, attachment, or date, use the search threads endpoint.',
  operationId: 'inboxes/list-threads',
  request: {
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    query: z.object({
      folders: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['inbox', 'archive', 'spam', 'sent', 'trash'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'folders',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['inbox', 'archive', 'spam', 'sent', 'trash'] },
            },
            description:
              'Comma-separated folders to list, for example `inbox,sent`. Repeating the parameter returns a 422 validation_error. A thread is returned when any of its emails is in one of the folders, so a thread in `inbox` with an email you sent matches both `inbox` and `sent`. Defaults to `inbox`, or to `inbox,archive,sent` when `labels` is set. `spam` and `trash` are only included when you name them.',
            example: ['inbox', 'sent'],
          },
        }),
      labels: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', maxItems: 50, items: { type: 'string', format: 'uuid' } },
            description:
              'Comma-separated label IDs. Returns threads with any of these labels. Up to 50 IDs. An ID that does not exist in the inbox returns a 404. Repeating the parameter returns a 422 validation_error.',
            example: ['7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34'],
          },
        }),
      read: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'read',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
            description:
              '`true` returns threads where every email is read. `false` returns threads with at least one unread email. Only the literal values `true` and `false` are accepted.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListInboxThreadsResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdThreadsSearchRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/threads/search',
  tags: ['Inboxes'],
  summary: 'Search the threads of an inbox',
  description:
    'Finds threads by the text of their emails, who sent or received them, whether they have attachments, and their dates. Results are ordered by latest activity, newest first, and paginate like the list threads endpoint, so a cursor that is not a thread ID returns a 422. Search can be up to about a minute behind new emails. Different parameters combine, so a thread must match all of them. `folders`, `labels`, and `read` apply to the thread. `query`, `from`, `to`, `cc`, `bcc`, `has_attachment`, `start_date`, and `end_date` must all match the same email in the thread. When any of these email filters is set, the matching email must itself be in one of `folders`. For `sent`, that means an email the inbox sent. When more than 10,000 threads match, search covers the 10,000 with the newest matching email.',
  operationId: 'inboxes/search-threads',
  request: {
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    query: z.object({
      query: z
        .string()
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            required: false,
            schema: { type: 'string', maxLength: 256 },
            description:
              'Free text to search for in the subject, body, sender, recipients, and attachment names. Every word must match. Wrap words in double quotes to match an exact phrase. Start a word or quoted phrase with `-` to exclude it. Max 256 characters and 32 words.',
            example: 'invoice -draft',
          },
        }),
      from: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', maxItems: 20, items: { type: 'string' } },
            description:
              "Comma-separated senders. Each value matches part of the sender's address or name, without case. Returns threads that match any of them. Up to 20 values. Repeating the parameter returns a 422 validation_error.",
            example: ['isabella@example.com', 'carolina@example.com'],
          },
        }),
      to: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', maxItems: 20, items: { type: 'string' } },
            description:
              'Comma-separated recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.',
          },
        }),
      cc: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'cc',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', maxItems: 20, items: { type: 'string' } },
            description:
              'Comma-separated CC recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.',
          },
        }),
      bcc: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'bcc',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', maxItems: 20, items: { type: 'string' } },
            description:
              'Comma-separated BCC recipients, matched the same way as `from`. Up to 20 values. Repeating the parameter returns a 422 validation_error.',
          },
        }),
      has_attachment: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'has_attachment',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
            description:
              '`true` matches emails with an attachment. `false` matches emails without one. Only the literal values `true` and `false` are accepted.',
          },
        }),
      start_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start_date',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'Matches emails sent on or after this date. Accepts a date like `2026-09-01` or an ISO 8601 timestamp, in UTC unless the timestamp has an offset. An empty value returns a 422.',
            example: '2026-09-01',
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end_date',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            description:
              'Matches emails sent on or before this date. Same formats as `start_date`. A date covers that whole day, so `start_date=2026-09-01&end_date=2026-09-30` covers all of September. A timestamp is used as given. An `end_date` before `start_date` returns a 422 validation_error. An empty value returns a 422.',
            example: '2026-09-30',
          },
        }),
      folders: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['inbox', 'archive', 'spam', 'sent', 'trash'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'folders',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: {
              type: 'array',
              items: { type: 'string', enum: ['inbox', 'archive', 'spam', 'sent', 'trash'] },
            },
            description:
              'Comma-separated folders to search, for example `inbox,sent`. Repeating the parameter returns a 422 validation_error. A thread is returned when any of its emails is in one of the folders. Defaults to `inbox`, or to `inbox,archive,sent` when `labels` is set. `spam` and `trash` are only included when you name them.',
            example: ['inbox', 'sent'],
          },
        }),
      labels: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'array', maxItems: 50, items: { type: 'string', format: 'uuid' } },
            description:
              'Comma-separated label IDs. Returns threads with any of these labels. Up to 50 IDs. An ID that does not exist in the inbox returns a 404. Repeating the parameter returns a 422 validation_error.',
            example: ['7f9c1d2e-4a6b-4c3d-8e15-9b0a7c6d5e34'],
          },
        }),
      read: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'read',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
            description:
              '`true` returns threads where every email is read. `false` returns threads with at least one unread email. Only the literal values `true` and `false` are accepted.',
          },
        }),
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SearchInboxThreadsResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdThreadsThreadIdRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/threads/{thread_id}',
  tags: ['Inboxes'],
  summary: 'Retrieve a single inbox thread',
  description:
    'Returns the thread summary. The emails in the thread are listed with the list thread emails endpoint.',
  operationId: 'inboxes/get-thread',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: InboxThreadSummarySchema } },
    },
  },
})

export const deleteInboxesInboxIdThreadsThreadIdRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}/threads/{thread_id}',
  tags: ['Inboxes'],
  summary: 'Remove an existing inbox thread',
  description:
    'Moves the thread to `trash` and schedules it for deletion in 30 days. This is reversible. To restore the thread, update its `folder` to `inbox`, `archive`, or `spam`, which also clears the deletion deadline.',
  operationId: 'inboxes/remove-thread',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveInboxThreadResponseSuccessSchema } },
    },
  },
})

export const patchInboxesInboxIdThreadsThreadIdRoute = createRoute({
  method: 'patch',
  path: '/inboxes/{inbox_id}/threads/{thread_id}',
  tags: ['Inboxes'],
  summary: 'Update an existing inbox thread',
  description:
    'Marks a thread read or unread, or moves it to a folder. At least one of `read` or `folder` is required. To change the labels of a thread, use the add, set, and remove thread labels endpoints. This endpoint ignores the removed `add_label_ids` and `remove_label_ids` fields, so a body with only those fields returns a 422 validation_error. Moving a thread out of `trash` restores it and clears its deletion deadline. The changes apply in this order: `read`, then `folder`. They are not atomic.',
  operationId: 'inboxes/update-thread',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateInboxThreadOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: InboxThreadSummarySchema } },
    },
  },
})

export const putInboxesInboxIdThreadsThreadIdLabelsRoute = createRoute({
  method: 'put',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/labels',
  tags: ['Inboxes'],
  summary: 'Set the labels of an inbox thread',
  description:
    'Replaces every label on the thread with the given labels, in one atomic change. Labels on the thread that are not in the list are taken off it. The labels themselves are kept. An empty array takes every label off the thread. The response lists every label on the thread after the change. A label ID that is not a label of the inbox returns a 404 `Label not found.`, and nothing changes. A thread that does not exist in the inbox returns a 404 `Thread not found.`.',
  operationId: 'inboxes/set-thread-labels',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetInboxThreadLabelsOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: InboxThreadLabelListSchema } },
    },
  },
})

export const postInboxesInboxIdThreadsThreadIdLabelsRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/labels',
  tags: ['Inboxes'],
  summary: 'Add labels to an inbox thread',
  description:
    'Applies one or more labels to the thread. Labels already on the thread stay on it. The response lists every label on the thread after the change. A label ID that is not a label of the inbox returns a 404 `Label not found.`, and nothing changes. A thread that does not exist in the inbox returns a 404 `Thread not found.`. To replace the labels of the thread, use the set thread labels endpoint.',
  operationId: 'inboxes/add-thread-labels',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddInboxThreadLabelsOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: InboxThreadLabelListSchema } },
    },
  },
})

export const deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/labels/{label_id}',
  tags: ['Inboxes'],
  summary: 'Remove a label from an inbox thread',
  description:
    'Takes one label off the thread. The label itself is kept, and stays on every other thread that carries it. To delete the label, use the remove inbox label endpoint. The response lists every label on the thread after the change. A label that is not on the thread returns a 200 with the current labels. A label ID that is not a label of the inbox returns a 404 `Label not found.`. A thread that does not exist in the inbox returns a 404 `Thread not found.`.',
  operationId: 'inboxes/remove-thread-label',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
      label_id: z
        .uuid()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Label ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: InboxThreadLabelListSchema } },
    },
  },
})

export const getInboxesInboxIdThreadsThreadIdEmailsRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/emails',
  tags: ['Inboxes'],
  summary: 'Retrieve a list of thread emails',
  description:
    'Returns the messages of a thread, oldest first. Pass the `id` of the last message as `after` to get the next, newer page. Pass the `id` of the first message as `before` to get the previous, older page. Passing both `after` and `before`, or a cursor that is not a UUID, returns a 422. A cursor that is not a message of the thread returns a 404.',
  operationId: 'inboxes/list-thread-emails',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
    }),
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListInboxThreadEmailsResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdThreadsThreadIdEmailsEmailIdRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}',
  tags: ['Inboxes'],
  summary: 'Retrieve a single thread email',
  operationId: 'inboxes/get-thread-email',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description:
              'The Email ID, as returned in `data[].id` by the list thread emails endpoint.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InboxThreadEmailSchema } } },
  },
})

export const postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/reply',
  tags: ['Inboxes'],
  summary: 'Reply to a thread email',
  description:
    "Sends a reply from the inbox address right away, with no stored draft. The `to` recipients come from the message you reply to. For a message the inbox received, the reply goes to its `Reply-To` addresses, or to its sender when it has no `Reply-To`. For a message the inbox sent, the reply goes to that message's `to` recipients. Set `reply_all` to also copy the other recipients of the message. The reply threads under the message through the `In-Reply-To` and `References` headers. When no recipient can be found for the reply, the request returns a 422. The whole email, encoded, can be at most 40 MB, or the request returns a 422.",
  operationId: 'inboxes/reply-thread-email',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Idempotency-Key',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 256 },
            description:
              'A unique key for the request, so the reply is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)',
          },
        }),
    }),
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description:
              'The Email ID of the message to reply to, as returned in `data[].id` by the list thread emails endpoint.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReplyInboxThreadEmailOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ReplyInboxThreadEmailResponseSuccessSchema } },
    },
  },
})

export const postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/threads/{thread_id}/emails/{email_id}/forward',
  tags: ['Inboxes'],
  summary: 'Forward a thread email',
  description:
    'Forwards a message from the inbox address right away, with no stored draft. The original message is quoted under a forwarded-message banner, below the optional `html` or `text` note. The attachments of the original message are sent with the forward, together with any `attachments` you add. The request returns a 422 when they exceed 25 MB of `content` in total. An original attachment that was sent from a URL (`path`) cannot be forwarded, and the request returns a 422. The whole email, encoded, can be at most 40 MB, or the request returns a 422.',
  operationId: 'inboxes/forward-thread-email',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Idempotency-Key',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 256 },
            description:
              'A unique key for the request, so the forward is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)',
          },
        }),
    }),
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      thread_id: z
        .uuid()
        .openapi({
          param: {
            name: 'thread_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Thread ID.',
          },
        }),
      email_id: z
        .uuid()
        .openapi({
          param: {
            name: 'email_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description:
              'The Email ID of the message to forward, as returned in `data[].id` by the list thread emails endpoint.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ForwardInboxThreadEmailOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ForwardInboxThreadEmailResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdDraftsRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/drafts',
  tags: ['Inboxes'],
  summary: 'Retrieve a list of drafts',
  description:
    'Returns the unsent drafts on the inbox, most recently updated first. The `after` and `before` cursors take a Draft ID from the current page, and only one of them can be passed. A cursor that is not a UUID, or both cursors together, return a 422. A cursor that is not an unsent draft on this inbox returns a 404.',
  operationId: 'inboxes/list-drafts',
  request: {
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    query: z.object({
      limit: PaginationLimitParamsSchema,
      after: PaginationAfterParamsSchema,
      before: PaginationBeforeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListInboxDraftsResponseSuccessSchema } },
    },
  },
})

export const postInboxesInboxIdDraftsRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/drafts',
  tags: ['Inboxes'],
  summary: 'Create a draft',
  description:
    "Creates an unsent draft on the inbox. Omit `thread_id` and `reply_to_email_id` for a draft that starts a new thread. Pass both together for a reply draft in an existing thread. A reply draft without `to` is addressed to the sender of the email it replies to, or to its Reply-To when set. For an email the inbox sent, it defaults to that email's `to` recipients. Send `to: []` to leave it empty. At least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments` must be non-empty. The combined recipients of `to`, `cc` and `bcc` cannot exceed 50. Attachments are stored on the draft, so each one needs `content`, `filename` and `content_type`. Returns 201 for a new draft. Only one unsent reply draft can target an email, so a reply draft request for an email that already has one returns 200 with the ID of the existing draft. An unknown `thread_id`, or a `reply_to_email_id` that is not in that thread, returns a 404. That request ignores every other field, except `attachments`, which replaces the attachments of the existing draft when sent. A reply draft created without `subject` stores an empty subject. When it is sent, it takes the thread subject, prefixed with `Re:` when it does not already start with it.",
  operationId: 'inboxes/create-draft',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Idempotency-Key',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 256 },
            description:
              'A unique key for the request, so the draft is created only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)',
          },
        }),
    }),
    params: z.object({ inbox_id: InboxIdOrEmailAddressParamsSchema }),
    body: {
      content: { 'application/json': { schema: CreateInboxDraftOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The reply draft for this email already exists. The response holds the ID of the existing draft, and the request fields other than `attachments` are not applied.',
      content: { 'application/json': { schema: CreateInboxDraftResponseSuccessSchema } },
    },
    201: {
      description: 'OK',
      content: { 'application/json': { schema: CreateInboxDraftResponseSuccessSchema } },
    },
  },
})

export const getInboxesInboxIdDraftsDraftIdRoute = createRoute({
  method: 'get',
  path: '/inboxes/{inbox_id}/drafts/{draft_id}',
  tags: ['Inboxes'],
  summary: 'Retrieve a single draft',
  operationId: 'inboxes/get-draft',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'draft_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Draft ID.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InboxDraftSchema } } },
  },
})

export const deleteInboxesInboxIdDraftsDraftIdRoute = createRoute({
  method: 'delete',
  path: '/inboxes/{inbox_id}/drafts/{draft_id}',
  tags: ['Inboxes'],
  summary: 'Remove an existing draft',
  description:
    'Discards an unsent draft. A draft that was already sent, or that changed during the request, returns a 409.',
  operationId: 'inboxes/remove-draft',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'draft_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Draft ID.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RemoveInboxDraftResponseSuccessSchema } },
    },
  },
})

export const patchInboxesInboxIdDraftsDraftIdRoute = createRoute({
  method: 'patch',
  path: '/inboxes/{inbox_id}/drafts/{draft_id}',
  tags: ['Inboxes'],
  summary: 'Update an existing draft',
  description:
    'Updates the content of an unsent draft. Omitted fields are left unchanged. Send at least one of `to`, `cc`, `bcc`, `subject`, `text`, `html` or `attachments`. Sending `attachments` replaces every attachment on the draft. A request that sets `text` or `html` replaces the whole body. The body part you omit from that request becomes `null`. The merged draft must still contain at least one non-empty field, and its combined recipients cannot exceed 50. A draft that was already sent, or that changed during the request, returns a 409. The response holds only the Draft ID. Retrieve the draft to read its content.',
  operationId: 'inboxes/update-draft',
  request: {
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'draft_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Draft ID.',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateInboxDraftOptionsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UpdateInboxDraftResponseSuccessSchema } },
    },
  },
})

export const postInboxesInboxIdDraftsDraftIdSendRoute = createRoute({
  method: 'post',
  path: '/inboxes/{inbox_id}/drafts/{draft_id}/send',
  tags: ['Inboxes'],
  summary: 'Send a draft',
  description:
    'Sends the draft from the inbox address. A reply draft is sent in its thread. A draft without a thread starts a new thread. The draft must have at least one `to` recipient and `html` or `text`, or the request returns a 422. A standalone draft also needs a non-empty `subject`. A reply draft with an empty `subject` is sent with the thread subject, prefixed with `Re:` when it does not already start with it. A draft that was already sent returns a 409. The request body is optional and takes only `headers`. The whole email, encoded, can be at most 40 MB, or the request returns a 422.',
  operationId: 'inboxes/send-draft',
  request: {
    headers: z.object({
      'Idempotency-Key': z
        .string()
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Idempotency-Key',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 256 },
            description:
              'A unique key for the request, so the draft is sent only once. A retry with the same key within 24 hours returns the first successful (2xx) response, with the `idempotent-replayed: true` header. A failed request is not stored, so it can be retried with the same key. Reusing the key with a different body, or while the first request is still running, returns a 409. An empty key, or one longer than 256 characters, returns a 400 `invalid_idempotency_key`. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)',
          },
        }),
    }),
    params: z.object({
      inbox_id: InboxIdOrEmailAddressParamsSchema,
      draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'draft_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
            description: 'The Draft ID.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendInboxDraftOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: SendInboxDraftResponseSuccessSchema } },
    },
  },
})

export const emailSentPostWebhook = {
  method: 'post',
  path: '/email.sent',
  tags: ['Webhook Events'],
  summary: 'Email sent',
  description:
    "Occurs whenever the API request was successful. Resend will attempt to deliver the message to the recipient's mail server.",
  request: {
    body: { content: { 'application/json': { schema: EmailSentEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailDeliveredPostWebhook = {
  method: 'post',
  path: '/email.delivered',
  tags: ['Webhook Events'],
  summary: 'Email delivered',
  description:
    "Occurs whenever Resend successfully delivered the email to the recipient's mail server.",
  request: {
    body: {
      content: { 'application/json': { schema: EmailDeliveredEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailDeliveryDelayedPostWebhook = {
  method: 'post',
  path: '/email.delivery_delayed',
  tags: ['Webhook Events'],
  summary: 'Email delivery delayed',
  description:
    "Occurs whenever the email couldn't be delivered due to a temporary issue, such as the recipient's inbox being full or the receiving server experiencing a transient issue.",
  request: {
    body: {
      content: { 'application/json': { schema: EmailDeliveryDelayedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailBouncedPostWebhook = {
  method: 'post',
  path: '/email.bounced',
  tags: ['Webhook Events'],
  summary: 'Email bounced',
  description: "Occurs whenever the recipient's mail server permanently rejected the email.",
  request: {
    body: { content: { 'application/json': { schema: EmailBouncedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailComplainedPostWebhook = {
  method: 'post',
  path: '/email.complained',
  tags: ['Webhook Events'],
  summary: 'Email complained',
  description:
    'Occurs whenever the email was successfully delivered, but the recipient marked it as spam.',
  request: {
    body: {
      content: { 'application/json': { schema: EmailComplainedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailOpenedPostWebhook = {
  method: 'post',
  path: '/email.opened',
  tags: ['Webhook Events'],
  summary: 'Email opened',
  description:
    'Occurs whenever the recipient opened the email. Requires open tracking to be enabled.',
  request: {
    body: { content: { 'application/json': { schema: EmailOpenedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailClickedPostWebhook = {
  method: 'post',
  path: '/email.clicked',
  tags: ['Webhook Events'],
  summary: 'Email clicked',
  description:
    'Occurs whenever the recipient clicks on an email link. Requires click tracking to be enabled.',
  request: {
    body: { content: { 'application/json': { schema: EmailClickedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailFailedPostWebhook = {
  method: 'post',
  path: '/email.failed',
  tags: ['Webhook Events'],
  summary: 'Email failed',
  description:
    'Occurs whenever the email failed to send due to an error such as invalid recipients, API key problems, domain verification issues, email quota limits, or other sending failures.',
  request: {
    body: { content: { 'application/json': { schema: EmailFailedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailScheduledPostWebhook = {
  method: 'post',
  path: '/email.scheduled',
  tags: ['Webhook Events'],
  summary: 'Email scheduled',
  description: 'Occurs whenever the email is scheduled to be sent.',
  request: {
    body: {
      content: { 'application/json': { schema: EmailScheduledEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailSuppressedPostWebhook = {
  method: 'post',
  path: '/email.suppressed',
  tags: ['Webhook Events'],
  summary: 'Email suppressed',
  description:
    "Occurs whenever the email is suppressed by Resend, such as when the recipient's address is on the account-level suppression list.",
  request: {
    body: {
      content: { 'application/json': { schema: EmailSuppressedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const emailReceivedPostWebhook = {
  method: 'post',
  path: '/email.received',
  tags: ['Webhook Events'],
  summary: 'Email received',
  description:
    'Occurs whenever Resend successfully receives an inbound email on a receiving domain.',
  request: {
    body: { content: { 'application/json': { schema: EmailReceivedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const contactCreatedPostWebhook = {
  method: 'post',
  path: '/contact.created',
  tags: ['Webhook Events'],
  summary: 'Contact created',
  description:
    'Occurs whenever a contact was successfully created. Note: when importing multiple contacts via CSV, this event is not triggered.',
  request: {
    body: {
      content: { 'application/json': { schema: ContactCreatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const contactUpdatedPostWebhook = {
  method: 'post',
  path: '/contact.updated',
  tags: ['Webhook Events'],
  summary: 'Contact updated',
  description: 'Occurs whenever a contact was successfully updated.',
  request: {
    body: {
      content: { 'application/json': { schema: ContactUpdatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const contactDeletedPostWebhook = {
  method: 'post',
  path: '/contact.deleted',
  tags: ['Webhook Events'],
  summary: 'Contact deleted',
  description: 'Occurs whenever a contact was successfully deleted.',
  request: {
    body: {
      content: { 'application/json': { schema: ContactDeletedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const contactTopicsUpdatedPostWebhook = {
  method: 'post',
  path: '/contact.topics.updated',
  tags: ['Webhook Events'],
  summary: 'Contact topics updated',
  description: "Occurs whenever a contact's topic subscriptions were updated.",
  request: {
    body: {
      content: { 'application/json': { schema: ContactTopicsUpdatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const domainCreatedPostWebhook = {
  method: 'post',
  path: '/domain.created',
  tags: ['Webhook Events'],
  summary: 'Domain created',
  description: 'Occurs when a domain was successfully created.',
  request: {
    body: { content: { 'application/json': { schema: DomainCreatedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const domainUpdatedPostWebhook = {
  method: 'post',
  path: '/domain.updated',
  tags: ['Webhook Events'],
  summary: 'Domain updated',
  description: 'Occurs when a domain was successfully updated.',
  request: {
    body: { content: { 'application/json': { schema: DomainUpdatedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const domainDeletedPostWebhook = {
  method: 'post',
  path: '/domain.deleted',
  tags: ['Webhook Events'],
  summary: 'Domain deleted',
  description: 'Occurs when a domain was successfully deleted.',
  request: {
    body: { content: { 'application/json': { schema: DomainDeletedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const suppressionAddedPostWebhook = {
  method: 'post',
  path: '/suppression.added',
  tags: ['Webhook Events'],
  summary: 'Suppression added',
  description: 'Occurs whenever an email address was added to the suppression list.',
  request: {
    body: {
      content: { 'application/json': { schema: SuppressionAddedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const suppressionRemovedPostWebhook = {
  method: 'post',
  path: '/suppression.removed',
  tags: ['Webhook Events'],
  summary: 'Suppression removed',
  description: 'Occurs whenever an email address was removed from the suppression list.',
  request: {
    body: {
      content: { 'application/json': { schema: SuppressionRemovedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const topicCreatedPostWebhook = {
  method: 'post',
  path: '/topic.created',
  tags: ['Webhook Events'],
  summary: 'Topic created',
  description: 'Occurs whenever a topic was successfully created.',
  request: {
    body: { content: { 'application/json': { schema: TopicCreatedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const topicUpdatedPostWebhook = {
  method: 'post',
  path: '/topic.updated',
  tags: ['Webhook Events'],
  summary: 'Topic updated',
  description: 'Occurs whenever a topic was successfully updated.',
  request: {
    body: { content: { 'application/json': { schema: TopicUpdatedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const topicDeletedPostWebhook = {
  method: 'post',
  path: '/topic.deleted',
  tags: ['Webhook Events'],
  summary: 'Topic deleted',
  description: 'Occurs whenever a topic was successfully deleted.',
  request: {
    body: { content: { 'application/json': { schema: TopicDeletedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxCreatedPostWebhook = {
  method: 'post',
  path: '/inbox.created',
  tags: ['Webhook Events'],
  summary: 'Inbox created',
  description: 'Occurs whenever an inbox was created.',
  request: {
    body: { content: { 'application/json': { schema: InboxCreatedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxUpdatedPostWebhook = {
  method: 'post',
  path: '/inbox.updated',
  tags: ['Webhook Events'],
  summary: 'Inbox updated',
  description: 'Occurs whenever the settings of an inbox changed.',
  request: {
    body: { content: { 'application/json': { schema: InboxUpdatedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxDeletedPostWebhook = {
  method: 'post',
  path: '/inbox.deleted',
  tags: ['Webhook Events'],
  summary: 'Inbox deleted',
  description: 'Occurs whenever an inbox was deleted. The payload carries only the inbox ID.',
  request: {
    body: { content: { 'application/json': { schema: InboxDeletedEventSchema } }, required: true },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxThreadCreatedPostWebhook = {
  method: 'post',
  path: '/inbox.thread.created',
  tags: ['Webhook Events'],
  summary: 'Inbox thread created',
  description:
    'Occurs whenever the first email of a thread landed in an inbox, inbound or outbound. The `source` is always `system`, because the email pipeline sends this event, even when the API or an agent sent the email.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxThreadCreatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxEmailReceivedPostWebhook = {
  method: 'post',
  path: '/inbox.email.received',
  tags: ['Webhook Events'],
  summary: 'Inbox email received',
  description:
    'Occurs whenever an inbound email was added to a thread. The `source` is always `system`.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxEmailReceivedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxEmailSentPostWebhook = {
  method: 'post',
  path: '/inbox.email.sent',
  tags: ['Webhook Events'],
  summary: 'Inbox email sent',
  description:
    'Occurs whenever an outbound email was accepted for delivery and added to a thread. The `source` is always `system`. When the email comes from a draft, `inbox.draft.sent` is also sent, from the send call. The two events come from separate paths, so their delivery order is not fixed.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxEmailSentEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxThreadFolderUpdatedPostWebhook = {
  method: 'post',
  path: '/inbox.thread.folder.updated',
  tags: ['Webhook Events'],
  summary: 'Inbox thread folder updated',
  description:
    'Occurs whenever a thread moved between folders. Moving a thread to a label can send both this event and `inbox.thread.labels.updated` for the same thread.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxThreadFolderUpdatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxThreadAssignedPostWebhook = {
  method: 'post',
  path: '/inbox.thread.assigned',
  tags: ['Webhook Events'],
  summary: 'Inbox thread assigned',
  description: 'Occurs whenever a thread was assigned or reassigned.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxThreadAssignedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxThreadUnassignedPostWebhook = {
  method: 'post',
  path: '/inbox.thread.unassigned',
  tags: ['Webhook Events'],
  summary: 'Inbox thread unassigned',
  description: 'Occurs whenever a thread was unassigned.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxThreadUnassignedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxThreadLabelsUpdatedPostWebhook = {
  method: 'post',
  path: '/inbox.thread.labels.updated',
  tags: ['Webhook Events'],
  summary: 'Inbox thread labels updated',
  description:
    'Occurs whenever labels were applied to or removed from a thread. One event lists every label that one request added to or removed from the thread. A request that changes no label sends no event. Deleting a label does not send this event for the threads that had it.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxThreadLabelsUpdatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxDraftCreatedPostWebhook = {
  method: 'post',
  path: '/inbox.draft.created',
  tags: ['Webhook Events'],
  summary: 'Inbox draft created',
  description: 'Occurs whenever a draft was created, standalone or reply.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxDraftCreatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxDraftUpdatedPostWebhook = {
  method: 'post',
  path: '/inbox.draft.updated',
  tags: ['Webhook Events'],
  summary: 'Inbox draft updated',
  description: 'Occurs whenever a draft was edited.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxDraftUpdatedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxDraftSentPostWebhook = {
  method: 'post',
  path: '/inbox.draft.sent',
  tags: ['Webhook Events'],
  summary: 'Inbox draft sent',
  description:
    'Occurs whenever a draft was sent. This event fires from the send call. `inbox.email.sent` follows once the email is accepted for delivery.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxDraftSentEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}

export const inboxDraftDeletedPostWebhook = {
  method: 'post',
  path: '/inbox.draft.deleted',
  tags: ['Webhook Events'],
  summary: 'Inbox draft deleted',
  description:
    'Occurs whenever a draft was discarded. The draft is already gone, so the payload has no `draft` object.',
  request: {
    body: {
      content: { 'application/json': { schema: InboxDraftDeletedEventSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': { description: 'Return any 2xx status code to acknowledge receipt of the event.' },
  },
}
