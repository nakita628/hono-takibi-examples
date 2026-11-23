import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsDnsmasqRoute, getLogsFtlRoute, getLogsWebserverRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getLogsDnsmasqRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsFtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsWebserverRoute, (c) => {
    throw new Error('Not implemented')
  })
