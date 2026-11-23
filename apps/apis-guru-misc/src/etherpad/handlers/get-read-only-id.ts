import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetReadOnlyIDRoute, postGetReadOnlyIDRoute } from '../routes'

const app = new OpenAPIHono()

export const getReadOnlyIdHandler = app
  .openapi(getGetReadOnlyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetReadOnlyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
