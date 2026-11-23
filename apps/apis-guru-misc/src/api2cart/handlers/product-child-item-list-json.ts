import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductChildItemListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productChildItemListJsonHandler = app.openapi(
  getProductChildItemListJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
