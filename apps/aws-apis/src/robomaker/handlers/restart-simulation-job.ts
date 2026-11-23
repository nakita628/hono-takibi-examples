import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestartSimulationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const restartSimulationJobHandler = app.openapi(postRestartSimulationJobRoute, (c) => {
  throw new Error('Not implemented')
})
