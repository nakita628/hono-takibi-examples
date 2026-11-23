import { OpenAPIHono } from '@hono/zod-openapi'
import { getShuttleRunsRoute, getShuttleRunsShuttleRunIdRoute } from '../routes'

const app = new OpenAPIHono()

export const shuttleRunsHandler = app
  .openapi(getShuttleRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleRunsShuttleRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
