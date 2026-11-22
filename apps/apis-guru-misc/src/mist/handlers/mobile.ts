import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1MobileVerifySecretRoute } from '../routes'

const app = new OpenAPIHono()

export const mobileHandler = app.openapi(postApiV1MobileVerifySecretRoute, (c) => {
  throw new Error('Not implemented')
})
