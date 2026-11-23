import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelSimulationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelSimulationJobHandler = app.openapi(postCancelSimulationJobRoute, (c) => {
  throw new Error('Not implemented')
})
