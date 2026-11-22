import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PriorityPackagesIDRoute,
  getApiV2PriorityPackagesIDRoute,
  getApiV2PriorityPackagesRoute,
  postApiV2PriorityPackagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priorityPackagesHandler = app
  .openapi(getApiV2PriorityPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PriorityPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PriorityPackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PriorityPackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
