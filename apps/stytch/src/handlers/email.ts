import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bMagicLinksEmailDiscoverySendRoute,
  postV1B2bOtpsEmailDiscoveryAuthenticateRoute,
  postV1B2bOtpsEmailDiscoverySendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailHandler = app
  .openapi(postV1B2bMagicLinksEmailDiscoverySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailDiscoverySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bOtpsEmailDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
