import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartValidateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartValidateJsonHandler = app.openapi(getCartValidateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
