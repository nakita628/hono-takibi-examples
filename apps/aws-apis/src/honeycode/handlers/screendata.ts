import { OpenAPIHono } from '@hono/zod-openapi'
import { postScreendataRoute } from '../routes'

const app = new OpenAPIHono()

export const screendataHandler = app.openapi(postScreendataRoute, (c) => {
  throw new Error('Not implemented')
})
