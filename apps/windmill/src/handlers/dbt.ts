import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceDbtWarehouseExistsNameRoute,
  getWWorkspaceDbtWarehouseNameRoute,
  postWWorkspaceDbtRunProgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbtHandler = app
  .openapi(postWWorkspaceDbtRunProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDbtWarehouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDbtWarehouseExistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
