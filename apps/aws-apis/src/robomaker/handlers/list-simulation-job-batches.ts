import { OpenAPIHono } from '@hono/zod-openapi'
import { postListSimulationJobBatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const listSimulationJobBatchesHandler = app.openapi(
  postListSimulationJobBatchesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
