import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnzRoute, getVarzRoute, getVarzSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const monitoringHandler = app
  .openapi(getConnzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVarzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVarzSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
