import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSourcesIdRoute,
  getSourcesIdServiceInstancesRoute,
  getSourcesIdServiceInventoriesRoute,
  getSourcesIdServiceOfferingNodesRoute,
  getSourcesIdServiceOfferingsRoute,
  getSourcesIdServicePlansRoute,
  getSourcesIdTasksRoute,
  getSourcesRoute,
  patchSourcesIdIncrementalRefreshRoute,
  patchSourcesIdRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesIdIncrementalRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdServiceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdServiceInventoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdServiceOfferingNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdServiceOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdServicePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
