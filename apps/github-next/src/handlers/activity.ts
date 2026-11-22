import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsThreadsThreadIdRoute,
  deleteNotificationsThreadsThreadIdSubscriptionRoute,
  deleteReposOwnerRepoSubscriptionRoute,
  deleteUserStarredOwnerRepoRoute,
  getEventsRoute,
  getFeedsRoute,
  getNetworksOwnerRepoEventsRoute,
  getNotificationsRoute,
  getNotificationsThreadsThreadIdRoute,
  getNotificationsThreadsThreadIdSubscriptionRoute,
  getOrgsOrgEventsRoute,
  getReposOwnerRepoEventsRoute,
  getReposOwnerRepoNotificationsRoute,
  getReposOwnerRepoStargazersCountRoute,
  getReposOwnerRepoStargazersHistoryRoute,
  getReposOwnerRepoStargazersRoute,
  getReposOwnerRepoSubscribersRoute,
  getReposOwnerRepoSubscriptionRoute,
  getUserStarredOwnerRepoRoute,
  getUserStarredRoute,
  getUserSubscriptionsRoute,
  getUsersUsernameEventsOrgsOrgRoute,
  getUsersUsernameEventsPublicRoute,
  getUsersUsernameEventsRoute,
  getUsersUsernameReceivedEventsPublicRoute,
  getUsersUsernameReceivedEventsRoute,
  getUsersUsernameStarredRoute,
  getUsersUsernameSubscriptionsRoute,
  patchNotificationsThreadsThreadIdRoute,
  putNotificationsRoute,
  putNotificationsThreadsThreadIdSubscriptionRoute,
  putReposOwnerRepoNotificationsRoute,
  putReposOwnerRepoSubscriptionRoute,
  putUserStarredOwnerRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksOwnerRepoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationsThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsThreadsThreadIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsThreadsThreadIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsThreadsThreadIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserStarredOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameEventsOrgsOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameEventsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReceivedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReceivedEventsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameStarredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
