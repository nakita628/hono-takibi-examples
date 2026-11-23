import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2betaNameLocationsRoute,
  getV2betaNameOperationsRoute,
  getV2betaNameRoute,
  postV2betaNameCancelRoute,
  postV2betaParentPipelinesRunRoute,
} from './routes'
import {
  getV2betaNameLocationsRouteHandler,
  getV2betaNameOperationsRouteHandler,
  getV2betaNameRouteHandler,
  postV2betaNameCancelRouteHandler,
  postV2betaParentPipelinesRunRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2betaNameRoute, getV2betaNameRouteHandler)
  .openapi(getV2betaNameLocationsRoute, getV2betaNameLocationsRouteHandler)
  .openapi(getV2betaNameOperationsRoute, getV2betaNameOperationsRouteHandler)
  .openapi(postV2betaNameCancelRoute, postV2betaNameCancelRouteHandler)
  .openapi(postV2betaParentPipelinesRunRoute, postV2betaParentPipelinesRunRouteHandler)

export default app
