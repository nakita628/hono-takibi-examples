import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServerFollowersHandleRoute,
  deleteApiV1ServerFollowingHostOrHandleRoute,
  getApiV1ServerFollowersRoute,
  getApiV1ServerFollowingRoute,
  postApiV1ServerFollowersHandleAcceptRoute,
  postApiV1ServerFollowersHandleRejectRoute,
  postApiV1ServerFollowingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceFollowsHandler = app
  .openapi(getApiV1ServerFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerFollowersHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersHandleRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerFollowersHandleAcceptRoute, (c) => {
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
