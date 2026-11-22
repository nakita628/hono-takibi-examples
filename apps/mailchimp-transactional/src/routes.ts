import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySchema = z
  .strictObject({
    key: z
      .string()
      .openapi({ description: 'A valid Mandrill API key', example: 'ONzNrsmbtNXoIKyfPmjnig' }),
  })
  .openapi({
    description: 'API key field included in request bodies.',
    required: ['key'],
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
  })
  .openapi('ApiKey')

const ErrorSchema = z
  .strictObject({
    status: z.string().openapi({ description: 'Status of the response, typically "error"' }),
    code: z.int().openapi({ description: 'Numeric error code' }),
    name: z.string().openapi({ description: 'Machine-friendly error name' }),
    message: z.string().openapi({ description: 'Human-readable error message' }),
  })
  .openapi({
    description: 'Standard error payload returned on API errors.',
    required: ['status', 'code', 'name', 'message'],
    example: {
      status: 'error',
      code: -100,
      name: 'GeneralError',
      message: 'An unknown error occurred processing your request. Please try again later.',
    },
  })
  .openapi('Error')

const ExportNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown export job',
  example: { status: 'error', code: 9, name: 'Unknown_Export', message: 'Unknown Export: abc123' },
}).openapi('ExportNotFoundError')

const IPInvalidCustomDnsErrorSchema = ErrorSchema.openapi({
  description: 'Invalid custom DNS configuration',
  example: {
    status: 'error',
    code: 19,
    name: 'Invalid_CustomDNS',
    message: "The domain name is not configured for use as the dedicated IP's custom reverse DNS.",
  },
}).openapi('IPInvalidCustomDnsError')

const IPInvalidDeletePoolErrorSchema = ErrorSchema.openapi({
  description: 'Cannot delete default pool or non-empty pool',
  example: {
    status: 'error',
    code: 17,
    name: 'Invalid_DeleteDefaultPool',
    message: 'You cannot delete your default pool',
  },
}).openapi('IPInvalidDeletePoolError')

const IPInvalidEmptyDefaultPoolErrorSchema = ErrorSchema.openapi({
  description: 'Cannot leave default pool empty',
  example: {
    status: 'error',
    code: 16,
    name: 'Invalid_EmptyDefaultPool',
    message: 'You cannot remove the last IP from your default pool',
  },
}).openapi('IPInvalidEmptyDefaultPoolError')

const IPNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown dedicated IP',
  example: {
    status: 'error',
    code: 13,
    name: 'Unknown_IP',
    message: 'No dedicated IP with address 127.0.0.1',
  },
}).openapi('IPNotFoundError')

const IPOrPoolNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown IP or pool',
  example: {
    status: 'error',
    code: 13,
    name: 'Unknown_IP',
    message: 'No dedicated IP or pool found',
  },
}).openapi('IPOrPoolNotFoundError')

const IPPoolNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown IP pool',
  example: { status: 'error', code: 15, name: 'Unknown_Pool', message: 'No pool named main-pool' },
}).openapi('IPPoolNotFoundError')

const InboundDomainNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown inbound domain',
  example: {
    status: 'error',
    code: 8,
    name: 'Unknown_InboundDomain',
    message: 'Unknown Inbound Domain: mandrill.com',
  },
}).openapi('InboundDomainNotFoundError')

const InboundRouteNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown inbound route',
  example: {
    status: 'error',
    code: 22,
    name: 'Unknown_InboundRoute',
    message: 'No route exists with the id 1234',
  },
}).openapi('InboundRouteNotFoundError')

const InvalidKeyErrorSchema = (() => {
  const Schema = ErrorSchema.and(
    z
      .object({
        name: z.literal('Invalid_Key').exactOptional(),
        code: z.literal(401).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['status', 'code', 'name', 'message'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'The provided API key is not valid or is missing.',
    example: { status: 'error', code: 401, name: 'Invalid_Key', message: 'Invalid API key' },
  })
  .openapi('InvalidKeyError')

const MctemplateInvalidVersionErrorSchema = ErrorSchema.openapi({
  description: 'Invalid mc_template_version parameter',
  example: {
    status: 'error',
    code: 400,
    name: 'Invalid_Version',
    message: 'mc_template_version must be either "draft" or "published"',
  },
}).openapi('MctemplateInvalidVersionError')

const MctemplateNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Mailchimp template not found',
  example: {
    status: 'error',
    code: 11,
    name: 'Unknown_Message',
    message: 'No Mailchimp template found with id 12345',
  },
}).openapi('MctemplateNotFoundError')

const MessageNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Message not found',
  example: {
    status: 'error',
    code: 11,
    name: 'Unknown_Message',
    message: 'No message exists with the id McyuzyCS5M3bubeGPP-XVA',
  },
}).openapi('MessageNotFoundError')

const MessageServiceUnavailableErrorSchema = ErrorSchema.openapi({
  description: 'Service unavailable',
  example: {
    status: 'error',
    code: -2,
    name: 'ServiceUnavailable',
    message: 'Service Temporarily Unavailable',
  },
}).openapi('MessageServiceUnavailableError')

const MessageSmsSubaccountNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown subaccount for SMS message',
  example: {
    status: 'error',
    code: 12,
    name: 'Unknown_Subaccount',
    message: 'No subaccount exists with the id customer-123',
  },
}).openapi('MessageSmsSubaccountNotFoundError')

const MessageSubaccountNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown subaccount',
  example: {
    status: 'error',
    code: 12,
    name: 'Unknown_Subaccount',
    message: 'No subaccount exists with the id customer-123',
  },
}).openapi('MessageSubaccountNotFoundError')

const MessageTemplateOrSubaccountNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Template or subaccount not found',
  example: {
    status: 'error',
    code: 5,
    name: 'Unknown_Template',
    message: 'No such template "MyTemplate"',
  },
}).openapi('MessageTemplateOrSubaccountNotFoundError')

const MetadataNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown metadata field',
  example: {
    status: 'error',
    code: 24,
    name: 'Unknown_MetadataField',
    message: 'Invalid metadata field name: group_id',
  },
}).openapi('MetadataNotFoundError')

const PaymentRequiredErrorSchema = (() => {
  const Schema = ErrorSchema.and(
    z
      .object({
        name: z.literal('PaymentRequired').exactOptional(),
        code: z.literal(10).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['status', 'code', 'name', 'message'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description:
      'The account does not have the required paid plan or billing status to perform this action.',
    example: {
      status: 'error',
      code: 10,
      name: 'PaymentRequired',
      message: 'Email scheduling is only available for accounts with a positive balance.',
    },
  })
  .openapi('PaymentRequiredError')

const RejectEmailNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Email not found in rejection list or unknown subaccount',
  example: {
    status: 'error',
    code: 4,
    name: 'Invalid_Reject',
    message: 'Email address is not in the rejection list and is not invalid',
  },
}).openapi('RejectEmailNotFoundError')

const RejectPhoneNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Phone number not found in rejection list or unknown subaccount',
  example: {
    status: 'error',
    code: 4,
    name: 'Invalid_Reject',
    message: 'Phone number is not in the rejection list',
  },
}).openapi('RejectPhoneNotFoundError')

const RejectSubaccountNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown subaccount',
  example: {
    status: 'error',
    code: 12,
    name: 'Unknown_Subaccount',
    message: 'No subaccount exists with the id customer-123',
  },
}).openapi('RejectSubaccountNotFoundError')

const RequestLimitExceededErrorSchema = (() => {
  const Schema = ErrorSchema.and(
    z
      .object({
        name: z.literal('RequestLimitExceeded').exactOptional(),
        code: z.literal(429).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['status', 'code', 'name', 'message'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'The request has been rate-limited. Slow down and retry after a brief delay.',
    example: {
      status: 'error',
      code: 429,
      name: 'RequestLimitExceeded',
      message: 'Too Many Requests attempted recently',
    },
  })
  .openapi('RequestLimitExceededError')

const SenderCannotDeleteVerifiedErrorSchema = ErrorSchema.openapi({
  description: 'Cannot delete verified sender domain',
  example: {
    status: 'error',
    code: 28,
    name: 'Invalid_Verified_Domain',
    message:
      'Cannot delete verified domain "example.com" via API - please login to confirm deletion',
  },
}).openapi('SenderCannotDeleteVerifiedError')

const SenderDomainNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown sender domain',
  example: {
    status: 'error',
    code: 8,
    name: 'Unknown_Domain',
    message: 'No such domain "example.com"',
  },
}).openapi('SenderDomainNotFoundError')

const SenderNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown sender',
  example: {
    status: 'error',
    code: 2,
    name: 'Unknown_Sender',
    message: 'No such sender "example@mandrill.com"',
  },
}).openapi('SenderNotFoundError')

const ServerErrorSchema = ErrorSchema.openapi({
  description: 'An unexpected internal server error occurred.',
  example: {
    status: 'error',
    code: -1,
    name: 'GeneralError',
    message: 'An unknown error occurred processing your request. Please try again later.',
  },
}).openapi('ServerError')

const SubaccountNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown subaccount',
  example: {
    status: 'error',
    code: 12,
    name: 'Unknown_Subaccount',
    message: 'No subaccount exists with the id customer-123',
  },
}).openapi('SubaccountNotFoundError')

const TagInvalidNameErrorSchema = ErrorSchema.openapi({
  description: 'Invalid tag name',
  example: { status: 'error', code: 1, name: 'Invalid_Tag_Name', message: 'no such tag "mytag"' },
}).openapi('TagInvalidNameError')

const TemplateInvalidDataErrorSchema = ErrorSchema.openapi({
  description: 'Invalid template data',
  example: {
    status: 'error',
    code: 6,
    name: 'Invalid_Template',
    message: 'A template with name "MyTemplate" already exists',
  },
}).openapi('TemplateInvalidDataError')

const TemplateNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Template not found',
  example: {
    status: 'error',
    code: 5,
    name: 'Unknown_Template',
    message: 'No such template "MyTemplate"',
  },
}).openapi('TemplateNotFoundError')

const UrlCannotDeleteVerifiedErrorSchema = ErrorSchema.openapi({
  description: 'Cannot delete verified tracking domain',
  example: {
    status: 'error',
    code: 29,
    name: 'Invalid_Verified_TrackingDomain',
    message:
      'Cannot delete verified tracking domain "track.example.com" via API - please login to confirm deletion',
  },
}).openapi('UrlCannotDeleteVerifiedError')

const UrlInvalidDomainErrorSchema = ErrorSchema.openapi({
  description: 'Invalid tracking domain',
  example: {
    status: 'error',
    code: 400,
    name: 'MC_Exception_InvalidTrackingDomain',
    message: "'invalid.example.com' contains characters that violate RFC-5321",
  },
}).openapi('UrlInvalidDomainError')

const UrlNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown tracking domain',
  example: {
    status: 'error',
    code: 21,
    name: 'Unknown_TrackingDomain',
    message: "No tracking domain exists with the name 'track.example.com'",
  },
}).openapi('UrlNotFoundError')

const ValidationErrorSchema = (() => {
  const Schema = ErrorSchema.and(
    z.object({ name: z.literal('ValidationError').exactOptional() }).openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['status', 'code', 'name', 'message'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'One or more request parameters failed validation.',
    example: {
      status: 'error',
      code: -2,
      name: 'ValidationError',
      message: 'Validation error: {\\"email\\":\\"Not a valid email address\\"}',
    },
  })
  .openapi('ValidationError')

const WebhookNotFoundErrorSchema = ErrorSchema.openapi({
  description: 'Unknown webhook',
  example: { status: 'error', code: 3, name: 'Unknown_Webhook', message: 'Unknown hook ID 15' },
}).openapi('WebhookNotFoundError')

const MergeVarSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Merge variable name (case-insensitive, may not start with _)',
        example: 'merge1',
      }),
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content value for the merge variable', example: 'merge1 content' }),
  })
  .openapi({
    title: 'MergeVar',
    description: 'Merge variable for template content injection',
    required: [],
  })
  .openapi('MergeVar')

const SenderSchema = z
  .object({
    address: z
      .email()
      .exactOptional()
      .openapi({
        description: "The sender's email address",
        example: 'sender.example@mandrillapp.com',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC timestamp when first seen', example: '2013-01-01 15:30:27' }),
    sent: z.int().exactOptional().openapi({ description: 'Total messages sent by this sender' }),
    hard_bounces: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of hard bounces by this sender' }),
    soft_bounces: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of soft bounces by this sender' }),
    rejects: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of rejected messages by this sender' }),
    complaints: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of spam complaints for this sender' }),
    unsubs: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of unsubscribe requests for this sender' }),
    opens: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of times messages by this sender have been opened' }),
    clicks: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of tracked URL clicks by this sender' }),
    unique_clicks: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of unique clicks for emails sent by this sender' }),
    unique_opens: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of unique opens for emails sent by this sender' }),
  })
  .openapi({
    description: 'Information about a sending address used by the account.',
    required: [],
  })
  .openapi('Sender')

const StatsWindowSchema = z
  .strictObject({
    sent: z.int().exactOptional().openapi({ description: 'Number of emails sent' }),
    hard_bounces: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of emails that hard bounced' }),
    soft_bounces: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of emails that soft bounced' }),
    rejects: z.int().exactOptional().openapi({ description: 'Number of emails rejected' }),
    complaints: z.int().exactOptional().openapi({ description: 'Number of spam complaints' }),
    unsubs: z.int().exactOptional().openapi({ description: 'Number of unsubscribe requests' }),
    opens: z.int().exactOptional().openapi({ description: 'Number of times emails were opened' }),
    unique_opens: z.int().exactOptional().openapi({ description: 'Number of unique opens' }),
    clicks: z.int().exactOptional().openapi({ description: 'Number of tracked URL clicks' }),
    unique_clicks: z.int().exactOptional().openapi({ description: 'Number of unique clicks' }),
  })
  .openapi({ description: 'Aggregate sending statistics for a time window', required: [] })
  .openapi('StatsWindow')

const AllowlistsAddRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        email: z
          .email()
          .openapi({
            description: 'An email address to add to the allowlist',
            example: 'user@example.com',
          }),
        comment: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description: 'An optional description of why the email was added to the allowlist',
            example: 'Internal support address',
          }),
      })
      .openapi({ required: ['email'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['email', 'comment'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding an email to the allowlist',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      email: 'user@example.com',
      comment: 'Internal support address',
    },
  })
  .openapi('AllowlistsAddRequest')

const AllowlistsAddResponseSchema = z
  .strictObject({
    email: z
      .email()
      .openapi({ description: 'The email address you provided', example: 'user@example.com' }),
    added: z.boolean().openapi({ description: 'Whether the operation succeeded', example: true }),
  })
  .openapi({
    description: 'Response for adding an email to the allowlist',
    required: ['email', 'added'],
    example: { email: 'user@example.com', added: true },
  })
  .openapi('AllowlistsAddResponse')

const AllowlistsDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        email: z
          .email()
          .openapi({
            description: 'The email address to remove from the allowlist',
            example: 'user@example.com',
          }),
      })
      .openapi({ required: ['email'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['email'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for removing an email from the allowlist',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', email: 'user@example.com' },
  })
  .openapi('AllowlistsDeleteRequest')

const AllowlistsDeleteResponseSchema = z
  .strictObject({
    email: z
      .email()
      .openapi({
        description: 'The email address that was removed from the allowlist',
        example: 'user@example.com',
      }),
    deleted: z
      .boolean()
      .openapi({ description: 'Whether the address was deleted successfully', example: true }),
  })
  .openapi({
    description: 'Response for removing an email from the allowlist',
    required: ['email', 'deleted'],
    example: { email: 'user@example.com', deleted: true },
  })
  .openapi('AllowlistsDeleteResponse')

const AllowlistsListRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        email: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An optional email address or prefix to search by',
            example: 'user',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['email'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving the allowlist',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', email: 'user' },
  })
  .openapi('AllowlistsListRequest')

const AllowlistsListResponseSchema = z
  .array(
    z
      .strictObject({
        email: z
          .email()
          .openapi({
            description: 'The email address that is allowlisted',
            example: 'user@example.com',
          }),
        detail: z
          .string()
          .openapi({
            description: 'A description of why the email was allowlisted',
            example: 'Internal support address',
          }),
        created_at: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
          .openapi({
            description: 'When the email was added to the allowlist',
            example: '2013-01-01 15:30:32',
          }),
      })
      .openapi({ required: ['email', 'detail', 'created_at'] }),
  )
  .openapi({
    description: 'Response containing up to 1000 allowlist entries',
    example: [
      {
        email: 'user@example.com',
        detail: 'Internal support address',
        created_at: '2013-01-01 15:30:32',
      },
      {
        email: 'support@example.com',
        detail: 'Customer support address',
        created_at: '2013-01-02 10:15:45',
      },
    ],
  })
  .openapi('AllowlistsListResponse')

const ExportsActivityRequestSchema = z
  .object({
    key: ApiKeySchema,
    notify_email: z
      .email()
      .exactOptional()
      .openapi({
        description: 'Optional email address to notify when the export job has finished',
        example: 'admin@example.com',
      }),
    date_from: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'Start date as a UTC string in YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-01 12:53:01',
      }),
    date_to: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'End date as a UTC string in YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-06 13:42:18',
      }),
    tags: z
      .array(z.string().openapi({ description: 'A tag name', example: 'example-tag' }))
      .exactOptional()
      .openapi({
        description:
          'Array of tag names to narrow the export to; will match messages that contain ANY of the tags',
        example: ['example-tag'],
      }),
    senders: z
      .array(
        z.email().openapi({ description: 'A sender email address', example: 'test@example.com' }),
      )
      .exactOptional()
      .openapi({
        description: 'Array of sender email addresses to narrow the export to',
        example: ['test@example.com'],
      }),
    states: z
      .array(
        z
          .enum(['sent', 'rejected', 'bounced', 'soft-bounced', 'spam', 'unsub'])
          .openapi({ description: 'A message state' }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of message states to narrow the export to; messages with ANY of the states will be included',
        example: ['sent'],
      }),
    api_keys: z
      .array(
        z
          .string()
          .openapi({
            description: 'An API key associated with your account',
            example: 'ONzNrsmbtNXoIKyfPmjnig',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of API keys to narrow the export to; messages sent with ANY of the keys will be included',
        example: ['ONzNrsmbtNXoIKyfPmjnig'],
      }),
  })
  .openapi({
    description: 'Request parameters for exporting activity history with optional filters',
    required: ['key'],
  })
  .openapi('ExportsActivityRequest')

const ExportSchema = z
  .object({
    id: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+$/)
      .openapi({
        description: 'Unique identifier for this export job',
        example: '2013-01-01 12:20:28.13842',
      }),
    created_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({
        description: 'Date and time the export job was created in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-01 12:30:28',
      }),
    type: z
      .enum(['reject', 'whitelist', 'allowlist', 'activity'])
      .openapi({ description: 'Type of export job', example: 'reject' }),
    finished_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date and time the export job finished in UTC YYYY-MM-DD HH:MM:SS format, or null if not finished',
        example: '2013-01-01 12:35:28',
      }),
    state: z
      .enum(['waiting', 'working', 'complete', 'error'])
      .openapi({ description: 'Current state of the export job', example: 'waiting' }),
    result_url: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'URL to download the export results when job is complete, or null if not ready',
        example: 'https://example.com/export-results.zip',
      }),
  })
  .openapi({
    description: 'Export job information including status and download URL when complete',
    required: ['id', 'created_at', 'type', 'state'],
  })
  .openapi('Export')

const ExportsActivityResponseSchema = ExportSchema.openapi('ExportsActivityResponse')

const ExportsAllowlistRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        notify_email: z
          .email()
          .exactOptional()
          .openapi({
            description: 'Optional email address to notify when the export job has finished',
            example: 'admin@example.com',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['notify_email'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for exporting the rejection allowlist',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', notify_email: 'admin@example.com' },
  })
  .openapi('ExportsAllowlistRequest')

const ExportsAllowlistResponseSchema = ExportSchema.openapi('ExportsAllowlistResponse')

const ExportsInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({ description: 'Export job identifier', example: '2013-01-01 12:20:28.13842' }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving export job information',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: '2013-01-01 12:20:28.13842' },
  })
  .openapi('ExportsInfoRequest')

const ExportsInfoResponseSchema = ExportSchema.openapi('ExportsInfoResponse')

const ExportsListRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing export jobs',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('ExportsListRequest')

const ExportsListResponseSchema = z
  .array(ExportSchema)
  .openapi({ description: 'List of export jobs for the account' })
  .openapi('ExportsListResponse')

const ExportsRejectsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        notify_email: z
          .email()
          .exactOptional()
          .openapi({
            description: 'Optional email address to notify when the export job has finished',
            example: 'admin@example.com',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['notify_email'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for exporting the rejection blacklist',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', notify_email: 'admin@example.com' },
  })
  .openapi('ExportsRejectsRequest')

const ExportsRejectsResponseSchema = ExportSchema.openapi('ExportsRejectsResponse')

const ExportsWhitelistRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        notify_email: z
          .email()
          .exactOptional()
          .openapi({
            description: 'Optional email address to notify when the export job has finished',
            example: 'admin@example.com',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['notify_email'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for exporting the rejection allowlist (legacy endpoint)',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', notify_email: 'admin@example.com' },
  })
  .openapi('ExportsWhitelistRequest')

const ExportsWhitelistResponseSchema = ExportSchema.openapi('ExportsWhitelistResponse')

const IPsCancelWarmupRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z.string().openapi({ description: 'A dedicated IP address', example: '127.0.0.1' }),
      })
      .openapi({ required: ['ip'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for cancelling the warmup process for a dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', ip: '127.0.0.1' },
  })
  .openapi('IPsCancelWarmupRequest')

const IPsWarmupStatusSchema = z
  .object({
    warming_up: z
      .boolean()
      .openapi({ description: 'Whether the IP is currently in warmup mode', example: true }),
    start_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The start time for the warmup process as a UTC string in YYYY-MM-DD HH:MM:SS format',
        example: '2013-03-01 12:00:01',
      }),
    end_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The end date and time for the warmup process as a UTC string in YYYY-MM-DD HH:MM:SS format',
        example: '2013-03-31 12:00:01',
      }),
  })
  .openapi({
    description: "Information about an IP's warmup status and schedule",
    required: ['warming_up'],
    example: { warming_up: true, start_at: '2013-03-01 12:00:01', end_at: '2013-03-31 12:00:01' },
  })
  .openapi('IPsWarmupStatus')

