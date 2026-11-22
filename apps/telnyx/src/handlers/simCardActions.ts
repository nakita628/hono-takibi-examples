import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBulkSimCardActionsIdRoute,
  getBulkSimCardActionsRoute,
  getSimCardActionsIdRoute,
  getSimCardActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simCardActionsHandler = app
  .openapi(getBulkSimCardActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBulkSimCardActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimCardActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
