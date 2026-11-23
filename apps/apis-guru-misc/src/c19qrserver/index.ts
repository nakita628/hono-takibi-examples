import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSigninSigninIdRoute,
  deleteUserUserIdRoute,
  getSigninSigninIdRoute,
  getSigninsRoute,
  getUsersRoute,
  getUserUserIdRoute,
  postChangePasswordRoute,
  postLoginRoute,
  postLogoutRoute,
  postRequestPasswordResetRoute,
  postSigninRoute,
  postUserRoute,
  postVerifyPasswordChangeRoute,
  putSigninSigninIdRoute,
} from './routes'
import {
  deleteSigninSigninIdRouteHandler,
  deleteUserUserIdRouteHandler,
  getSigninSigninIdRouteHandler,
  getSigninsRouteHandler,
  getUsersRouteHandler,
  getUserUserIdRouteHandler,
  postChangePasswordRouteHandler,
  postLoginRouteHandler,
  postLogoutRouteHandler,
  postRequestPasswordResetRouteHandler,
  postSigninRouteHandler,
  postUserRouteHandler,
  postVerifyPasswordChangeRouteHandler,
  putSigninSigninIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postChangePasswordRoute, postChangePasswordRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(postLogoutRoute, postLogoutRouteHandler)
  .openapi(postRequestPasswordResetRoute, postRequestPasswordResetRouteHandler)
  .openapi(postSigninRoute, postSigninRouteHandler)
  .openapi(deleteSigninSigninIdRoute, deleteSigninSigninIdRouteHandler)
  .openapi(getSigninSigninIdRoute, getSigninSigninIdRouteHandler)
  .openapi(putSigninSigninIdRoute, putSigninSigninIdRouteHandler)
  .openapi(getSigninsRoute, getSigninsRouteHandler)
  .openapi(postUserRoute, postUserRouteHandler)
  .openapi(deleteUserUserIdRoute, deleteUserUserIdRouteHandler)
  .openapi(getUserUserIdRoute, getUserUserIdRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postVerifyPasswordChangeRoute, postVerifyPasswordChangeRouteHandler)

export default app
