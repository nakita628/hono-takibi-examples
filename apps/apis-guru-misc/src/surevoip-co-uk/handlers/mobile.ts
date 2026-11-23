import { OpenAPIHono } from '@hono/zod-openapi'
import { getMobileRoute } from '../routes'

const app = new OpenAPIHono()

export const mobileHandler = app.openapi(getMobileRoute, (c) => {
  throw new Error('Not implemented')
})
