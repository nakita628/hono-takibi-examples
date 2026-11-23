type Pagination = {
  first?: string | undefined
  last?: string | undefined
  next?: string | undefined
  previous?: string | undefined
  total?: number | undefined
}
type AbuseTicketList = { pagination?: Pagination | undefined; ticketIds: string[] }
type ErrorField = {
  code: string
  message?: string | undefined
  path: string
  pathRelated?: string | undefined
}
type Error = {
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
  stack?: string[] | undefined
}
type AbuseTicketCreate = {
  info?: string | undefined
  infoUrl?: string | undefined
  intentional?: boolean | undefined
  proxy?: string | undefined
  source?: string | undefined
  target?: string | undefined
  type?:
    | 'A_RECORD'
    | 'CHILD_ABUSE'
    | 'CONTENT'
    | 'FRAUD_WIRE'
    | 'IP_BLOCK'
    | 'MALWARE'
    | 'NETWORK_ABUSE'
    | 'PHISHING'
    | 'SPAM'
    | undefined
}
type AbuseTicketId = { u_number?: string | undefined }
type AbuseTicket = {
  closed: boolean
  closedAt: string
  createdAt: string
  domainIp: string
  reporter: string
  source: string
  target: string
  ticketId: string
  type:
    | 'A_RECORD'
    | 'CHILD_ABUSE'
    | 'CONTENT'
    | 'FRAUD_WIRE'
    | 'IP_BLOCK'
    | 'MALWARE'
    | 'NETWORK_ABUSE'
    | 'PHISHING'
    | 'SPAM'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/abuse/tickets': {
      $get:
        | {
            input: {
              query: {
                type?:
                  | 'A_RECORD'
                  | 'CHILD_ABUSE'
                  | 'CONTENT'
                  | 'FRAUD_WIRE'
                  | 'IP_BLOCK'
                  | 'MALWARE'
                  | 'NETWORK_ABUSE'
                  | 'PHISHING'
                  | 'SPAM'
                  | undefined
                closed?: boolean | undefined
                sourceDomainOrIp?: string | undefined
                target?: string | undefined
                createdStart?: string | undefined
                createdEnd?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AbuseTicketList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                type?:
                  | 'A_RECORD'
                  | 'CHILD_ABUSE'
                  | 'CONTENT'
                  | 'FRAUD_WIRE'
                  | 'IP_BLOCK'
                  | 'MALWARE'
                  | 'NETWORK_ABUSE'
                  | 'PHISHING'
                  | 'SPAM'
                  | undefined
                closed?: boolean | undefined
                sourceDomainOrIp?: string | undefined
                target?: string | undefined
                createdStart?: string | undefined
                createdEnd?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                type?:
                  | 'A_RECORD'
                  | 'CHILD_ABUSE'
                  | 'CONTENT'
                  | 'FRAUD_WIRE'
                  | 'IP_BLOCK'
                  | 'MALWARE'
                  | 'NETWORK_ABUSE'
                  | 'PHISHING'
                  | 'SPAM'
                  | undefined
                closed?: boolean | undefined
                sourceDomainOrIp?: string | undefined
                target?: string | undefined
                createdStart?: string | undefined
                createdEnd?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: {
              query: {
                type?:
                  | 'A_RECORD'
                  | 'CHILD_ABUSE'
                  | 'CONTENT'
                  | 'FRAUD_WIRE'
                  | 'IP_BLOCK'
                  | 'MALWARE'
                  | 'NETWORK_ABUSE'
                  | 'PHISHING'
                  | 'SPAM'
                  | undefined
                closed?: boolean | undefined
                sourceDomainOrIp?: string | undefined
                target?: string | undefined
                createdStart?: string | undefined
                createdEnd?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 422
          }
      $post:
        | { input: { json: AbuseTicketCreate }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: AbuseTicketCreate }
            output: AbuseTicketId
            outputFormat: 'text'
            status: 201
          }
        | { input: { json: AbuseTicketCreate }; output: Error; outputFormat: 'text'; status: 401 }
        | { input: { json: AbuseTicketCreate }; output: Error; outputFormat: 'text'; status: 403 }
        | { input: { json: AbuseTicketCreate }; output: Error; outputFormat: 'text'; status: 422 }
    }
  } & {
    '/v1/abuse/tickets/:ticketId': {
      $get:
        | {
            input: { param: { ticketId: string } }
            output: AbuseTicket
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticketId: string } }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { param: { ticketId: string } }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { param: { ticketId: string } }
            output: Error
            outputFormat: 'text'
            status: 404
          }
    }
  },
  '/'
>
export default routes
