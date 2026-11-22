import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionManagedCredentialsSshkeyRoute } from '../routes'

const app = new OpenAPIHono()

export const managedSSHKeysHandler = app.openapi(
  getApiVersionManagedCredentialsSshkeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
