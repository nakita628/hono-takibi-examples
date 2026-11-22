import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListAttachedGroupPoliciesRoute,
  postActionListAttachedGroupPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListAttachedGroupPoliciesHandler = app
  .openapi(getActionListAttachedGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAttachedGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
