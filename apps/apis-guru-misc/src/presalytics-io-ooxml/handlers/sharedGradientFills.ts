import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedGradientFillsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedGradientFillsHandler = app.openapi(getSharedGradientFillsIdRoute, (c) => {
  throw new Error('Not implemented')
})
