import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupertrendRoute } from '../routes'

const app = new OpenAPIHono()

export const supertrendHandler = app.openapi(getSupertrendRoute, (c) => {
  throw new Error('Not implemented')
})
