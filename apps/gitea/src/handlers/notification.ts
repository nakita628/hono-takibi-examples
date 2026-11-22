import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsNewRoute,
  getNotificationsRoute,
  getNotificationsThreadsIdRoute,
  getReposOwnerRepoNotificationsRoute,
  patchNotificationsThreadsIdRoute,
  putNotificationsRoute,
  putReposOwnerRepoNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsThreadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationsThreadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
