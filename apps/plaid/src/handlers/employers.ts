import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmployersSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const employersHandler = app.openapi(postEmployersSearchRoute, (c) => {
  throw new Error('Not implemented')
})
