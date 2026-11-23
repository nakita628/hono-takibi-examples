import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteThingsThingNameShadowRoute,
  getApiThingsShadowListNamedShadowsForThingThingNameRoute,
  getRetainedMessageRoute,
  getRetainedMessageTopicRoute,
  getThingsThingNameShadowRoute,
  postThingsThingNameShadowRoute,
  postTopicsTopicRoute,
} from './routes'
import {
  deleteThingsThingNameShadowRouteHandler,
  getApiThingsShadowListNamedShadowsForThingThingNameRouteHandler,
  getRetainedMessageRouteHandler,
  getRetainedMessageTopicRouteHandler,
  getThingsThingNameShadowRouteHandler,
  postThingsThingNameShadowRouteHandler,
  postTopicsTopicRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteThingsThingNameShadowRoute, deleteThingsThingNameShadowRouteHandler)
  .openapi(getThingsThingNameShadowRoute, getThingsThingNameShadowRouteHandler)
  .openapi(postThingsThingNameShadowRoute, postThingsThingNameShadowRouteHandler)
  .openapi(getRetainedMessageTopicRoute, getRetainedMessageTopicRouteHandler)
  .openapi(
    getApiThingsShadowListNamedShadowsForThingThingNameRoute,
    getApiThingsShadowListNamedShadowsForThingThingNameRouteHandler,
  )
  .openapi(getRetainedMessageRoute, getRetainedMessageRouteHandler)
  .openapi(postTopicsTopicRoute, postTopicsTopicRouteHandler)

export default app
