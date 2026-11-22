import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiReleaseEventSeriesIdRoute,
  getApiReleaseEventSeriesIdForEditRoute,
  getApiReleaseEventSeriesIdRoute,
  getApiReleaseEventSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releaseEventSeriesApiHandler = app
  .openapi(getApiReleaseEventSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReleaseEventSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventSeriesIdForEditRoute, (c) => {
    throw new Error('Not implemented')
  })
