import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRolesAccountKindIdentifierRoute,
  getRolesAccountKindIdentifierRoute,
  postRolesAccountKindIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(deleteRolesAccountKindIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRolesAccountKindIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRolesAccountKindIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
