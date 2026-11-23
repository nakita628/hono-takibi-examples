import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreatePermitRoute } from '../routes'

const app = new OpenAPIHono()

export const createPermitHandler = app.openapi(postCreatePermitRoute, (c) => {
  throw new Error('Not implemented')
})
