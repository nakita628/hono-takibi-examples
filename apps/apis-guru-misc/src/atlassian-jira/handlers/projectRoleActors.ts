import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  deleteRestApi3RoleIdActorsRoute,
  getRestApi3RoleIdActorsRoute,
  postRestApi3ProjectProjectIdOrKeyRoleIdRoute,
  postRestApi3RoleIdActorsRoute,
  putRestApi3ProjectProjectIdOrKeyRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectRoleActorsHandler = app
  .openapi(deleteRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3RoleIdActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3RoleIdActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3RoleIdActorsRoute, (c) => {
    throw new Error('Not implemented')
  })
