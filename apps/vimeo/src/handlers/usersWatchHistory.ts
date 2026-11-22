import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeWatchedVideosRoute,
  deleteMeWatchedVideosVideoIdRoute,
  getMeWatchedVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersWatchHistoryHandler = app
  .openapi(deleteMeWatchedVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeWatchedVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeWatchedVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
