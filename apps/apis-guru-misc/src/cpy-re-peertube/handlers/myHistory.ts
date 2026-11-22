import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersMeHistoryVideosVideoIdRoute,
  getApiV1UsersMeHistoryVideosRoute,
  postApiV1UsersMeHistoryVideosRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myHistoryHandler = app
  .openapi(getApiV1UsersMeHistoryVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeHistoryVideosRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeHistoryVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
