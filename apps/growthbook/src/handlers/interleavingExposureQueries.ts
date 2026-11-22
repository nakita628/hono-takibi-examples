import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InterleavingExposureQueriesIdRoute,
  getV1InterleavingExposureQueriesIdRoute,
  getV1InterleavingExposureQueriesRoute,
  postV1InterleavingExposureQueriesRoute,
  putV1InterleavingExposureQueriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interleavingExposureQueriesHandler = app
  .openapi(getV1InterleavingExposureQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InterleavingExposureQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InterleavingExposureQueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InterleavingExposureQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InterleavingExposureQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
