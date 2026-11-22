import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeDistributionListsDistributionListIdRoute,
  getMeDistributionListsCountRoute,
  getMeDistributionListsDistributionListIdMembersCountRoute,
  getMeDistributionListsDistributionListIdMembersDistributionListMemberIdContactRoute,
  getMeDistributionListsDistributionListIdMembersDistributionListMemberIdRoute,
  getMeDistributionListsDistributionListIdMembersRoute,
  getMeDistributionListsDistributionListIdRoute,
  getMeDistributionListsRoute,
  patchMeDistributionListsDistributionListIdRoute,
  postMeDistributionListsDistributionListIdAddMembersRoute,
  postMeDistributionListsDistributionListIdDeleteMembersRoute,
  postMeDistributionListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meDistributionListHandler = app
  .openapi(getMeDistributionListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDistributionListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDistributionListsDistributionListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeDistributionListsDistributionListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeDistributionListsDistributionListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDistributionListsDistributionListIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDistributionListsDistributionListIdMembersDistributionListMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeDistributionListsDistributionListIdMembersDistributionListMemberIdContactRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeDistributionListsDistributionListIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDistributionListsDistributionListIdAddMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeDistributionListsDistributionListIdDeleteMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeDistributionListsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
