import { OpenAPIHono } from '@hono/zod-openapi'
import { getProcessesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const processesHandler = app.openapi(getProcessesIndexRoute, (c) => {
  throw new Error('Not implemented')
})
