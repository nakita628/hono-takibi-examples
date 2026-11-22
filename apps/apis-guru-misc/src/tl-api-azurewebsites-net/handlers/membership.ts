import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMembershipRoute, postApiMembershipRoute } from '../routes'

const app = new OpenAPIHono()

export const membershipHandler = app
  .openapi(getApiMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
