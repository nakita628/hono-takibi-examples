import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMonitorTypeCodeIdRoute, getApiMonitorTypeCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const monitorTypeCodeHandler = app
  .openapi(getApiMonitorTypeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorTypeCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
