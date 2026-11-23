import { OpenAPIHono } from '@hono/zod-openapi'
import { postListSimulationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const listSimulationJobsHandler = app.openapi(postListSimulationJobsRoute, (c) => {
  throw new Error('Not implemented')
})
