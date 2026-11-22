import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdSubscriptionsRoute,
  postApiV1OrgsOrgIdSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsSubscriptionsHandler = app
  .openapi(deleteApiV1OrgsOrgIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
