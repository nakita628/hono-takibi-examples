import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4EncodedUpdatesEncodedRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const encodedUpdatesHandler = app.openapi(getV4EncodedUpdatesEncodedRequestRoute, (c) => {
  throw new Error('Not implemented')
})
