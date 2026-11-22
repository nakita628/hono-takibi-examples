import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ProcessesRoute } from '../routes'

const app = new OpenAPIHono()

export const processesHandler = app.openapi(getApiV2ProcessesRoute, (c) => {
  throw new Error('Not implemented')
})
