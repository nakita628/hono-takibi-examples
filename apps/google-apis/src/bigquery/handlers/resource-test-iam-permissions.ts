import { OpenAPIHono } from '@hono/zod-openapi'
import { postResourceTestIamPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceTestIamPermissionsHandler = app.openapi(
  postResourceTestIamPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
