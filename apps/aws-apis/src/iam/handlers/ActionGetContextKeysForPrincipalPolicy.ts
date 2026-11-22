import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetContextKeysForPrincipalPolicyRoute,
  postActionGetContextKeysForPrincipalPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetContextKeysForPrincipalPolicyHandler = app
  .openapi(getActionGetContextKeysForPrincipalPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetContextKeysForPrincipalPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
