import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSimulatePrincipalPolicyRoute,
  postActionSimulatePrincipalPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSimulatePrincipalPolicyHandler = app
  .openapi(getActionSimulatePrincipalPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSimulatePrincipalPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
