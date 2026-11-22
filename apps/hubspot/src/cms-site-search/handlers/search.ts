import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsSiteSearch202609SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getCmsSiteSearch202609SearchRoute, (c) => {
  throw new Error('Not implemented')
})
