import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ConfigCustomRoute,
  deleteApiV1ConfigInstanceAvatarRoute,
  deleteApiV1ConfigInstanceBannerRoute,
  deleteApiV1ConfigInstanceLogoLogoTypeRoute,
  getApiV1ConfigAboutRoute,
  getApiV1ConfigCustomRoute,
  getApiV1ConfigRoute,
  postApiV1ConfigInstanceAvatarPickRoute,
  postApiV1ConfigInstanceBannerPickRoute,
  postApiV1ConfigInstanceLogoLogoTypePickRoute,
  putApiV1ConfigCustomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getApiV1ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigInstanceBannerPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigInstanceBannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigInstanceAvatarPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigInstanceAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ConfigInstanceLogoLogoTypePickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ConfigInstanceLogoLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
