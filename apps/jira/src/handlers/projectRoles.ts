import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3RoleIdRoute,
  getRestApi3ProjectProjectIdOrKeyRoledetailsRoute,
  getRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  getRestApi3ProjectProjectIdOrKeyRoleRoute,
  getRestApi3RoleIdRoute,
  getRestApi3RoleRoute,
  postRestApi3RoleIdRoute,
  postRestApi3RoleRoute,
  putRestApi3RoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectRolesHandler = app
  .openapi(getRestApi3ProjectProjectIdOrKeyRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoledetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3RoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3RoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
