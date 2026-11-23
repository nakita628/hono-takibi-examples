type IpRange = {
  cidr: string
  description: string
  direction: 'EGRESS' | 'INGRESS'
  service: 'API' | 'DNS' | 'EMAIL' | 'TEST_SERVICE' | 'WEB_SCRAPING'
}
type CollectionResponseIpRangeNoPaging = { results: IpRange[] }
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type WebhookSubscription = {
  appId: number
  createdAt: bigint
  createdByUserId?: number | undefined
  id: bigint
  portalId: number
  updatedAt: bigint
  webhookUrl: string
}
type CollectionResponseWebhookSubscriptionNoPaging = { results: WebhookSubscription[] }
type WebhookSubscriptionRequest = { webhookUrl: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/meta/network-origins/2026-09/ip-ranges': {
      $get:
        | {
            input: {
              query: {
                direction?: ('INGRESS' | 'EGRESS')[] | undefined
                service?: ('EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING' | 'TEST_SERVICE')[] | undefined
              }
            }
            output: CollectionResponseIpRangeNoPaging
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: ('INGRESS' | 'EGRESS')[] | undefined
                service?: ('EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING' | 'TEST_SERVICE')[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/meta/network-origins/2026-09/ip-ranges/simple': {
      $get:
        | {
            input: {
              query: {
                direction?: ('INGRESS' | 'EGRESS')[] | undefined
                service?: ('EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING' | 'TEST_SERVICE')[] | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: ('INGRESS' | 'EGRESS')[] | undefined
                service?: ('EMAIL' | 'API' | 'DNS' | 'WEB_SCRAPING' | 'TEST_SERVICE')[] | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId': {
      $get:
        | {
            input: { param: { appId: string } }
            output: CollectionResponseWebhookSubscriptionNoPaging
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { appId: string } }; output: Error; outputFormat: 'text'; status: 200 }
      $post:
        | {
            input: { param: { appId: string } } & { json: WebhookSubscriptionRequest }
            output: WebhookSubscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { appId: string } } & { json: WebhookSubscriptionRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId/:subscription-id': {
      $delete: {
        input: { param: { appId: string; 'subscription-id': bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/meta/network-origins/2026-09/ip-ranges/webhook-subscriptions/:appId/:subscription-id/test': {
      $post: {
        input: { param: { appId: string; 'subscription-id': bigint } }
        output: Error
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
