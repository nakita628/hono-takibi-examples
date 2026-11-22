import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeGroupsGroupIdRoute,
  deleteUsersUserIdGroupsGroupIdRoute,
  putMeGroupsGroupIdRoute,
  putUsersUserIdGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsSubscriptionsHandler = app
  .openapi(deleteMeGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
