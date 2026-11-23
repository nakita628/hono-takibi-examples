import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlusDiRoute } from '../routes'

const app = new OpenAPIHono()

export const plusDiHandler = app.openapi(getPlusDiRoute, (c) => {
  throw new Error('Not implemented')
})
