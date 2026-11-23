import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth2V21TokensKidRoute,
  getOauth2V21VerifyRoute,
  postOauth2V21RevokeRoute,
  postOauth2V21TokenRoute,
  postOauth2V3TokenRoute,
  postV2OauthAccessTokenRoute,
  postV2OauthRevokeRoute,
  postV2OauthVerifyRoute,
} from './routes'
import {
  getOauth2V21TokensKidRouteHandler,
  getOauth2V21VerifyRouteHandler,
  postOauth2V21RevokeRouteHandler,
  postOauth2V21TokenRouteHandler,
  postOauth2V3TokenRouteHandler,
  postV2OauthAccessTokenRouteHandler,
  postV2OauthRevokeRouteHandler,
  postV2OauthVerifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOauth2V3TokenRoute, postOauth2V3TokenRouteHandler)
  .openapi(getOauth2V21TokensKidRoute, getOauth2V21TokensKidRouteHandler)
  .openapi(postOauth2V21TokenRoute, postOauth2V21TokenRouteHandler)
  .openapi(getOauth2V21VerifyRoute, getOauth2V21VerifyRouteHandler)
  .openapi(postOauth2V21RevokeRoute, postOauth2V21RevokeRouteHandler)
  .openapi(postV2OauthAccessTokenRoute, postV2OauthAccessTokenRouteHandler)
  .openapi(postV2OauthVerifyRoute, postV2OauthVerifyRouteHandler)
  .openapi(postV2OauthRevokeRoute, postV2OauthRevokeRouteHandler)

export default app
