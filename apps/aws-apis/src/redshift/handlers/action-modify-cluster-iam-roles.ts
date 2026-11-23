import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyClusterIamRolesRoute,
  postActionModifyClusterIamRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyClusterIamRolesHandler = app
  .openapi(getActionModifyClusterIamRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyClusterIamRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
