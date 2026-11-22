import { OpenAPIHono } from '@hono/zod-openapi'
import { postNumbersFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const numbersFeaturesHandler = app.openapi(postNumbersFeaturesRoute, (c) => {
  throw new Error('Not implemented')
})
