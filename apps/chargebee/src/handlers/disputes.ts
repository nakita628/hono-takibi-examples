import { OpenAPIHono } from '@hono/zod-openapi'
import { getDisputesDisputeIdRoute, getDisputesRoute } from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app
  .openapi(getDisputesDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
