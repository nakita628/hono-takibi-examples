import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdStreamClipRoute } from '../routes'

const app = new OpenAPIHono()

export const streamVideoClippingHandler = app.openapi(postAccountsAccountIdStreamClipRoute, (c) => {
  throw new Error('Not implemented')
})
