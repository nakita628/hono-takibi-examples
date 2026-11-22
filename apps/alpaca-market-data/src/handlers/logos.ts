import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1LogosSymbolRoute } from '../routes'

const app = new OpenAPIHono()

export const logosHandler = app.openapi(getV1beta1LogosSymbolRoute, (c) => {
  throw new Error('Not implemented')
})
