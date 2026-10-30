import { createRoute, z } from '@hono/zod-openapi'

const MailFromSchema = z
  .object({
    email: z
      .email()
      .openapi({
        description:
          'The email address from which messages are sent. This address should be a verified sender in your Twilio SendGrid account. Email addresses specified in `personalizations` will override addresses set at the message level outside of the `personalizations` object.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A name or title associated with the email address such as "Support" or "Alex".',
      }),
  })
  .openapi({ title: 'From Email Object', required: ['email'] })
  .openapi('MailFrom')

const MailToSchema = z
  .object({
    email: z
      .email()
      .openapi({
        description:
          'An email address to which a message is sent. Email addresses specified in `personalizations` will override addresses set at the message level outside of the `personalizations` object.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A name or title associated with the email address such as "Alex".',
      }),
  })
  .openapi({ title: 'To Email Object', required: ['email'] })
  .openapi('MailTo')

const MailBatchResponseSchema = z
  .object({ batch_id: z.string().exactOptional().openapi({ description: 'A mail batch ID.' }) })
  .openapi({
    title: 'Mail Batch and Batch ID Response Schema',
    example: { batch_id: 'HkJ5yLYULb7Rj8GKSx7u025ouWVlMgAi' },
    required: [],
  })
  .openapi('MailBatchResponse')

const ErrorResponseSchema = z
  .object({
    errors: z
      .array(
        z
          .object({
            message: z.string().exactOptional().openapi({ description: 'An error message.' }),
            field: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'When applicable, this property value will be the field that generated the error.',
              }),
            help: z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'When applicable, this property value will be helper text or a link to documentation to help you troubleshoot the error.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'When applicable, this property value will be an error ID.' }),
  })
  .openapi({
    example: { errors: [{ field: 'field_name', message: 'error message' }] },
    required: [],
  })
  .openapi('ErrorResponse')

const ContentEncodingSchema = z.literal('gzip').openapi('ContentEncoding')

const DispositionSchema = z.enum(['inline', 'attachment']).openapi('Disposition')

const PostMailSend400Response = {
  description: 'Mail Send bad response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'invalid request', field: 'null' }] },
        },
      },
    },
  },
}

const PostMailSend401Response = {
  description: 'Mail Send unauthorized response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'authorization required', field: 'null' }] },
        },
      },
    },
  },
}

const PostMailSend403Response = {
  description: 'Mail Send forbidden response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'access forbidden', field: 'null' }] },
        },
      },
    },
  },
}

const PostMailSend404Response = {
  description: 'Mail Send not found response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': { value: { errors: [{ message: 'not found', field: 'null' }] } },
      },
    },
  },
}

const PostMailSend405Response = {
  description: 'Mail Send method not allowed response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'method not allowed', field: 'null' }] },
        },
      },
    },
  },
}

const PostMailSend413Response = {
  description: 'Mail Send content too large response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'content too large', field: 'null' }] },
        },
      },
    },
  },
}

const PostMailSend500Response = {
  description: 'Mail send internal server error response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': { value: { errors: [{ message: 'internal server error' }] } },
      },
    },
  },
}

const MailBatch2xxExample = {
  summary: 'A mail batch ID.',
  value: { batch_id: '123abc456def789hij0' },
}

const MailBatch2xxResponse = {
  description: 'Batch ID success response.',
  content: {
    'application/json': {
      schema: MailBatchResponseSchema,
      examples: { Success: MailBatch2xxExample },
    },
  },
}

const MailBatch400Response = {
  description: 'Batch ID bad response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Bad request': { value: { errors: [{ message: 'invalid batch id', field: 'null' }] } },
      },
    },
  },
}

const MailBatch401Response = {
  description: 'Batch ID unauthorized response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'authorization required', field: 'null' }] },
        },
      },
    },
  },
}

const MailBatch403Response = {
  description: 'Batch ID forbidden response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'access forbidden', field: 'null' }] },
        },
      },
    },
  },
}

const MailBatch404Response = {
  description: 'Batch ID not found response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'batch id not found', field: 'null' }] },
        },
      },
    },
  },
}

const MailBatch405Response = {
  description: 'Get batch ID method not allowed response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'method not allowed', field: 'null' }] },
        },
      },
    },
  },
}

