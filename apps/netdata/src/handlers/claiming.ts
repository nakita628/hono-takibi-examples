import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ClaimRoute, getApiV3ClaimRoute } from '../routes'

const app = new OpenAPIHono()

export const claimingHandler = app
  .openapi(getApiV3ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
