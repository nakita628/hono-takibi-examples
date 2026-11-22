import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreatePermitRoute,
  postDisablePermitRoute,
  postDisableRoute,
  postListRecurringDetailsRoute,
  postNotifyShopperRoute,
  postScheduleAccountUpdaterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app
  .openapi(postCreatePermitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisablePermitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListRecurringDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotifyShopperRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduleAccountUpdaterRoute, (c) => {
    throw new Error('Not implemented')
  })
