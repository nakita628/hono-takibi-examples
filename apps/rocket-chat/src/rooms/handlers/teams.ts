import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1TeamsAutocompleteRoute,
  getApiV1TeamsInfoRoute,
  getApiV1TeamsListAllRoute,
  getApiV1TeamsListChildrenRoute,
  getApiV1TeamsListRoomsOfUserRoute,
  getApiV1TeamsListRoomsRoute,
  getApiV1TeamsListRoute,
  getApiV1TeamsMembersRoute,
  postApiV1TeamsAddMembersRoute,
  postApiV1TeamsAddRoomsRoute,
  postApiV1TeamsConvertToChannelRoute,
  postApiV1TeamsCreateRoute,
  postApiV1TeamsDeleteRoute,
  postApiV1TeamsLeaveRoute,
  postApiV1TeamsRemoveMemberRoute,
  postApiV1TeamsRemoveRoomRoute,
  postApiV1TeamsUpdateMemberRoute,
  postApiV1TeamsUpdateRoomRoute,
  postApiV1TeamsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(postApiV1TeamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsAddMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsUpdateMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsRemoveMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsConvertToChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsAddRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsRemoveRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TeamsUpdateRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListRoomsOfUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TeamsListChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
