import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchperpackageRoute } from '../routes'

const app = new OpenAPIHono()

export const searchperpackageHandler = app.openapi(getSearchperpackageRoute, (c) => {
  throw new Error('Not implemented')
})
