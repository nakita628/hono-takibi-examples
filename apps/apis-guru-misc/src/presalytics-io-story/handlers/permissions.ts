import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute,
  getPermissionTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getPermissionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeRoute, (c) => {
    throw new Error('Not implemented')
  })
