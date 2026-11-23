import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTIdJsonRoute,
  getTExternalIdExternalIdJsonRoute,
  getTIdJsonRoute,
  getTIdPostsJsonRoute,
  postTIdInviteGroupJsonRoute,
  postTIdInviteJsonRoute,
  postTIdNotificationsJsonRoute,
  postTIdTimerJsonRoute,
  putTDashIdJsonRoute,
  putTIdBookmarkJsonRoute,
  putTIdChangeTimestampJsonRoute,
  putTIdStatusJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tHandler = app
  .openapi(getTIdPostsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTDashIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTIdInviteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTIdInviteGroupJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTIdBookmarkJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTIdStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTIdNotificationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTIdChangeTimestampJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTIdTimerJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTExternalIdExternalIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
