import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartMethodsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartMethodsJsonHandler = app.openapi(getCartMethodsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
