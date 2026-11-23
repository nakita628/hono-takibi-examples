import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductStoreAssignJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productStoreAssignJsonHandler = app.openapi(postProductStoreAssignJsonRoute, (c) => {
  throw new Error('Not implemented')
})
