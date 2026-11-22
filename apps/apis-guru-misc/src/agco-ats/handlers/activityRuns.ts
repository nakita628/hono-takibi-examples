import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ActivityRunsActivityRunIDRoute,
  getApiV2ActivityRunsActivityRunIDStatusRoute,
  getApiV2ActivityRunsRoute,
  putApiV2ActivityRunsActivityRunIDRoute,
  putApiV2ActivityRunsActivityRunIDStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activityRunsHandler = app
  .openapi(getApiV2ActivityRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivityRunsActivityRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActivityRunsActivityRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActivityRunsActivityRunIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActivityRunsActivityRunIDStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
