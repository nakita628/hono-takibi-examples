import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const systempolicyHandler = app.openapi(getV1beta1NameRoute, (c) => {
  throw new Error('Not implemented')
})