const MailBatch500Response = {
  description: 'Get batch ID internal server error response.',
  content: {
    'application/json': {
      schema: ErrorResponseSchema,
      examples: {
        'Unauthorized request': {
          value: { errors: [{ message: 'internal server error', field: 'null' }] },
        },
      },
    },
  },
}

const OnBehalfOfParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'on-behalf-of',
      in: 'header',
      description:
        "Use the `on-behalf-of` header to make API calls for a particular Subuser through the parent account. You can use this header to automate bulk updates or to administer a Subuser without changing the authentication in your code. You will use the parent account's API key when using this header.",
      required: false,
      schema: { type: 'string' },
    },
  })

const BatchIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'batch_id',
      in: 'path',
      description:
        "Set this parameter to the batch ID that's associated with the mail send you want to retrieve.",
      required: true,
      schema: { type: 'string' },
    },
  })

const MailBodyCompressionParamsSchema = ContentEncodingSchema.openapi({
  param: {
    name: 'Content-Encoding',
    in: 'header',
    description:
      'Use this header when sending a gzip compressed mail body. Mail body compression is available to some high volume accounts. Submit a [request to support](https://support.sendgrid.com/hc/en-us) to have gzip enabled on your account.',
    required: false,
    schema: { type: 'string', $ref: '#/components/schemas/ContentEncoding' },
  },
}).exactOptional()

