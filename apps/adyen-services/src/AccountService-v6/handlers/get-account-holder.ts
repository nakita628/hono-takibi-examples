import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const getAccountHolderHandler = app.openapi(postGetAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
