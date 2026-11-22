import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserIdMailboxSettingsRoute, patchUsersUserIdMailboxSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const usersMailboxSettingsHandler = app
  .openapi(getUsersUserIdMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdMailboxSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
