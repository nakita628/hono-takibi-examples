import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4EncodedFullHashesEncodedRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const encodedFullHashesHandler = app.openapi(
  getV4EncodedFullHashesEncodedRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
