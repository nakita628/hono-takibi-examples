import { OpenAPIHono } from '@hono/zod-openapi'
import { getDpoRoute } from '../routes'

const app = new OpenAPIHono()

export const dpoHandler = app.openapi(getDpoRoute, (c) => {
  throw new Error('Not implemented')
})