const PostMailSendRequestBody = {
  content: {
    'application/json': {
      schema: z
        .object({
          personalizations: z
            .array(
              z
                .object({
                  from: MailFromSchema.exactOptional(),
                  to: z
                    .array(MailToSchema)
                    .openapi({
                      description:
                        "An array of recipients to whom the email will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name.",
                    }),
                  cc: z
                    .array(MailToSchema)
                    .max(1000)
                    .exactOptional()
                    .openapi({
                      description:
                        "An array of recipients to whom a copy of the email will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name.",
                    }),
                  bcc: z
                    .array(MailToSchema)
                    .max(1000)
                    .exactOptional()
                    .openapi({
                      description:
                        "An array of recipients to whom a blind carbon copy of your email will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name.",
                    }),
                  subject: z
                    .string()
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The subject of your email. See line length limits specified in [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-2.1.1) for guidance on subject line character limits.',
                    }),
                  headers: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'A collection of JSON property name and property value pairs allowing you to specify handling instructions for your email. You may not override the following headers: `x-sg-id`, `x-sg-eid`, `received`, `dkim-signature`, `Content-Type`, `Content-Transfer-Encoding`, `To`, `From`, `Subject`, `Reply-To`, `CC`, `BCC`.',
                    }),
                  substitutions: z
                    .record(z.string(), z.string())
                    .refine((val) => Object.keys(val).length <= 10000)
                    .exactOptional()
                    .openapi({
                      description:
                        'A collection property names that will be substituted by their corresponding property values in the `subject`, `reply-to` and `content` portions of your message. Name and value pairs follow the pattern `"substitution_tag":"value to substitute"`. The total collective size of your substitutions may not exceed 100,000 bytes per personalization object. Substitutions allow you to insert data without using SendGrid\'s Dynamic Templates. This property should not be used in combination with a Dynamic Template, which can be identified by a `template_id` starting with `d-`. See [**Substitution Tags**](https://docs.sendgrid.com/for-developers/sending-email/substitution-tags) for more information.',
                    }),
                  dynamic_template_data: z
                    .object({})
                    .exactOptional()
                    .openapi({
                      description:
                        'A collection property names that will be substituted by their corresponding property values in the `subject`, `reply-to` and `content` portions of a SendGrid Dynamic Template. Dynamic template data is available in a template using [Handlebars](https://docs.sendgrid.com/for-developers/sending-email/using-handlebars) syntax. This property should be used in combination with a Dynamic Template, which can be identified by a `template_id` starting with `d-`. See [**How to Send an Email with Dynamic Templates**](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates) for more information.',
                    }),
                  custom_args: z
                    .object({})
                    .refine((val) => Object.keys(val).length <= 10000)
                    .exactOptional()
                    .openapi({
                      description:
                        'Values that are specific to this personalization that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is assigned to this property will be assumed to be the custom argument that you would like to be used. This field may not exceed 10,000 bytes.',
                    }),
                  send_at: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description:
                        'A [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) allowing you to specify when your email should be sent. A send cannot be scheduled more than 72 hours in advance.',
                    }),
                })
                .openapi({ required: ['to'] }),
            )
            .max(1000)
            .openapi({
              description:
                'An array of messages and their metadata. Each object within the `personalizations` array can be thought of as a mail envelope—it defines who should receive an individual message and how that message should be handled. See [**Personalizations**](https://sendgrid.com/docs/for-developers/sending-email/personalizations/) for more information.',
            }),
          from: MailFromSchema,
          reply_to: MailToSchema.exactOptional(),
          reply_to_list: z
            .array(MailToSchema)
            .max(1000)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .exactOptional()
            .openapi({
              description:
                "An array of recipients to whom replies will be sent. Each object in this array must contain a recipient's email address. Each object in the array may optionally contain a recipient's name. You can use either the `reply_to` property or `reply_to_list` property but not both.",
            }),
          subject: z
            .string()
            .min(1)
            .exactOptional()
            .openapi({
              description:
                'The global or _message level_ subject of your email. Subject lines set in personalizations objects will override this global subject line. See line length limits specified in [RFC 2822](https://www.rfc-editor.org/rfc/rfc2822#section-2.1.1) for guidance on subject line character limits.',
            }),
          content: z
            .array(
              z
                .object({
                  type: z
                    .string()
                    .min(1)
                    .openapi({
                      description:
                        'The MIME type of the content assigned in the `value` property of this object (e.g., `text/plain` or `text/html`).',
                    }),
                  value: z
                    .string()
                    .min(1)
                    .openapi({
                      description:
                        'The content of your message in the specified MIME type assigned in the `type` property of this object.',
                    }),
                })
                .openapi({ required: ['type', 'value'] }),
            )
            .exactOptional()
            .openapi({
              description:
                "An array of objects, each containing a message body's content and [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). You must specify at least one MIME type and may include multiple. To include more than one MIME type, add an object for each type to the array.",
            }),
          attachments: z
            .array(
              z
                .object({
                  content: z
                    .string()
                    .min(1)
                    .openapi({ description: 'The Base64 encoded content of the attachment.' }),
                  type: z
                    .string()
                    .min(1)
                    .exactOptional()
                    .openapi({
                      description:
                        'The MIME type of the content you are attaching (e.g., `image/jpeg` or `application/pdf`).',
                    }),
                  filename: z
                    .string()
                    .openapi({
                      description: "The attachment's filename, including the file extension.",
                    }),
                  disposition: DispositionSchema.default('attachment')
                    .exactOptional()
                    .openapi({
                      description:
                        "The attachment's content-disposition specifies how you would like the attachment to be displayed. For example, `inline` results in the attached file being displayed automatically within the message while `attachment` results in the attached file requiring some action to be taken before it is displayed such as opening or downloading the file.",
                    }),
                  content_id: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "The attachment's content ID. The `content_id` is used when the `disposition` is set to `inline` and the attachment is an image, allowing the file to be displayed within the body of the email.",
                    }),
                })
                .openapi({ required: ['content', 'filename'] }),
            )
            .exactOptional()
            .openapi({
              description:
                'An array of objects where you can define any attachments to be included with the message. Each object contains a `content` property, which must be a Base64 encoded string of the attachment itself, and `type`, `filename`, `disposition`, and `content_id` properties that tell SendGrid how to handle the attachment.',
            }),
          template_id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'An email template ID. A template that contains a subject and content—either text or html—will override any subject and content values specified at the `personalizations` or message level. If a template ID begins with `d-`, it is a dynamic template and will work with the `dynamic_template_data` property. If the template ID does not begin with `d-`, it is a standard SendGrid template and will work with the `substitutions` property. See [**How to Send an Email with Dynamic Templates**](https://docs.sendgrid.com/ui/sending-email/how-to-send-an-email-with-dynamic-templates) for more information about working with templates.',
            }),
          headers: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                'A collection of JSON property name and property value pairs allowing you to specify handling instructions for your email. You may not override the following headers: `x-sg-id`, `x-sg-eid`, `received`, `dkim-signature`, `Content-Type`, `Content-Transfer-Encoding`, `To`, `From`, `Subject`, `Reply-To`, `CC`, `BCC`.',
            }),
          categories: z
            .array(z.string().max(255))
            .max(10)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            })
            .exactOptional()
            .openapi({
              description:
                'An array of category names assigned to this message. Categories allow you to group messages by categories you define. Categories should be used sparingly to create general groups that are relevant to you. Categories are not meant to be used to track individual mail sends. For more granular categorization and tracking, use the `custom_args` property. A category name cannot exceed 255 characters. See [**Working with Categories**](https://docs.sendgrid.com/for-developers/sending-email/categories) for more information.',
            }),
          custom_args: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Values that are specific to the entire send that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is assigned to this property will be assumed to be the custom argument that you would like to be used. This parameter is overridden by `custom_args` set at the personalizations level. Total `custom_args` size may not exceed 10,000 bytes.',
            }),
          send_at: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'A [unix timestamp](https://en.wikipedia.org/wiki/Unix_time) allowing you to specify when your email should be sent. A send cannot be scheduled more than 72 hours in advance. This property may be overridden by the `send_at` property set at the personalizations level.',
            }),
          batch_id: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'An ID representing a batch of emails to be sent at the same time. Including a `batch_id` in your request allows you to include this email in that batch. It also enables you to cancel or pause the delivery of that batch. See the [Scheduled Sends API](https://sendgrid.com/docs/api-reference/) for more information about scheduling your email.',
            }),
          asm: z
            .object({
              group_id: z
                .int()
                .openapi({
                  description:
                    'The unsubscribe group to associate with this email. See the [Suppressions API](https://docs.sendgrid.com/api-reference/suppressions/) to manage unsubscribe group IDs.',
                }),
              groups_to_display: z
                .array(z.int())
                .max(25)
                .exactOptional()
                .openapi({
                  description:
                    "An array containing the unsubscribe groups that you would like to be displayed to a recipient on the unsubscribe preferences page. This page is displayed in the recipient's browser when they click the unsubscribe link in your message.",
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'An object allowing you to specify how to handle unsubscribes. With SendGrid, an unsubscribe is the action an email recipient takes when they opt-out of receiving your messages. A suppression is the action you take as a sender to filter or suppress an unsubscribed address from your email send. From the perspective of the recipient, your suppression is the result of their unsubscribe. See [**Suppression Groups**](https://www.twilio.com/docs/sendgrid/api-reference/suppressions-unsubscribe-groups/create-a-new-suppression-group) for more information.',
              required: ['group_id'],
            }),
          ip_pool_name: z
            .string()
            .min(2)
            .max(64)
            .exactOptional()
            .openapi({
              description:
                'The IP Pool that you would like to send this email from. IP Pools allow you to group your dedicated Twilio SendGrid IP addresses in order to have more control over your deliverability. See [**IP Pools**](https://docs.sendgrid.com/ui/account-and-settings/ip-pools) for more information.',
            }),
          mail_settings: z
            .object({
              bypass_list_management: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email. This filter cannot be combined with any other bypass filters. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.',
                  required: [],
                }),
              bypass_spam_management: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to bypass the spam report list to ensure that the email is delivered to recipients. Bounce and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.',
                  required: [],
                }),
              bypass_bounce_management: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to bypass the bounce list to ensure that the email is delivered to recipients. Spam report and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.',
                  required: [],
                }),
              bypass_unsubscribe_management: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to bypass the global unsubscribe list to ensure that the email is delivered to recipients. Bounce and spam report lists will still be checked; addresses on these other lists will not receive the message. This filter applies only to global unsubscribes and will not bypass group unsubscribes. This filter cannot be combined with the `bypass_list_management` filter. See the [the "Bypass suppressions" section of our **Suppressions Overview**](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.',
                  required: [],
                }),
              footer: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                  text: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The plain text content of your footer.' }),
                  html: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The HTML content of your footer.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Inserts a custom footer at the bottom of the text and HTML bodies of your messages. Use the `html` and `text` properties to include the content of the footers to be inserted.',
                  required: [],
                }),
              sandbox_mode: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Sandbox Mode allows you to send a test email to ensure that your request body is valid and formatted correctly.',
                  required: [],
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'A collection of different mail settings that you can use to specify how you would like this email to be handled. Mail settings provide extra functionality to your mail send. See [**Mail Settings**](https://docs.sendgrid.com/ui/account-and-settings/mail) for more information.',
              required: [],
            }),
          tracking_settings: z
            .object({
              click_tracking: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                  enable_text: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Indicates if this setting should be included in the `text/plain` portion of your email.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Allows you to track if a recipient clicked a link in your email.',
                  required: [],
                }),
              open_tracking: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                  substitution_tag: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to track if the email was opened by including a single transparent pixel image in the body of the message content. When the message is opened, a request for the pixel is sent. That request indicates to Twilio SendGrid that the message was opened.',
                  required: [],
                }),
              subscription_tracking: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                  text: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Text to be appended to the email with the subscription tracking link.',
                    }),
                  html: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'HTML to be appended to the email with the subscription tracking link.',
                    }),
                  substitution_tag: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "A tag that will be replaced with the unsubscribe URL. If this property is used, it will override both the `text` and `html` properties. The URL of the link will be placed at the substitution tag's location in the message body with no additional formatting.",
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to insert a subscription management link at the bottom of the text and HTML bodies of your email. If you would like to specify the location of the link within your email, you may use the `substitution_tag` property.',
                  required: [],
                }),
              ganalytics: z
                .object({
                  enable: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Indicates if this setting is enabled.' }),
                  utm_source: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Name of the referrer source. (e.g., Google, SomeDomain.com, or Marketing Email)',
                    }),
                  utm_medium: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Name of the marketing medium. (e.g., Email)' }),
                  utm_term: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Used to identify any paid keywords.' }),
                  utm_content: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Used to differentiate your campaign from advertisements.',
                    }),
                  utm_campaign: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the campaign.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Allows you to enable tracking provided by Google Analytics. See [**Google Analytics and SendGrid Statistics**](https://docs.sendgrid.com/ui/analytics-and-reporting/google-analytics) for more information about this property.',
                  required: [],
                }),
            })
            .exactOptional()
            .openapi({
              description:
                'Settings to determine how you would like to track the metrics of how your recipients interact with your email. See [**Tracking Settings**](https://docs.sendgrid.com/ui/account-and-settings/tracking) for more information.',
              required: [],
            }),
        })
        .openapi({ required: ['personalizations', 'from'] }),
      examples: {
        MailSendDynamicTemplate: {
          description: 'A Mail Send request that uses a SendGrid Dynamic Template.',
          value: {
            personalizations: [
              {
                to: [
                  { email: 'alex@example.com', name: 'Alex' },
                  { email: 'bola@example.com', name: 'Bola' },
                ],
                dynamic_template_data: {
                  subject: 'Hello, Alex',
                  customer_name: 'Alex',
                  confirmation_number: '123abc456def789hij0',
                },
              },
            ],
            from: { email: 'orders@example.com', name: 'Example Order Confirmation' },
            reply_to: {
              email: 'customer_service@example.com',
              name: 'Example Customer Service Team',
            },
            attachments: [
              {
                content:
                  'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==',
                filename: 'index.html',
                type: 'text/html',
                disposition: 'attachment',
              },
            ],
            template_id: 'd-123abc456def789hij0klm123nop456qrs789tuv0xyz',
            categories: ['cake', 'pie', 'baking'],
            send_at: 1617260400,
            batch_id: 'AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl',
            asm: { group_id: 12345, groups_to_display: [12345] },
            ip_pool_name: 'transactional email',
            mail_settings: {
              bypass_list_management: { enable: false },
              footer: { enable: false },
              sandbox_mode: { enable: false },
            },
            tracking_settings: {
              click_tracking: { enable: true, enable_text: false },
              open_tracking: { enable: true, substitution_tag: '%open-track%' },
              subscription_tracking: { enable: false },
            },
          },
        },
        MailSendNoTemplate: {
          description: 'A Mail Send request with directly included content and no template.',
          value: {
            personalizations: [
              {
                to: [
                  { email: 'alex@example.com', name: 'Alex' },
                  { email: 'bola@example.com', name: 'Bola' },
                ],
                cc: [{ email: 'charlie@example.com', name: 'Charlie' }],
                bcc: [{ email: 'dana@example.com', name: 'Dana' }],
              },
              {
                from: { email: 'sales@example.com', name: 'Example Sales Team' },
                to: [{ email: 'ira@example.com', name: 'Ira' }],
                bcc: [{ email: 'lee@example.com', name: 'Lee' }],
              },
            ],
            from: { email: 'orders@example.com', name: 'Example Order Confirmation' },
            reply_to: {
              email: 'customer_service@example.com',
              name: 'Example Customer Service Team',
            },
            subject: 'Your Example Order Confirmation',
            content: [
              {
                type: 'text/html',
                value:
                  '<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>',
              },
            ],
            attachments: [
              {
                content:
                  'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==',
                filename: 'index.html',
                type: 'text/html',
                disposition: 'attachment',
              },
            ],
            categories: ['cake', 'pie', 'baking'],
            send_at: 1617260400,
            batch_id: 'AsdFgHjklQweRTYuIopzXcVBNm0aSDfGHjklmZcVbNMqWert1znmOP2asDFjkl',
            asm: { group_id: 12345, groups_to_display: [12345] },
            ip_pool_name: 'transactional email',
            mail_settings: {
              bypass_list_management: { enable: false },
              footer: { enable: false },
              sandbox_mode: { enable: false },
            },
            tracking_settings: {
              click_tracking: { enable: true, enable_text: false },
              open_tracking: { enable: true, substitution_tag: '%open-track%' },
              subscription_tracking: { enable: false },
            },
          },
        },
      },
    },
  },
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Twilio SendGrid requires you to authenticate with its APIs using an API key. The API key must be sent as a bearer token in the Authorization header.',
}

