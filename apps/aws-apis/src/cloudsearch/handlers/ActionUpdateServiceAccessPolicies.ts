import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateServiceAccessPoliciesRoute,
  postActionUpdateServiceAccessPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateServiceAccessPoliciesHandler = app
  .openapi(getActionUpdateServiceAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateServiceAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
