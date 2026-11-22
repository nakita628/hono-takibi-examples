import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminProductVariantsRoute } from '../routes'

const app = new OpenAPIHono()

export const productVariantsHandler = app.openapi(getAdminProductVariantsRoute, (c) => {
  throw new Error('Not implemented')
})
