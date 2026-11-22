import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomObjectsCustomObjectKeyRoute,
  getApiV2CustomObjectsCustomObjectKeyRoute,
  getApiV2CustomObjectsLimitsObjectLimitRoute,
  getApiV2CustomObjectsRoute,
  patchApiV2CustomObjectsCustomObjectKeyRoute,
  postApiV2CustomObjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectsHandler = app
  .openapi(getApiV2CustomObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsCustomObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CustomObjectsCustomObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomObjectsCustomObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomObjectsLimitsObjectLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
