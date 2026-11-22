import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkspaceSlugOrganizationsOrganizationIdRoute,
  getWorkspaceSlugOrganizationsRoute,
  putWorkspaceSlugOrganizationsOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getWorkspaceSlugOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
