import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdvancedAsyncFormatRoute, getAdvancedFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(getAdvancedAsyncFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvancedFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
