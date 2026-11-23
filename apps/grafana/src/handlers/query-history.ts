import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueryHistoryQueryHistoryUidRoute,
  deleteQueryHistoryStarQueryHistoryUidRoute,
  getQueryHistoryRoute,
  patchQueryHistoryQueryHistoryUidRoute,
  postQueryHistoryRoute,
  postQueryHistoryStarQueryHistoryUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHistoryHandler = app
  .openapi(getQueryHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryHistoryStarQueryHistoryUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryHistoryStarQueryHistoryUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueryHistoryQueryHistoryUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchQueryHistoryQueryHistoryUidRoute, (c) => {
    throw new Error('Not implemented')
  })
