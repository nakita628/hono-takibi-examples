import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute,
  getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const federationHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionFederationInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionFederationInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
