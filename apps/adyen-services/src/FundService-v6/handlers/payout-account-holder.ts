import { OpenAPIHono } from '@hono/zod-openapi'
import { postPayoutAccountHolderRoute } from '../routes'

const app = new OpenAPIHono()

export const payoutAccountHolderHandler = app.openapi(postPayoutAccountHolderRoute, (c) => {
  throw new Error('Not implemented')
})
