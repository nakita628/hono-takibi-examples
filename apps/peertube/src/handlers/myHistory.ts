import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersMeHistoryVideosVideoIdOrUUIDRoute,
  getApiV1UsersMeHistoryVideosRoute,
  postApiV1UsersMeHistoryVideosRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myHistoryHandler = app
  .openapi(getApiV1UsersMeHistoryVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeHistoryVideosVideoIdOrUUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeHistoryVideosRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
