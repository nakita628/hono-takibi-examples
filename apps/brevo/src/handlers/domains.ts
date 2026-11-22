import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSendersDomainsDomainNameRoute,
  getSendersDomainsDomainNameRoute,
  getSendersDomainsRoute,
  postSendersDomainsRoute,
  putSendersDomainsDomainNameAuthenticateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getSendersDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSendersDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendersDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSendersDomainsDomainNameAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
