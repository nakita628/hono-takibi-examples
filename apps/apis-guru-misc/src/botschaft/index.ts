import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigRoute,
  getDiscordRoute,
  getSlackRoute,
  getSnsRoute,
  getTopicTopicNameRoute,
  getTwilioRoute,
  postDiscordRoute,
  postSlackRoute,
  postSnsRoute,
  postTwilioRoute,
} from './routes'
import {
  getConfigRouteHandler,
  getDiscordRouteHandler,
  getSlackRouteHandler,
  getSnsRouteHandler,
  getTopicTopicNameRouteHandler,
  getTwilioRouteHandler,
  postDiscordRouteHandler,
  postSlackRouteHandler,
  postSnsRouteHandler,
  postTwilioRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getDiscordRoute, getDiscordRouteHandler)
  .openapi(postDiscordRoute, postDiscordRouteHandler)
  .openapi(getSlackRoute, getSlackRouteHandler)
  .openapi(postSlackRoute, postSlackRouteHandler)
  .openapi(getSnsRoute, getSnsRouteHandler)
  .openapi(postSnsRoute, postSnsRouteHandler)
  .openapi(getTopicTopicNameRoute, getTopicTopicNameRouteHandler)
  .openapi(getTwilioRoute, getTwilioRouteHandler)
  .openapi(postTwilioRoute, postTwilioRouteHandler)

export default app
