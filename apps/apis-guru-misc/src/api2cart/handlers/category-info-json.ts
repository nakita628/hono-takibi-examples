import { OpenAPIHono } from '@hono/zod-openapi'
import { getCategoryInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryInfoJsonHandler = app.openapi(getCategoryInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
