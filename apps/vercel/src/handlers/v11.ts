import { OpenAPIHono } from '@hono/zod-openapi'
import { postV11ProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const v11Handler = app.openapi(postV11ProjectsRoute, (c) => {
  throw new Error('Not implemented')
})
