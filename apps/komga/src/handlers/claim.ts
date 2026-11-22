import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ClaimRoute, postApiV1ClaimRoute } from '../routes'

const app = new OpenAPIHono()

export const claimHandler = app
  .openapi(getApiV1ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
