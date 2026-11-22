import { OpenAPIHono } from '@hono/zod-openapi'
import { getV0MonitorsMonitorRunsIdRoute, getV0MonitorsMonitorRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const monitorsRunsHandler = app
  .openapi(getV0MonitorsMonitorRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0MonitorsMonitorRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
