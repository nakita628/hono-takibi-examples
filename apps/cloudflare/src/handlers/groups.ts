import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdMembersMemberIdRoute,
  deleteAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdMembersRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdRoute,
  getAccountsAccountIdCloudforceOneEventsDatasetDashGroupsRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdMembersRoute,
  postAccountsAccountIdCloudforceOneEventsDatasetDashGroupsRoute,
  putAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDashGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetDashGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneEventsDatasetDashGroupsGroupIdMembersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
