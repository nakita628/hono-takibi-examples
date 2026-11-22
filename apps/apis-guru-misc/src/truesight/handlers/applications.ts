import { OpenAPIHono } from '@hono/zod-openapi'
import { getHardwareApplicationsApplicationIdRoute, getHardwareApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getHardwareApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
