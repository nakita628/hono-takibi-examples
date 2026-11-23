import { OpenAPIHono } from '@hono/zod-openapi'
import { postPubBundlesRoute } from '../routes'

const app = new OpenAPIHono()

export const pubHandler = app.openapi(postPubBundlesRoute, (c) => {
  throw new Error('Not implemented')
})
