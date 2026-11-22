import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1VoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const voicesHandler = app.openapi(getV1beta1VoicesRoute, (c) => {
  throw new Error('Not implemented')
})
