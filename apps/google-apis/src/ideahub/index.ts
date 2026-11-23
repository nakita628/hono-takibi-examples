import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1alphaIdeasRoute,
  getV1alphaParentIdeasRoute,
  getV1alphaParentLocalesRoute,
  patchV1alphaNameRoute,
  postV1alphaParentIdeaActivitiesRoute,
} from './routes'
import {
  getV1alphaIdeasRouteHandler,
  getV1alphaParentIdeasRouteHandler,
  getV1alphaParentLocalesRouteHandler,
  patchV1alphaNameRouteHandler,
  postV1alphaParentIdeaActivitiesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1alphaIdeasRoute, getV1alphaIdeasRouteHandler)
  .openapi(patchV1alphaNameRoute, patchV1alphaNameRouteHandler)
  .openapi(postV1alphaParentIdeaActivitiesRoute, postV1alphaParentIdeaActivitiesRouteHandler)
  .openapi(getV1alphaParentIdeasRoute, getV1alphaParentIdeasRouteHandler)
  .openapi(getV1alphaParentLocalesRoute, getV1alphaParentLocalesRouteHandler)

export default app
