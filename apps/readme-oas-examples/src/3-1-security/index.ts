import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnythingOauth2Route,
  getAnythingApiKeyRoute,
  getAnythingOauth2Route,
  patchAnythingOauth2Route,
  postAnythingApiKeyRoute,
  postAnythingBasicRoute,
  postAnythingBearerRoute,
  postAnythingMutualTLSRoute,
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
  patchAnythingOauth2RouteHandler,
  postAnythingApiKeyRouteHandler,
  postAnythingBasicRouteHandler,
  postAnythingBearerRouteHandler,
  postAnythingMutualTLSRouteHandler,
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
  .openapi(postAnythingMutualTLSRoute, postAnythingMutualTLSRouteHandler)
  .openapi(postAnythingOauth2Route, postAnythingOauth2RouteHandler)
  .openapi(getAnythingOauth2Route, getAnythingOauth2RouteHandler)
  .openapi(putAnythingOauth2Route, putAnythingOauth2RouteHandler)
  .openapi(patchAnythingOauth2Route, patchAnythingOauth2RouteHandler)
  .openapi(deleteAnythingOauth2Route, deleteAnythingOauth2RouteHandler)
  .openapi(postAnythingOpenIdConnectRoute, postAnythingOpenIdConnectRouteHandler)
  .openapi(postAnythingNoAuthRoute, postAnythingNoAuthRouteHandler)
  .openapi(postStatus401Route, postStatus401RouteHandler)

export default app
