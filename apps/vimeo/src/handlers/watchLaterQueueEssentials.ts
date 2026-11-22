import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeWatchlaterVideoIdRoute,
  deleteUsersUserIdWatchlaterVideoIdRoute,
  getMeWatchlaterRoute,
  getMeWatchlaterVideoIdRoute,
  getUsersUserIdWatchlaterRoute,
  getUsersUserIdWatchlaterVideoIdRoute,
  putMeWatchlaterVideoIdRoute,
  putUsersUserIdWatchlaterVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watchLaterQueueEssentialsHandler = app
  .openapi(getMeWatchlaterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWatchlaterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdWatchlaterVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
