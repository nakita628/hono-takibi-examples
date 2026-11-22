import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryExtensionRoute, getQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(getQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
