import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1beta1BeaconinfoGetforobservedRoute } from '../routes'

const app = new OpenAPIHono()

export const beaconinfoHandler = app.openapi(postV1beta1BeaconinfoGetforobservedRoute, (c) => {
  throw new Error('Not implemented')
})
