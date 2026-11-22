import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsIdRoute,
  getOrganizationsExternalIdExternalIdRoute,
  getOrganizationsIdAuditLogConfigurationRoute,
  getOrganizationsIdRoute,
  getOrganizationsRoute,
  postOrganizationsRoute,
  putOrganizationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdAuditLogConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
