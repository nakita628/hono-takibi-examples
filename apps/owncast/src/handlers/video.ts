import { OpenAPIHono } from '@hono/zod-openapi'
import { getVideoVariantsRoute } from '../routes'

const app = new OpenAPIHono()

export const videoHandler = app.openapi(getVideoVariantsRoute, (c) => {
  throw new Error('Not implemented')
})
