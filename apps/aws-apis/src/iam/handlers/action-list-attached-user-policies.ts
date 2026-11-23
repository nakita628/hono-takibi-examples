import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListAttachedUserPoliciesRoute,
  postActionListAttachedUserPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListAttachedUserPoliciesHandler = app
  .openapi(getActionListAttachedUserPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAttachedUserPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
