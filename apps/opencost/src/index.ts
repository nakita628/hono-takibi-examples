import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAllocationRoute,
  getAssetsRoute,
  getCloudCostRoute,
  getInferenceCostTimeseriesRoute,
  getInferenceCostTotalRoute,
} from './routes'
import {
  getAllocationRouteHandler,
  getAssetsRouteHandler,
  getCloudCostRouteHandler,
  getInferenceCostTimeseriesRouteHandler,
  getInferenceCostTotalRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAllocationRoute, getAllocationRouteHandler)
  .openapi(getAssetsRoute, getAssetsRouteHandler)
  .openapi(getCloudCostRoute, getCloudCostRouteHandler)
  .openapi(getInferenceCostTotalRoute, getInferenceCostTotalRouteHandler)
  .openapi(getInferenceCostTimeseriesRoute, getInferenceCostTimeseriesRouteHandler)

export default app
