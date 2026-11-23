import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteRolePermissionsBoundaryRoute,
  postActionDeleteRolePermissionsBoundaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteRolePermissionsBoundaryHandler = app
  .openapi(getActionDeleteRolePermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRolePermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
