import { OpenAPIHono } from '@hono/zod-openapi'
import { postFinalizeCutoverRoute } from '../routes'

const app = new OpenAPIHono()

export const finalizeCutoverHandler = app.openapi(postFinalizeCutoverRoute, (c) => {
  throw new Error('Not implemented')
})
