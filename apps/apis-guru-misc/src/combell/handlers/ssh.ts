import { OpenAPIHono } from '@hono/zod-openapi'
import { getSshRoute } from '../routes'

const app = new OpenAPIHono()

export const sshHandler = app.openapi(getSshRoute, (c) => {
  throw new Error('Not implemented')
})
