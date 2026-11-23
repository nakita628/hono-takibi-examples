import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNoticesHiddenRoute,
  deleteNoticesNoticeIdHiddenRoute,
  getNoticesMutedChecksRoute,
  getNoticesRoute,
  getNoticesStatsRoute,
  postNoticesNoticeIdAcknowledgeRoute,
  postNoticesNoticeIdMuteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const noticesHandler = app
  .openapi(getNoticesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNoticesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNoticesMutedChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNoticesHiddenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNoticesNoticeIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNoticesNoticeIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNoticesNoticeIdHiddenRoute, (c) => {
    throw new Error('Not implemented')
  })
