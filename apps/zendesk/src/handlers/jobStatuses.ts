import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2JobStatusesJobStatusIdRoute,
  getApiV2JobStatusesRoute,
  getApiV2JobStatusesShowManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobStatusesHandler = app
  .openapi(getApiV2JobStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobStatusesJobStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2JobStatusesShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