const IPSchema = z
  .object({
    ip: z.ipv4().openapi({ description: 'The IP address (IPv4)', example: '127.0.0.1' }),
    created_at: z
      .string()
      .openapi({
        description:
          'The date and time that the dedicated IP was created as a UTC string in YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-01 15:50:21',
      }),
    pool: z
      .string()
      .openapi({
        description: 'The name of the pool that this dedicated IP belongs to',
        example: 'Main Pool',
      }),
    domain: z
      .string()
      .openapi({
        description: 'The domain name (reverse DNS) of this dedicated IP',
        example: 'mail1.example.mandrillapp.com',
      }),
    custom_dns: z
      .object({
        enabled: z
          .boolean()
          .openapi({
            description: 'Whether custom DNS has been configured for this IP',
            example: true,
          }),
        valid: z
          .boolean()
          .openapi({
            description: "Whether the IP's custom DNS is currently valid",
            example: true,
          }),
        error: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "If the IP's custom DNS is invalid, this will include details about the error",
            example: null,
          }),
      })
      .openapi({
        description: "Information about the IP's custom DNS configuration",
        required: ['enabled', 'valid'],
      }),
    warmup: IPsWarmupStatusSchema.openapi({
      description: "Information about the IP's warmup status",
    }),
  })
  .openapi({
    description:
      'Information about a dedicated IP address including warmup status and custom DNS configuration',
    required: ['ip', 'created_at', 'pool', 'domain', 'custom_dns', 'warmup'],
    example: {
      ip: '127.0.0.1',
      created_at: '2013-01-01 15:50:21',
      pool: 'Main Pool',
      domain: 'mail1.example.mandrillapp.com',
      custom_dns: { enabled: true, valid: true, error: null },
      warmup: { warming_up: true, start_at: '2013-03-01 12:00:01', end_at: '2013-03-31 12:00:01' },
    },
  })
  .openapi('IP')

const IPsCancelWarmupResponseSchema = IPSchema.openapi('IPsCancelWarmupResponse')

const IPsCheckCustomDnsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z.string().openapi({ description: 'A dedicated IP address', example: '127.0.0.1' }),
        domain: z
          .hostname()
          .openapi({ description: 'The domain name to test', example: 'example.com' }),
      })
      .openapi({ required: ['ip', 'domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip', 'domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description:
      'Request payload for testing whether a domain name is valid for use as the custom reverse DNS for a dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', ip: '127.0.0.1', domain: 'example.com' },
  })
  .openapi('IPsCheckCustomDnsRequest')

const IPsCheckCustomDnsResponseSchema = z
  .object({
    valid: z
      .boolean()
      .openapi({
        description:
          'Whether the domain name has a correctly-configured A record pointing to the IP address',
        example: true,
      }),
    error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "If valid is false, this will contain details about why the domain's A record is incorrect",
        example: null,
      }),
  })
  .openapi({
    description: 'Validation results for custom DNS domain configuration',
    required: ['valid'],
    example: { valid: true, error: null },
  })
  .openapi('IPsCheckCustomDnsResponse')

const IPsCreatePoolRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        pool: z
          .string()
          .openapi({ description: 'The name of a pool to create', example: 'New Pool' }),
      })
      .openapi({ required: ['pool'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['pool'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for creating a dedicated IP pool',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', pool: 'New Pool' },
  })
  .openapi('IPsCreatePoolRequest')

const IPsPoolSchema = z
  .object({
    name: z.string().openapi({ description: "This pool's name", example: 'Main Pool' }),
    created_at: z
      .string()
      .openapi({
        description:
          'The date and time that this pool was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-01 12:15:12',
      }),
    ips: z.array(IPSchema).openapi({ description: 'The dedicated IPs in this pool' }),
  })
  .openapi({
    description: 'Information about a dedicated IP pool including all IPs in the pool',
    required: ['name', 'created_at', 'ips'],
    example: {
      name: 'Main Pool',
      created_at: '2013-01-01 12:15:12',
      ips: [
        {
          ip: '127.0.0.1',
          created_at: '2013-01-01 15:50:21',
          pool: 'Main Pool',
          domain: 'mail1.example.mandrillapp.com',
          custom_dns: { enabled: true, valid: true, error: null },
          warmup: { warming_up: false, start_at: null, end_at: null },
        },
      ],
    },
  })
  .openapi('IPsPool')

const IPsCreatePoolResponseSchema = IPsPoolSchema.openapi('IPsCreatePoolResponse')

const IPsDeletePoolRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        pool: z
          .string()
          .openapi({ description: 'The name of a pool to delete', example: 'Main Pool' }),
      })
      .openapi({ required: ['pool'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['pool'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a dedicated IP pool',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', pool: 'Main Pool' },
  })
  .openapi('IPsDeletePoolRequest')

const IPsDeletePoolResponseSchema = z
  .object({
    pool: z
      .string()
      .openapi({ description: 'The name of the pool that was deleted', example: 'Test Pool' }),
    deleted: z
      .boolean()
      .openapi({ description: 'Whether the pool was successfully deleted', example: true }),
  })
  .openapi({
    description: 'Response for dedicated IP pool deletion operation',
    required: ['pool', 'deleted'],
    example: { pool: 'Test Pool', deleted: true },
  })
  .openapi('IPsDeletePoolResponse')

const IPsDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z
          .string()
          .openapi({
            description: 'The dedicated IP to remove from your account',
            example: '127.0.0.1',
          }),
      })
      .openapi({ required: ['ip'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', ip: '127.0.0.1' },
  })
  .openapi('IPsDeleteRequest')

const IPsDeleteResponseSchema = z
  .object({
    ip: z
      .string()
      .openapi({ description: 'The IP address that was deleted', example: '127.0.0.1' }),
    deleted: z
      .boolean()
      .openapi({ description: 'Whether the IP was successfully deleted', example: true }),
  })
  .openapi({
    description: 'Response for dedicated IP deletion operation',
    required: ['ip', 'deleted'],
    example: { ip: '127.0.0.1', deleted: true },
  })
  .openapi('IPsDeleteResponse')

const IPsInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z.string().openapi({ description: 'A dedicated IP address', example: '127.0.0.1' }),
      })
      .openapi({ required: ['ip'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving information about a single dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', ip: '127.0.0.1' },
  })
  .openapi('IPsInfoRequest')

const IPsInfoResponseSchema = IPSchema.openapi('IPsInfoResponse')

const IPsListPoolsRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing dedicated IP pools',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('IPsListPoolsRequest')

const IPsListPoolsResponseSchema = z
  .array(IPsPoolSchema)
  .openapi({ description: 'Array of dedicated IP pool information' })
  .openapi('IPsListPoolsResponse')

const IPsListRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing dedicated IPs',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('IPsListRequest')

const IPsListResponseSchema = z
  .array(IPSchema)
  .openapi({ description: 'Array of dedicated IP information' })
  .openapi('IPsListResponse')

const IPsPoolInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        pool: z.string().openapi({ description: 'A pool name', example: 'Main Pool' }),
      })
      .openapi({ required: ['pool'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['pool'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for describing a single dedicated IP pool',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', pool: 'Main Pool' },
  })
  .openapi('IPsPoolInfoRequest')

const IPsPoolInfoResponseSchema = IPsPoolSchema.openapi('IPsPoolInfoResponse')

const IPsProvisionRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        warmup: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether to enable warmup mode for the IP', example: false }),
        pool: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "The ID of the pool to add the dedicated IP to, or null to use your account's default pool",
            example: 'Main Pool',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['warmup', 'pool'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for provisioning an additional dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', warmup: false, pool: 'Main Pool' },
  })
  .openapi('IPsProvisionRequest')

const IPsProvisionResponseSchema = z
  .object({
    requested_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(?:\.\d+)?$/)
      .openapi({
        description:
          'The date and time that the request was created as a UTC timestamp in YYYY-MM-DD HH:MM:SS[.fraction] format',
        example: '2013-01-01 01:52:21.123456',
      }),
  })
  .openapi({
    description: 'Response for dedicated IP provisioning request',
    required: ['requested_at'],
    example: { requested_at: '2013-01-01 01:52:21.123456' },
  })
  .openapi('IPsProvisionResponse')

const IPsSetCustomDnsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z.string().openapi({ description: 'A dedicated IP address', example: '127.0.0.1' }),
        domain: z
          .hostname()
          .openapi({
            description: "A domain name to set as the dedicated IP's custom DNS name",
            example: 'example.com',
          }),
      })
      .openapi({ required: ['ip', 'domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip', 'domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for configuring the custom DNS name for a dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', ip: '127.0.0.1', domain: 'example.com' },
  })
  .openapi('IPsSetCustomDnsRequest')

const IPsSetCustomDnsResponseSchema = IPSchema.openapi('IPsSetCustomDnsResponse')

const IPsSetPoolRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z.string().openapi({ description: 'A dedicated IP address', example: '127.0.0.1' }),
        pool: z
          .string()
          .openapi({
            description: 'The name of the new pool to add the dedicated IP to',
            example: 'Main Pool',
          }),
        create_pool: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether to create the pool if it does not exist; if false and the pool does not exist, an Unknown_Pool will be thrown',
            example: false,
          }),
      })
      .openapi({ required: ['ip', 'pool'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip', 'pool', 'create_pool'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for moving a dedicated IP to a different pool',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      ip: '127.0.0.1',
      pool: 'Main Pool',
      create_pool: false,
    },
  })
  .openapi('IPsSetPoolRequest')

const IPsSetPoolResponseSchema = IPSchema.openapi('IPsSetPoolResponse')

const IPsStartWarmupRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        ip: z.string().openapi({ description: 'A dedicated IP address', example: '127.0.0.1' }),
      })
      .openapi({ required: ['ip'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['ip'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for beginning the warmup process for a dedicated IP',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', ip: '127.0.0.1' },
  })
  .openapi('IPsStartWarmupRequest')

const IPsStartWarmupResponseSchema = IPSchema.openapi('IPsStartWarmupResponse')

const InboundAddDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'A domain name for inbound email delivery',
            example: 'inbound.example.com',
          }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding an inbound domain',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'inbound.example.com' },
  })
  .openapi('InboundAddDomainRequest')

const InboundDomainSchema = z
  .strictObject({
    domain: z
      .string()
      .openapi({ description: 'The inbound domain name', example: 'inbound.example.com' }),
    created_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+$/)
      .openapi({
        description:
          'When the domain was added to the account (UTC YYYY-MM-DD HH:MM:SS.microseconds)',
        example: '2025-08-29 18:47:58.03116',
      }),
    valid_mx: z
      .boolean()
      .openapi({
        description: 'Whether the MX records are properly configured for inbound delivery',
        example: true,
      }),
  })
  .openapi({
    description: 'Inbound email domain configuration and status',
    required: ['domain', 'created_at', 'valid_mx'],
    example: {
      domain: 'inbound.example.com',
      created_at: '2025-08-29 18:47:58.03116',
      valid_mx: true,
    },
  })
  .openapi('InboundDomain')

const InboundAddDomainResponseSchema = InboundDomainSchema.openapi('InboundAddDomainResponse')

const InboundAddRouteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({ description: 'An existing inbound domain', example: 'inbound.example.com' }),
        pattern: z
          .string()
          .openapi({
            description: 'The search pattern that the mailbox name should match',
            example: 'mailbox-*',
          }),
        url: z
          .string()
          .openapi({
            description: 'The webhook URL where the inbound messages will be published',
            example: 'https://example.com/webhook-url',
          }),
      })
      .openapi({ required: ['domain', 'pattern', 'url'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain', 'pattern', 'url'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding a new mailbox route to an inbound domain',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      domain: 'inbound.example.com',
      pattern: 'mailbox-*',
      url: 'https://example.com/webhook-url',
    },
  })
  .openapi('InboundAddRouteRequest')

const InboundRouteSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the route', example: '88.214614' }),
    pattern: z
      .string()
      .openapi({
        description: 'The search pattern that the mailbox name should match',
        example: 'mailbox-*',
      }),
    url: z
      .url()
      .openapi({
        description: 'The webhook URL where inbound messages will be published',
        example: 'https://example.com/webhook-url',
      }),
  })
  .openapi({
    description: 'Mailbox routing rule for inbound emails',
    required: ['id', 'pattern', 'url'],
    example: { id: '88.214614', pattern: 'mailbox-*', url: 'https://example.com/webhook-url' },
  })
  .openapi('InboundRoute')

const InboundAddRouteResponseSchema = InboundRouteSchema.openapi('InboundAddRouteResponse')

const InboundCheckDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'A domain name for inbound email delivery',
            example: 'inbound.example.com',
          }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for checking an inbound domain',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'inbound.example.com' },
  })
  .openapi('InboundCheckDomainRequest')

const InboundCheckDomainResponseSchema = InboundDomainSchema.openapi('InboundCheckDomainResponse')

const InboundDeleteDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'A domain name for inbound email delivery',
            example: 'inbound.example.com',
          }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting an inbound domain',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'inbound.example.com' },
  })
  .openapi('InboundDeleteDomainRequest')

const InboundDeleteDomainResponseSchema = InboundDomainSchema.openapi('InboundDeleteDomainResponse')

const InboundDeleteRouteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of an existing route',
            example: '88.214614',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting an existing inbound mailbox route',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: '88.214614' },
  })
  .openapi('InboundDeleteRouteRequest')

const InboundDeleteRouteResponseSchema = InboundRouteSchema.openapi('InboundDeleteRouteResponse')

const InboundDomainsRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing inbound domains',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('InboundDomainsRequest')

const InboundDomainsResponseSchema = z
  .array(InboundDomainSchema)
  .openapi({ description: 'List of inbound domains associated with the account' })
  .openapi('InboundDomainsResponse')

const InboundRoutesRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({ description: 'The domain to check', example: 'inbound.example.com' }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for listing mailbox routes for an inbound domain',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'inbound.example.com' },
  })
  .openapi('InboundRoutesRequest')

const InboundRoutesResponseSchema = z
  .array(InboundRouteSchema)
  .openapi({ description: 'List of mailbox routes for an inbound domain' })
  .openapi('InboundRoutesResponse')

const InboundSendRawRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        raw_message: z
          .string()
          .openapi({
            description: 'The full MIME document of an email message',
            example:
              'From: sender@example.com\\nTo: mailbox-123@inbound.example.com\\nSubject: Some Subject\\n\\nSome content.',
          }),
        to: z
          .array(z.email())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "Optionally define the recipients to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document",
            example: ['mailbox-123@inbound.example.com'],
          }),
        mail_from: z
          .email()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The address specified in the MAIL FROM stage of the SMTP conversation',
            example: 'sender@example.com',
          }),
        helo: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The hostname provided during HELO',
            example: 'sender.example.com',
          }),
        client_address: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: "The remote host's IP address", example: '192.168.1.100' }),
      })
      .openapi({ required: ['raw_message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['raw_message', 'to', 'mail_from', 'helo', 'client_address'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for sending a raw MIME document to the inbound hook',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      raw_message:
        'From: sender@example.com\\nTo: mailbox-123@inbound.example.com\\nSubject: Some Subject\\n\\nSome content.',
      to: ['mailbox-123@inbound.example.com'],
      mail_from: 'sender@example.com',
    },
  })
  .openapi('InboundSendRawRequest')

const InboundSendRawResponseSchema = z
  .xor([
    z
      .array(
        z
          .object({
            email: z
              .email()
              .openapi({
                description: 'The email address that was processed',
                example: 'mailbox-123@inbound.example.com',
              }),
            pattern: z
              .string()
              .openapi({
                description: 'The route pattern that matched this email',
                example: 'mailbox-*',
              }),
            url: z
              .url()
              .openapi({
                description: 'The webhook URL where this message was sent',
                example: 'https://example.com/webhook-url',
              }),
          })
          .openapi({ required: ['email', 'pattern', 'url'] }),
      )
      .openapi({
        description: 'Array of processing results showing matched routes',
        example: [
          {
            email: 'mailbox-123@inbound.example.com',
            pattern: 'mailbox-*',
            url: 'https://example.com/webhook-url',
          },
        ],
      }),
    z.any().openapi({ description: 'Null when no recipients are processed or message is invalid' }),
  ])
  .openapi({ description: 'Response from processing raw MIME message' })
  .openapi('InboundSendRawResponse')

const InboundUpdateRouteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of an existing mailbox route',
            example: '88.2144614',
          }),
        pattern: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The search pattern that the mailbox name should match (null to leave unchanged)',
            example: '*.*',
          }),
        url: z
          .url()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The webhook URL where the inbound messages will be published (null to leave unchanged)',
            example: 'https://example.com/webhook-url',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id', 'pattern', 'url'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for updating an existing inbound mailbox route',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      id: '88.2144614',
      pattern: '*.*',
      url: 'https://example.com/webhook-url',
    },
  })
  .openapi('InboundUpdateRouteRequest')

const InboundUpdateRouteResponseSchema = InboundRouteSchema.openapi('InboundUpdateRouteResponse')

const MctemplatesInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        mc_template_id: z
          .int()
          .openapi({ description: 'The Mailchimp template ID', example: 12345 }),
      })
      .openapi({ required: ['mc_template_id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['mc_template_id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting Mailchimp Transactional template information',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', mc_template_id: 12345 },
  })
  .openapi('MctemplatesInfoRequest')

const MctemplatesMcTemplateSchema = z
  .object({
    mc_template_id: z.int().openapi({ description: 'Mailchimp template ID', example: 12345 }),
    mc_template_name: z
      .string()
      .openapi({ description: 'Template name', example: 'Welcome Email' }),
    labels: z
      .array(z.string())
      .openapi({
        description: 'Array of labels (always empty for transactional templates)',
        example: [],
      }),
    code: z
      .string()
      .openapi({ description: 'Template HTML (draft version)', example: '<div>Welcome!</div>' }),
    subject: z
      .string()
      .openapi({ description: 'Default subject line', example: 'Welcome to our service' }),
    from_email: z
      .string()
      .openapi({ description: 'Default sending address', example: 'support@example.com' }),
    from_name: z.string().openapi({ description: 'Default from name', example: 'Support Team' }),
    text: z
      .string()
      .openapi({
        description: 'Template text (draft version)',
        example: 'Welcome to our service!',
      }),
    publish_code: z
      .string()
      .openapi({
        description: 'Template HTML (published version)',
        example: '<div>Welcome!</div>',
      }),
    publish_text: z
      .string()
      .openapi({
        description: 'Template text (published version)',
        example: 'Welcome to our service!',
      }),
    published_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date and time when template was published in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40.26276',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40.26277',
      }),
    draft_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40',
      }),
    is_broken_template: z
      .boolean()
      .openapi({ description: 'Whether template has rendering errors', example: false }),
  })
  .openapi({
    description:
      'Mailchimp Transactional template information including content, metadata, and settings',
    required: [
      'mc_template_id',
      'mc_template_name',
      'labels',
      'code',
      'subject',
      'from_email',
      'from_name',
      'text',
      'publish_code',
      'publish_text',
      'published_at',
      'created_at',
      'updated_at',
      'draft_updated_at',
      'is_broken_template',
    ],
  })
  .openapi('MctemplatesMcTemplate')

const MctemplatesInfoResponseSchema = MctemplatesMcTemplateSchema.openapi({
  description: 'Mailchimp Transactional template information',
}).openapi('MctemplatesInfoResponse')

const MctemplatesListRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        search_query: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Optional search query to filter templates' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['search_query'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for listing Mailchimp Transactional templates',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', search_query: 'welcome' },
  })
  .openapi('MctemplatesListRequest')

const MctemplatesListResponseSchema = z
  .array(MctemplatesMcTemplateSchema)
  .openapi({ description: 'Array of Mailchimp Transactional templates' })
  .openapi('MctemplatesListResponse')

const MctemplatesRenderRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        mc_template_id: z
          .int()
          .openapi({ description: 'The Mailchimp template ID', example: 12345 }),
        mc_template_version: z
          .enum(['published', 'draft'])
          .default('published')
          .exactOptional()
          .openapi({
            description: 'The template version to render - "published" or "draft"',
            example: 'published',
          }),
        merge_vars: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Variable name', example: 'FIRSTNAME' }),
                content: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Variable value', example: 'John' }),
              })
              .openapi({ required: [] }),
          )
          .nullable()
          .exactOptional()
          .openapi({ description: 'Optional merge variables to inject into the template' }),
      })
      .openapi({ required: ['mc_template_id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['mc_template_id', 'mc_template_version', 'merge_vars'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for rendering a Mailchimp Transactional template',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      mc_template_id: 12345,
      mc_template_version: 'published',
      merge_vars: [{ name: 'FIRSTNAME', content: 'John' }],
    },
  })
  .openapi('MctemplatesRenderRequest')

const MctemplatesRenderResponseSchema = z
  .object({
    html: z
      .string()
      .openapi({
        description: 'Rendered HTML with merge variables applied',
        example: '<div>Welcome, John!</div>',
      }),
  })
  .openapi({
    description: 'Rendered Mailchimp Transactional template with merge variables applied',
    required: ['html'],
  })
  .openapi('MctemplatesRenderResponse')

const MctemplatesTimeSeriesSchema = z
  .strictObject({
    sent: z.int().openapi({ description: 'Number of emails sent during the hour' }),
    hard_bounces: z
      .int()
      .openapi({ description: 'Number of emails that hard bounced during the hour' }),
    soft_bounces: z
      .int()
      .openapi({ description: 'Number of emails that soft bounced during the hour' }),
    rejects: z.int().openapi({ description: 'Number of emails rejected during the hour' }),
    complaints: z
      .int()
      .openapi({ description: 'Number of spam complaints received during the hour' }),
    unsubs: z
      .int()
      .openapi({ description: 'Number of unsubscribe requests received during the hour' }),
    opens: z.int().openapi({ description: 'Number of emails opened during the hour' }),
    unique_opens: z
      .int()
      .openapi({
        description: 'Number of unique opens generated by messages sent during the hour',
      }),
    clicks: z.int().openapi({ description: 'Number of tracked URLs clicked during the hour' }),
    unique_clicks: z
      .int()
      .openapi({
        description: 'Number of unique clicks generated by messages sent during the hour',
      }),
    time: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({
        description: 'The hour as a UTC date string in YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 15:00:00',
      }),
  })
  .openapi({
    description:
      'Hourly statistics for a Mailchimp Transactional template in a specific time period',
    required: [
      'sent',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'unsubs',
      'opens',
      'clicks',
      'unique_opens',
      'unique_clicks',
      'time',
    ],
  })
  .openapi('MctemplatesTimeSeries')

const MctemplatesTimeSeriesRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        mc_template_id: z
          .int()
          .openapi({ description: 'The Mailchimp template ID', example: 12345 }),
      })
      .openapi({ required: ['mc_template_id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['mc_template_id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting Mailchimp Transactional template time series data',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', mc_template_id: 12345 },
  })
  .openapi('MctemplatesTimeSeriesRequest')

const MctemplatesTimeSeriesResponseSchema = z
  .array(MctemplatesTimeSeriesSchema)
  .openapi({
    description:
      'Array of hourly stats for the last 30 days for a Mailchimp Transactional template',
  })
  .openapi('MctemplatesTimeSeriesResponse')

const MessagesCancelScheduledRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        id: z
          .string()
          .openapi({
            description:
              'a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled',
            example: 'I_dtFt2ZNPW5QD9-FaDU1A',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/cancel-scheduled' })
  .openapi('MessagesCancelScheduledRequest')

const MessagesScheduledSchema = z
  .object({
    _id: z.string().openapi({ description: 'The message unique identifier' }),
    created_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({ description: 'When the message was created', example: '2025-08-29 18:47:42' }),
    send_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({
        description: 'When the message is scheduled to be sent',
        example: '2025-09-05 18:47:41',
      }),
    from_email: z.email().openapi({ description: 'The sender email address' }),
    to: z.email().openapi({ description: 'The recipient email address' }),
    subject: z.string().openapi({ description: 'The message subject' }),
  })
  .openapi({
    description: 'Information about a scheduled message',
    required: ['_id', 'created_at', 'send_at', 'from_email', 'to', 'subject'],
  })
  .openapi('MessagesScheduled')

const MessagesCancelScheduledResponseSchema = MessagesScheduledSchema.openapi(
  'MessagesCancelScheduledResponse',
)

const MessagesClickDetailSchema = z
  .object({
    ts: z.int().openapi({ description: 'Unix timestamp when the click occurred' }),
    url: z.string().openapi({ description: 'The URL that was clicked' }),
    ip: z.string().openapi({ description: 'IP address of the clicker' }),
    location: z.string().openapi({ description: 'Geographic location of the clicker' }),
    ua: z.string().openapi({ description: 'User agent of the clicker' }),
  })
  .openapi({
    description: 'Details about a message click event',
    required: ['ts', 'url', 'ip', 'location', 'ua'],
  })
  .openapi('MessagesClickDetail')

const MessagesContentRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        id: z
          .string()
          .openapi({
            description:
              'the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls',
            example: 'abc123abc123abc123abc123abc123',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/content' })
  .openapi('MessagesContentRequest')

const MessagesMessageBaseSchema = z
  .object({
    ts: z.int().openapi({ description: 'Unix timestamp when the message was sent' }),
    _id: z.string().openapi({ description: "The message's unique id" }),
    tags: z.array(z.string()).openapi({ description: 'List of tags associated with the message' }),
  })
  .openapi({
    description: 'Core message information returned by Mandrill API',
    required: ['ts', '_id', 'tags'],
  })
  .openapi('MessagesMessageBase')

const MessagesEmailContentSchema = MessagesMessageBaseSchema.and(
  z
    .object({
      from_email: z.email().openapi({ description: 'The sender email address' }),
      from_name: z.string().nullable().exactOptional().openapi({ description: 'The sender name' }),
      subject: z.string().openapi({ description: 'The message subject' }),
      to: z
        .object({
          email: z.email().openapi({ description: 'The recipient email address' }),
          name: z.string().exactOptional().openapi({ description: 'The recipient name' }),
        })
        .openapi({ description: 'The recipient information', required: ['email'] }),
      headers: z.record(z.string(), z.string()).openapi({ description: 'The message headers' }),
      text: z.string().openapi({ description: 'The text content of the message' }),
      html: z.string().openapi({ description: 'The full HTML content of the message' }),
      attachments: z
        .array(
          z
            .object({
              name: z.string().openapi({ description: 'The attachment filename' }),
              type: z.string().openapi({ description: 'The MIME type of the attachment' }),
              content: z.string().openapi({ description: 'The attachment content' }),
            })
            .openapi({ required: ['name', 'type', 'content'] }),
        )
        .openapi({ description: 'List of attachments' }),
    })
    .openapi({
      required: ['from_email', 'subject', 'to', 'headers', 'text', 'html', 'attachments'],
    }),
)
  .openapi({ description: 'The parsed content of a message' })
  .openapi('MessagesEmailContent')

const MessagesSmsContentSchema = MessagesMessageBaseSchema.and(
  z
    .object({
      channel: z
        .literal('sms')
        .openapi({ description: 'The channel type for this message', example: 'sms' }),
      to: z
        .string()
        .regex(/^\+[1-9]\d{1,14}$/)
        .openapi({ description: 'The recipient phone number', example: '+10000000000' }),
      from: z.string().openapi({ description: 'The SMS sender identifier', example: '' }),
      text: z.string().openapi({ description: 'The SMS message text content' }),
      state: z
        .enum(['sent', 'bounced', 'rejected', 'queued', 'scheduled', 'canceled'])
        .openapi({ description: 'Sending status of this message', example: 'canceled' }),
    })
    .openapi({ required: ['channel', 'to', 'from', 'text', 'state'] }),
)
  .openapi({ description: 'The content of an SMS message' })
  .openapi('MessagesSmsContent')

const MessagesContentResponseSchema = z
  .xor([
    MessagesEmailContentSchema.openapi({ description: 'Email message content' }),
    MessagesSmsContentSchema.openapi({ description: 'SMS message content' }),
  ])
  .openapi({ description: 'The content of the message (email or SMS)' })
  .openapi('MessagesContentResponse')

const MessagesEmailDetailsSchema = z
  .object({
    sender: z
      .email()
      .openapi({ description: 'The sender email address', example: 'user@example.com' }),
    template: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Template used if applicable' }),
    mc_template: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Mailchimp template used if applicable' }),
    subject: z.string().openapi({ description: 'The message subject' }),
    email: z
      .email()
      .openapi({ description: 'The recipient email address', example: 'user@example.com' }),
  })
  .openapi({ description: 'Details for an email', required: ['sender', 'subject', 'email'] })
  .openapi('MessagesEmailDetails')

const MessagesOpenDetailSchema = z
  .object({
    ts: z.int().openapi({ description: 'Unix timestamp when the open occurred' }),
    ip: z.string().openapi({ description: 'IP address of the opener' }),
    location: z.string().openapi({ description: 'Geographic location of the opener' }),
    ua: z.string().openapi({ description: 'User agent of the opener' }),
  })
  .openapi({
    description: 'Details about a message open event',
    required: ['ts', 'ip', 'location', 'ua'],
  })
  .openapi('MessagesOpenDetail')

const MessagesTrackingFieldsSchema = z
  .object({
    opens: z.int().openapi({ description: 'Number of times the message has been opened' }),
    clicks: z
      .int()
      .openapi({ description: 'Number of times links in the message have been clicked' }),
    opens_detail: z
      .array(MessagesOpenDetailSchema)
      .openapi({ description: 'Details about opens, if captured' }),
    clicks_detail: z
      .array(MessagesClickDetailSchema)
      .openapi({ description: 'Details about clicks, if captured' }),
    state: z
      .enum(['sent', 'bounced', 'rejected', 'queued', 'scheduled', 'canceled'])
      .openapi({ description: 'Sending status of this message' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Any custom metadata provided when the message was sent' }),
  })
  .openapi({
    description: 'Fields for tracking activity of a message',
    required: ['opens', 'clicks', 'opens_detail', 'clicks_detail', 'state'],
  })
  .openapi('MessagesTrackingFields')

const MessagesSmtpEventSchema = z
  .object({
    ts: z.int().openapi({ description: 'Unix timestamp when the event occurred' }),
    type: z
      .enum(['sent', 'bounced', 'rejected', 'delivered'])
      .openapi({ description: 'The type of SMTP event' }),
    diag: z
      .string()
      .openapi({
        description: "The SMTP response from the recipient's server or internal diagnostic",
      }),
    source_ip: z.ipv4().openapi({ description: 'The IP address that sent the message' }),
    destination_ip: z
      .string()
      .openapi({
        description:
          "The IP address of the recipient's server (empty string for internal processing)",
        example: '198.2.132.48',
      }),
    size: z.int().openapi({ description: 'The size of the message in bytes' }),
  })
  .openapi({
    description: 'Details about an SMTP event',
    required: ['ts', 'type', 'diag', 'source_ip', 'destination_ip', 'size'],
  })
  .openapi('MessagesSmtpEvent')

const MessagesEmailInfoSchema = MessagesMessageBaseSchema.and(MessagesEmailDetailsSchema)
  .and(MessagesTrackingFieldsSchema)
  .and(
    z
      .object({
        smtp_events: z
          .array(MessagesSmtpEventSchema)
          .openapi({ description: 'SMTP events related to the message' }),
        diag: z
          .string()
          .nullable()
          .openapi({ description: 'Diagnostic information about why the message was rejected' }),
        subaccount: z
          .string()
          .nullable()
          .openapi({ description: 'The subaccount used to send the message' }),
        resends: z.array(z.looseObject({})).openapi({ description: 'Array of resend attempts' }),
        reject: z
          .object({
            reason: z.string().exactOptional().openapi({ description: 'The reason for rejection' }),
            last_event_at: z
              .string()
              .exactOptional()
              .openapi({ description: 'When the rejection occurred' }),
          })
          .nullable()
          .openapi({ description: 'Rejection details if message was rejected', required: [] }),
        bounce_description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Description of bounce/rejection reason (only present for rejected messages)',
          }),
      })
      .openapi({ required: ['smtp_events', 'diag', 'subaccount', 'resends', 'reject'] }),
  )
  .openapi({ description: 'Detailed information about a sent email message' })
  .openapi('MessagesEmailInfo')

const MessagesInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        id: z
          .string()
          .openapi({
            description:
              'the unique id of the message to get - passed as the "_id" field in webhooks, send calls, or search calls',
            example: 'abc123abc123abc123abc123abc123',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/info' })
  .openapi('MessagesInfoRequest')

const MessagesSmsEventSchema = z
  .object({
    ts: z
      .int()
      .openapi({ description: 'Unix timestamp when the event occurred', example: 1757080445 }),
    state: z
      .enum(['sent', 'delivered', 'failed', 'canceled'])
      .openapi({ description: 'The state of the SMS event', example: 'canceled' }),
    sub_state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Additional state details', example: 'NOT_SUBSCRIBED' }),
  })
  .openapi({ description: 'Details about an SMS event', required: ['ts', 'state'] })
  .openapi('MessagesSmsEvent')

const MessagesSmsInfoSchema = MessagesMessageBaseSchema.and(MessagesTrackingFieldsSchema)
  .and(
    z
      .object({
        channel: z
          .literal('sms')
          .openapi({ description: 'The channel type for this message', example: 'sms' }),
        to: z
          .string()
          .regex(/^\+[1-9]\d{1,14}$/)
          .openapi({ description: 'The recipient phone number', example: '+10000000000' }),
        from: z.string().openapi({ description: 'The SMS sender identifier', example: '' }),
        text: z.string().openapi({ description: 'The SMS message text content' }),
        consent: z
          .enum(['onetime', 'recurring', 'recurring-no-confirm'])
          .openapi({ description: 'The consent type for this SMS', example: 'onetime' }),
        sms_events: z
          .array(MessagesSmsEventSchema)
          .openapi({ description: 'SMS events related to the message' }),
        subaccount: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The subaccount used to send the message' }),
        reject: z
          .object({
            reason: z.string().exactOptional().openapi({ description: 'The reason for rejection' }),
            last_event_at: z
              .string()
              .exactOptional()
              .openapi({ description: 'When the rejection occurred' }),
          })
          .nullable()
          .exactOptional()
          .openapi({ description: 'Rejection details if message was rejected', required: [] }),
      })
      .openapi({ required: ['channel', 'to', 'from', 'text', 'consent', 'sms_events'] }),
  )
  .openapi({ description: 'Detailed information about a sent SMS message' })
  .openapi('MessagesSmsInfo')

const MessagesInfoResponseSchema = z
  .xor([
    MessagesEmailInfoSchema.openapi({ description: 'Email message information' }),
    MessagesSmsInfoSchema.openapi({ description: 'SMS message information' }),
  ])
  .openapi({ description: 'Information about the message (email or SMS)' })
  .openapi('MessagesInfoResponse')

const MessagesListScheduledRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        to: z
          .email()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'an optional recipient address to restrict results to',
            example: 'test.recipient@example.com',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/list-scheduled' })
  .openapi('MessagesListScheduledRequest')

const MessagesListScheduledResponseSchema = z
  .array(MessagesScheduledSchema)
  .openapi({ description: 'Array of scheduled messages' })
  .openapi('MessagesListScheduledResponse')

const MessagesParseRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        raw_message: z
          .string()
          .openapi({
            description: 'the full MIME document of an email message',
            example:
              'From: sender@example.com\\nTo: recipient.email@example.com\\nSubject: Some Subject\\n\\nSome content.',
          }),
      })
      .openapi({ required: ['raw_message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/parse' })
  .openapi('MessagesParseRequest')

const MessagesParseResponseSchema = z
  .object({
    headers: z
      .record(z.string(), z.string())
      .openapi({ description: 'The parsed message headers' }),
    text: z.string().openapi({ description: 'The text content of the message' }),
    text_flowed: z
      .boolean()
      .openapi({ description: 'Whether the text content uses format=flowed' }),
    attachments: z
      .array(
        z
          .object({
            name: z.string().exactOptional().openapi({ description: 'The attachment filename' }),
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'The MIME type of the attachment' }),
            content: z.string().exactOptional().openapi({ description: 'The attachment content' }),
            binary: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Whether the attachment is binary' }),
          })
          .openapi({ required: [] }),
      )
      .openapi({ description: 'List of parsed attachments' }),
    from_email: z.email().openapi({ description: 'The sender email address' }),
    from_name: z.string().openapi({ description: 'The sender name' }),
    html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The HTML content if present' }),
    to: z
      .array(
        z
          .object({
            email: z
              .email()
              .exactOptional()
              .openapi({ description: 'The recipient email address' }),
            name: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ description: 'The recipient name' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'List of recipients' }),
    subject: z.string().nullable().exactOptional().openapi({ description: 'The message subject' }),
  })
  .openapi({
    description: 'The parsed components of a raw MIME message',
    required: ['headers', 'text', 'text_flowed', 'attachments', 'from_email', 'from_name'],
  })
  .openapi('MessagesParseResponse')

const MessagesRequestComponentSchema = z
  .object({
    html: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'the full HTML content to be sent' }),
    text: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'optional full text content to be sent' }),
    subject: z
      .string()
      .max(998)
      .nullable()
      .exactOptional()
      .openapi({ description: 'the message subject' }),
    from_email: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({ description: 'the sender email address', example: 'message.from@example.com' }),
    from_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'optional from name to be used', example: 'Example Name' }),
    to: z
      .array(
        z
          .object({
            email: z
              .email()
              .exactOptional()
              .openapi({
                description: 'The email address of the recipient',
                example: 'to.email@example.com',
              }),
            name: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The optional display name to use for the recipient',
                example: 'Recipient Name',
              }),
            type: z
              .enum(['to', 'cc', 'bcc'])
              .nullable()
              .default('to')
              .exactOptional()
              .openapi({
                description:
                  'the header type to use for the recipient, defaults to "to" if not provided Possible values: "to", "cc", or "bcc".',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'an array of recipient information.' }),
    headers: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'optional extra headers to add to the message (most headers are allowed)',
      }),
    important: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'whether or not this message is important, and should be delivered ahead of non-important messages',
      }),
    track_opens: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'whether or not to turn on open tracking for the message' }),
    track_clicks: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'whether or not to turn on click tracking for the message' }),
    auto_text: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'whether or not to automatically generate a text part for messages that are not given text',
      }),
    auto_html: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'whether or not to automatically generate an HTML part for messages that are not given HTML',
      }),
    inline_css: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'whether or not to automatically inline all CSS styles provided in the message HTML - only for HTML documents less than 256KB in size',
      }),
    url_strip_qs: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'whether or not to strip the query string from URLs when aggregating tracked URL data',
      }),
    preserve_recipients: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'whether or not to expose all recipients in to "To" header for each email',
      }),
    view_content_link: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'set to false to remove content logging for sensitive emails' }),
    bcc_address: z
      .email()
      .nullable()
      .exactOptional()
      .openapi({
        description: "an optional address to receive an exact copy of each recipient's email",
      }),
    tracking_domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'a custom domain to use for tracking opens and clicks instead of mandrillapp.com',
      }),
    signing_domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'a custom domain to use for SPF/DKIM signing instead of mandrill (for "via" or "on behalf of" in email clients)',
      }),
    return_path_domain: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "a custom domain to use for the messages's return-path" }),
    merge: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'whether to evaluate merge tags in the message. Will automatically be set to true if either merge_vars or global_merge_vars are provided.',
      }),
    merge_language: z
      .enum(['mailchimp', 'handlebars'])
      .nullable()
      .default('mailchimp')
      .exactOptional()
      .openapi({
        description:
          'the merge tag language to use when evaluating merge tags, either mailchimp or handlebars Possible values: "mailchimp" or "handlebars".',
      }),
    global_merge_vars: z
      .array(MergeVarSchema)
      .exactOptional()
      .openapi({
        description:
          'global merge variables to use for all recipients. You can override these per recipient.',
      }),
    merge_vars: z
      .array(
        z
          .object({
            rcpt: z
              .email()
              .exactOptional()
              .openapi({
                description: 'Email address of the recipient',
                example: 'recipient.email@example.com',
              }),
            vars: z
              .array(MergeVarSchema)
              .exactOptional()
              .openapi({ description: 'Recipient-specific merge variables' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'per-recipient merge variables, which override global merge variables with the same name.',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'an array of string to tag the message with. Stats are accumulated using tags, though we only store the first 100 we see, so this should not be unique or change frequently. Tags should be 50 characters or less. Any tags starting with an underscore are reserved for internal use and will cause errors.',
      }),
    subaccount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'the unique id of a subaccount for this message - must already exist or will fail with an error',
      }),
    google_analytics_domains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'an array of strings indicating for which any matching URLs will automatically have Google Analytics parameters appended to their query string automatically.',
      }),
    google_analytics_campaign: z
      .xor([z.array(z.string()), z.string()])
      .exactOptional()
      .openapi({
        description:
          "optional string indicating the value to set for the utm_campaign tracking parameter. If this isn't provided the email's from address will be used instead.",
      }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'metadata an associative array of user metadata. Mandrill will store this metadata and make it available for retrieval. In addition, you can select up to 10 metadata fields to index and make searchable using the Mandrill search api.',
        example: { website: 'www.example.com' },
      }),
    recipient_metadata: z
      .array(
        z
          .object({
            rcpt: z.string().exactOptional().openapi({ example: 'recipient.email@example.com' }),
            values: z
              .looseObject({})
              .exactOptional()
              .openapi({ example: { user_id: 123456 } }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Per-recipient metadata that will override the global values specified in the metadata parameter.',
      }),
    attachments: z
      .array(
        z
          .object({
            type: z
              .string()
              .exactOptional()
              .openapi({ description: 'the MIME type of the attachment', example: 'text/plain' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'the file name of the attachment', example: 'myfile.txt' }),
            content: z
              .string()
              .exactOptional()
              .openapi({ description: 'the content of the attachment as a base64-encoded string' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'an array of supported attachments to add to the message' }),
    images: z
      .array(
        z
          .object({
            type: z
              .string()
              .exactOptional()
              .openapi({
                description: 'the MIME type of the image - must start with "image/"',
                example: 'image/png',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'the content ID of the image - used <img src="cid:THIS_VALUE"> to reference the image in your HTML content',
              }),
            content: z
              .string()
              .exactOptional()
              .openapi({ description: 'the content of the image as a base64-encoded string' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'an array of embedded images to add to the message' }),
  })
  .openapi({ description: 'Mandrill message payload for transactional email', required: [] })
  .openapi('MessagesRequestComponent')

const MessagesRescheduleRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        id: z
          .string()
          .openapi({
            description:
              'a scheduled email id, as returned by any of the messages/send calls or messages/list-scheduled',
            example: 'I_dtFt2ZNPW5QD9-FaDU1A',
          }),
        send_at: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              "the new UTC timestamp when the message should sent. Mandrill can't time travel, so if you specify a time in past the message will be sent immediately",
            example: '2020-06-01 08:15:01',
          }),
      })
      .openapi({ required: ['id', 'send_at'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/reschedule' })
  .openapi('MessagesRescheduleRequest')

const MessagesRescheduleResponseSchema = MessagesScheduledSchema.openapi(
  'MessagesRescheduleResponse',
)

const MessagesSearchRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        query: z
          .string()
          .exactOptional()
          .openapi({ description: 'search terms to find matching messages', example: '*' }),
        date_from: z.iso.date().nullable().exactOptional().openapi({ description: 'start date' }),
        date_to: z.iso.date().nullable().exactOptional().openapi({ description: 'end date' }),
        tags: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: 'an array of tag names to narrow the search to' }),
        senders: z
          .array(z.email())
          .nullable()
          .exactOptional()
          .openapi({ description: 'an array of sender addresses to narrow the search to' }),
        api_keys: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ description: 'an array of API keys to narrow the search to' }),
        limit: z
          .int()
          .min(1)
          .max(1000)
          .exactOptional()
          .openapi({
            description:
              'the maximum number of results to return, defaults to 100, upper limit of 1000',
            example: 100,
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/search' })
  .openapi('MessagesSearchRequest')

const MessagesSearchResponseSchema = z
  .array(
    z.xor([
      MessagesEmailInfoSchema.openapi({ description: 'Email message search result' }),
      MessagesSmsInfoSchema.openapi({ description: 'SMS message search result' }),
    ]),
  )
  .openapi({
    description:
      'Array of messages matching the search query (can include both email and SMS messages)',
  })
  .openapi('MessagesSearchResponse')

const MessagesSearchTimeSeriesSchema = z
  .object({
    time: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({
        description: 'The hour that the statistic occurred',
        example: '2025-08-29 18:00:00',
      }),
    sent: z.int().openapi({ description: 'The number of emails sent during the time period' }),
    opens: z.int().openapi({ description: 'The number of emails opened during the time period' }),
    clicks: z.int().openapi({ description: 'The number of clicks during the time period' }),
    hard_bounces: z
      .int()
      .openapi({ description: 'The number of hard bounces during the time period' }),
    soft_bounces: z
      .int()
      .openapi({ description: 'The number of soft bounces during the time period' }),
    rejects: z
      .int()
      .openapi({ description: 'The number of emails rejected during the time period' }),
    complaints: z
      .int()
      .openapi({ description: 'The number of spam complaints during the time period' }),
    unsubs: z.int().openapi({ description: 'The number of unsubscribes during the time period' }),
    unique_opens: z
      .int()
      .openapi({ description: 'The number of unique opens during the time period' }),
    unique_clicks: z
      .int()
      .openapi({ description: 'The number of unique clicks during the time period' }),
  })
  .openapi({
    description: 'Time series data point for message search results',
    required: [
      'time',
      'sent',
      'opens',
      'clicks',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'unsubs',
      'unique_opens',
      'unique_clicks',
    ],
  })
  .openapi('MessagesSearchTimeSeries')

const MessagesSearchTimeSeriesRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        query: z
          .string()
          .exactOptional()
          .openapi({
            description: 'the search terms to find matching messages for',
            example: 'email:gmail.com',
          }),
        date_from: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({ description: 'start date', example: '2013-01-01' }),
        date_to: z.iso
          .date()
          .nullable()
          .exactOptional()
          .openapi({ description: 'end date', example: '2013-01-02' }),
        tags: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'an array of tag names to narrow the search to, will return messages that contain ANY of the tags',
            example: ['password-reset', 'welcome'],
          }),
        senders: z
          .array(z.email())
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'an array of sender addresses to narrow the search to, will return messages sent by ANY of the senders',
            example: ['sender@example.com'],
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/search-time-series' })
  .openapi('MessagesSearchTimeSeriesRequest')

const MessagesSearchTimeSeriesResponseSchema = z
  .array(MessagesSearchTimeSeriesSchema)
  .openapi({ description: 'Array of hourly message stats matching the search query' })
  .openapi('MessagesSearchTimeSeriesResponse')

const MessagesSendMcTemplateRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        mc_template_id: z
          .int()
          .openapi({
            description: "the Mailchimp Transactional template ID from the user's account",
            example: 12345,
          }),
        mc_template_version: z
          .enum(['draft', 'published'])
          .exactOptional()
          .openapi({
            description:
              'which version of the template to use - "draft" for draft content or "published" for published content. Defaults to "published". Note: requesting "published" when the template has not been published will return a 404 error.',
            example: 'published',
          }),
        message: MessagesRequestComponentSchema.openapi({
          description: 'the other information on the message to send - same as /messages/send',
        }),
        async: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.',
          }),
        ip_pool: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.',
          }),
        send_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              "when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.",
          }),
      })
      .openapi({ required: ['mc_template_id', 'message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/send-mc-template' })
  .openapi('MessagesSendMcTemplateRequest')

const MessagesSendResultSchema = z
  .object({
    email: z
      .email()
      .openapi({
        description: 'The email address of the recipient',
        example: 'recipient.email@example.com',
      }),
    status: z
      .enum(['sent', 'queued', 'scheduled', 'rejected', 'invalid'])
      .openapi({ description: 'The sending status of the recipient' }),
    reject_reason: z
      .enum([
        'hard-bounce',
        'soft-bounce',
        'spam',
        'unsub',
        'custom',
        'invalid-sender',
        'invalid',
        'test-mode-limit',
        'unsigned',
        'rule',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason for the rejection if the recipient status is rejected',
        example: null,
      }),
    queued_reason: z
      .enum([
        'attachments',
        'multiple-recipients',
        'free-trial-sends-exhausted',
        'hourly-quota-exhausted',
        'monthly-limit-reached',
        'sending-paused',
        'sending-suspended',
        'account-suspended',
        'sending-backlogged',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason for the queuing if the recipient status is queued',
        example: null,
      }),
    _id: z.string().openapi({ description: "The message's unique id" }),
  })
  .openapi({
    description: 'The sending results for a single recipient',
    required: ['email', 'status', '_id'],
  })
  .openapi('MessagesSendResult')

const MessagesSendResponseSchema = z
  .array(MessagesSendResultSchema)
  .openapi({ description: 'Array of send results, one per recipient' })
  .openapi('MessagesSendResponse')

const MessagesSendMcTemplateResponseSchema = MessagesSendResponseSchema.openapi(
  'MessagesSendMcTemplateResponse',
)

const MessagesSendRawRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        raw_message: z
          .string()
          .openapi({ description: 'the full MIME document of an email message' }),
        from_email: z
          .email()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "optionally define the sender address - otherwise we'll use the address found in the provided headers",
          }),
        from_name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'optionally define the sender alias' }),
        to: z
          .array(z.email())
          .exactOptional()
          .openapi({
            description:
              "optionally define the recipient to receive the message - otherwise we'll use the To, Cc, and Bcc headers provided in the document",
            example: ['recipient.email@example.com'],
          }),
        async: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.',
          }),
        ip_pool: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.',
          }),
        send_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              "when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.",
          }),
        return_path_domain: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: "a custom domain to use for the messages' return-path",
            example: null,
          }),
      })
      .openapi({ required: ['raw_message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/send-raw' })
  .openapi('MessagesSendRawRequest')

const MessagesSendRawResponseSchema = MessagesSendResponseSchema.openapi('MessagesSendRawResponse')

const MessagesSendRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        message: MessagesRequestComponentSchema.openapi({
          description: 'the information on the message to send',
        }),
        async: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.',
          }),
        ip_pool: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.',
          }),
        send_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              "when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.",
          }),
      })
      .openapi({ required: ['message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/send' })
  .openapi('MessagesSendRequest')

const MessagesSendSmsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        message: z
          .object({
            sms: z
              .object({
                text: z
                  .string()
                  .openapi({
                    description: 'The SMS message content to be sent.',
                    example: 'Hello from Mandrill SMS!',
                  }),
                to: z
                  .array(z.string().regex(/^\+[1-9]\d{1,14}$/))
                  .openapi({
                    description: 'The phone numbers to send the SMS to.',
                    example: ['+10000000000', '+10000000001'],
                  }),
                from: z
                  .string()
                  .openapi({
                    description: 'The phone number to send the SMS from.',
                    example: '+10000000000',
                  }),
                consent: z
                  .enum(['onetime', 'recurring', 'recurring-no-confirm'])
                  .openapi({ description: 'The consent type for this SMS', example: 'onetime' }),
                track_clicks: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'whether or not to turn on click tracking for the message',
                  }),
              })
              .openapi({ required: ['text', 'to', 'from', 'consent'] }),
            merge: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Whether to evaluate merge tags in the message. Will automatically be set to true if either merge_vars or global_merge_vars are provided.',
              }),
            merge_language: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'the merge tag language to use when evaluating merge tags, either mailchimp or handlebars Possible values: "mailchimp" or "handlebars".',
              }),
            global_merge_vars: z
              .array(MergeVarSchema)
              .exactOptional()
              .openapi({
                description:
                  'global merge variables to use for all recipients. You can override these per recipient.',
              }),
            merge_vars: z
              .array(
                z
                  .object({
                    rcpt: z
                      .string()
                      .regex(/^\+[1-9]\d{1,14}$/)
                      .exactOptional()
                      .openapi({
                        description: 'Phone number of the recipient',
                        example: '+11234567890',
                      }),
                    vars: z
                      .array(MergeVarSchema)
                      .exactOptional()
                      .openapi({ description: 'Recipient-specific merge variables' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'per-recipient merge variables, which override global merge variables with the same name.',
              }),
          })
          .openapi({ required: ['sms'] }),
        async: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'enable a background sending mode that is optimized for bulk sending. In async mode, messages/send-sms will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.',
          }),
      })
      .openapi({ required: ['message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/send-sms' })
  .openapi('MessagesSendSmsRequest')

const MessagesSmsMessageSchema = z
  .object({
    to: z
      .string()
      .regex(/^\+[1-9]\d{1,14}$/)
      .openapi({ description: 'The phone number of the recipient', example: '+10000000000' }),
    from: z
      .string()
      .openapi({ description: 'The phone number of the sender', example: '+10000000000' }),
    status: z
      .enum(['sent', 'queued', 'scheduled', 'rejected', 'invalid'])
      .openapi({ description: 'The sending status of the recipient', example: 'sent' }),
    reject_reason: z
      .enum([
        'hard-bounce',
        'soft-bounce',
        'spam',
        'unsub',
        'custom',
        'invalid-sender',
        'invalid',
        'test-mode-limit',
        'unsigned',
        'rule',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason for the rejection if the recipient status is rejected',
        example: null,
      }),
    queue_reason: z
      .enum(['async requested by user', 'multiple recipients'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason for the queuing if the recipient status is queued',
        example: null,
      }),
    _id: z
      .string()
      .openapi({
        description: "The message's unique id",
        example: 'd451905551f64e279440e833d25b7ff0',
      }),
  })
  .openapi({
    description: 'The sending results for a single SMS recipient',
    required: ['to', 'from', 'status', '_id'],
  })
  .openapi('MessagesSmsMessage')

const MessagesSendSmsResponseSchema = z
  .array(MessagesSmsMessageSchema)
  .openapi({ description: 'Array of SMS send results, one per recipient' })
  .openapi('MessagesSendSmsResponse')

const MessagesSendTemplateRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        template_name: z
          .string()
          .openapi({
            description:
              "the immutable slug of a template that exists in the user's account. Make sure you don't use the template name as this one might change.",
          }),
        template_content: z
          .array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'the name of the mc:edit editable region to inject into',
                  }),
                content: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'the content to inject' }),
              })
              .openapi({ required: [] }),
          )
          .openapi({
            description:
              'an array of template content to send. Each item in the array should be a struct with two keys - name: the name of the content block to set the content for, and content: the actual content to put into the block',
          }),
        message: MessagesRequestComponentSchema.openapi({
          description:
            'the other information on the message to send - same as /messages/send, but without the html content',
        }),
        async: z
          .boolean()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'enable a background sending mode that is optimized for bulk sending. In async mode, messages/send will immediately return a status of "queued" for every recipient. To handle rejections when sending in async mode, set up a webhook for the \'reject\' event. Defaults to false for messages with no more than 10 recipients; messages with more than 10 recipients are always sent asynchronously, regardless of the value of async.',
          }),
        ip_pool: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'the name of the dedicated ip pool that should be used to send the message. If you do not have any dedicated IPs, this parameter has no effect. If you specify a pool that does not exist, your default pool will be used instead.',
          }),
        send_at: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              "when this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately; for future dates, you're limited to one year from the date of scheduling.",
          }),
      })
      .openapi({ required: ['template_name', 'template_content', 'message'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for messages/send-template' })
  .openapi('MessagesSendTemplateRequest')

const MessagesSendTemplateResponseSchema = MessagesSendResponseSchema.openapi(
  'MessagesSendTemplateResponse',
)

const MetadataAddRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .max(64)
          .openapi({
            description: 'A unique identifier for the metadata field',
            example: 'group_id',
          }),
        view_template: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Optional Mustache template to control how the metadata is rendered in your activity log',
            example: '<a href="http://yourapplication.com/user/{{value}}">{{value}}</a>',
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name', 'view_template'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding a custom metadata field',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      name: 'group_id',
      view_template: '<a href="http://yourapplication.com/user/{{value}}">{{value}}</a>',
    },
  })
  .openapi('MetadataAddRequest')

