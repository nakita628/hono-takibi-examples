import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteUserPermissionsBoundaryRoute,
  postActionDeleteUserPermissionsBoundaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteUserPermissionsBoundaryHandler = app
  .openapi(getActionDeleteUserPermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteUserPermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
