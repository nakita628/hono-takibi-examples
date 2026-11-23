import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlmawsV1TaskListsPrintoutsPrintoutIdRoute,
  getAlmawsV1TaskListsPrintoutsRoute,
  getAlmawsV1TaskListsRequestedResourcesRoute,
  getAlmawsV1TaskListsRsLendingRequestsRoute,
  getAlmawsV1TaskListsTestRoute,
  postAlmawsV1TaskListsPrintoutsPrintoutIdRoute,
  postAlmawsV1TaskListsPrintoutsRoute,
  postAlmawsV1TaskListsRequestedResourcesRoute,
  postAlmawsV1TaskListsRsLendingRequestsRoute,
  postAlmawsV1TaskListsTestRoute,
} from './routes'
import {
  getAlmawsV1TaskListsPrintoutsPrintoutIdRouteHandler,
  getAlmawsV1TaskListsPrintoutsRouteHandler,
  getAlmawsV1TaskListsRequestedResourcesRouteHandler,
  getAlmawsV1TaskListsRsLendingRequestsRouteHandler,
  getAlmawsV1TaskListsTestRouteHandler,
  postAlmawsV1TaskListsPrintoutsPrintoutIdRouteHandler,
  postAlmawsV1TaskListsPrintoutsRouteHandler,
  postAlmawsV1TaskListsRequestedResourcesRouteHandler,
  postAlmawsV1TaskListsRsLendingRequestsRouteHandler,
  postAlmawsV1TaskListsTestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAlmawsV1TaskListsPrintoutsRoute, getAlmawsV1TaskListsPrintoutsRouteHandler)
  .openapi(postAlmawsV1TaskListsPrintoutsRoute, postAlmawsV1TaskListsPrintoutsRouteHandler)
  .openapi(
    getAlmawsV1TaskListsPrintoutsPrintoutIdRoute,
    getAlmawsV1TaskListsPrintoutsPrintoutIdRouteHandler,
  )
  .openapi(
    postAlmawsV1TaskListsPrintoutsPrintoutIdRoute,
    postAlmawsV1TaskListsPrintoutsPrintoutIdRouteHandler,
  )
  .openapi(
    getAlmawsV1TaskListsRequestedResourcesRoute,
    getAlmawsV1TaskListsRequestedResourcesRouteHandler,
  )
  .openapi(
    postAlmawsV1TaskListsRequestedResourcesRoute,
    postAlmawsV1TaskListsRequestedResourcesRouteHandler,
  )
  .openapi(
    getAlmawsV1TaskListsRsLendingRequestsRoute,
    getAlmawsV1TaskListsRsLendingRequestsRouteHandler,
  )
  .openapi(
    postAlmawsV1TaskListsRsLendingRequestsRoute,
    postAlmawsV1TaskListsRsLendingRequestsRouteHandler,
  )
  .openapi(getAlmawsV1TaskListsTestRoute, getAlmawsV1TaskListsTestRouteHandler)
  .openapi(postAlmawsV1TaskListsTestRoute, postAlmawsV1TaskListsTestRouteHandler)

export default app
