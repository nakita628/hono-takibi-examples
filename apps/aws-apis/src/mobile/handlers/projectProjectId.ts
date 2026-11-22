import { OpenAPIHono } from '@hono/zod-openapi'
import { getProjectProjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const projectProjectIdHandler = app.openapi(getProjectProjectIdRoute, (c) => {
  throw new Error('Not implemented')
})
