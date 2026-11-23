import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const checkAccountHolderHandler = app.openapi(postCheckAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
