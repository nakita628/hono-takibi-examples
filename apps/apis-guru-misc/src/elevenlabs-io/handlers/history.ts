import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1HistoryHistoryItemIdRoute,
  getV1HistoryHistoryItemIdAudioRoute,
  getV1HistoryRoute,
  postV1HistoryDeleteRoute,
  postV1HistoryDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HistoryDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HistoryDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoryHistoryItemIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
