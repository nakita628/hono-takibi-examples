import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionPhoneNumberIDCallPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const callPermissionsHandler = app.openapi(
  getVersionPhoneNumberIDCallPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
