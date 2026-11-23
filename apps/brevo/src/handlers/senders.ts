import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSendersDomainsDomainNameRoute,
  deleteSendersSenderIdRoute,
  getSendersDomainsDomainNameRoute,
  getSendersDomainsRoute,
  getSendersIpsRoute,
  getSendersRoute,
  getSendersSenderIdIpsRoute,
  postSendersDomainsRoute,
  postSendersRoute,
  putSendersDomainsDomainNameAuthenticateRoute,
  putSendersSenderIdRoute,
  putSendersSenderIdValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sendersHandler = app
  .openapi(getSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getSendersIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSendersSenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendersSenderIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSendersSenderIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
