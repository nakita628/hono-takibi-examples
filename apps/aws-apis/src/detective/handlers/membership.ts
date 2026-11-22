import { OpenAPIHono } from '@hono/zod-openapi'
import { postMembershipDatasourcesGetRoute, postMembershipRemovalRoute } from '../routes'

const app = new OpenAPIHono()

export const membershipHandler = app
  .openapi(postMembershipDatasourcesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembershipRemovalRoute, (c) => {
    throw new Error('Not implemented')
  })
