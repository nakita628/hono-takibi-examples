import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRolesNameRoute,
  getPermissionsIdRoute,
  getPermissionsRoute,
  getRolesRoute,
  postRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsV2Handler = app
  .openapi(getPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
