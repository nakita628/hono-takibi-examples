import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutRolePermissionsBoundaryRoute,
  postActionPutRolePermissionsBoundaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPutRolePermissionsBoundaryHandler = app
  .openapi(getActionPutRolePermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutRolePermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
