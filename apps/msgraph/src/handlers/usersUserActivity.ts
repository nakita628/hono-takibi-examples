import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute,
  deleteUsersUserIdActivitiesUserActivityIdRoute,
  getUsersUserIdActivitiesCountRoute,
  getUsersUserIdActivitiesRecentRoute,
  getUsersUserIdActivitiesRoute,
  getUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdActivityRoute,
  getUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute,
  getUsersUserIdActivitiesUserActivityIdHistoryItemsCountRoute,
  getUsersUserIdActivitiesUserActivityIdHistoryItemsRoute,
  getUsersUserIdActivitiesUserActivityIdRoute,
  patchUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute,
  patchUsersUserIdActivitiesUserActivityIdRoute,
  postUsersUserIdActivitiesRoute,
  postUsersUserIdActivitiesUserActivityIdHistoryItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserActivityHandler = app
  .openapi(getUsersUserIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesUserActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdActivitiesUserActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdActivitiesUserActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesUserActivityIdHistoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdActivitiesUserActivityIdHistoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdActivitiesUserActivityIdHistoryItemsActivityHistoryItemIdActivityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdActivitiesUserActivityIdHistoryItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdActivitiesRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
