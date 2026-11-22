import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomersGroupsGroupIdRoute,
  getV2CustomersGroupsGroupIdRoute,
  getV2CustomersGroupsRoute,
  postV2CustomersGroupsRoute,
  putV2CustomersGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerGroupsHandler = app
  .openapi(getV2CustomersGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomersGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomersGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomersGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomersGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
