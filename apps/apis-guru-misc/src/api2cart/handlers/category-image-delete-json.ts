import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCategoryImageDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const categoryImageDeleteJsonHandler = app.openapi(
  deleteCategoryImageDeleteJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
