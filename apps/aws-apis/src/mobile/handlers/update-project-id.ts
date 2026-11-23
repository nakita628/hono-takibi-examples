import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateProjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const updateProjectIdHandler = app.openapi(postUpdateProjectIdRoute, (c) => {
  throw new Error('Not implemented')
})
