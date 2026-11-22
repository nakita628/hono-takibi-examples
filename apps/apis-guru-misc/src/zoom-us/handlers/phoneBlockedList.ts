import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneBlockedListBlockedListIdRoute,
  getPhoneBlockedListBlockedListIdRoute,
  getPhoneBlockedListRoute,
  patchPhoneBlockedListBlockedListIdRoute,
  postPhoneBlockedListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneBlockedListHandler = app
  .openapi(getPhoneBlockedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneBlockedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneBlockedListBlockedListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneBlockedListBlockedListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneBlockedListBlockedListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
