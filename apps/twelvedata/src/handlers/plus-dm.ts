import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlusDmRoute } from '../routes'

const app = new OpenAPIHono()

export const plusDmHandler = app.openapi(getPlusDmRoute, (c) => {
  throw new Error('Not implemented')
})
