import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  getGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  getGroupLifecyclePoliciesRoute,
  patchGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  postGroupLifecyclePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupLifecyclePoliciesGroupLifecyclePolicyHandler = app
  .openapi(getGroupLifecyclePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupLifecyclePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