const MetadataResponseDataSchema = z
  .strictObject({
    name: z
      .string()
      .max(64)
      .openapi({ description: 'Unique identifier for the metadata field', example: 'group_id' }),
    state: z
      .enum(['active', 'delete', 'index', 'failed'])
      .openapi({ description: 'Current state of the metadata field', example: 'active' }),
    view_template: z
      .string()
      .max(1024)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Mustache template to control how the metadata is rendered in activity logs',
        example: '<a href="http://yourapplication.com/user/{{value}}">{{value}}</a>',
      }),
  })
  .openapi({
    description: 'Response data for metadata field operations',
    required: ['name', 'state'],
    example: {
      name: 'group_id',
      state: 'active',
      view_template: '<a href="http://yourapplication.com/user/{{value}}">{{value}}</a>',
    },
  })
  .openapi('MetadataResponseData')

const MetadataAddResponseSchema = MetadataResponseDataSchema.openapi('MetadataAddResponse')

const MetadataDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .max(64)
          .openapi({
            description: 'The unique identifier of the metadata field to delete',
            example: 'group_id',
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a custom metadata field',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', name: 'group_id' },
  })
  .openapi('MetadataDeleteRequest')

const MetadataDeleteResponseSchema = MetadataResponseDataSchema.openapi('MetadataDeleteResponse')

const MetadataListRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing custom metadata fields',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('MetadataListRequest')

const MetadataListResponseSchema = z
  .array(MetadataResponseDataSchema)
  .openapi({ description: 'List of custom metadata fields for the account' })
  .openapi('MetadataListResponse')

const MetadataSchema = MetadataResponseDataSchema.openapi('Metadata')

const MetadataUpdateRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .max(64)
          .openapi({
            description: 'The unique identifier of the metadata field to update',
            example: 'group_id',
          }),
        view_template: z
          .string()
          .max(1024)
          .openapi({
            description:
              'Mustache template to control how the metadata is rendered in your activity log',
            example: '<a href="http://yourapplication.com/user/{{value}}">{{value}}</a>',
          }),
      })
      .openapi({ required: ['name', 'view_template'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name', 'view_template'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for updating a custom metadata field',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      name: 'group_id',
      view_template: '<a href="http://yourapplication.com/user/{{value}}">{{value}}</a>',
    },
  })
  .openapi('MetadataUpdateRequest')

const MetadataUpdateResponseSchema = MetadataResponseDataSchema.openapi('MetadataUpdateResponse')

const RejectsAddRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        email: z
          .email()
          .openapi({ description: 'An email address to block', example: 'user@example.com' }),
        comment: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An optional comment describing the rejection',
            example: 'Manually blocked due to spam complaints',
          }),
        subaccount: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              'An optional unique identifier for the subaccount to limit the blacklist entry',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['email'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['email', 'comment', 'subaccount'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding an email to the rejection blacklist',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      email: 'user@example.com',
      comment: 'Manually blocked due to spam complaints',
      subaccount: 'cust-123',
    },
  })
  .openapi('RejectsAddRequest')

const RejectsAddResponseSchema = z
  .strictObject({
    email: z
      .email()
      .openapi({ description: 'The email address you provided', example: 'user@example.com' }),
    added: z.boolean().openapi({ description: 'Whether the operation succeeded', example: true }),
  })
  .openapi({
    description: 'Response for adding an email to the rejection blacklist',
    required: ['email', 'added'],
    example: { email: 'user@example.com', added: true },
  })
  .openapi('RejectsAddResponse')

const RejectsAddSmsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        phone: z
          .string()
          .openapi({
            description: 'A phone number to block in E.164 format',
            example: '+12025551234',
          }),
        comment: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An optional comment describing the rejection',
            example: 'Manually blocked due to spam',
          }),
        subaccount: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              'An optional unique identifier for the subaccount to limit the denylist entry',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['phone'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['phone', 'comment', 'subaccount'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding a phone number to the SMS rejection denylist',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      phone: '+12025551234',
      comment: 'Manually blocked due to spam',
      subaccount: 'cust-123',
    },
  })
  .openapi('RejectsAddSmsRequest')

const RejectsSmsRejectSchema = z
  .strictObject({
    phone: z
      .string()
      .openapi({ description: 'The phone number you provided', example: '+12025551234' }),
    added: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the add operation succeeded' }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the delete operation succeeded' }),
    subaccount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The subaccount denylist that the phone number was affected in, if any',
        example: 'cust-123',
      }),
  })
  .openapi({
    description: 'Response for adding or deleting a phone number from the SMS rejection denylist',
    required: ['phone'],
    example: { phone: '+12025551234', added: true },
  })
  .openapi('RejectsSmsReject')

const RejectsAddSmsResponseSchema = RejectsSmsRejectSchema.openapi('RejectsAddSmsResponse')

const RejectsDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        email: z
          .email()
          .openapi({
            description: 'An email address to remove from the blacklist',
            example: 'user@example.com',
          }),
        subaccount: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              'An optional unique identifier for the subaccount to limit the blacklist deletion',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['email'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['email', 'subaccount'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting an email from the rejection blacklist',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', email: 'user@example.com', subaccount: 'cust-123' },
  })
  .openapi('RejectsDeleteRequest')

const RejectsDeleteResponseSchema = z
  .strictObject({
    email: z
      .email()
      .openapi({
        description: 'The email address that was removed from the blacklist',
        example: 'user@example.com',
      }),
    deleted: z
      .boolean()
      .openapi({ description: 'Whether the address was deleted successfully', example: true }),
    subaccount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subaccount blacklist that the address was removed from, if any',
        example: 'cust-123',
      }),
  })
  .openapi({
    description: 'Response for deleting an email from the rejection blacklist',
    required: ['email', 'deleted'],
    example: { email: 'user@example.com', deleted: true, subaccount: 'cust-123' },
  })
  .openapi('RejectsDeleteResponse')

const RejectsDeleteSmsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        phone: z
          .string()
          .openapi({ description: 'A phone number in E.164 format', example: '+12025551234' }),
        subaccount: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              'An optional unique identifier for the subaccount to limit the denylist deletion',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['phone'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['phone', 'subaccount'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a phone number from the SMS rejection denylist',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', phone: '+12025551234', subaccount: 'cust-123' },
  })
  .openapi('RejectsDeleteSmsRequest')

const RejectsDeleteSmsResponseSchema = RejectsSmsRejectSchema.openapi('RejectsDeleteSmsResponse')

const RejectsListRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        email: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An optional email address to search by',
            example: 'user@example.com',
          }),
        include_expired: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether to include rejections that have already expired',
            example: false,
          }),
        subaccount: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description: 'An optional unique identifier for the subaccount to limit the blacklist',
            example: 'cust-123',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['email', 'include_expired', 'subaccount'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving email rejection blacklist',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      email: 'user@example.com',
      include_expired: false,
      subaccount: 'cust-123',
    },
  })
  .openapi('RejectsListRequest')

const RejectsListResponseSchema = z
  .array(
    z
      .strictObject({
        email: z
          .email()
          .openapi({ description: 'The email that is blocked', example: 'user@example.com' }),
        reason: z
          .enum(['hard-bounce', 'soft-bounce', 'spam', 'unsub', 'custom'])
          .openapi({
            description: 'The type of event that caused this rejection',
            example: 'hard-bounce',
          }),
        detail: z
          .string()
          .openapi({
            description:
              'Extended details about the event, such as the SMTP diagnostic for bounces or the comment for manually-created rejections',
            example: '550 5.1.1 User unknown',
          }),
        created_at: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
          .openapi({
            description: 'When the email was added to the blocklist',
            example: '2023-01-15 10:30:00',
          }),
        last_event_at: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
          .openapi({
            description:
              'The timestamp of the most recent event that either created or renewed this rejection',
            example: '2023-01-15 10:30:00',
          }),
        expires_at: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
          .openapi({
            description: 'When the blocklist entry will expire (this may be in the past)',
            example: '2023-02-15 10:30:00',
          }),
        expired: z
          .boolean()
          .openapi({ description: 'Whether the blocklist entry has expired', example: false }),
        sender: z
          .object({
            address: z
              .email()
              .exactOptional()
              .openapi({
                description: "The sender's email address",
                example: 'sender@example.com',
              }),
            created_at: z
              .string()
              .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
              .exactOptional()
              .openapi({
                description:
                  'The date and time that the sender was first seen by Mandrill as a UTC date string in YYYY-MM-DD HH:MM:SS format',
                example: '2023-01-01 00:00:00',
              }),
            sent: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The total number of messages sent by this sender',
                example: 100,
              }),
            hard_bounces: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The total number of hard bounces by messages by this sender',
                example: 5,
              }),
            soft_bounces: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The total number of soft bounces by messages by this sender',
                example: 2,
              }),
            rejects: z
              .int()
              .exactOptional()
              .openapi({
                description: 'The total number of rejected messages by this sender',
                example: 7,
              }),
            complaints: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The total number of spam complaints received for messages by this sender',
                example: 1,
              }),
            unsubs: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The total number of unsubscribe requests received for messages by this sender',
                example: 3,
              }),
          })
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The sender that this blocklist entry applies to, or null if none',
            required: [],
          }),
        subaccount: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The subaccount that this denylist entry applies to, or null if none',
            example: 'subaccount-123',
          }),
      })
      .openapi({
        required: [
          'email',
          'reason',
          'detail',
          'created_at',
          'last_event_at',
          'expires_at',
          'expired',
        ],
      }),
  )
  .openapi({
    description: 'Response containing up to 1000 rejection blacklist entries',
    example: [
      {
        email: 'user1@example.com',
        reason: 'hard-bounce',
        detail: '550 5.1.1 User unknown',
        created_at: '2023-01-15 10:30:00',
        last_event_at: '2023-01-15 10:30:00',
        expires_at: '2023-02-15 10:30:00',
        expired: false,
        sender: null,
        subaccount: null,
      },
      {
        email: 'user2@example.com',
        reason: 'spam',
        detail: 'Manually blocked due to spam complaints',
        created_at: '2023-01-10 14:20:00',
        last_event_at: '2023-01-10 14:20:00',
        expires_at: '2023-02-10 14:20:00',
        expired: false,
        sender: {
          address: 'sender@example.com',
          created_at: '2023-01-01 00:00:00',
          sent: 100,
          hard_bounces: 5,
          soft_bounces: 2,
          rejects: 7,
          complaints: 1,
          unsubs: 3,
        },
        subaccount: 'subaccount-123',
      },
    ],
  })
  .openapi('RejectsListResponse')

const RejectsListSmsRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        phone: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An optional phone number to search by in E.164 format',
            example: '+12025551234',
          }),
        include_expired: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether to include rejections that have already expired',
            example: false,
          }),
        subaccount: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description: 'An optional unique identifier for the subaccount to limit the denylist',
            example: 'cust-123',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['phone', 'include_expired', 'subaccount'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving the SMS rejection denylist',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      phone: '+12025551234',
      include_expired: false,
      subaccount: 'cust-123',
    },
  })
  .openapi('RejectsListSmsRequest')

const RejectsListSmsResponseSchema = z
  .array(
    z
      .strictObject({
        phone: z
          .string()
          .openapi({ description: 'The phone number on the denylist', example: '+12025551234' }),
        created_at: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
          .openapi({
            description: 'The date and time that the entry was created',
            example: '2023-01-15 10:30:00',
          }),
        expires_at: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The date and time that the entry expires',
            example: '2023-02-15 10:30:00',
          }),
        expired: z
          .boolean()
          .openapi({ description: 'Whether the entry has expired', example: false }),
        subaccount: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The subaccount that the entry belongs to',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['phone', 'created_at', 'expired'] }),
  )
  .openapi({
    description: 'Response containing up to 1000 SMS rejection denylist entries',
    example: [
      {
        phone: '+12025551234',
        created_at: '2023-01-15 10:30:00',
        expires_at: null,
        expired: false,
        subaccount: null,
      },
    ],
  })
  .openapi('RejectsListSmsResponse')

const SendersAddDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({ domain: z.hostname().max(255).openapi({ example: 'example.com' }) })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for adding a sender domain.' })
  .openapi('SendersAddDomainRequest')

const VerificationDetailSchema = z
  .object({
    valid: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this verification is valid.' }),
    valid_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that this verification was last tested.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'An error message indicating why the verification failed.' }),
  })
  .openapi({ description: 'Details about the verification status of a domain.', required: [] })
  .openapi('VerificationDetail')

