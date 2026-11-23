import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssumeRoleRoute,
  getActionAssumeRoleWithSAMLRoute,
  getActionAssumeRoleWithWebIdentityRoute,
  getActionDecodeAuthorizationMessageRoute,
  getActionGetAccessKeyInfoRoute,
  getActionGetCallerIdentityRoute,
  getActionGetFederationTokenRoute,
  getActionGetSessionTokenRoute,
  postActionAssumeRoleRoute,
  postActionAssumeRoleWithSAMLRoute,
  postActionAssumeRoleWithWebIdentityRoute,
  postActionDecodeAuthorizationMessageRoute,
  postActionGetAccessKeyInfoRoute,
  postActionGetCallerIdentityRoute,
  postActionGetFederationTokenRoute,
  postActionGetSessionTokenRoute,
} from './routes'
import {
  getActionAssumeRoleRouteHandler,
  getActionAssumeRoleWithSAMLRouteHandler,
  getActionAssumeRoleWithWebIdentityRouteHandler,
  getActionDecodeAuthorizationMessageRouteHandler,
  getActionGetAccessKeyInfoRouteHandler,
  getActionGetCallerIdentityRouteHandler,
  getActionGetFederationTokenRouteHandler,
  getActionGetSessionTokenRouteHandler,
  postActionAssumeRoleRouteHandler,
  postActionAssumeRoleWithSAMLRouteHandler,
  postActionAssumeRoleWithWebIdentityRouteHandler,
  postActionDecodeAuthorizationMessageRouteHandler,
  postActionGetAccessKeyInfoRouteHandler,
  postActionGetCallerIdentityRouteHandler,
  postActionGetFederationTokenRouteHandler,
  postActionGetSessionTokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAssumeRoleRoute, getActionAssumeRoleRouteHandler)
  .openapi(postActionAssumeRoleRoute, postActionAssumeRoleRouteHandler)
  .openapi(getActionAssumeRoleWithSAMLRoute, getActionAssumeRoleWithSAMLRouteHandler)
  .openapi(postActionAssumeRoleWithSAMLRoute, postActionAssumeRoleWithSAMLRouteHandler)
  .openapi(getActionAssumeRoleWithWebIdentityRoute, getActionAssumeRoleWithWebIdentityRouteHandler)
  .openapi(
    postActionAssumeRoleWithWebIdentityRoute,
    postActionAssumeRoleWithWebIdentityRouteHandler,
  )
  .openapi(
    getActionDecodeAuthorizationMessageRoute,
    getActionDecodeAuthorizationMessageRouteHandler,
  )
  .openapi(
    postActionDecodeAuthorizationMessageRoute,
    postActionDecodeAuthorizationMessageRouteHandler,
  )
  .openapi(getActionGetAccessKeyInfoRoute, getActionGetAccessKeyInfoRouteHandler)
  .openapi(postActionGetAccessKeyInfoRoute, postActionGetAccessKeyInfoRouteHandler)
  .openapi(getActionGetCallerIdentityRoute, getActionGetCallerIdentityRouteHandler)
  .openapi(postActionGetCallerIdentityRoute, postActionGetCallerIdentityRouteHandler)
  .openapi(getActionGetFederationTokenRoute, getActionGetFederationTokenRouteHandler)
  .openapi(postActionGetFederationTokenRoute, postActionGetFederationTokenRouteHandler)
  .openapi(getActionGetSessionTokenRoute, getActionGetSessionTokenRouteHandler)
  .openapi(postActionGetSessionTokenRoute, postActionGetSessionTokenRouteHandler)

export default app