export const postV3MailBatchRoute = createRoute({
  method: 'post',
  path: '/v3/mail/batch',
  tags: ['Mail Batch'],
  summary: 'Create a batch ID.',
  description:
    "**This operation allows you to generate a new mail batch ID.**\n\n\nOnce a batch ID is created, you can associate it with a mail send by passing\nit in the request body of the [Mail Send operation](https://docs.sendgrid.com/api-reference/mail-send/mail-send).\nThis makes it possible to group multiple requests to the Mail Send operation\nby assigning them the same batch ID.\n\n\nA batch ID that's associated with a mail send can be used to access and modify the associated send. For example, you can pause or cancel a send using its batch ID. See the [Scheduled Sends API](https://www.twilio.com/docs/sendgrid/api-reference/cancel-scheduled-sends) for more information about pausing and cancelling a mail send.\n",
  operationId: 'CreateMailBatch',
  request: { headers: z.object({ 'on-behalf-of': OnBehalfOfParamsSchema }) },
  responses: {
    201: MailBatch2xxResponse,
    400: MailBatch400Response,
    401: MailBatch401Response,
    403: MailBatch403Response,
    404: MailBatch404Response,
    405: MailBatch405Response,
    500: MailBatch500Response,
  },
})

export const getV3MailBatchBatchIdRoute = createRoute({
  method: 'get',
  path: '/v3/mail/batch/{batch_id}',
  tags: ['Mail Batch'],
  summary: 'Validate a batch ID.',
  description:
    '**This operation allows you to validate a mail batch ID.**\n\nIf you provide a valid batch ID, this operation will return a `200` status code and the batch ID itself.\nIf you provide an invalid batch ID, you will receive a `400` level status code and an error message.\nA batch ID does not need to be assigned to a send to be considered valid. A successful response means only that the batch ID has been created, but it does not indicate that the ID has been assigned to a send.',
  operationId: 'GetMailBatch',
  request: {
    params: z.object({ batch_id: BatchIdParamsSchema }),
    headers: z.object({ 'on-behalf-of': OnBehalfOfParamsSchema }),
  },
  responses: {
    200: MailBatch2xxResponse,
    400: MailBatch400Response,
    401: MailBatch401Response,
    403: MailBatch403Response,
    405: MailBatch405Response,
    500: MailBatch500Response,
  },
})

export const postV3MailSendRoute = createRoute({
  method: 'post',
  path: '/v3/mail/send',
  tags: ['Mail Send'],
  summary: 'Send Email with Twilio SendGrid.',
  description:
    "*The Mail Send operation allows you to send email over SendGrid's v3 Web API*\n\nFor an overview of this API, including its features and limitations, please see the [Mail Send API overview page](https://www.twilio.com/docs/sendgrid/api-reference/mail-send)\n\nThe overview page also includes links to SendGrid's Email API quickstarts and helper libraries to get you working with this endpoint even faster.\n",
  operationId: 'SendMail',
  request: {
    headers: z.object({ 'Content-Encoding': MailBodyCompressionParamsSchema }),
    body: PostMailSendRequestBody,
  },
  responses: {
    202: { description: 'Accepted' },
    400: PostMailSend400Response,
    401: PostMailSend401Response,
    403: PostMailSend403Response,
    404: PostMailSend404Response,
    405: PostMailSend405Response,
    413: PostMailSend413Response,
    500: PostMailSend500Response,
  },
})
