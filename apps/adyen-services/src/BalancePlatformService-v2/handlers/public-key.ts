import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const publicKeyHandler = app.openapi(getPublicKeyRoute, (c) => {
  throw new Error('Not implemented')
})
