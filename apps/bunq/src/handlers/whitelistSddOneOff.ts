import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDWhitelistSddOneOffItemIdRoute,
  getUserUserIDWhitelistSddOneOffItemIdRoute,
  getUserUserIDWhitelistSddOneOffRoute,
  postUserUserIDWhitelistSddOneOffRoute,
  putUserUserIDWhitelistSddOneOffItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const whitelistSddOneOffHandler = app
  .openapi(getUserUserIDWhitelistSddOneOffItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDWhitelistSddOneOffItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDWhitelistSddOneOffItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDWhitelistSddOneOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDWhitelistSddOneOffRoute, (c) => {
    throw new Error('Not implemented')
  })
