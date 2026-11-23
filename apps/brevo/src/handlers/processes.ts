import { OpenAPIHono } from '@hono/zod-openapi'
import { getProcessesProcessIdRoute, getProcessesRoute } from '../routes'

const app = new OpenAPIHono()

export const processesHandler = app
  .openapi(getProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProcessesProcessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