const DmarcDetailSchema = z
  .object({
    valid: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this verification is valid.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'An error message indicating why the verification failed.' }),
  })
  .openapi({ description: 'Details about the DMARC status of a domain.', required: [] })
  .openapi('DmarcDetail')

const SendersSenderDomainSchema = z
  .object({
    domain: z.hostname().exactOptional().openapi({ example: 'example.com' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the sending domain was first seen.' }),
    last_tested_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the sending domain was last tested.' }),
    spf: VerificationDetailSchema.exactOptional().openapi({
      description: "Details about the domain's SPF record.",
    }),
    dkim: VerificationDetailSchema.exactOptional().openapi({
      description: "Details about the domain's DKIM record.",
    }),
    dkim2: VerificationDetailSchema.exactOptional().openapi({
      description: "Details about the domain's second DKIM record.",
    }),
    dmarc: DmarcDetailSchema.exactOptional().openapi({
      description: "Details about the domain's DMARC record.",
    }),
    verified_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time that the sending domain was verified.' }),
    valid_signing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this domain can be used to sign messages.' }),
    verify_txt_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key for the TXT record used to verify the domain.' }),
  })
  .openapi({
    description: 'A domain used for sending by the account, including verification status.',
    required: [],
  })
  .openapi('SendersSenderDomain')

const SendersAddDomainResponseSchema = SendersSenderDomainSchema.openapi('SendersAddDomainResponse')

const SendersCheckDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({ domain: z.hostname().max(255).openapi({ example: 'example.com' }) })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for checking a sender domain.' })
  .openapi('SendersCheckDomainRequest')

const SendersCheckDomainResponseSchema = SendersSenderDomainSchema.openapi(
  'SendersCheckDomainResponse',
)

const SendersDeleteDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .object({
        domain: z
          .hostname()
          .max(255)
          .openapi({ description: 'the domain name to delete', example: 'example.com' }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Request body for deleting a sender domain.' })
  .openapi('SendersDeleteDomainRequest')

const SendersDeleteDomainResponseSchema = SendersSenderDomainSchema.openapi(
  'SendersDeleteDomainResponse',
)

const SendersDomainsRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing sender domains',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('SendersDomainsRequest')

const SendersDomainsResponseSchema = z
  .array(SendersSenderDomainSchema)
  .openapi({
    description: 'Array of sender domain information for each sending domain used by the account',
  })
  .openapi('SendersDomainsResponse')

const SendersHourStatSchema = z
  .object({
    time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'UTC hour in YYYY-MM-DD HH:MM:SS', example: '2013-01-01 15:30:27' }),
    sent: z.int().exactOptional(),
    hard_bounces: z.int().exactOptional(),
    soft_bounces: z.int().exactOptional(),
    rejects: z.int().exactOptional(),
    complaints: z.int().exactOptional(),
    opens: z.int().exactOptional(),
    unique_opens: z.int().exactOptional(),
    clicks: z.int().exactOptional(),
    unique_clicks: z.int().exactOptional(),
  })
  .openapi({ description: 'Hourly stats row for a sender over the last 30 days.', required: [] })
  .openapi('SendersHourStat')

const SendersInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        address: z
          .email()
          .openapi({
            description: 'The email address of the sender',
            example: 'sender.example@mandrillapp.com',
          }),
      })
      .openapi({ required: ['address'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['address'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving detailed information about a single sender',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', address: 'sender.example@mandrillapp.com' },
  })
  .openapi('SendersInfoRequest')

const SendersInfoResponseSchema = SenderSchema.and(
  z
    .object({
      stats: z
        .object({
          today: StatsWindowSchema.exactOptional(),
          last_7_days: StatsWindowSchema.exactOptional(),
          last_30_days: StatsWindowSchema.exactOptional(),
          last_60_days: StatsWindowSchema.exactOptional(),
          last_90_days: StatsWindowSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({ required: [] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Detailed sender info including time-window stats.' })
  .openapi('SendersInfoResponse')

const SendersListRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing senders used by this account',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('SendersListRequest')

const SendersListResponseSchema = z
  .array(SenderSchema)
  .openapi({
    description: 'Array of sender information for each sending address used by the account',
  })
  .openapi('SendersListResponse')

const SendersTimeSeriesRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        address: z
          .email()
          .openapi({
            description: 'The email address of the sender',
            example: 'sender.example@mandrillapp.com',
          }),
      })
      .openapi({ required: ['address'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['address'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for retrieving hourly stats for a sender',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', address: 'sender.example@mandrillapp.com' },
  })
  .openapi('SendersTimeSeriesRequest')

const SendersTimeSeriesResponseSchema = z
  .array(SendersHourStatSchema)
  .openapi({ description: 'Array of hourly stats for a sender over the last 30 days' })
  .openapi('SendersTimeSeriesResponse')

const SendersVerifyDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'A domain name at which you can receive email',
            example: 'example.com',
          }),
        mailbox: z
          .string()
          .openapi({
            description: 'A mailbox at the domain where the verification email should be sent',
            example: 'postmaster',
          }),
      })
      .openapi({ required: ['domain', 'mailbox'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain', 'mailbox'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for sending a verification email to verify ownership of a domain',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'example.com', mailbox: 'postmaster' },
  })
  .openapi('SendersVerifyDomainRequest')

const SendersVerifyDomainResponseSchema = z
  .object({ status: z.enum(['sent', 'already_verified']), domain: z.hostname(), email: z.email() })
  .openapi({
    description: 'Result of a sender domain verification email request.',
    required: ['status', 'domain', 'email'],
    example: { status: 'sent', domain: 'example.com', email: 'postmaster@example.com' },
  })
  .openapi('SendersVerifyDomainResponse')

const SubaccountsAddRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .max(255)
          .openapi({
            description: 'A unique identifier for the subaccount to be used in sending calls',
            example: 'cust-123',
          }),
        name: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'An optional display name to further identify the subaccount',
            example: 'ABC Widgets, Inc.',
          }),
        notes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Optional extra text to associate with the subaccount',
            example: 'Free plan user, signed up on 2013-01-01 12:00:00',
          }),
        custom_quota: z
          .int()
          .min(1)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'An optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation',
            example: null,
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id', 'name', 'notes', 'custom_quota'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for creating a new subaccount',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      id: 'cust-123',
      name: 'ABC Widgets, Inc.',
      notes: 'Free plan user, signed up on 2013-01-01 12:00:00',
      custom_quota: null,
    },
  })
  .openapi('SubaccountsAddRequest')

const SubaccountsSubaccountSchema = z
  .object({
    id: z
      .string()
      .max(255)
      .openapi({ description: 'Unique identifier for the subaccount', example: '4532345' }),
    name: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Optional display name for the subaccount',
        example: 'My Subaccount',
      }),
    created_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({
        description: 'Date and time the subaccount was created in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:48:02.82578',
      }),
    first_sent_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date and time that the subaccount first sent as a UTC string in YYYY-MM-DD HH:MM:SS format',
        example: null,
      }),
    status: z
      .enum(['active', 'paused'])
      .openapi({ description: 'Current sending status of the subaccount', example: 'active' }),
    reputation: z
      .int()
      .max(100)
      .openapi({ description: 'Subaccount reputation on a scale from 0 to 100', example: 33 }),
    sent_weekly: z
      .int()
      .openapi({
        description:
          'Number of emails the subaccount has sent so far this week (weeks start on midnight Monday, UTC)',
        example: 0,
      }),
    sent_monthly: z
      .int()
      .openapi({
        description:
          'Number of emails the subaccount has sent so far this month (months start on midnight of the 1st, UTC)',
        example: 0,
      }),
    sent_total: z
      .int()
      .openapi({
        description: 'Number of emails the subaccount has sent since it was created',
        example: 0,
      }),
    custom_quota: z
      .int()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Optional manual hourly quota for the subaccount. Only present when explicitly set during creation/update',
      }),
  })
  .openapi({
    description:
      'Basic subaccount information returned by most operations (add, update, delete, pause, resume, list)',
    required: [
      'id',
      'status',
      'reputation',
      'created_at',
      'sent_weekly',
      'sent_monthly',
      'sent_total',
    ],
  })
  .openapi('SubaccountsSubaccount')

const SubaccountsAddResponseSchema = SubaccountsSubaccountSchema.openapi('SubaccountsAddResponse')

const SubaccountsDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of the subaccount to delete',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a subaccount',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: 'cust-123' },
  })
  .openapi('SubaccountsDeleteRequest')

const SubaccountsDeleteResponseSchema = SubaccountsSubaccountSchema.openapi(
  'SubaccountsDeleteResponse',
)

const SubaccountsInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of the subaccount to query',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for subaccount operations requiring only a subaccount ID',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: 'cust-123' },
  })
  .openapi('SubaccountsInfoRequest')

const SubaccountsInfoResponseSchema = SubaccountsSubaccountSchema.and(
  z
    .object({
      sent_hourly: z
        .int()
        .openapi({
          description: 'Number of emails the subaccount has sent in the last hour',
          example: 0,
        }),
      hourly_quota: z
        .int()
        .openapi({
          description: 'Current hourly quota for the subaccount, either manual or reputation-based',
          example: 250,
        }),
      notes: z
        .string()
        .openapi({
          description: 'Optional extra text to associate with the subaccount',
          example: '',
        }),
      last_30_days: StatsWindowSchema.openapi({
        description: 'Sending statistics for this subaccount in the last 30 days',
      }),
    })
    .openapi({ required: ['sent_hourly', 'hourly_quota', 'last_30_days', 'notes'] }),
)
  .openapi({
    description:
      'Complete subaccount information including sending statistics and configuration (returned by info endpoint)',
  })
  .openapi('SubaccountsInfoResponse')

const SubaccountsListRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        q: z
          .string()
          .exactOptional()
          .openapi({
            description: "An optional prefix to filter the subaccounts' ids and names",
            example: 'cust-1',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['q'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for listing subaccounts, optionally filtered by a prefix',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', q: 'cust-1' },
  })
  .openapi('SubaccountsListRequest')

const SubaccountsListResponseSchema = z
  .array(SubaccountsSubaccountSchema)
  .openapi({ description: 'List of subaccounts for the account, up to a maximum of 1,000' })
  .openapi('SubaccountsListResponse')

const SubaccountsPauseRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of the subaccount to pause',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for pausing a subaccount',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: 'cust-123' },
  })
  .openapi('SubaccountsPauseRequest')

const SubaccountsPauseResponseSchema = SubaccountsSubaccountSchema.openapi(
  'SubaccountsPauseResponse',
)

const SubaccountsResumeRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of the subaccount to resume',
            example: 'cust-123',
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for resuming a paused subaccount',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: 'cust-123' },
  })
  .openapi('SubaccountsResumeRequest')

const SubaccountsResumeResponseSchema = SubaccountsSubaccountSchema.openapi(
  'SubaccountsResumeResponse',
)

const SubaccountsUpdateRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        id: z
          .string()
          .openapi({
            description: 'The unique identifier of the subaccount to update',
            example: 'cust-123',
          }),
        name: z
          .string()
          .max(1024)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'An optional display name to further identify the subaccount',
            example: 'ABC Widgets, Inc.',
          }),
        notes: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Optional extra text to associate with the subaccount',
            example: 'Free plan user, signed up on 2013-01-01 12:00:00',
          }),
        custom_quota: z
          .int()
          .min(1)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'An optional manual hourly quota for the subaccount. If not specified, Mandrill will manage this based on reputation',
            example: null,
          }),
      })
      .openapi({ required: ['id'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['id', 'name', 'notes', 'custom_quota'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for updating an existing subaccount',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      id: 'cust-123',
      name: 'ABC Widgets, Inc.',
      notes: 'Free plan user, signed up on 2013-01-01 12:00:00',
      custom_quota: null,
    },
  })
  .openapi('SubaccountsUpdateRequest')

const SubaccountsUpdateResponseSchema = SubaccountsSubaccountSchema.openapi(
  'SubaccountsUpdateResponse',
)

const TagsAllTimeSeriesRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for retrieving time series data for all tags',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('TagsAllTimeSeriesRequest')

const TagsTagTimeSeriesSchema = z
  .strictObject({
    sent: z.int().openapi({ description: 'Number of emails sent during the hour' }),
    hard_bounces: z
      .int()
      .openapi({ description: 'Number of emails that hard bounced during the hour' }),
    soft_bounces: z
      .int()
      .openapi({ description: 'Number of emails that soft bounced during the hour' }),
    rejects: z.int().openapi({ description: 'Number of emails rejected during the hour' }),
    complaints: z
      .int()
      .openapi({ description: 'Number of spam complaints received during the hour' }),
    unsubs: z
      .int()
      .openapi({ description: 'Number of unsubscribe requests received during the hour' }),
    opens: z.int().openapi({ description: 'Number of emails opened during the hour' }),
    unique_opens: z
      .int()
      .openapi({
        description: 'Number of unique opens generated by messages sent during the hour',
      }),
    clicks: z.int().openapi({ description: 'Number of tracked URLs clicked during the hour' }),
    unique_clicks: z
      .int()
      .openapi({
        description: 'Number of unique clicks generated by messages sent during the hour',
      }),
    time: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .openapi({
        description: 'The hour as a UTC date string in YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 15:00:00',
      }),
  })
  .openapi({
    description: 'Hourly statistics for a tag in a specific time period',
    required: [
      'sent',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'unsubs',
      'opens',
      'clicks',
      'unique_opens',
      'unique_clicks',
      'time',
    ],
  })
  .openapi('TagsTagTimeSeries')

const TagsTimeSeriesWithTagSchema = (() => {
  const Schema = TagsTagTimeSeriesSchema.and(z.looseObject({}).openapi({ required: ['tag'] })).and(
    z
      .object({
        tag: z
          .string()
          .exactOptional()
          .openapi({ description: 'Tag name for this time series entry', example: 'test' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (
          ![
            'sent',
            'hard_bounces',
            'soft_bounces',
            'rejects',
            'complaints',
            'unsubs',
            'opens',
            'unique_opens',
            'clicks',
            'unique_clicks',
            'time',
          ].includes(k)
        ) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Hourly statistics for a tag in a specific time period, including the tag name',
  })
  .openapi('TagsTimeSeriesWithTag')

const TagsAllTimeSeriesResponseSchema = z
  .array(TagsTimeSeriesWithTagSchema)
  .openapi({ description: 'Array of hourly stats across all tags for the last 30 days' })
  .openapi('TagsAllTimeSeriesResponse')

const TagsDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.strictObject({}).openapi({ required: ['tag'] })).and(
    z
      .object({
        tag: z
          .string()
          .exactOptional()
          .openapi({ description: 'An existing tag name', example: 'example-tag' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        ctx.issues.push({ code: 'custom', path: [k], input: o })
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a tag',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', tag: 'example-tag' },
  })
  .openapi('TagsDeleteRequest')

const TagsDeleteResponseSchema = z
  .strictObject({
    tag: z
      .string()
      .openapi({ description: 'The name of the tag that was deleted', example: 'example-tag' }),
    sent: z
      .int()
      .openapi({ description: 'Total number of emails sent with this tag before deletion' }),
    hard_bounces: z
      .int()
      .openapi({
        description: 'Total number of hard bounces for emails with this tag before deletion',
      }),
    soft_bounces: z
      .int()
      .openapi({
        description: 'Total number of soft bounces for emails with this tag before deletion',
      }),
    rejects: z
      .int()
      .openapi({ description: 'Total number of rejected emails with this tag before deletion' }),
    complaints: z
      .int()
      .openapi({
        description: 'Total number of spam complaints for emails with this tag before deletion',
      }),
    unsubs: z
      .int()
      .openapi({
        description:
          'Total number of unsubscribe requests for emails with this tag before deletion',
      }),
    opens: z
      .int()
      .openapi({
        description: 'Total number of times emails with this tag were opened before deletion',
      }),
    clicks: z
      .int()
      .openapi({
        description: 'Total number of tracked URLs clicked in emails with this tag before deletion',
      }),
    unique_opens: z
      .int()
      .openapi({
        description: 'Total number of unique opens for emails with this tag before deletion',
      }),
    unique_clicks: z
      .int()
      .openapi({
        description: 'Total number of unique clicks for emails with this tag before deletion',
      }),
    reputation: z
      .int()
      .min(0)
      .max(100)
      .openapi({ description: 'Final reputation score of the tag before deletion' }),
  })
  .openapi({
    description:
      'Response containing information about a deleted tag including its final statistics',
    required: [
      'tag',
      'sent',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'unsubs',
      'opens',
      'clicks',
      'unique_opens',
      'unique_clicks',
      'reputation',
    ],
  })
  .openapi('TagsDeleteResponse')

const TagsInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.strictObject({}).openapi({ required: ['tag'] })).and(
    z
      .object({
        tag: z
          .string()
          .exactOptional()
          .openapi({ description: 'An existing tag name', example: 'example-tag' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        ctx.issues.push({ code: 'custom', path: [k], input: o })
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting tag info',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', tag: 'example-tag' },
  })
  .openapi('TagsInfoRequest')

const TagsInfoResponseSchema = z
  .strictObject({
    tag: z.string().openapi({ description: 'Tag name', example: 'test' }),
    sent: z.int().openapi({ description: 'Total number of emails sent with this tag' }),
    hard_bounces: z
      .int()
      .openapi({ description: 'Total number of hard bounces for emails with this tag' }),
    soft_bounces: z
      .int()
      .openapi({ description: 'Total number of soft bounces for emails with this tag' }),
    rejects: z.int().openapi({ description: 'Total number of rejected emails with this tag' }),
    complaints: z
      .int()
      .openapi({ description: 'Total number of spam complaints for emails with this tag' }),
    unsubs: z
      .int()
      .openapi({ description: 'Total number of unsubscribe requests for emails with this tag' }),
    opens: z
      .int()
      .openapi({ description: 'Total number of times emails with this tag have been opened' }),
    clicks: z
      .int()
      .openapi({ description: 'Total number of tracked URLs clicked in emails with this tag' }),
    unique_opens: z
      .int()
      .openapi({ description: 'Total number of unique opens for emails with this tag' }),
    unique_clicks: z
      .int()
      .openapi({ description: 'Total number of unique clicks for emails with this tag' }),
    reputation: z
      .int()
      .min(0)
      .max(100)
      .openapi({ description: 'Tag reputation score on scale 0-100' }),
    stats: z
      .object({
        today: StatsWindowSchema,
        last_7_days: StatsWindowSchema,
        last_30_days: StatsWindowSchema,
        last_60_days: StatsWindowSchema,
        last_90_days: StatsWindowSchema,
      })
      .openapi({
        description: "Aggregate summary of the tag's sending stats across different time windows",
        required: ['today', 'last_7_days', 'last_30_days', 'last_60_days', 'last_90_days'],
      }),
  })
  .openapi({
    description:
      'Detailed tag information including aggregate statistics across different time windows',
    required: [
      'tag',
      'sent',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'unsubs',
      'opens',
      'clicks',
      'unique_opens',
      'unique_clicks',
      'reputation',
      'stats',
    ],
  })
  .openapi('TagsInfoResponse')

const TagsListRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing all user-defined tags',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('TagsListRequest')

const TagsTagSchema = z
  .strictObject({
    user_id: z.int().openapi({ description: 'User ID associated with this tag' }),
    tag: z.string().openapi({ description: 'Tag name', example: 'test' }),
    sent: z.int().openapi({ description: 'Total number of emails sent with this tag' }),
    hard_bounces: z
      .int()
      .openapi({ description: 'Total number of hard bounces for emails with this tag' }),
    soft_bounces: z
      .int()
      .openapi({ description: 'Total number of soft bounces for emails with this tag' }),
    rejects: z.int().openapi({ description: 'Total number of rejected emails with this tag' }),
    complaints: z
      .int()
      .openapi({ description: 'Total number of spam complaints for emails with this tag' }),
    unsubs: z
      .int()
      .openapi({ description: 'Total number of unsubscribe requests for emails with this tag' }),
    opens: z
      .int()
      .openapi({ description: 'Total number of times emails with this tag have been opened' }),
    clicks: z
      .int()
      .openapi({ description: 'Total number of tracked URLs clicked in emails with this tag' }),
    content_reviews: z.int().openapi({ description: 'Number of content reviews for this tag' }),
    content_rejections: z
      .int()
      .openapi({ description: 'Number of content rejections for this tag' }),
    reject_resets: z.int().openapi({ description: 'Number of reject resets for this tag' }),
    unique_opens: z
      .int()
      .openapi({ description: 'Total number of unique opens for emails with this tag' }),
    unique_clicks: z
      .int()
      .openapi({ description: 'Total number of unique clicks for emails with this tag' }),
    reputation: z
      .int()
      .min(0)
      .max(100)
      .openapi({ description: 'Tag reputation score on scale 0-100' }),
    confidence: z.int().min(0).max(100).openapi({ description: 'Confidence score for this tag' }),
  })
  .openapi({
    description: 'Tag information including sending statistics and reputation metrics',
    required: [
      'user_id',
      'tag',
      'sent',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'unsubs',
      'opens',
      'clicks',
      'content_reviews',
      'content_rejections',
      'reject_resets',
      'unique_opens',
      'unique_clicks',
      'reputation',
      'confidence',
    ],
  })
  .openapi('TagsTag')

const TagsListResponseSchema = z
  .array(TagsTagSchema)
  .openapi({ description: 'Array of tags used in the account' })
  .openapi('TagsListResponse')

const TagsTimeSeriesRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.strictObject({}).openapi({ required: ['tag'] })).and(
    z
      .object({
        tag: z
          .string()
          .exactOptional()
          .openapi({ description: 'An existing tag name', example: 'example-tag' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        ctx.issues.push({ code: 'custom', path: [k], input: o })
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting tag time series data',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', tag: 'example-tag' },
  })
  .openapi('TagsTimeSeriesRequest')

const TagsTimeSeriesResponseSchema = z
  .array(TagsTagTimeSeriesSchema)
  .openapi({ description: 'Array of hourly stats for the last 30 days for a tag' })
  .openapi('TagsTimeSeriesResponse')

const TemplatesAddRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .openapi({
            description: 'Name for the new template - must be unique',
            example: 'Example Template',
          }),
        from_email: z
          .email()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Default sending address for emails sent using this template',
            example: 'sender@example.com',
          }),
        from_name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Default from name to be used', example: 'Example Name' }),
        subject: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Default subject line to be used',
            example: 'Welcome to our service',
          }),
        code: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'HTML code for the template with mc:edit attributes for editable elements',
            example: '<div>example code</div>',
          }),
        text: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Default text part to be used when sending with this template',
            example: 'Example text content',
          }),
        publish: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description: 'Set to false to add a draft template without publishing',
            example: false,
          }),
        labels: z
          .array(z.string().max(100))
          .max(10)
          .exactOptional()
          .openapi({
            description: 'Optional array of up to 10 labels to use for filtering templates',
            example: ['example-label'],
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (
          ![
            'name',
            'from_email',
            'from_name',
            'subject',
            'code',
            'text',
            'publish',
            'labels',
          ].includes(k)
        ) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding a new template',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      name: 'Example Template',
      from_email: 'sender@example.com',
      from_name: 'Example Name',
      subject: 'Welcome to our service',
      code: '<div>example code</div>',
      text: 'Example text content',
      publish: true,
      labels: ['example-label'],
    },
  })
  .openapi('TemplatesAddRequest')

