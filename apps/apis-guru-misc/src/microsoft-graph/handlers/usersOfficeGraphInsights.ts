import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdInsightsRoute,
  deleteUsersUserIdInsightsSharedSharedInsightIdRoute,
  deleteUsersUserIdInsightsTrendingTrendingIdRoute,
  deleteUsersUserIdInsightsUsedUsedInsightIdRoute,
  getUsersUserIdInsightsRoute,
  getUsersUserIdInsightsSharedRoute,
  getUsersUserIdInsightsSharedSharedInsightIdLastSharedMethodRoute,
  getUsersUserIdInsightsSharedSharedInsightIdResourceRoute,
  getUsersUserIdInsightsSharedSharedInsightIdRoute,
  getUsersUserIdInsightsTrendingRoute,
  getUsersUserIdInsightsTrendingTrendingIdResourceRoute,
  getUsersUserIdInsightsTrendingTrendingIdRoute,
  getUsersUserIdInsightsUsedRoute,
  getUsersUserIdInsightsUsedUsedInsightIdResourceRoute,
  getUsersUserIdInsightsUsedUsedInsightIdRoute,
  patchUsersUserIdInsightsRoute,
  patchUsersUserIdInsightsSharedSharedInsightIdRoute,
  patchUsersUserIdInsightsTrendingTrendingIdRoute,
  patchUsersUserIdInsightsUsedUsedInsightIdRoute,
  postUsersUserIdInsightsSharedRoute,
  postUsersUserIdInsightsTrendingRoute,
  postUsersUserIdInsightsUsedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersOfficeGraphInsightsHandler = app
  .openapi(deleteUsersUserIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdInsightsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdInsightsSharedSharedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsSharedSharedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdInsightsSharedSharedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsSharedSharedInsightIdLastSharedMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsSharedSharedInsightIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdInsightsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdInsightsTrendingTrendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsTrendingTrendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdInsightsTrendingTrendingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsTrendingTrendingIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdInsightsUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdInsightsUsedUsedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsUsedUsedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdInsightsUsedUsedInsightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdInsightsUsedUsedInsightIdResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
