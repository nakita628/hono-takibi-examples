import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphAddGroupRoute,
  postGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphRemoveGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupLifecyclePoliciesActionsHandler = app
  .openapi(postGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphAddGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupLifecyclePoliciesGroupLifecyclePolicyIdMicrosoftGraphRemoveGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
