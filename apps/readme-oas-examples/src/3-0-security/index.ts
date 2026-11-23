import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnythingOauth2Route,
  getAnythingApiKeyRoute,
  getAnythingOauth2Route,
  getAnythingOptionalAuthRoute,
  patchAnythingOauth2Route,
  postAnythingApiKeyRoute,
  postAnythingBasicRoute,
  postAnythingBearerRoute,
  postAnythingNoAuthRoute,
  postAnythingOauth2Route,
  postAnythingOpenIdConnectRoute,
  postStatus401Route,
  putAnythingApiKeyRoute,
  putAnythingBearerRoute,
  putAnythingOauth2Route,
} from './routes'
import {
  deleteAnythingOauth2RouteHandler,
  getAnythingApiKeyRouteHandler,
  getAnythingOauth2RouteHandler,
  getAnythingOptionalAuthRouteHandler,
  patchAnythingOauth2RouteHandler,
  postAnythingApiKeyRouteHandler,
  postAnythingBasicRouteHandler,
  postAnythingBearerRouteHandler,
  postAnythingNoAuthRouteHandler,
  postAnythingOauth2RouteHandler,
  postAnythingOpenIdConnectRouteHandler,
  postStatus401RouteHandler,
  putAnythingApiKeyRouteHandler,
  putAnythingBearerRouteHandler,
  putAnythingOauth2RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnythingApiKeyRoute, getAnythingApiKeyRouteHandler)
  .openapi(postAnythingApiKeyRoute, postAnythingApiKeyRouteHandler)
  .openapi(putAnythingApiKeyRoute, putAnythingApiKeyRouteHandler)
  .openapi(postAnythingBasicRoute, postAnythingBasicRouteHandler)
  .openapi(postAnythingBearerRoute, postAnythingBearerRouteHandler)
  .openapi(putAnythingBearerRoute, putAnythingBearerRouteHandler)
  .openapi(postAnythingOauth2Route, postAnythingOauth2RouteHandler)
  .openapi(getAnythingOauth2Route, getAnythingOauth2RouteHandler)
  .openapi(putAnythingOauth2Route, putAnythingOauth2RouteHandler)
  .openapi(patchAnythingOauth2Route, patchAnythingOauth2RouteHandler)
  .openapi(deleteAnythingOauth2Route, deleteAnythingOauth2RouteHandler)
  .openapi(postAnythingOpenIdConnectRoute, postAnythingOpenIdConnectRouteHandler)
  .openapi(postAnythingNoAuthRoute, postAnythingNoAuthRouteHandler)
  .openapi(getAnythingOptionalAuthRoute, getAnythingOptionalAuthRouteHandler)
  .openapi(postStatus401Route, postStatus401RouteHandler)

export default app
