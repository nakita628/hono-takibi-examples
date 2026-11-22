import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2RecaptchaConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(getV2RecaptchaConfigRoute, (c) => {
  throw new Error('Not implemented')
})
