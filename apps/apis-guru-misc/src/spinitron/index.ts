import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPersonasIdRoute,
  getPersonasRoute,
  getPlaylistsIdRoute,
  getPlaylistsRoute,
  getShowsIdRoute,
  getShowsRoute,
  getSpinsIdRoute,
  getSpinsRoute,
  postSpinsRoute,
} from './routes'
import {
  getPersonasIdRouteHandler,
  getPersonasRouteHandler,
  getPlaylistsIdRouteHandler,
  getPlaylistsRouteHandler,
  getShowsIdRouteHandler,
  getShowsRouteHandler,
  getSpinsIdRouteHandler,
  getSpinsRouteHandler,
  postSpinsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPersonasRoute, getPersonasRouteHandler)
  .openapi(getPersonasIdRoute, getPersonasIdRouteHandler)
  .openapi(getPlaylistsRoute, getPlaylistsRouteHandler)
  .openapi(getPlaylistsIdRoute, getPlaylistsIdRouteHandler)
  .openapi(getShowsRoute, getShowsRouteHandler)
  .openapi(getShowsIdRoute, getShowsIdRouteHandler)
  .openapi(getSpinsRoute, getSpinsRouteHandler)
  .openapi(postSpinsRoute, postSpinsRouteHandler)
  .openapi(getSpinsIdRoute, getSpinsIdRouteHandler)

export default app
