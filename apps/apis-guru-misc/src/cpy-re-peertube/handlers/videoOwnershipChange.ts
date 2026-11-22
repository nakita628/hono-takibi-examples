import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1VideosOwnershipRoute,
  postApiV1VideosIdGiveOwnershipRoute,
  postApiV1VideosOwnershipIdAcceptRoute,
  postApiV1VideosOwnershipIdRefuseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoOwnershipChangeHandler = app
  .openapi(getApiV1VideosOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosOwnershipIdRefuseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdGiveOwnershipRoute, (c) => {
    throw new Error('Not implemented')
  })