const TemplatesTemplateSchema = z
  .object({
    slug: z
      .string()
      .openapi({
        description: 'Immutable unique identifier for the template',
        example: 'test-template',
      }),
    name: z
      .string()
      .openapi({ description: 'Human-readable name of the template', example: 'test-template' }),
    labels: z
      .array(z.string().max(100))
      .max(10)
      .openapi({ description: 'Array of labels for filtering templates', example: [] }),
    code: z
      .string()
      .nullable()
      .openapi({
        description: 'Draft HTML code for the template with mc:edit attributes',
        example: '<p>test</p>',
      }),
    subject: z
      .string()
      .nullable()
      .openapi({ description: 'Draft default subject line', example: 'test' }),
    from_email: z
      .email()
      .nullable()
      .openapi({ description: 'Draft default sending address', example: 'test@mailchimp.com' }),
    from_name: z
      .string()
      .nullable()
      .openapi({ description: 'Draft default from name', example: 'Freddie' }),
    text: z
      .string()
      .nullable()
      .openapi({ description: 'Draft default text part', example: 'test' }),
    publish_name: z
      .string()
      .openapi({ description: 'Published name of the template', example: 'test-template' }),
    publish_code: z
      .string()
      .nullable()
      .openapi({ description: 'Published HTML code for the template', example: '<p>test</p>' }),
    publish_subject: z
      .string()
      .nullable()
      .openapi({ description: 'Published default subject line', example: 'test' }),
    publish_from_email: z
      .email()
      .nullable()
      .openapi({ description: 'Published default sending address', example: 'test@mailchimp.com' }),
    publish_from_name: z
      .string()
      .nullable()
      .openapi({ description: 'Published default from name', example: 'Freddie' }),
    publish_text: z
      .string()
      .nullable()
      .openapi({ description: 'Published default text part', example: 'test' }),
    published_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .openapi({
        description:
          'Date and time when template was last published in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date and time when template was created in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40.26276',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time when template was last updated in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40.26277',
      }),
    draft_updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time when template draft was last updated in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2025-08-29 18:47:40',
      }),
    is_broken_template: z
      .boolean()
      .openapi({
        description: 'Whether the template has broken syntax or references',
        example: false,
      }),
  })
  .openapi({
    description: 'Template information including content, metadata, and settings',
    required: [
      'slug',
      'name',
      'labels',
      'code',
      'subject',
      'from_email',
      'from_name',
      'text',
      'publish_name',
      'publish_code',
      'publish_subject',
      'publish_from_email',
      'publish_from_name',
      'publish_text',
      'published_at',
      'created_at',
      'updated_at',
      'draft_updated_at',
      'is_broken_template',
    ],
  })
  .openapi('TemplatesTemplate')

const TemplatesAddResponseSchema = TemplatesTemplateSchema.openapi('TemplatesAddResponse')

const TemplatesDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .openapi({
            description: 'Immutable slug of an existing template',
            example: 'example-template',
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a template',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', name: 'example-template' },
  })
  .openapi('TemplatesDeleteRequest')

const TemplatesDeleteResponseSchema = TemplatesTemplateSchema.openapi('TemplatesDeleteResponse')

const TemplatesInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .openapi({
            description: 'Immutable name of an existing template',
            example: 'Example Template',
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting template information',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', name: 'Example Template' },
  })
  .openapi('TemplatesInfoRequest')

const TemplatesInfoResponseSchema = TemplatesTemplateSchema.openapi('TemplatesInfoResponse')

const TemplatesListRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        label: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Optional label to filter the templates',
            example: 'example-label',
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['label'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for listing templates',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', label: 'example-label' },
  })
  .openapi('TemplatesListRequest')

const TemplatesListResponseSchema = z
  .array(TemplatesTemplateSchema)
  .openapi({ description: 'Array of templates available to the account' })
  .openapi('TemplatesListResponse')

const TemplatesPublishRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .openapi({
            description: 'Immutable name of an existing template',
            example: 'Example Template',
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for publishing a template',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', name: 'Example Template' },
  })
  .openapi('TemplatesPublishRequest')

const TemplatesPublishResponseSchema = TemplatesTemplateSchema.openapi('TemplatesPublishResponse')

const TemplateContentSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the mc:edit editable region to inject into',
        example: 'editable',
      }),
    content: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Content to inject into the editable region', example: 'content' }),
  })
  .openapi({
    description:
      'Content injection for template editable regions. Fields are optional to allow empty objects.',
    required: [],
  })
  .openapi('TemplateContent')

const TemplatesRenderRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        template_name: z
          .string()
          .openapi({
            description: "Immutable name or slug of a template that exists in the user's account",
            example: 'example-template',
          }),
        template_content: z
          .array(TemplateContentSchema)
          .openapi({ description: 'Array of template content to render' }),
        merge_vars: z
          .array(MergeVarSchema)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Optional merge variables to use for injecting merge field content',
          }),
      })
      .openapi({ required: ['template_name', 'template_content'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['template_name', 'template_content', 'merge_vars'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for rendering a template with content and merge variables',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      template_name: 'example-template',
      template_content: [{ name: 'editable', content: 'content' }],
      merge_vars: [{ name: 'merge1', content: 'merge1 content' }],
    },
  })
  .openapi('TemplatesRenderRequest')

const TemplatesRenderResponseSchema = z
  .object({
    html: z
      .string()
      .openapi({
        description: 'Rendered HTML as a string with content and merge variables injected',
        example: '<div>Rendered template content with merge variables</div>',
      }),
  })
  .openapi({
    description: 'Result of rendering a template with content and merge variables',
    required: ['html'],
  })
  .openapi('TemplatesRenderResponse')

const TemplatesTemplateHistorySchema = z
  .object({
    time: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Hour as a UTC date string in YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-01 15:00:00',
      }),
    sent: z
      .int()
      .min(0)
      .openapi({ description: 'Number of emails sent during the hour', example: 42 }),
    hard_bounces: z
      .int()
      .min(0)
      .openapi({ description: 'Number of emails that hard bounced during the hour', example: 1 }),
    soft_bounces: z
      .int()
      .min(0)
      .openapi({ description: 'Number of emails that soft bounced during the hour', example: 2 }),
    rejects: z
      .int()
      .min(0)
      .openapi({ description: 'Number of emails that were rejected during the hour', example: 0 }),
    complaints: z
      .int()
      .min(0)
      .openapi({ description: 'Number of spam complaints received during the hour', example: 0 }),
    opens: z
      .int()
      .min(0)
      .openapi({ description: 'Number of emails opened during the hour', example: 15 }),
    unique_opens: z
      .int()
      .min(0)
      .openapi({
        description: 'Number of unique opens generated by messages sent during the hour',
        example: 12,
      }),
    clicks: z
      .int()
      .min(0)
      .openapi({ description: 'Number of tracked URLs clicked during the hour', example: 8 }),
    unique_clicks: z
      .int()
      .min(0)
      .openapi({
        description: 'Number of unique clicks generated by messages sent during the hour',
        example: 5,
      }),
  })
  .openapi({
    description: 'Hourly statistics for template usage',
    required: [
      'time',
      'sent',
      'hard_bounces',
      'soft_bounces',
      'rejects',
      'complaints',
      'opens',
      'unique_opens',
      'clicks',
      'unique_clicks',
    ],
  })
  .openapi('TemplatesTemplateHistory')

const TemplatesTimeSeriesRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .openapi({ description: 'Name of an existing template', example: 'Example Template' }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['name'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting template time series data',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', name: 'Example Template' },
  })
  .openapi('TemplatesTimeSeriesRequest')

const TemplatesTimeSeriesResponseSchema = z
  .array(TemplatesTemplateHistorySchema)
  .openapi({ description: 'Array of hourly stats for the last 30 days for a template' })
  .openapi('TemplatesTimeSeriesResponse')

const TemplatesUpdateRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        name: z
          .string()
          .openapi({
            description: 'Immutable name of an existing template',
            example: 'Example Template',
          }),
        from_email: z
          .email()
          .nullable()
          .exactOptional()
          .openapi({ description: 'New default sending address', example: 'sender@example.com' }),
        from_name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'New default from name', example: 'Example Name' }),
        subject: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'New default subject line', example: 'Welcome to our service' }),
        code: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'New code for the template',
            example: '<div>new example code</div>',
          }),
        text: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'New default text part to be used',
            example: 'Example text content',
          }),
        publish: z
          .boolean()
          .default(true)
          .exactOptional()
          .openapi({
            description: 'Set to false to update the draft version without publishing',
            example: false,
          }),
        labels: z
          .array(z.string().max(100))
          .max(10)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Optional array of up to 10 labels to use for filtering templates',
            example: ['example-label'],
          }),
      })
      .openapi({ required: ['name'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (
          ![
            'name',
            'from_email',
            'from_name',
            'subject',
            'code',
            'text',
            'publish',
            'labels',
          ].includes(k)
        ) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for updating an existing template',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      name: 'Example Template',
      from_email: 'sender@example.com',
      from_name: 'Example Name',
      subject: 'Welcome to our service',
      code: '<div>new example code</div>',
      text: 'Example text content',
      publish: true,
      labels: ['example-label'],
    },
  })
  .openapi('TemplatesUpdateRequest')

const TemplatesUpdateResponseSchema = TemplatesTemplateSchema.openapi('TemplatesUpdateResponse')

const UrlsAddTrackingDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'A domain name to add for tracking',
            example: 'track.example.com',
          }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for adding a tracking domain to your account',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'track.example.com' },
  })
  .openapi('UrlsAddTrackingDomainRequest')

const TrackingDomainSchema = z
  .object({
    domain: z
      .hostname()
      .openapi({ description: 'The tracking domain name', example: 'track.example.com' }),
    created_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+$/)
      .openapi({
        description: 'When the domain was added to the account',
        example: '2025-08-15 17:01:12.34214',
      }),
    last_tested_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+$/)
      .openapi({
        description: 'When the domain was last tested for CNAME configuration',
        example: '2025-08-15 17:01:12.39638',
      }),
    cname: z
      .object({
        valid: z
          .boolean()
          .openapi({
            description: 'Whether the CNAME record is properly configured',
            example: false,
          }),
        valid_after: z
          .string()
          .nullable()
          .openapi({ description: 'When the CNAME will be valid (if applicable)', example: null }),
        error: z
          .string()
          .nullable()
          .openapi({
            description: 'An error describing the CNAME record, or null if the record is correct',
          }),
      })
      .openapi({
        description: 'CNAME record verification status and details',
        required: ['valid', 'valid_after', 'error'],
      }),
    valid_tracking: z
      .boolean()
      .openapi({
        description: 'Whether this domain is ready to be used for tracking',
        example: false,
      }),
  })
  .openapi({
    description: 'Tracking domain configuration and verification status',
    required: ['domain', 'created_at', 'last_tested_at', 'cname', 'valid_tracking'],
  })
  .openapi('TrackingDomain')

const UrlsAddTrackingDomainResponseSchema = TrackingDomainSchema.openapi(
  'UrlsAddTrackingDomainResponse',
)

const UrlsCheckTrackingDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'An existing tracking domain name',
            example: 'track.example.com',
          }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for checking the CNAME settings for a tracking domain',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'track.example.com' },
  })
  .openapi('UrlsCheckTrackingDomainRequest')

const UrlsCheckTrackingDomainResponseSchema = TrackingDomainSchema.openapi(
  'UrlsCheckTrackingDomainResponse',
)

const UrlsDeleteTrackingDomainRequestSchema = (() => {
  const Schema = ApiKeySchema.and(
    z
      .strictObject({
        domain: z
          .hostname()
          .openapi({
            description: 'An existing tracking domain name',
            example: 'track.example.com',
          }),
      })
      .openapi({ required: ['domain'] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['domain'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a tracking domain from your account',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', domain: 'track.example.com' },
  })
  .openapi('UrlsDeleteTrackingDomainRequest')

const UrlsDeleteTrackingDomainResponseSchema = TrackingDomainSchema.openapi(
  'UrlsDeleteTrackingDomainResponse',
)

const UrlsTrackingDomainsRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing tracking domains',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('UrlsTrackingDomainsRequest')

const UrlsTrackingDomainsResponseSchema = z
  .array(TrackingDomainSchema)
  .openapi({ description: 'Array of tracking domains and their status' })
  .openapi('UrlsTrackingDomainsResponse')

const UsersInfoRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for retrieving user account information',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('UsersInfoRequest')

const UsersInfoResponseSchema = z
  .object({
    username: z.string().openapi({ description: 'Username for SMTP authentication' }),
    created_at: z
      .string()
      .openapi({
        description: 'Account creation date in UTC YYYY-MM-DD HH:MM:SS format',
        example: '2013-01-01 15:30:27',
      }),
    public_id: z.string().openapi({ description: 'Unique permanent identifier for this user' }),
    reputation: z
      .int()
      .min(0)
      .max(100)
      .openapi({ description: 'User reputation on scale 0-100, 75+ is generally good' }),
    hourly_quota: z
      .int()
      .openapi({
        description:
          'Maximum emails delivered per hour. Any emails beyond that will be accepted and queued for later delivery. Users with higher reputations will have higher hourly quotas',
      }),
    backlog: z.int().openapi({ description: 'Number of emails queued due to quota limits' }),
    stats: z
      .object({
        today: StatsWindowSchema,
        last_7_days: StatsWindowSchema,
        last_30_days: StatsWindowSchema,
        last_60_days: StatsWindowSchema,
        last_90_days: StatsWindowSchema,
        all_time: StatsWindowSchema,
      })
      .openapi({
        description: 'Aggregate sending statistics across different time windows',
        required: [
          'today',
          'last_7_days',
          'last_30_days',
          'last_60_days',
          'last_90_days',
          'all_time',
        ],
      }),
  })
  .openapi({
    description: 'Authenticated user account information including sending stats',
    required: [
      'username',
      'created_at',
      'public_id',
      'reputation',
      'hourly_quota',
      'backlog',
      'stats',
    ],
  })
  .openapi('UsersInfoResponse')

const UsersPing2RequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for validating an API key with a ping (strict JSON parser version)',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('UsersPing2Request')

const UsersPing2ResponseSchema = z
  .unknown()
  .superRefine((val, ctx) => {
    if (JSON.stringify({ PING: 'PONG!' }) !== JSON.stringify(val)) {
      ctx.addIssue({ code: 'custom' })
    }
  })
  .openapi({ description: 'Static JSON payload with PING: PONG!' })
  .openapi('UsersPing2Response')

const UsersPingRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for validating an API key with a ping',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('UsersPingRequest')

const UsersPingResponseSchema = z
  .literal('PONG!')
  .openapi({ description: "The string 'PONG!'" })
  .openapi('UsersPingResponse')

const UsersSendersRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for retrieving senders associated with this account',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('UsersSendersRequest')

const UsersSendersResponseSchema = z
  .array(SenderSchema)
  .openapi({
    description: 'Array of sender information for each sending address used by the account',
  })
  .openapi('UsersSendersResponse')

const WebhooksAddRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.looseObject({}).openapi({ required: ['url'] })).and(
    z
      .object({
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL to POST batches of events' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'An optional description of the webhook' }),
        events: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'Optional list of event types that will trigger the webhook',
            example: [
              'send',
              'delivered',
              'hard_bounce',
              'soft_bounce',
              'open',
              'click',
              'spam',
              'unsub',
              'reject',
            ],
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for creating a new webhook.',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      url: 'https://example.com/webhook',
      description: 'My webhook for tracking email events',
      events: [
        'send',
        'delivered',
        'hard_bounce',
        'soft_bounce',
        'open',
        'click',
        'spam',
        'unsub',
        'reject',
      ],
    },
  })
  .openapi('WebhooksAddRequest')

const WebhookSchema = z
  .object({
    id: z.int().openapi({ description: 'Unique identifier for the webhook' }),
    url: z.url().openapi({ description: 'The URL where webhook events will be posted' }),
    auth_key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The key used for webhook authentication',
        example: 'gplJ8yWptFTqCoq5S1SHPA',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional description of the webhook' }),
    events: z
      .array(z.string())
      .openapi({
        description: 'Array of event types that will trigger the webhook',
        example: [
          'send',
          'delivered',
          'deferral',
          'hard_bounce',
          'soft_bounce',
          'open',
          'click',
          'spam',
          'unsub',
          'reject',
          'blacklist',
          'whitelist',
        ],
      }),
    created_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d+$/)
      .openapi({
        description: 'When the webhook was created (UTC YYYY-MM-DD HH:MM:SS.microseconds)',
      }),
    last_sent_at: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'When the last event was sent to this webhook (UTC YYYY-MM-DD HH:MM:SS)',
      }),
    batches_sent: z.int().openapi({ description: 'Number of batches sent to this webhook' }),
    events_sent: z.int().openapi({ description: 'Total number of events sent to this webhook' }),
    last_error: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Last error message received when attempting to call the webhook' }),
  })
  .openapi({
    description: 'Webhook configuration for receiving event notifications.',
    required: ['id', 'url', 'created_at', 'batches_sent', 'events_sent', 'events'],
    example: {
      id: 12345,
      url: 'https://example.com/webhook',
      description: 'Webhook for tracking email events',
      auth_key: 'gplJ8yWptFTqCoq5S1SHPA',
      events: [
        'send',
        'delivered',
        'deferral',
        'hard_bounce',
        'soft_bounce',
        'open',
        'click',
        'spam',
        'unsub',
        'reject',
        'blacklist',
        'whitelist',
      ],
      created_at: '2013-01-01 15:30:27.123456',
      last_sent_at: '2013-01-01 15:30:49',
      batches_sent: 42,
      events_sent: 1365,
      last_error: null,
    },
  })
  .openapi('Webhook')

const WebhooksAddResponseSchema = WebhookSchema.openapi('WebhooksAddResponse')

const WebhooksDeleteRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.looseObject({}).openapi({ required: ['id'] })).and(
    z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'The unique identifier of a webhook belonging to this account' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for deleting a webhook.',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: 12345 },
  })
  .openapi('WebhooksDeleteRequest')

const WebhooksDeleteResponseSchema = WebhookSchema.openapi('WebhooksDeleteResponse')

const WebhooksInfoRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.looseObject({}).openapi({ required: ['id'] })).and(
    z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'The unique identifier of a webhook belonging to this account' }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for getting webhook info.',
    example: { key: 'ONzNrsmbtNXoIKyfPmjnig', id: 12345 },
  })
  .openapi('WebhooksInfoRequest')

const WebhooksInfoResponseSchema = WebhookSchema.openapi('WebhooksInfoResponse')

const WebhooksListRequestSchema = ApiKeySchema.openapi({
  description: 'Request payload for listing all webhooks',
  example: { key: 'ONzNrsmbtNXoIKyfPmjnig' },
}).openapi('WebhooksListRequest')

const WebhooksListResponseSchema = z
  .array(WebhookSchema)
  .openapi({ description: 'Array of webhooks configured for the account' })
  .openapi('WebhooksListResponse')

