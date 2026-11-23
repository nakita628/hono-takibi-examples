import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const createApplicationHandler = app.openapi(postCreateApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
