import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductChildItemInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productChildItemInfoJsonHandler = app.openapi(
  getProductChildItemInfoJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
