import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1B2bMagicLinksDiscoveryAuthenticateRoute,
  postV1B2bMagicLinksEmailInviteRoute,
  postV1B2bMagicLinksEmailLoginOrSignupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BMagicLinksHandler = app
  .openapi(postV1B2bMagicLinksEmailLoginOrSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksEmailInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bMagicLinksDiscoveryAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
