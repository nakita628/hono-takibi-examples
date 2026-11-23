import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LoggingOptionsRoute, postV2LoggingOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v2LoggingOptionsHandler = app
  .openapi(getV2LoggingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoggingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
