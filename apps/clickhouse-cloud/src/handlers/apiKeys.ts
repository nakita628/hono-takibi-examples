import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdKeysKeyIdRoute,
  getV1OrganizationsOrganizationIdKeysKeyIdRoute,
  getV1OrganizationsOrganizationIdKeysRoute,
  patchV1OrganizationsOrganizationIdKeysKeyIdRoute,
  postV1OrganizationsOrganizationIdKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getV1OrganizationsOrganizationIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
