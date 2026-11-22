import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRoute,
  getUserprofilesProfileIdDynamicTargetingKeysRoute,
  postUserprofilesProfileIdDynamicTargetingKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicTargetingKeysHandler = app
  .openapi(getUserprofilesProfileIdDynamicTargetingKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdDynamicTargetingKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
