import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRolesDirectoryRoleIdRoute,
  deleteDirectoryRolesRoleTemplateIdRoleTemplateIdRoute,
  getDirectoryRolesCountRoute,
  getDirectoryRolesDirectoryRoleIdRoute,
  getDirectoryRolesRoleTemplateIdRoleTemplateIdRoute,
  getDirectoryRolesRoute,
  patchDirectoryRolesDirectoryRoleIdRoute,
  patchDirectoryRolesRoleTemplateIdRoleTemplateIdRoute,
  postDirectoryRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRolesDirectoryRoleHandler = app
  .openapi(getDirectoryRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesDirectoryRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRolesDirectoryRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesDirectoryRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesRoleTemplateIdRoleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRolesRoleTemplateIdRoleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRolesRoleTemplateIdRoleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRolesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
