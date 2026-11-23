import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRoute,
  deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRoute,
  getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute,
  getOcsV2PhpAppsUserStatusApiV1StatusesRoute,
  getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute,
  getOcsV2PhpAppsUserStatusApiV1UserStatusRoute,
  putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute,
  putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRoute,
  putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRoute,
  putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUserStatusApiV1StatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsUserStatusApiV1UserStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
