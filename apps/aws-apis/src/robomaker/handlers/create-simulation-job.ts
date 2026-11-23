import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSimulationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const createSimulationJobHandler = app.openapi(postCreateSimulationJobRoute, (c) => {
  throw new Error('Not implemented')
})
