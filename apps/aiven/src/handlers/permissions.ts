import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute,
  patchOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute,
  putOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdPermissionsResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
