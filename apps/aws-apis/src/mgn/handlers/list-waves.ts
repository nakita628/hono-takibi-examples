import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWavesRoute } from '../routes'

const app = new OpenAPIHono()

export const listWavesHandler = app.openapi(postListWavesRoute, (c) => {
  throw new Error('Not implemented')
})
