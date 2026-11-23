type ResourceVersions = string
type ResourceVersionsList = ResourceVersions[]
type EventType = {
  name: string
  description?: string | undefined
  status?: string | undefined
  resource_versions?: ResourceVersionsList | undefined
}
type DefinitionsEventTypeList = EventType[]
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type DefinitionsLinkDescriptionList = LinkDescription[]
type Webhook = {
  id?: string | undefined
  url: string
  event_types: DefinitionsEventTypeList
  links?: DefinitionsLinkDescriptionList | undefined
}
type ErrorDetails_2 = {
  field?: string | undefined
  value?: string | undefined
  location?: string | undefined
  issue: string
  description?: string | undefined
}
type ErrorDetailsList = ErrorDetails_2[]
type LinkDescriptionList = LinkDescription[]
type Error_2 = {
  name: string
  message: string
  debug_id: string
  information_link?: string | undefined
  details?: ErrorDetailsList | undefined
  links?: LinkDescriptionList | undefined
}
type WebhookList2 = Webhook[]
type WebhookList = { webhooks?: WebhookList2 | undefined }
type Patch = {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path?: string | undefined
  value?:
    | (number | number | string | boolean | unknown[] | { [x: string]: unknown } | null)
    | undefined
  from?: string | undefined
}
type PatchRequest = Patch[]
type EventTypeList2 = EventType[]
type EventTypeList = { event_types?: EventTypeList2 | undefined }
type WebhooksLookup = {
  id?: string | undefined
  client_id?: string | undefined
  links?: DefinitionsLinkDescriptionList | undefined
}
type WebhooksLookupList = WebhooksLookup[]
type WebhookLookupList = { webhooks_lookups?: WebhooksLookupList | undefined }
type EventVersion = string
type ResourceVersion = string
type Resource = { [x: string]: unknown }
type Event = {
  id?: string | undefined
  create_time?: string | undefined
  resource_type?: string | undefined
  event_version?: EventVersion | undefined
  event_type?: string | undefined
  summary?: string | undefined
  resource_version?: ResourceVersion | undefined
  resource?: Resource | undefined
  links?: LinkDescriptionList | undefined
}
type VerifyWebhookSignature = {
  auth_algo: string
  cert_url: string
  transmission_id: string
  transmission_sig: string
  transmission_time: string
  webhook_id: string
  webhook_event: Event
}
type VerifyWebhookSignatureResponse = { verification_status: 'SUCCESS' | 'FAILURE' }
type EventList2 = Event[]
type EventList = {
  events?: EventList2 | undefined
  count?: number | undefined
  links?: LinkDescriptionList | undefined
}
type WebhookIds = string
type WebhookIdsList = WebhookIds[]
type EventResend = { webhook_ids?: WebhookIdsList | undefined }
type SimulateEvent = {
  webhook_id?: string | undefined
  url?: string | undefined
  event_type: string
  resource_version?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/notifications/webhooks': {
      $post:
        | { input: { json: Webhook }; output: Webhook; outputFormat: 'json'; status: 201 }
        | { input: { json: Webhook }; output: Error_2; outputFormat: 'json'; status: 200 }
      $get:
        | {
            input: { query: { anchor_type?: 'APPLICATION' | 'ACCOUNT' | undefined } }
            output: WebhookList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { anchor_type?: 'APPLICATION' | 'ACCOUNT' | undefined } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { webhook_id: string } } & { json: PatchRequest }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & { json: PatchRequest }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { webhook_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: string } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/webhooks/:webhook_id/event-types': {
      $get:
        | {
            input: { param: { webhook_id: string } }
            output: EventTypeList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/webhooks-lookup': {
      $post:
        | { input: {}; output: WebhooksLookup; outputFormat: 'json'; status: 201 }
        | { input: {}; output: Error_2; outputFormat: 'json'; status: 200 }
      $get:
        | { input: {}; output: WebhookLookupList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error_2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/notifications/webhooks-lookup/:webhook_lookup_id': {
      $get:
        | {
            input: { param: { webhook_lookup_id: string } }
            output: WebhooksLookup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_lookup_id: string } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { webhook_lookup_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_lookup_id: string } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/verify-webhook-signature': {
      $post:
        | {
            input: { json: VerifyWebhookSignature }
            output: VerifyWebhookSignatureResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VerifyWebhookSignature }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/webhooks-event-types': {
      $get:
        | { input: {}; output: EventTypeList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error_2; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/notifications/webhooks-events': {
      $get:
        | {
            input: {
              query: {
                page_size?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                transaction_id?: string | undefined
                event_type?: string | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_size?: number | undefined
                start_time?: string | undefined
                end_time?: string | undefined
                transaction_id?: string | undefined
                event_type?: string | undefined
              }
            }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/webhooks-events/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/webhooks-events/:event_id/resend': {
      $post:
        | {
            input: { param: { event_id: string } } & { json: EventResend }
            output: Event
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { event_id: string } } & { json: EventResend }
            output: Error_2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/notifications/simulate-event': {
      $post:
        | { input: { json: SimulateEvent }; output: Event; outputFormat: 'json'; status: 202 }
        | { input: { json: SimulateEvent }; output: Error_2; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
