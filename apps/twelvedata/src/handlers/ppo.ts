import { OpenAPIHono } from '@hono/zod-openapi'
import { getPpoRoute } from '../routes'

const app = new OpenAPIHono()

export const ppoHandler = app.openapi(getPpoRoute, (c) => {
  throw new Error('Not implemented')
})
