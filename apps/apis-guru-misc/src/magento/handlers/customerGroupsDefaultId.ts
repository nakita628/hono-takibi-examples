import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CustomerGroupsDefaultIdRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupsDefaultIdHandler = app.openapi(
  putV1CustomerGroupsDefaultIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
