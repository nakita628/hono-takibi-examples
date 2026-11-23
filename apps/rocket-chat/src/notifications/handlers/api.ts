import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1PushTokenRoute,
  getApiV1BannersIdRoute,
  getApiV1BannersRoute,
  getApiV1PushGetRoute,
  getApiV1PushInfoRoute,
  postApiV1BannersDismissRoute,
  postApiV1PushTestRoute,
  postApiV1PushTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1BannersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BannersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BannersDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PushGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PushTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PushTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PushInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PushTestRoute, (c) => {
    throw new Error('Not implemented')
  })
