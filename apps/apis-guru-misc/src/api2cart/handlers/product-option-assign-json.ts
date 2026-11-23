import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductOptionAssignJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productOptionAssignJsonHandler = app.openapi(postProductOptionAssignJsonRoute, (c) => {
  throw new Error('Not implemented')
})
