import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1RunsRunIDRoute, getV1RunsRunIDJobsRoute, getV1RunsRunIDRoute } from '../routes'

const app = new OpenAPIHono()

export const functionRunsHandler = app
  .openapi(getV1RunsRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RunsRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RunsRunIDJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
