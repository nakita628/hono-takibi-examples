import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute,
  getOrganizationsOrganizationIdConfigTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configTemplatesHandler = app
  .openapi(getOrganizationsOrganizationIdConfigTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
