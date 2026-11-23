import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth2V2UserinfoRoute,
  getUserinfoV2MeRoute,
  postOauth2V2TokeninfoRoute,
} from './routes'
import {
  getOauth2V2UserinfoRouteHandler,
  getUserinfoV2MeRouteHandler,
  postOauth2V2TokeninfoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOauth2V2TokeninfoRoute, postOauth2V2TokeninfoRouteHandler)
  .openapi(getOauth2V2UserinfoRoute, getOauth2V2UserinfoRouteHandler)
  .openapi(getUserinfoV2MeRoute, getUserinfoV2MeRouteHandler)

export default app
