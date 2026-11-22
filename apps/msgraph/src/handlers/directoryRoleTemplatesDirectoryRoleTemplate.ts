import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryRoleTemplatesDirectoryRoleTemplateIdRoute,
  getDirectoryRoleTemplatesCountRoute,
  getDirectoryRoleTemplatesDirectoryRoleTemplateIdRoute,
  getDirectoryRoleTemplatesRoute,
  patchDirectoryRoleTemplatesDirectoryRoleTemplateIdRoute,
  postDirectoryRoleTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRoleTemplatesDirectoryRoleTemplateHandler = app
  .openapi(getDirectoryRoleTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRoleTemplatesDirectoryRoleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryRoleTemplatesDirectoryRoleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryRoleTemplatesDirectoryRoleTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryRoleTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
