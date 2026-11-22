import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CallbackGenerateTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const callbackHandler = app.openapi(getV1CallbackGenerateTokenRoute, (c) => {
  throw new Error('Not implemented')
})
