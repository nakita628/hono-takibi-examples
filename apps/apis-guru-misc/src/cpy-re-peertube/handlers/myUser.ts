import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersMeAvatarRoute,
  getApiV1UsersMeRoute,
  getApiV1UsersMeVideoQuotaUsedRoute,
  getApiV1UsersMeVideosRoute,
  getApiV1UsersMeVideosVideoIdRatingRoute,
  postApiV1UsersMeAvatarPickRoute,
  putApiV1UsersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const myUserHandler = app
  .openapi(getApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1UsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UsersMeAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideoQuotaUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideosVideoIdRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
