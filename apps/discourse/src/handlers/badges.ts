import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminBadgesIdJsonRoute,
  getAdminBadgesJsonRoute,
  getUserBadgesUsernameJsonRoute,
  postAdminBadgesJsonRoute,
  postUserBadgesJsonRoute,
  putAdminBadgesIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const badgesHandler = app
  .openapi(getAdminBadgesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminBadgesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminBadgesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminBadgesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserBadgesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserBadgesUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
