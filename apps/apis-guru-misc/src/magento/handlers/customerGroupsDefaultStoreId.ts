import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomerGroupsDefaultStoreIdRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupsDefaultStoreIdHandler = app.openapi(
  getV1CustomerGroupsDefaultStoreIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
