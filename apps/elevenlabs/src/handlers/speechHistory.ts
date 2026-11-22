import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1HistoryHistoryItemIdRoute,
  getV1HistoryHistoryItemIdAudioRoute,
  getV1HistoryHistoryItemIdRoute,
  getV1HistoryRoute,
  postV1HistoryDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const speechHistoryHandler = app
  .openapi(getV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoryHistoryItemIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HistoryDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
