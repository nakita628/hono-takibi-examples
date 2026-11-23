import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductOptionValueAssignJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionValueAssignJsonHandler = app.openapi(
  postProductOptionValueAssignJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
