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
} from '../routes'

const app = new OpenAPIHono()

export const almawsHandler = app
  .openapi(getAlmawsV1TaskListsPrintoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsPrintoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlmawsV1TaskListsPrintoutsPrintoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsPrintoutsPrintoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlmawsV1TaskListsRequestedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsRequestedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlmawsV1TaskListsRsLendingRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsRsLendingRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlmawsV1TaskListsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
