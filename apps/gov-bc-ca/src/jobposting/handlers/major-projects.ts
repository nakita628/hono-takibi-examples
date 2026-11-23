import { OpenAPIHono } from '@hono/zod-openapi'
import { getMajorProjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const majorProjectsHandler = app.openapi(getMajorProjectsRoute, (c) => {
  throw new Error('Not implemented')
})
