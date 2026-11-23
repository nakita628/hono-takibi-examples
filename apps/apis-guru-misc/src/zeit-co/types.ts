type Webhook = {
  configurationId: string
  createdAt: number
  events: string[]
  id: string
  name: string
  ownerId?: string | undefined
  url: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/integrations/webhooks': {
      $get: {
        input: { query: { teamId?: string | undefined } }
        output: Webhook[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { teamId?: string | undefined } } & { json: { name: string; url: string } }
        output: Webhook
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/integrations/webhooks/:id': {
      $delete: {
        input: { query: { teamId?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v4/domains': {
      $get: {
        input: { query: { teamId?: string | undefined } }
        output: {
          domains: {
            boughtAt: number | null
            cdnEnabled: boolean
            createdAt: number | null
            expiresAt: number | null
            id: string
            intendedNameservers: string[]
            name: string
            nameservers: string[]
            nsVerifiedAt: number | null
            orderedAt?: (number | null) | undefined
            serviceType: 'zeit.world' | 'external' | 'na'
            transferredAt?: (number | null) | undefined
            txtVerifiedAt: number | null
            verificationRecord: string
            verified: boolean
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/domains/:name': {
      $get:
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } }
            output: {
              domain: {
                aliases: { alias: string; created: number; id: string }[]
                boughtAt: number | null
                cdnEnabled: boolean
                certs: { cns: string[]; created: number; id: string }[]
                createdAt: number | null
                creator: {
                  customerId?: string | undefined
                  email: string
                  id: string
                  isDomainReseller?: boolean | undefined
                  username: string
                }
                expiresAt: number | null
                id: string
                intendedNameservers: string[]
                name: string
                nameservers: string[]
                nsVerifiedAt: number | null
                orderedAt?: (number | null) | undefined
                serviceType: 'zeit.world' | 'external' | 'na'
                suffix: boolean
                transferredAt?: (number | null) | undefined
                txtVerifiedAt: number | null
                verificationRecord: string
                verified: boolean
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { teamId?: string | undefined } }
            output: { error: { code: 'not_found'; message: string; name: string } }
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
