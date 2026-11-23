import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductChildItemFindJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productChildItemFindJsonHandler = app.openapi(
  getProductChildItemFindJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
