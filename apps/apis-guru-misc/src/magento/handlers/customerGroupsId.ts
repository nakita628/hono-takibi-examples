import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CustomerGroupsIdRoute,
  getV1CustomerGroupsIdRoute,
  putV1CustomerGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerGroupsIdHandler = app
  .openapi(deleteV1CustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
