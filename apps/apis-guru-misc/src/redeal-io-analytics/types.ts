type EventRecord = {
  agent: string
  browsertype: string
  channel: string
  click: string
  clicks: number
  code: string
  company: string
  contact: string
  cost: number
  costcurrency: string
  currency: string
  deal: string
  'deal name': string
  delay: number
  denyreason: string
  device: string
  devicetype: string
  email: string
  emailaddrsha256: string
  flow: string
  flowstep: string
  flowtype: string
  impression: string
  ip: string
  latitude: string
  longitude: string
  optin: string
  os: string
  resolution: string
  revenue: number
  role: string
  session: string
  site: string
  'site name': string
  timestamp: string
  total: number
  user: string
  userlanguage: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/events': {
      $get:
        | {
            input: {
              query: {
                company?: string | undefined
                site?: string | undefined
                deal?: string | undefined
                type?: 'all' | 'clicks' | 'contacts' | undefined
                nexttoken?: string | undefined
                queryexecutionid?: string | undefined
              }
            }
            output: EventRecord[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                company?: string | undefined
                site?: string | undefined
                deal?: string | undefined
                type?: 'all' | 'clicks' | 'contacts' | undefined
                nexttoken?: string | undefined
                queryexecutionid?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  },
  '/'
>
export default routes
