import { OpenAPIHono } from '@hono/zod-openapi'
import { postDndEndDndRoute } from '../routes'

const app = new OpenAPIHono()

export const dndEndDndHandler = app.openapi(postDndEndDndRoute, (c) => {
  throw new Error('Not implemented')
})
