import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2TopicsUrlGroupNameEndpointsRoute,
  deleteV2TopicsUrlGroupNameRoute,
  getV2TopicsRoute,
  getV2TopicsUrlGroupNameRoute,
  postV2TopicsUrlGroupNameEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlGroupsHandler = app
  .openapi(getV2TopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TopicsUrlGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsUrlGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TopicsUrlGroupNameEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2TopicsUrlGroupNameEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
