import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4ResourcesUserNotificationsScopesRoute,
  getV4ResourcesUsersUserIdAvatarUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getV4ResourcesUserNotificationsScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ResourcesUsersUserIdAvatarUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
