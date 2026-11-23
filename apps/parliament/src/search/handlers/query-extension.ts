import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const queryExtensionHandler = app.openapi(getQueryExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
