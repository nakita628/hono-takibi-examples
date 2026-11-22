import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupLifecyclePoliciesGroupLifecyclePolicyIdAddGroupRoute,
  postGroupLifecyclePoliciesGroupLifecyclePolicyIdRemoveGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupLifecyclePoliciesGroupLifecyclePolicyActionsHandler = app
  .openapi(postGroupLifecyclePoliciesGroupLifecyclePolicyIdAddGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupLifecyclePoliciesGroupLifecyclePolicyIdRemoveGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
