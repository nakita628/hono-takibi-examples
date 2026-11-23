import { OpenAPIHono } from '@hono/zod-openapi'
import { getOtaUpdatesIdRoute, getOtaUpdatesRoute } from '../routes'

const app = new OpenAPIHono()

export const otaUpdatesHandler = app
  .openapi(getOtaUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOtaUpdatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
