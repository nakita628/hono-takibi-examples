import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2WriteCorrectRoute } from '../routes'

const app = new OpenAPIHono()

export const correctTextHandler = app.openapi(postV2WriteCorrectRoute, (c) => {
  throw new Error('Not implemented')
})
