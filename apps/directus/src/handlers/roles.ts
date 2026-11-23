import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRolesIdRoute,
  deleteRolesRoute,
  getRolesIdRoute,
  getRolesRoute,
  patchRolesIdRoute,
  patchRolesRoute,
  postRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
