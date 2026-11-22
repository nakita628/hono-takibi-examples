import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAccountsAccountIdAccessSeatsRoute } from '../routes'

const app = new OpenAPIHono()

export const zeroTrustSeatsHandler = app.openapi(patchAccountsAccountIdAccessSeatsRoute, (c) => {
  throw new Error('Not implemented')
})
