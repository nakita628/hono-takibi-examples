import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateApplicationHandler = app.openapi(postCreateApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
