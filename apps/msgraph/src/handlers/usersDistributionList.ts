import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdDistributionListsDistributionListIdRoute,
  getUsersUserIdDistributionListsCountRoute,
  getUsersUserIdDistributionListsDistributionListIdMembersCountRoute,
  getUsersUserIdDistributionListsDistributionListIdMembersDistributionListMemberIdContactRoute,
  getUsersUserIdDistributionListsDistributionListIdMembersDistributionListMemberIdRoute,
  getUsersUserIdDistributionListsDistributionListIdMembersRoute,
  getUsersUserIdDistributionListsDistributionListIdRoute,
  getUsersUserIdDistributionListsRoute,
  patchUsersUserIdDistributionListsDistributionListIdRoute,
  postUsersUserIdDistributionListsDistributionListIdAddMembersRoute,
  postUsersUserIdDistributionListsDistributionListIdDeleteMembersRoute,
  postUsersUserIdDistributionListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersDistributionListHandler = app
  .openapi(getUsersUserIdDistributionListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDistributionListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDistributionListsDistributionListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdDistributionListsDistributionListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdDistributionListsDistributionListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDistributionListsDistributionListIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdDistributionListsDistributionListIdMembersDistributionListMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdDistributionListsDistributionListIdMembersDistributionListMemberIdContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdDistributionListsDistributionListIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDistributionListsDistributionListIdAddMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDistributionListsDistributionListIdDeleteMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdDistributionListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
