import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCategoryDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryDeleteJsonHandler = app.openapi(deleteCategoryDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
