import { OpenAPIHono } from '@hono/zod-openapi'
import { getAtsJobsIdRoute, getAtsJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getAtsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAtsJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
