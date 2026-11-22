import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteRoute,
  getOcsV2PhpAppsAppApiApiV1UsersRoute,
  getOcsV2PhpAppsAppApiExAppStateRoute,
  postOcsV2PhpAppsAppApiApiV1LogRoute,
  putOcsV2PhpAppsAppApiAppsStatusAppIdRoute,
  putOcsV2PhpAppsAppApiExAppStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsApiHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1LogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsAppApiAppsStatusAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsAppApiExAppStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiExAppStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteRoute, (c) => {
    throw new Error('Not implemented')
  })
