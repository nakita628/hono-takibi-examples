import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RolesIdRoute,
  getApiV2RolesIdPermissionsRoute,
  getApiV2RolesIdRoute,
  getApiV2RolesRoute,
  postApiV2RolesRoute,
  putApiV2RolesIdPermissionsRoute,
  putApiV2RolesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RolesIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RolesIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
