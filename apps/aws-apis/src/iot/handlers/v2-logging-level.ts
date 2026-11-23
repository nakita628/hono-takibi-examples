import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LoggingLevelRoute, postV2LoggingLevelRoute } from '../routes'

const app = new OpenAPIHono()

export const v2LoggingLevelHandler = app
  .openapi(getV2LoggingLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LoggingLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
