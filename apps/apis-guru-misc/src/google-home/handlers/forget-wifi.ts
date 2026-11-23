import { OpenAPIHono } from '@hono/zod-openapi'
import { postForgetWifiRoute } from '../routes'

const app = new OpenAPIHono()

export const forgetWifiHandler = app.openapi(postForgetWifiRoute, (c) => {
  throw new Error('Not implemented')
})
