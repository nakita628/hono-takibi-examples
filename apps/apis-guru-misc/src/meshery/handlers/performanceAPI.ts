import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUserPerformanceProfilesIdRoute,
  getApiUserPerformanceProfilesIdResultsRoute,
  getApiUserPerformanceProfilesIdRoute,
  getApiUserPerformanceProfilesIdRunRoute,
  getApiUserPerformanceProfilesResultsRoute,
  getApiUserPerformanceProfilesRoute,
  postApiUserPerformanceProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const performanceAPIHandler = app
  .openapi(getApiUserPerformanceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserPerformanceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserPerformanceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPerformanceProfilesIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
