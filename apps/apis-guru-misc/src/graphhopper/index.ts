import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClusterSolutionJobIdRoute,
  getGeocodeRoute,
  getIsochroneRoute,
  getMatrixRoute,
  getMatrixSolutionJobIdRoute,
  getRouteInfoRoute,
  getRouteRoute,
  getVrpSolutionJobIdRoute,
  postClusterCalculateRoute,
  postClusterRoute,
  postMatchRoute,
  postMatrixCalculateRoute,
  postMatrixRoute,
  postRouteRoute,
  postVrpOptimizeRoute,
  postVrpRoute,
} from './routes'
import {
  getClusterSolutionJobIdRouteHandler,
  getGeocodeRouteHandler,
  getIsochroneRouteHandler,
  getMatrixRouteHandler,
  getMatrixSolutionJobIdRouteHandler,
  getRouteInfoRouteHandler,
  getRouteRouteHandler,
  getVrpSolutionJobIdRouteHandler,
  postClusterCalculateRouteHandler,
  postClusterRouteHandler,
  postMatchRouteHandler,
  postMatrixCalculateRouteHandler,
  postMatrixRouteHandler,
  postRouteRouteHandler,
  postVrpOptimizeRouteHandler,
  postVrpRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postClusterRoute, postClusterRouteHandler)
  .openapi(postClusterCalculateRoute, postClusterCalculateRouteHandler)
  .openapi(getClusterSolutionJobIdRoute, getClusterSolutionJobIdRouteHandler)
  .openapi(getGeocodeRoute, getGeocodeRouteHandler)
  .openapi(getIsochroneRoute, getIsochroneRouteHandler)
  .openapi(postMatchRoute, postMatchRouteHandler)
  .openapi(getMatrixRoute, getMatrixRouteHandler)
  .openapi(postMatrixRoute, postMatrixRouteHandler)
  .openapi(postMatrixCalculateRoute, postMatrixCalculateRouteHandler)
  .openapi(getMatrixSolutionJobIdRoute, getMatrixSolutionJobIdRouteHandler)
  .openapi(getRouteRoute, getRouteRouteHandler)
  .openapi(postRouteRoute, postRouteRouteHandler)
  .openapi(getRouteInfoRoute, getRouteInfoRouteHandler)
  .openapi(postVrpRoute, postVrpRouteHandler)
  .openapi(postVrpOptimizeRoute, postVrpOptimizeRouteHandler)
  .openapi(getVrpSolutionJobIdRoute, getVrpSolutionJobIdRouteHandler)

export default app
