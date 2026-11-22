import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  getGroupsGroupIdGroupLifecyclePoliciesCountRoute,
  getGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  getGroupsGroupIdGroupLifecyclePoliciesRoute,
  patchGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute,
  postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdAddGroupRoute,
  postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRemoveGroupRoute,
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
  .openapi(getGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdAddGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdGroupLifecyclePoliciesGroupLifecyclePolicyIdRemoveGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdGroupLifecyclePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
