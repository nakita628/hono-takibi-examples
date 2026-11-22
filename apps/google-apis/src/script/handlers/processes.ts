import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProcessesListScriptProcessesRoute, getV1ProcessesRoute } from '../routes'

const app = new OpenAPIHono()

export const processesHandler = app
  .openapi(getV1ProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProcessesListScriptProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
