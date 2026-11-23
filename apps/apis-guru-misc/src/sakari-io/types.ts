type TokenRequest = {
  client_id?: string | undefined
  client_secret?: string | undefined
  grant_type?: string | undefined
}
type TokenResponse = { access_token?: string | undefined; token_type?: string | undefined }
type Campaign = { id?: string | undefined }
type CampaignsResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  pagination?:
    | { limit?: number | undefined; offset?: number | undefined; totalCount?: number | undefined }
    | undefined
  success?: boolean | undefined
  data?: Campaign[] | undefined
}
type ErrorResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  success?: boolean | undefined
}
type CampaignRequest = {
  filters?:
    | {
        attributes?: string[] | undefined
        contacts?: string[] | undefined
        tags?: string[] | undefined
      }
    | undefined
  template?: string | undefined
  trigger?: { code?: 'M' | 'S' | 'FU' | undefined } | undefined
}
type CampaignResponse = { data?: Campaign | undefined; success?: boolean | undefined }
type Tag = { tag?: string | undefined; visible?: boolean | undefined }
type Updated = {
  at?: string | undefined
  by?:
    | { firstName?: string | undefined; id?: string | undefined; lastName?: string | undefined }
    | undefined
}
type Error = { code?: string | undefined; description?: string | undefined }
type Contact = {
  email?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  mobile?: { country?: string | undefined; number?: string | undefined } | undefined
  attributes?: { [x: string]: unknown } | undefined
  tags?: Tag[] | undefined
  created?: Updated | undefined
  error?: Error | undefined
  updated?: Updated | undefined
  valid?: boolean | undefined
}
type ContactsResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  pagination?:
    | { limit?: number | undefined; offset?: number | undefined; totalCount?: number | undefined }
    | undefined
  success?: boolean | undefined
  data?: Contact[] | undefined
}
type ContactRequest = {
  email?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  mobile?: { country?: string | undefined; number?: string | undefined } | undefined
  attributes?: { [x: string]: unknown } | undefined
  tags?: Tag[] | undefined
}
type ContactUploadResponse = {
  data?:
    | {
        contacts?: Contact[] | undefined
        errors?: Contact[] | undefined
        inserted?: number | undefined
        submitted?: number | undefined
        success?: number | undefined
        updated?: number | undefined
      }
    | undefined
  success?: boolean | undefined
}
type ContactResponse = { data?: Contact | undefined; success?: boolean | undefined }
type ContactIdentifiers = {
  email?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  mobile?: { country?: string | undefined; number?: string | undefined } | undefined
}
type Message = {
  contact?: ContactIdentifiers | undefined
  conversation?: { id?: string | undefined } | undefined
  created?: Updated | undefined
  error?: Error | undefined
  id?: string | undefined
  media?:
    | { filename?: string | undefined; type?: string | undefined; url?: string | undefined }[]
    | undefined
  message?: string | undefined
  outgoing?: boolean | undefined
  phoneNumber?: string | undefined
  price?: number | undefined
  read?: boolean | undefined
  segments?: number | undefined
  status?: string | undefined
  template?: string | undefined
  updated?: Updated | undefined
}
type PhoneNumber = {
  active?: boolean | undefined
  country?: string | undefined
  number?: string | undefined
}
type Conversation = {
  closed?: boolean | undefined
  contact?: ContactIdentifiers | undefined
  created?: Updated | undefined
  id?: string | undefined
  lastMessage?: Message | undefined
  phoneNumber?: PhoneNumber | undefined
  unread?: string[] | undefined
  updated?: Updated | undefined
}
type ConversationsResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  pagination?:
    | { limit?: number | undefined; offset?: number | undefined; totalCount?: number | undefined }
    | undefined
  success?: boolean | undefined
  data?: Conversation[] | undefined
}
type ConversationResponse = { data?: Conversation | undefined; success?: boolean | undefined }
type MessagesResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  pagination?:
    | { limit?: number | undefined; offset?: number | undefined; totalCount?: number | undefined }
    | undefined
  success?: boolean | undefined
  data?: Message[] | undefined
}
type SendMessagesRequest = {
  contacts?: ContactRequest[] | undefined
  conversationStrategy?: string | undefined
  conversations?: string[] | undefined
  filters?:
    | { attributes?: { [x: string]: unknown }[] | undefined; tags?: string[] | undefined }
    | undefined
  media?: { url?: string | undefined }[] | undefined
  phoneNumberFilter?: { group?: { id?: string | undefined } | undefined } | undefined
  template?: string | undefined
  type?: 'SMS' | 'MMS' | undefined
}
type SendMessagesResponse = {
  data?:
    | {
        estimatedPrice?: number | undefined
        invalid?: Contact[] | undefined
        jobId?: string | undefined
        messages?: Message[] | undefined
        requested?: number | undefined
        valid?: number | undefined
      }
    | undefined
}
type MessageResponse = { data?: Message | undefined; success?: boolean | undefined }
type Template = {
  name?: string | undefined
  template?: string | undefined
  type?: 'SMS' | 'Web' | undefined
  id?: string | undefined
}
type TemplatesResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  pagination?:
    | { limit?: number | undefined; offset?: number | undefined; totalCount?: number | undefined }
    | undefined
  success?: boolean | undefined
  data?: Template[] | undefined
}
type TemplateRequest = {
  name?: string | undefined
  template?: string | undefined
  type?: 'SMS' | 'Web' | undefined
}
type TemplateResponse = { data?: Template | undefined; success?: boolean | undefined }
type Webhook = {
  eventTypes?:
    | (
        | 'message-received'
        | 'message-status'
        | 'message-sent'
        | 'conversation-closed'
        | 'contact-created'
        | 'contact-updated'
        | 'contact-removed'
      )[]
    | undefined
  url?: string | undefined
}
type WebhooksResponse = {
  error?: { code?: string | undefined; message?: string | undefined } | undefined
  pagination?:
    | { limit?: number | undefined; offset?: number | undefined; totalCount?: number | undefined }
    | undefined
  success?: boolean | undefined
  data?: Webhook[] | undefined
}
type WebhookResponse = { data?: Webhook | undefined; success?: boolean | undefined }
type ShareFileResponse = {
  data?: { expires?: string | undefined; link?: string | undefined } | undefined
  success?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth2/token': {
      $post: {
        input: { json: TokenRequest }
        output: TokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/campaigns': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                name?: string | undefined
              }
            }
            output: CampaignsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post: {
        input: { param: { accountId: string } } & { json: CampaignRequest }
        output: CampaignResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/accounts/:accountId/campaigns/:campaignId': {
      $delete: {
        input: { param: { accountId: string; campaignId: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { accountId: string; campaignId: string } }
        output: CampaignResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; campaignId: string } }
        output: CampaignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/contacts': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                firstName?: string | undefined
                lastName?: string | undefined
                mobile?: string | undefined
                email?: string | undefined
                tags?: string | undefined
              }
            }
            output: ContactsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                firstName?: string | undefined
                lastName?: string | undefined
                mobile?: string | undefined
                email?: string | undefined
                tags?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                firstName?: string | undefined
                lastName?: string | undefined
                mobile?: string | undefined
                email?: string | undefined
                tags?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post: {
        input: { param: { accountId: string } } & {
          query: { mergeStrategy?: 'append' | 'core' | 'remove' | undefined }
        } & { json: ContactRequest | string }
        output: ContactsResponse | ContactUploadResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/accounts/:accountId/contacts/:contactId': {
      $delete: {
        input: { param: { accountId: string; contactId: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { accountId: string; contactId: string } }
        output: ContactResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; contactId: string } }
        output: ContactResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/conversations': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: { offset?: bigint | undefined; limit?: bigint | undefined }
            }
            output: ConversationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: { offset?: bigint | undefined; limit?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & {
              query: { offset?: bigint | undefined; limit?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/accounts/:accountId/conversations/:conversationId': {
      $get: {
        input: { param: { accountId: string; conversationId: string } }
        output: ConversationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/conversations/:conversationId/close': {
      $put: {
        input: { param: { accountId: string; conversationId: string } }
        output: ConversationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/messages': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            offset?: bigint | undefined
            limit?: bigint | undefined
            contactId?: string | undefined
            conversationId?: string | undefined
          }
        }
        output: MessagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & { json: SendMessagesRequest }
        output: SendMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/messages/:messageId': {
      $get: {
        input: { param: { accountId: string; messageId: string } }
        output: MessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/templates': {
      $get:
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                name?: string | undefined
              }
            }
            output: TemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { accountId: string } } & {
              query: {
                offset?: bigint | undefined
                limit?: bigint | undefined
                name?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post: {
        input: { param: { accountId: string } } & { json: TemplateRequest }
        output: TemplatesResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/accounts/:accountId/templates/:templateId': {
      $delete: {
        input: { param: { accountId: string; templateId: string } }
        output: { success?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { accountId: string; templateId: string } }
        output: TemplateResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; templateId: string } }
        output: TemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/webhooks': {
      $get: {
        input: { param: { accountId: string } }
        output: WebhooksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          json: {
            eventTypes?:
              | (
                  | 'contact-created'
                  | 'contact-updated'
                  | 'contact-removed'
                  | 'message-received'
                  | 'message-sent'
                  | 'message-status'
                  | 'conversation-started'
                  | 'contact-opt-out'
                  | 'contact-opt-in'
                  | 'list-opt-out'
                  | 'list-opt-in'
                )[]
              | undefined
            url?: string | undefined
          }
        }
        output: WebhookResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:accountId/webhooks/:url': {
      $delete: {
        input: { param: { accountId: string; url: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/tools/sharefile': {
      $post:
        | {
            input: { json: File } & { form: { media?: File | undefined } }
            output: ShareFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: File } & { form: { media?: File | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: File } & { form: { media?: File | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