const WebhooksUpdateRequestSchema = (() => {
  const Schema = ApiKeySchema.and(z.looseObject({}).openapi({ required: ['id', 'url'] })).and(
    z
      .object({
        id: z
          .int()
          .exactOptional()
          .openapi({ description: 'The unique identifier of a webhook belonging to this account' }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL to POST batches of events' }),
        description: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'An optional description of the webhook' }),
        events: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'Optional list of event types that will trigger the webhook',
            example: [
              'send',
              'delivered',
              'hard_bounce',
              'soft_bounce',
              'open',
              'click',
              'spam',
              'unsub',
              'reject',
            ],
          }),
      })
      .openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['key'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({
    description: 'Request payload for updating an existing webhook.',
    example: {
      key: 'ONzNrsmbtNXoIKyfPmjnig',
      id: 12345,
      url: 'https://example.com/webhook',
      description: 'Updated webhook description',
      events: [
        'send',
        'delivered',
        'hard_bounce',
        'soft_bounce',
        'open',
        'click',
        'spam',
        'unsub',
        'reject',
      ],
    },
  })
  .openapi('WebhooksUpdateRequest')

const WebhooksUpdateResponseSchema = WebhookSchema.openapi('WebhooksUpdateResponse')

const ExportNotFoundResponse = {
  description: 'Unknown export job',
  content: { 'application/json': { schema: ExportNotFoundErrorSchema } },
}

const IPInvalidCustomDnsResponse = {
  description: 'Invalid custom DNS configuration',
  content: { 'application/json': { schema: IPInvalidCustomDnsErrorSchema } },
}

const IPInvalidDeletePoolResponse = {
  description: 'Cannot delete default pool or non-empty pool',
  content: { 'application/json': { schema: IPInvalidDeletePoolErrorSchema } },
}

const IPInvalidEmptyDefaultPoolResponse = {
  description: 'Cannot leave default pool empty',
  content: { 'application/json': { schema: IPInvalidEmptyDefaultPoolErrorSchema } },
}

const IPNotFoundResponse = {
  description: 'Unknown dedicated IP',
  content: { 'application/json': { schema: IPNotFoundErrorSchema } },
}

const IPOrPoolNotFoundResponse = {
  description: 'Unknown IP or pool',
  content: { 'application/json': { schema: IPOrPoolNotFoundErrorSchema } },
}

const IPPoolNotFoundResponse = {
  description: 'Unknown IP pool',
  content: { 'application/json': { schema: IPPoolNotFoundErrorSchema } },
}

const InboundDomainNotFoundResponse = {
  description: 'Unknown inbound domain',
  content: { 'application/json': { schema: InboundDomainNotFoundErrorSchema } },
}

const InboundRouteNotFoundResponse = {
  description: 'Unknown inbound route',
  content: { 'application/json': { schema: InboundRouteNotFoundErrorSchema } },
}

const UnauthorizedResponse = {
  description: 'Invalid or missing API key.',
  content: { 'application/json': { schema: InvalidKeyErrorSchema } },
}

const MctemplateInvalidVersionResponse = {
  description: 'Invalid mc_template_version parameter',
  content: { 'application/json': { schema: MctemplateInvalidVersionErrorSchema } },
}

const MctemplateNotFoundResponse = {
  description: 'Mailchimp template not found',
  content: { 'application/json': { schema: MctemplateNotFoundErrorSchema } },
}

const MessageNotFoundResponse = {
  description: 'Message not found',
  content: { 'application/json': { schema: MessageNotFoundErrorSchema } },
}

const MessageServiceUnavailableResponse = {
  description: 'Service unavailable',
  content: { 'application/json': { schema: MessageServiceUnavailableErrorSchema } },
}

const MessageSmsSubaccountNotFoundResponse = {
  description: 'Unknown subaccount for SMS message',
  content: { 'application/json': { schema: MessageSmsSubaccountNotFoundErrorSchema } },
}

const MessageSubaccountNotFoundResponse = {
  description: 'Unknown subaccount',
  content: { 'application/json': { schema: MessageSubaccountNotFoundErrorSchema } },
}

const MessageTemplateOrSubaccountNotFoundResponse = {
  description: 'Template or subaccount not found',
  content: {
    'application/json': {
      schema: z.xor([
        ErrorSchema.openapi({ description: 'Unknown_Template: Template not found' }),
        ErrorSchema.openapi({ description: 'Unknown_Subaccount: Subaccount not found' }),
      ]),
    },
  },
}

const MetadataNotFoundResponse = {
  description: 'Unknown metadata field',
  content: { 'application/json': { schema: MetadataNotFoundErrorSchema } },
}

const PaymentRequiredResponse = {
  description: 'A paid plan is required to use this feature.',
  content: { 'application/json': { schema: PaymentRequiredErrorSchema } },
}

const RejectEmailNotFoundResponse = {
  description: 'Email not found in rejection list or unknown subaccount',
  content: { 'application/json': { schema: RejectEmailNotFoundErrorSchema } },
}

const RejectPhoneNotFoundResponse = {
  description: 'Phone number not found in rejection list or unknown subaccount',
  content: { 'application/json': { schema: RejectPhoneNotFoundErrorSchema } },
}

const RejectSubaccountNotFoundResponse = {
  description: 'Unknown subaccount',
  content: { 'application/json': { schema: RejectSubaccountNotFoundErrorSchema } },
}

const RateLimitedResponse = {
  description: 'Request rate limit exceeded. Retry after a brief delay.',
  content: { 'application/json': { schema: RequestLimitExceededErrorSchema } },
}

const SenderCannotDeleteVerifiedResponse = {
  description: 'Cannot delete verified sender domain — please login to confirm deletion',
  content: { 'application/json': { schema: SenderCannotDeleteVerifiedErrorSchema } },
}

const SenderDomainNotFoundResponse = {
  description: 'Unknown sender domain',
  content: { 'application/json': { schema: SenderDomainNotFoundErrorSchema } },
}

const SenderNotFoundResponse = {
  description: 'Unknown sender',
  content: { 'application/json': { schema: SenderNotFoundErrorSchema } },
}

const ServerErrorResponse = {
  description: 'An unexpected internal server error occurred.',
  content: { 'application/json': { schema: ServerErrorSchema } },
}

const SubaccountNotFoundResponse = {
  description: 'Unknown subaccount',
  content: { 'application/json': { schema: SubaccountNotFoundErrorSchema } },
}

const TagInvalidNameResponse = {
  description: 'Invalid tag name',
  content: { 'application/json': { schema: TagInvalidNameErrorSchema } },
}

const TemplateInvalidDataResponse = {
  description: 'Invalid template data',
  content: { 'application/json': { schema: TemplateInvalidDataErrorSchema } },
}

const TemplateNotFoundResponse = {
  description: 'Template not found',
  content: { 'application/json': { schema: TemplateNotFoundErrorSchema } },
}

const UrlCannotDeleteVerifiedResponse = {
  description: 'Cannot delete verified tracking domain — please login to confirm deletion',
  content: { 'application/json': { schema: UrlCannotDeleteVerifiedErrorSchema } },
}

const UrlInvalidDomainResponse = {
  description: 'Invalid tracking domain',
  content: { 'application/json': { schema: UrlInvalidDomainErrorSchema } },
}

const UrlNotFoundResponse = {
  description: 'Unknown tracking domain',
  content: { 'application/json': { schema: UrlNotFoundErrorSchema } },
}

const ValidationErrorResponse = {
  description: 'One or more request parameters failed validation.',
  content: { 'application/json': { schema: ValidationErrorSchema } },
}

const WebhookNotFoundResponse = {
  description: 'Unknown webhook',
  content: { 'application/json': { schema: WebhookNotFoundErrorSchema } },
}

export const postAllowlistsAddRoute = createRoute({
  method: 'post',
  path: '/allowlists/add',
  tags: ['Allowlist'],
  summary: 'Add email to allowlist',
  description:
    'Adds an email to your email rejection allowlist. If the address is currently on your denylist, that denylist entry will be removed automatically.',
  operationId: 'allowlists/add',
  request: {
    body: {
      content: { 'application/json': { schema: AllowlistsAddRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AllowlistsAddResponseSchema } },
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postAllowlistsListRoute = createRoute({
  method: 'post',
  path: '/allowlists/list',
  tags: ['Allowlist'],
  summary: 'List allowlist entries',
  description:
    'Retrieves your email rejection allowlist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.',
  operationId: 'allowlists/list',
  request: {
    body: {
      content: { 'application/json': { schema: AllowlistsListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AllowlistsListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postAllowlistsDeleteRoute = createRoute({
  method: 'post',
  path: '/allowlists/delete',
  tags: ['Allowlist'],
  summary: 'Remove email from allowlist',
  description: 'Removes an email address from the allowlist.',
  operationId: 'allowlists/delete',
  request: {
    body: {
      content: { 'application/json': { schema: AllowlistsDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AllowlistsDeleteResponseSchema } },
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsInfoRoute = createRoute({
  method: 'post',
  path: '/exports/info',
  tags: ['Exports'],
  summary: 'Get export job information',
  description:
    'Returns information about an export job including status and download URL when complete.',
  operationId: 'exports/info',
  request: {
    body: { content: { 'application/json': { schema: ExportsInfoRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
    401: UnauthorizedResponse,
    404: ExportNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsListRoute = createRoute({
  method: 'post',
  path: '/exports/list',
  tags: ['Exports'],
  summary: 'List export jobs',
  description: 'Returns a list of all export jobs for the account.',
  operationId: 'exports/list',
  request: {
    body: { content: { 'application/json': { schema: ExportsListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportsListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsRejectsRoute = createRoute({
  method: 'post',
  path: '/exports/rejects',
  tags: ['Exports'],
  summary: 'Export rejection blacklist',
  description:
    'Begins an export of your rejection blacklist. The blacklist will be exported to a zip archive containing a single file named rejects.csv.',
  operationId: 'exports/rejects',
  request: {
    body: {
      content: { 'application/json': { schema: ExportsRejectsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsWhitelistRoute = createRoute({
  method: 'post',
  path: '/exports/whitelist',
  tags: ['Exports'],
  summary: 'Export rejection allowlist (legacy)',
  description:
    'Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive containing a single file named allowlist.csv.',
  operationId: 'exports/whitelist',
  request: {
    body: {
      content: { 'application/json': { schema: ExportsWhitelistRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsAllowlistRoute = createRoute({
  method: 'post',
  path: '/exports/allowlist',
  tags: ['Exports'],
  summary: 'Export rejection allowlist',
  description:
    'Begins an export of your rejection allowlist. The allowlist will be exported to a zip archive containing a single file named allowlist.csv.',
  operationId: 'exports/allowlist',
  request: {
    body: {
      content: { 'application/json': { schema: ExportsAllowlistRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postExportsActivityRoute = createRoute({
  method: 'post',
  path: '/exports/activity',
  tags: ['Exports'],
  summary: 'Export activity history',
  description:
    'Begins an export of your activity history. The activity will be exported to a zip archive containing a single file named activity.csv with message details and custom metadata fields.',
  operationId: 'exports/activity',
  request: {
    body: {
      content: { 'application/json': { schema: ExportsActivityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ExportSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsListRoute = createRoute({
  method: 'post',
  path: '/ips/list',
  tags: ['IPs'],
  summary: 'List dedicated IPs',
  description: 'Lists your dedicated IPs.',
  operationId: 'ips/list',
  request: {
    body: { content: { 'application/json': { schema: IPsListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPsListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsInfoRoute = createRoute({
  method: 'post',
  path: '/ips/info',
  tags: ['IPs'],
  summary: 'Get dedicated IP information',
  description: 'Retrieves information about a single dedicated IP.',
  operationId: 'ips/info',
  request: {
    body: { content: { 'application/json': { schema: IPsInfoRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsProvisionRoute = createRoute({
  method: 'post',
  path: '/ips/provision',
  tags: ['IPs'],
  summary: 'Request dedicated IP provisioning',
  description:
    'Requests an additional dedicated IP for your account. Accounts may have one outstanding request at any time, and provisioning requests are processed within 24 hours.',
  operationId: 'ips/provision',
  request: {
    body: {
      content: { 'application/json': { schema: IPsProvisionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPsProvisionResponseSchema } },
    },
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    404: IPPoolNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsStartWarmupRoute = createRoute({
  method: 'post',
  path: '/ips/start-warmup',
  tags: ['IPs'],
  summary: 'Start IP warmup process',
  description:
    'Begins the warmup process for a dedicated IP. During the warmup process, Mandrill will gradually increase the percentage of your mail that is sent over the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent over shared IPs or other dedicated IPs in the same pool.',
  operationId: 'ips/start-warmup',
  request: {
    body: {
      content: { 'application/json': { schema: IPsStartWarmupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPSchema } } },
    401: UnauthorizedResponse,
    404: IPNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsCancelWarmupRoute = createRoute({
  method: 'post',
  path: '/ips/cancel-warmup',
  tags: ['IPs'],
  summary: 'Cancel IP warmup process',
  description: 'Cancels the warmup process for a dedicated IP.',
  operationId: 'ips/cancel-warmup',
  request: {
    body: {
      content: { 'application/json': { schema: IPsCancelWarmupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPSchema } } },
    401: UnauthorizedResponse,
    404: IPNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsSetPoolRoute = createRoute({
  method: 'post',
  path: '/ips/set-pool',
  tags: ['IPs'],
  summary: 'Move IP to different pool',
  description: 'Moves a dedicated IP to a different pool.',
  operationId: 'ips/set-pool',
  request: {
    body: { content: { 'application/json': { schema: IPsSetPoolRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPSchema } } },
    400: IPInvalidEmptyDefaultPoolResponse,
    401: UnauthorizedResponse,
    404: IPOrPoolNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsDeleteRoute = createRoute({
  method: 'post',
  path: '/ips/delete',
  tags: ['IPs'],
  summary: 'Delete dedicated IP',
  description: 'Deletes a dedicated IP. This is permanent and cannot be undone.',
  operationId: 'ips/delete',
  request: {
    body: { content: { 'application/json': { schema: IPsDeleteRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPsDeleteResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsListPoolsRoute = createRoute({
  method: 'post',
  path: '/ips/list-pools',
  tags: ['IPs'],
  summary: 'List dedicated IP pools',
  description: 'Lists your dedicated IP pools.',
  operationId: 'ips/list-pools',
  request: {
    body: {
      content: { 'application/json': { schema: IPsListPoolsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPsListPoolsResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsPoolInfoRoute = createRoute({
  method: 'post',
  path: '/ips/pool-info',
  tags: ['IPs'],
  summary: 'Get pool information',
  description: 'Describes a single dedicated IP pool.',
  operationId: 'ips/pool-info',
  request: {
    body: { content: { 'application/json': { schema: IPsPoolInfoRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPsPoolSchema } } },
    401: UnauthorizedResponse,
    404: IPPoolNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsCreatePoolRoute = createRoute({
  method: 'post',
  path: '/ips/create-pool',
  tags: ['IPs'],
  summary: 'Create dedicated IP pool',
  description:
    'Creates a pool and returns it. If a pool already exists with this name, no action will be performed.',
  operationId: 'ips/create-pool',
  request: {
    body: {
      content: { 'application/json': { schema: IPsCreatePoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPsPoolSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsDeletePoolRoute = createRoute({
  method: 'post',
  path: '/ips/delete-pool',
  tags: ['IPs'],
  summary: 'Delete dedicated IP pool',
  description:
    'Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.',
  operationId: 'ips/delete-pool',
  request: {
    body: {
      content: { 'application/json': { schema: IPsDeletePoolRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPsDeletePoolResponseSchema } },
    },
    400: IPInvalidDeletePoolResponse,
    401: UnauthorizedResponse,
    404: IPPoolNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsCheckCustomDnsRoute = createRoute({
  method: 'post',
  path: '/ips/check-custom-dns',
  tags: ['IPs'],
  summary: 'Test custom DNS configuration',
  description:
    'Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.',
  operationId: 'ips/check-custom-dns',
  request: {
    body: {
      content: { 'application/json': { schema: IPsCheckCustomDnsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPsCheckCustomDnsResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: IPNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postIpsSetCustomDnsRoute = createRoute({
  method: 'post',
  path: '/ips/set-custom-dns',
  tags: ['IPs'],
  summary: 'Configure custom DNS for IP',
  description: 'Configures the custom DNS name for a dedicated IP.',
  operationId: 'ips/set-custom-dns',
  request: {
    body: {
      content: { 'application/json': { schema: IPsSetCustomDnsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: IPSchema } } },
    400: IPInvalidCustomDnsResponse,
    401: UnauthorizedResponse,
    404: IPNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundDomainsRoute = createRoute({
  method: 'post',
  path: '/inbound/domains',
  tags: ['Inbound'],
  summary: 'List inbound domains',
  description: 'List the domains that have been configured for inbound delivery.',
  operationId: 'inbound/domains',
  request: {
    body: {
      content: { 'application/json': { schema: InboundDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundDomainsResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundAddDomainRoute = createRoute({
  method: 'post',
  path: '/inbound/add-domain',
  tags: ['Inbound'],
  summary: 'Add inbound domain',
  description: 'Add an inbound domain to your account.',
  operationId: 'inbound/add-domain',
  request: {
    body: {
      content: { 'application/json': { schema: InboundAddDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundDomainSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundCheckDomainRoute = createRoute({
  method: 'post',
  path: '/inbound/check-domain',
  tags: ['Inbound'],
  summary: 'Check domain settings',
  description:
    'Check the MX settings for an inbound domain. The domain must have already been added with the add-domain call.',
  operationId: 'inbound/check-domain',
  request: {
    body: {
      content: { 'application/json': { schema: InboundCheckDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundDomainSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundDomainNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundDeleteDomainRoute = createRoute({
  method: 'post',
  path: '/inbound/delete-domain',
  tags: ['Inbound'],
  summary: 'Delete inbound domain',
  description:
    'Delete an inbound domain from the account. All mail will stop routing for this domain immediately.',
  operationId: 'inbound/delete-domain',
  request: {
    body: {
      content: { 'application/json': { schema: InboundDeleteDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundDomainSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundDomainNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundRoutesRoute = createRoute({
  method: 'post',
  path: '/inbound/routes',
  tags: ['Inbound'],
  summary: 'List mailbox routes',
  description: 'List the mailbox routes defined for an inbound domain.',
  operationId: 'inbound/routes',
  request: {
    body: {
      content: { 'application/json': { schema: InboundRoutesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundRoutesResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundDomainNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundAddRouteRoute = createRoute({
  method: 'post',
  path: '/inbound/add-route',
  tags: ['Inbound'],
  summary: 'Add mailbox route',
  description: 'Add a new mailbox route to an inbound domain.',
  operationId: 'inbound/add-route',
  request: {
    body: {
      content: { 'application/json': { schema: InboundAddRouteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundRouteSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundDomainNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundUpdateRouteRoute = createRoute({
  method: 'post',
  path: '/inbound/update-route',
  tags: ['Inbound'],
  summary: 'Update mailbox route',
  description:
    'Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any fields, the values will remain unchanged.',
  operationId: 'inbound/update-route',
  request: {
    body: {
      content: { 'application/json': { schema: InboundUpdateRouteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundRouteSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundRouteNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundDeleteRouteRoute = createRoute({
  method: 'post',
  path: '/inbound/delete-route',
  tags: ['Inbound'],
  summary: 'Delete mailbox route',
  description: 'Delete an existing inbound mailbox route.',
  operationId: 'inbound/delete-route',
  request: {
    body: {
      content: { 'application/json': { schema: InboundDeleteRouteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundRouteSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundRouteNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postInboundSendRawRoute = createRoute({
  method: 'post',
  path: '/inbound/send-raw',
  tags: ['Inbound'],
  summary: 'Send mime document',
  description:
    'Take a raw MIME document destined for a domain with inbound domains set up, and send it to the inbound hook exactly as if it had been sent over SMTP.',
  operationId: 'inbound/send-raw',
  request: {
    body: {
      content: { 'application/json': { schema: InboundSendRawRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: InboundSendRawResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: InboundDomainNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMctemplatesInfoRoute = createRoute({
  method: 'post',
  path: '/mctemplates/info',
  tags: ['MC Templates'],
  summary: 'Get Mailchimp Transactional template information',
  description:
    'Returns complete information about a Mailchimp Transactional template including draft and published versions',
  operationId: 'mctemplates/info',
  request: {
    body: {
      content: { 'application/json': { schema: MctemplatesInfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MctemplatesInfoResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: MctemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMctemplatesListRoute = createRoute({
  method: 'post',
  path: '/mctemplates/list',
  tags: ['MC Templates'],
  summary: 'List Mailchimp Transactional templates',
  description: 'Returns a list of all Mailchimp Transactional templates for the authenticated user',
  operationId: 'mctemplates/list',
  request: {
    body: {
      content: { 'application/json': { schema: MctemplatesListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MctemplatesListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postMctemplatesRenderRoute = createRoute({
  method: 'post',
  path: '/mctemplates/render',
  tags: ['MC Templates'],
  summary: 'Render a Mailchimp Transactional template',
  description: 'Renders a Mailchimp Transactional template with optional merge variables',
  operationId: 'mctemplates/render',
  request: {
    body: {
      content: { 'application/json': { schema: MctemplatesRenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MctemplatesRenderResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: MctemplateNotFoundResponse,
    422: MctemplateInvalidVersionResponse,
    500: ServerErrorResponse,
  },
})

export const postMctemplatesTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/mctemplates/time-series',
  tags: ['MC Templates'],
  summary: 'Get Mailchimp Transactional template time series',
  description:
    'Returns hourly stats for the last 30 days for a Mailchimp Transactional template. Returns an empty array if the template exists but has never been used to send messages.',
  operationId: 'mctemplates/time-series',
  request: {
    body: {
      content: { 'application/json': { schema: MctemplatesTimeSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MctemplatesTimeSeriesResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: MctemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesSendRoute = createRoute({
  method: 'post',
  path: '/messages/send',
  tags: ['Messages'],
  summary: 'Send a new transactional message through the Transactional API.',
  description:
    'Send a new transactional message through Mandrill\n\n<table class="simple top30 errors">\n     <thead><tr><th colspan="1">Note</th></tr></thead>\n     <tbody>\n         <tr>\n             <td class="param-desc">\n                 If you signed up for a Mandrill account on or after December 1st, 2015, you must add SPF and DKIM records and verify ownership of your sending domains before you can send email through your account. Mandrill will not send any email from unverified domains or domains without valid SPF and DKIM records, including public domains like gmail.com, yahoo.com, and more.<br><br>Custom signing domains are only available to Mandrill accounts created before December 1st, 2015. If you signed up for a new Mandrill account on or after December 1st, 2015, the signing_domain parameter will be ignored.<br><br>Mail sent from unverified domains or domains without valid SPF and DKIM records will be rejected with the reject_reason, unsigned.<br><br>Learn more about <a href=\'https://mailchimp.com/developer/transactional/docs/authentication-delivery/#authentication\'>SPF and DKIM</a>, and <a href=\'https://mailchimp.com/developer/transactional/guides/send-first-email/#verify-domain-ownership\'>domain verification</a>\n             </td>\n         </tr>\n     </tbody>\n </table>',
  operationId: 'messages/send',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSendRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSendResponseSchema } },
    },
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    404: MessageSubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesSendTemplateRoute = createRoute({
  method: 'post',
  path: '/messages/send-template',
  tags: ['Messages'],
  summary: 'Send a new transactional message using a template',
  description:
    'Send a new transactional message using a template. If you signed up for a Mandrill account on or after December 1st, 2015, you must add SPF and DKIM records and verify ownership of your sending domains before you can send email through your account. Mandrill will not send any email from unverified domains or domains without valid SPF and DKIM records, including public domains like gmail.com, yahoo.com, and more. Custom signing domains are only available to Mandrill accounts created before December 1st, 2015. If you signed up for a new Mandrill account on or after December 1st, 2015, the signing_domain parameter will be ignored. Mail sent from unverified domains or domains without valid SPF and DKIM records will be rejected with the reject_reason, unsigned.',
  operationId: 'messages/send-template',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSendTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSendResponseSchema } },
    },
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    404: MessageTemplateOrSubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesSendMcTemplateRoute = createRoute({
  method: 'post',
  path: '/messages/send-mc-template',
  tags: ['Messages'],
  summary: 'Send using Mailchimp template',
  description:
    'Send a new transactional message through Mandrill using a Mailchimp Transactional template.',
  operationId: 'messages/send-mc-template',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSendMcTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSendResponseSchema } },
    },
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    404: MessageTemplateOrSubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesSearchRoute = createRoute({
  method: 'post',
  path: '/messages/search',
  tags: ['Messages'],
  summary: 'Search recently sent messages',
  description:
    'Search recently sent messages and optionally narrow by date range, tags, senders, and API keys. Results can include both email and SMS messages. If no date range is specified, results within the last 7 days are returned.',
  operationId: 'messages/search',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSearchResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
    503: MessageServiceUnavailableResponse,
  },
})

export const postMessagesSearchTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/messages/search-time-series',
  tags: ['Messages'],
  summary: 'Get time series data for message search',
  description:
    'Search the content of recently sent messages and return the aggregated hourly stats for matching messages.',
  operationId: 'messages/search-time-series',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSearchTimeSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSearchTimeSeriesResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
    503: MessageServiceUnavailableResponse,
  },
})

export const postMessagesInfoRoute = createRoute({
  method: 'post',
  path: '/messages/info',
  tags: ['Messages'],
  summary: 'Get information about a single sent message',
  description:
    'Returns detailed information about a single sent message. Can return either email or SMS message information depending on the message type.',
  operationId: 'messages/info',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesInfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesInfoResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: MessageNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesContentRoute = createRoute({
  method: 'post',
  path: '/messages/content',
  tags: ['Messages'],
  summary: 'Get the full content of a sent message',
  description:
    'Returns the full content of a recently sent message. For email messages, includes HTML, text, and attachments. For SMS messages, includes text content and SMS-specific fields.',
  operationId: 'messages/content',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesContentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesContentResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: MessageNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesParseRoute = createRoute({
  method: 'post',
  path: '/messages/parse',
  tags: ['Messages'],
  summary: 'Parse a MIME message',
  description:
    'Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces.',
  operationId: 'messages/parse',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesParseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesParseResponseSchema } },
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesSendRawRoute = createRoute({
  method: 'post',
  path: '/messages/send-raw',
  tags: ['Messages'],
  summary: 'Send a raw MIME message through Mandrill',
  description:
    "Send a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers.",
  operationId: 'messages/send-raw',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSendRawRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSendResponseSchema } },
    },
    401: UnauthorizedResponse,
    402: PaymentRequiredResponse,
    404: MessageSubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesListScheduledRoute = createRoute({
  method: 'post',
  path: '/messages/list-scheduled',
  tags: ['Messages'],
  summary: 'Get scheduled emails',
  description: 'Queries your scheduled emails.',
  operationId: 'messages/list-scheduled',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesListScheduledRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesListScheduledResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesCancelScheduledRoute = createRoute({
  method: 'post',
  path: '/messages/cancel-scheduled',
  tags: ['Messages'],
  summary: 'Cancel a scheduled email',
  description: 'Cancels a scheduled email.',
  operationId: 'messages/cancel-scheduled',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesCancelScheduledRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesScheduledSchema } },
    },
    401: UnauthorizedResponse,
    404: MessageNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesRescheduleRoute = createRoute({
  method: 'post',
  path: '/messages/reschedule',
  tags: ['Messages'],
  summary: 'Reschedule a scheduled email',
  description: 'Reschedules a scheduled email.',
  operationId: 'messages/reschedule',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesRescheduleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesScheduledSchema } },
    },
    401: UnauthorizedResponse,
    404: MessageNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMessagesSendSmsRoute = createRoute({
  method: 'post',
  path: '/messages/send-sms',
  tags: ['Messages'],
  summary: 'Send SMS message',
  description: 'Send a new SMS message through Mandrill',
  operationId: 'messages/send-sms',
  request: {
    body: {
      content: { 'application/json': { schema: MessagesSendSmsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessagesSendSmsResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: MessageSmsSubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMetadataListRoute = createRoute({
  method: 'post',
  path: '/metadata/list',
  tags: ['Metadata'],
  summary: 'List custom metadata fields',
  description: 'Get the list of custom metadata fields indexed for the account',
  operationId: 'metadata/list',
  request: {
    body: {
      content: { 'application/json': { schema: MetadataListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetadataListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postMetadataAddRoute = createRoute({
  method: 'post',
  path: '/metadata/add',
  tags: ['Metadata'],
  summary: 'Add custom metadata field',
  description: 'Add a new custom metadata field to be indexed for the account',
  operationId: 'metadata/add',
  request: {
    body: { content: { 'application/json': { schema: MetadataAddRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetadataResponseDataSchema } },
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postMetadataUpdateRoute = createRoute({
  method: 'post',
  path: '/metadata/update',
  tags: ['Metadata'],
  summary: 'Update custom metadata field',
  description: 'Update an existing custom metadata field',
  operationId: 'metadata/update',
  request: {
    body: {
      content: { 'application/json': { schema: MetadataUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetadataResponseDataSchema } },
    },
    401: UnauthorizedResponse,
    404: MetadataNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postMetadataDeleteRoute = createRoute({
  method: 'post',
  path: '/metadata/delete',
  tags: ['Metadata'],
  summary: 'Delete custom metadata field',
  description:
    'Delete an existing custom metadata field. Deletion is not instantaneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.',
  operationId: 'metadata/delete',
  request: {
    body: {
      content: { 'application/json': { schema: MetadataDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetadataResponseDataSchema } },
    },
    401: UnauthorizedResponse,
    404: MetadataNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postRejectsAddRoute = createRoute({
  method: 'post',
  path: '/rejects/add',
  tags: ['Rejects'],
  summary: 'Add email to rejection blacklist',
  description:
    'Adds an email to your email rejection denylist. Addresses that you add manually will never expire and there is no reputation penalty for removing them from your denylist. Attempting to denylist an address that has been whitelisted will have no effect.',
  operationId: 'rejects/add',
  request: {
    body: { content: { 'application/json': { schema: RejectsAddRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectsAddResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: RejectSubaccountNotFoundResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postRejectsAddSmsRoute = createRoute({
  method: 'post',
  path: '/rejects/add-sms',
  tags: ['Rejects'],
  summary: 'Add phone number to SMS rejection denylist',
  description:
    'Adds a phone number to your SMS rejection denylist. Phone numbers that you add manually will never expire and there is no reputation penalty for removing them from your denylist.',
  operationId: 'rejects/add-sms',
  request: {
    body: {
      content: { 'application/json': { schema: RejectsAddSmsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectsSmsRejectSchema } },
    },
    401: UnauthorizedResponse,
    404: RejectSubaccountNotFoundResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postRejectsListRoute = createRoute({
  method: 'post',
  path: '/rejects/list',
  tags: ['Rejects'],
  summary: 'List rejection blacklist entries',
  description:
    'Retrieves your email rejection denylist. You can provide an email address to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.',
  operationId: 'rejects/list',
  request: {
    body: { content: { 'application/json': { schema: RejectsListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectsListResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: RejectSubaccountNotFoundResponse,
    429: RateLimitedResponse,
    500: ServerErrorResponse,
  },
})

export const postRejectsListSmsRoute = createRoute({
  method: 'post',
  path: '/rejects/list-sms',
  tags: ['Rejects'],
  summary: 'List SMS rejection denylist entries',
  description:
    'Retrieves your SMS rejection denylist. You can provide a phone number to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.',
  operationId: 'rejects/list-sms',
  request: {
    body: {
      content: { 'application/json': { schema: RejectsListSmsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectsListSmsResponseSchema } },
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
    429: RateLimitedResponse,
    500: ServerErrorResponse,
  },
})

export const postRejectsDeleteRoute = createRoute({
  method: 'post',
  path: '/rejects/delete',
  tags: ['Rejects'],
  summary: 'Delete email from rejection blacklist',
  description:
    'Deletes an email rejection. There is no limit to how many rejections you can remove from your denylist, but keep in mind that each deletion has an affect on your reputation.',
  operationId: 'rejects/delete',
  request: {
    body: {
      content: { 'application/json': { schema: RejectsDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectsDeleteResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: RejectEmailNotFoundResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postRejectsDeleteSmsRoute = createRoute({
  method: 'post',
  path: '/rejects/delete-sms',
  tags: ['Rejects'],
  summary: 'Delete phone number from SMS rejection denylist',
  description:
    'Deletes an SMS rejection. There is no limit to how many rejections you can remove from your denylist, but keep in mind that each deletion has an affect on your reputation.',
  operationId: 'rejects/delete-sms',
  request: {
    body: {
      content: { 'application/json': { schema: RejectsDeleteSmsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectsSmsRejectSchema } },
    },
    401: UnauthorizedResponse,
    404: RejectPhoneNotFoundResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersListRoute = createRoute({
  method: 'post',
  path: '/senders/list',
  tags: ['Senders'],
  summary: 'List senders used by this account',
  description: 'Return the senders that have tried to use this account.',
  operationId: 'senders/list',
  request: {
    body: { content: { 'application/json': { schema: SendersListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersDomainsRoute = createRoute({
  method: 'post',
  path: '/senders/domains',
  tags: ['Senders'],
  summary: 'List sender domains',
  description: 'Returns the sender domains that have been added to this account.',
  operationId: 'senders/domains',
  request: {
    body: {
      content: { 'application/json': { schema: SendersDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersDomainsResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersAddDomainRoute = createRoute({
  method: 'post',
  path: '/senders/add-domain',
  tags: ['Senders'],
  summary: 'Add a sender domain',
  description:
    'Adds a sender domain to your account. Sender domains are added automatically as you send, but you can add them ahead of time.',
  operationId: 'senders/add-domain',
  request: {
    body: {
      content: { 'application/json': { schema: SendersAddDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersSenderDomainSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersCheckDomainRoute = createRoute({
  method: 'post',
  path: '/senders/check-domain',
  tags: ['Senders'],
  summary: 'Check domain SPF and DKIM',
  description:
    "Checks the SPF and DKIM settings for a domain. If it isn't already added to your account, it will be added automatically.",
  operationId: 'senders/check-domain',
  request: {
    body: {
      content: { 'application/json': { schema: SendersCheckDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersSenderDomainSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersVerifyDomainRoute = createRoute({
  method: 'post',
  path: '/senders/verify-domain',
  tags: ['Senders'],
  summary: 'Verify a sender domain by email',
  description: 'Sends a verification email in order to verify ownership of a domain.',
  operationId: 'senders/verify-domain',
  request: {
    body: {
      content: { 'application/json': { schema: SendersVerifyDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersVerifyDomainResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersInfoRoute = createRoute({
  method: 'post',
  path: '/senders/info',
  tags: ['Senders'],
  summary: 'Get detailed information for a sender',
  description:
    'Return more detailed information about a single sender, including aggregates of recent stats.',
  operationId: 'senders/info',
  request: {
    body: { content: { 'application/json': { schema: SendersInfoRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersInfoResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: SenderNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/senders/time-series',
  tags: ['Senders'],
  summary: 'Get hourly stats for a sender',
  description: 'Return the recent history (hourly stats for the last 30 days) for a sender.',
  operationId: 'senders/time-series',
  request: {
    body: {
      content: { 'application/json': { schema: SendersTimeSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersTimeSeriesResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: SenderNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSendersDeleteDomainRoute = createRoute({
  method: 'post',
  path: '/senders/delete-domain',
  tags: ['Senders'],
  summary: 'Delete a sender domain',
  description:
    'Deletes an unverified sender domain from your account. Verified domains cannot be deleted via API and require login confirmation.',
  operationId: 'senders/delete-domain',
  request: {
    body: {
      content: { 'application/json': { schema: SendersDeleteDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendersSenderDomainSchema } },
    },
    401: UnauthorizedResponse,
    403: SenderCannotDeleteVerifiedResponse,
    404: SenderDomainNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsListRoute = createRoute({
  method: 'post',
  path: '/subaccounts/list',
  tags: ['Subaccounts'],
  summary: 'List subaccounts',
  description:
    'Get the list of subaccounts defined for the account, optionally filtered by a prefix. Returns up to a maximum of 1,000 subaccounts.',
  operationId: 'subaccounts/list',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsAddRoute = createRoute({
  method: 'post',
  path: '/subaccounts/add',
  tags: ['Subaccounts'],
  summary: 'Add a new subaccount',
  description:
    'Create a new subaccount with the specified configuration. The subaccount can be used to organize and track sending for different customers or purposes.',
  operationId: 'subaccounts/add',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsAddRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsSubaccountSchema } },
    },
    401: UnauthorizedResponse,
    422: ValidationErrorResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsInfoRoute = createRoute({
  method: 'post',
  path: '/subaccounts/info',
  tags: ['Subaccounts'],
  summary: 'Get subaccount information',
  description:
    'Retrieve detailed information about a specific subaccount including sending statistics and configuration.',
  operationId: 'subaccounts/info',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsInfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsInfoResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: SubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsUpdateRoute = createRoute({
  method: 'post',
  path: '/subaccounts/update',
  tags: ['Subaccounts'],
  summary: 'Update an existing subaccount',
  description:
    'Update the configuration of an existing subaccount including name, notes, and custom quota settings.',
  operationId: 'subaccounts/update',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsSubaccountSchema } },
    },
    401: UnauthorizedResponse,
    404: SubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsDeleteRoute = createRoute({
  method: 'post',
  path: '/subaccounts/delete',
  tags: ['Subaccounts'],
  summary: 'Delete a subaccount',
  description:
    'Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.',
  operationId: 'subaccounts/delete',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsSubaccountSchema } },
    },
    401: UnauthorizedResponse,
    404: SubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsPauseRoute = createRoute({
  method: 'post',
  path: '/subaccounts/pause',
  tags: ['Subaccounts'],
  summary: 'Pause a subaccount',
  description:
    "Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.",
  operationId: 'subaccounts/pause',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsPauseRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsSubaccountSchema } },
    },
    401: UnauthorizedResponse,
    404: SubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postSubaccountsResumeRoute = createRoute({
  method: 'post',
  path: '/subaccounts/resume',
  tags: ['Subaccounts'],
  summary: 'Resume a paused subaccount',
  description:
    "Resume a paused subaccount's sending. The subaccount will return to active status and queued emails will be processed.",
  operationId: 'subaccounts/resume',
  request: {
    body: {
      content: { 'application/json': { schema: SubaccountsResumeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SubaccountsSubaccountSchema } },
    },
    401: UnauthorizedResponse,
    404: SubaccountNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTagsListRoute = createRoute({
  method: 'post',
  path: '/tags/list',
  tags: ['Tags'],
  summary: 'List all user-defined tags',
  description: 'Return all of the user-defined tag information',
  operationId: 'tags/list',
  request: {
    body: { content: { 'application/json': { schema: TagsListRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagsListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTagsDeleteRoute = createRoute({
  method: 'post',
  path: '/tags/delete',
  tags: ['Tags'],
  summary: 'Delete a tag permanently',
  description:
    "Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent, and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.",
  operationId: 'tags/delete',
  request: {
    body: { content: { 'application/json': { schema: TagsDeleteRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagsDeleteResponseSchema } },
    },
    400: TagInvalidNameResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTagsInfoRoute = createRoute({
  method: 'post',
  path: '/tags/info',
  tags: ['Tags'],
  summary: 'Get detailed information about a tag',
  description:
    'Return more detailed information about a single tag, including aggregates of recent stats',
  operationId: 'tags/info',
  request: {
    body: { content: { 'application/json': { schema: TagsInfoRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagsInfoResponseSchema } },
    },
    400: TagInvalidNameResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTagsTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/tags/time-series',
  tags: ['Tags'],
  summary: 'Get time series data for a specific tag',
  description: 'Return the recent history (hourly stats for the last 30 days) for a tag',
  operationId: 'tags/time-series',
  request: {
    body: {
      content: { 'application/json': { schema: TagsTimeSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagsTimeSeriesResponseSchema } },
    },
    400: TagInvalidNameResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTagsAllTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/tags/all-time-series',
  tags: ['Tags'],
  summary: 'Get time series data for all tags',
  description: 'Return the recent history (hourly stats for the last 30 days) for all tags',
  operationId: 'tags/all-time-series',
  request: {
    body: {
      content: { 'application/json': { schema: TagsAllTimeSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagsAllTimeSeriesResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesAddRoute = createRoute({
  method: 'post',
  path: '/templates/add',
  tags: ['Templates'],
  summary: 'Add a new template',
  description: 'Creates a new email template with the specified content and settings.',
  operationId: 'templates/add',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesAddRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesTemplateSchema } },
    },
    401: UnauthorizedResponse,
    422: TemplateInvalidDataResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesInfoRoute = createRoute({
  method: 'post',
  path: '/templates/info',
  tags: ['Templates'],
  summary: 'Get template information',
  description: 'Retrieves information for an existing template.',
  operationId: 'templates/info',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesInfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesTemplateSchema } },
    },
    401: UnauthorizedResponse,
    404: TemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesUpdateRoute = createRoute({
  method: 'post',
  path: '/templates/update',
  tags: ['Templates'],
  summary: 'Update an existing template',
  description:
    'Updates the code for an existing template. If null is provided for any fields, the values will remain unchanged.',
  operationId: 'templates/update',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesTemplateSchema } },
    },
    401: UnauthorizedResponse,
    404: TemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesPublishRoute = createRoute({
  method: 'post',
  path: '/templates/publish',
  tags: ['Templates'],
  summary: 'Publish a template',
  description:
    'Publishes the content for the template. Any new messages sent using this template will start using the content that was previously in draft.',
  operationId: 'templates/publish',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesPublishRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesTemplateSchema } },
    },
    401: UnauthorizedResponse,
    404: TemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesDeleteRoute = createRoute({
  method: 'post',
  path: '/templates/delete',
  tags: ['Templates'],
  summary: 'Delete a template',
  description: 'Deletes an existing template.',
  operationId: 'templates/delete',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesTemplateSchema } },
    },
    401: UnauthorizedResponse,
    404: TemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesListRoute = createRoute({
  method: 'post',
  path: '/templates/list',
  tags: ['Templates'],
  summary: 'List all templates',
  description: 'Returns a list of all templates available to this user.',
  operationId: 'templates/list',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesTimeSeriesRoute = createRoute({
  method: 'post',
  path: '/templates/time-series',
  tags: ['Templates'],
  summary: 'Get template time series data',
  description: 'Returns the recent history (hourly stats for the last 30 days) for a template.',
  operationId: 'templates/time-series',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesTimeSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesTimeSeriesResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: TemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postTemplatesRenderRoute = createRoute({
  method: 'post',
  path: '/templates/render',
  tags: ['Templates'],
  summary: 'Render a template',
  description:
    'Injects content and merge variables into a template, returning the HTML that results.',
  operationId: 'templates/render',
  request: {
    body: {
      content: { 'application/json': { schema: TemplatesRenderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TemplatesRenderResponseSchema } },
    },
    401: UnauthorizedResponse,
    404: TemplateNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postUrlsTrackingDomainsRoute = createRoute({
  method: 'post',
  path: '/urls/tracking-domains',
  tags: ['URLs'],
  summary: 'Get tracking domains',
  description: 'Get the list of tracking domains set up for your account',
  operationId: 'urls/tracking-domains',
  request: {
    body: {
      content: { 'application/json': { schema: UrlsTrackingDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UrlsTrackingDomainsResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postUrlsAddTrackingDomainRoute = createRoute({
  method: 'post',
  path: '/urls/add-tracking-domain',
  tags: ['URLs'],
  summary: 'Add tracking domain',
  description: 'Add a tracking domain to your account',
  operationId: 'urls/add-tracking-domain',
  request: {
    body: {
      content: { 'application/json': { schema: UrlsAddTrackingDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TrackingDomainSchema } },
    },
    400: UrlInvalidDomainResponse,
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postUrlsCheckTrackingDomainRoute = createRoute({
  method: 'post',
  path: '/urls/check-tracking-domain',
  tags: ['URLs'],
  summary: 'Check tracking domain',
  description:
    'Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call',
  operationId: 'urls/check-tracking-domain',
  request: {
    body: {
      content: { 'application/json': { schema: UrlsCheckTrackingDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TrackingDomainSchema } },
    },
    401: UnauthorizedResponse,
    404: UrlNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postUrlsDeleteTrackingDomainRoute = createRoute({
  method: 'post',
  path: '/urls/delete-tracking-domain',
  tags: ['URLs'],
  summary: 'Delete a tracking domain',
  description:
    'Deletes an unverified tracking domain from your account. Valid tracking domains cannot be deleted via API and require login confirmation.',
  operationId: 'urls/delete-tracking-domain',
  request: {
    body: {
      content: { 'application/json': { schema: UrlsDeleteTrackingDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TrackingDomainSchema } },
    },
    401: UnauthorizedResponse,
    403: UrlCannotDeleteVerifiedResponse,
    404: UrlNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postUsersInfoRoute = createRoute({
  method: 'post',
  path: '/users/info',
  tags: ['Users'],
  summary: 'Return the information about the API-connected user',
  description:
    'Returns user account information including username, reputation, quota, and historical sending stats',
  operationId: 'users/info',
  request: {
    body: { content: { 'application/json': { schema: UsersInfoRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsersInfoResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postUsersPingRoute = createRoute({
  method: 'post',
  path: '/users/ping',
  tags: ['Users'],
  summary: 'Validate an API key and respond to a ping',
  description: "Returns 'PONG!'.",
  operationId: 'users/ping',
  request: {
    body: { content: { 'application/json': { schema: UsersPingRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsersPingResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postUsersPing2Route = createRoute({
  method: 'post',
  path: '/users/ping2',
  tags: ['Users'],
  summary: 'Validate an API key and respond to a ping (strict JSON parser version)',
  description: 'Validate an API key and respond to a ping (strict JSON parser version)',
  operationId: 'users/ping2',
  request: {
    body: { content: { 'application/json': { schema: UsersPing2RequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsersPing2ResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postUsersSendersRoute = createRoute({
  method: 'post',
  path: '/users/senders',
  tags: ['Users'],
  summary: 'Return the senders that have tried to use this account',
  description:
    'Returns an array of sender data for each sending address used by the account, both verified and unverified',
  operationId: 'users/senders',
  request: {
    body: {
      content: { 'application/json': { schema: UsersSendersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UsersSendersResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postWebhooksListRoute = createRoute({
  method: 'post',
  path: '/webhooks/list',
  tags: ['Webhooks'],
  summary: 'Get the list of all webhooks',
  description: 'Get the list of all webhooks defined for this account',
  operationId: 'webhooks/list',
  request: {
    body: {
      content: { 'application/json': { schema: WebhooksListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhooksListResponseSchema } },
    },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postWebhooksAddRoute = createRoute({
  method: 'post',
  path: '/webhooks/add',
  tags: ['Webhooks'],
  summary: 'Add a new webhook',
  description: 'Create a new webhook to receive event notifications',
  operationId: 'webhooks/add',
  request: {
    body: { content: { 'application/json': { schema: WebhooksAddRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
    401: UnauthorizedResponse,
    500: ServerErrorResponse,
  },
})

export const postWebhooksInfoRoute = createRoute({
  method: 'post',
  path: '/webhooks/info',
  tags: ['Webhooks'],
  summary: 'Get webhook information',
  description: 'Get the data about an existing webhook',
  operationId: 'webhooks/info',
  request: {
    body: {
      content: { 'application/json': { schema: WebhooksInfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
    401: UnauthorizedResponse,
    404: WebhookNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postWebhooksUpdateRoute = createRoute({
  method: 'post',
  path: '/webhooks/update',
  tags: ['Webhooks'],
  summary: 'Update an existing webhook',
  description: 'Update the configuration of an existing webhook',
  operationId: 'webhooks/update',
  request: {
    body: {
      content: { 'application/json': { schema: WebhooksUpdateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
    401: UnauthorizedResponse,
    404: WebhookNotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const postWebhooksDeleteRoute = createRoute({
  method: 'post',
  path: '/webhooks/delete',
  tags: ['Webhooks'],
  summary: 'Delete an existing webhook',
  description: 'Remove a webhook from the account',
  operationId: 'webhooks/delete',
  request: {
    body: {
      content: { 'application/json': { schema: WebhooksDeleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: WebhookSchema } } },
    401: UnauthorizedResponse,
    404: WebhookNotFoundResponse,
    500: ServerErrorResponse,
  },
})
