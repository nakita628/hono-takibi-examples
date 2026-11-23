import { OpenAPIHono } from '@hono/zod-openapi'
import { putClaimsClaimCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const claimsHandler = app.openapi(putClaimsClaimCodeRoute, (c) => {
  throw new Error('Not implemented')
})
