import { OpenAPIHono } from '@hono/zod-openapi'
import { getVerifySecurityCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const verifySecurityCodeHandler = app.openapi(getVerifySecurityCodeRoute, (c) => {
  throw new Error('Not implemented')
})
