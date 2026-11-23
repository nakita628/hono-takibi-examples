import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2VoicesRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(getV2VoicesRoute, (c) => {
  throw new Error('Not implemented')
})
