import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListPoliciesGrantingServiceAccessRoute,
  postActionListPoliciesGrantingServiceAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListPoliciesGrantingServiceAccessHandler = app
  .openapi(getActionListPoliciesGrantingServiceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPoliciesGrantingServiceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
