import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppsAppIdKeysRoute,
  patchAppsAppIdKeysKeyIdRoute,
  postAppsAppIdKeysKeyIdRevokeRoute,
  postAppsAppIdKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getAppsAppIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdKeysKeyIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
