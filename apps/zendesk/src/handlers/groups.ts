import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2GroupsGroupIdRoute,
  getApiV2GroupsAssignableRoute,
  getApiV2GroupsAutocompleteRoute,
  getApiV2GroupsAvailableAgentsRoute,
  getApiV2GroupsCountRoute,
  getApiV2GroupsDefaultRoute,
  getApiV2GroupsGroupIdRoute,
  getApiV2GroupsRoute,
  getApiV2UsersUserIdGroupsCountRoute,
  getApiV2UsersUserIdGroupsRoute,
  postApiV2GroupsRoute,
  putApiV2GroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getApiV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsAvailableAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
