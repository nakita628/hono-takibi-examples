import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServerFollowersNameWithHostRoute,
  deleteApiV1ServerFollowingHostOrHandleRoute,
  getApiV1ServerFollowersRoute,
  getApiV1ServerFollowingRoute,
  postApiV1ServerFollowersNameWithHostAcceptRoute,
  postApiV1ServerFollowersNameWithHostRejectRoute,
  postApiV1ServerFollowingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceFollowsHandler = app
  .openapi(getApiV1ServerFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerFollowersNameWithHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersNameWithHostAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersNameWithHostRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerFollowingHostOrHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
