import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteVlmMonitorRoute, getVlmMonitorRoute, postVlmMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const vlmHandler = app
  .openapi(postVlmMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVlmMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVlmMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
