import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  getGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  getGroupsGroupIdGroupLifecyclePoliciesRoute,
  patchGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  postGroupsGroupIdGroupLifecyclePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsGroupLifecyclePolicyHandler = app
  .openapi(getGroupsGroupIdGroupLifecyclePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdGroupLifecyclePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
