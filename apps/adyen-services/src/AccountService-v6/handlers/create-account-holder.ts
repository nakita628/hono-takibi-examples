import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const createAccountHolderHandler = app.openapi(postCreateAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
