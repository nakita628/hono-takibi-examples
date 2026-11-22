import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListAttachedRolePoliciesRoute,
  postActionListAttachedRolePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListAttachedRolePoliciesHandler = app
  .openapi(getActionListAttachedRolePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListAttachedRolePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
