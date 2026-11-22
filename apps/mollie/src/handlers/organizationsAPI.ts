import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2OrganizationsMePartnerRoute,
  getV2OrganizationsMeRoute,
  getV2OrganizationsOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsAPIHandler = app
  .openapi(getV2OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrganizationsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OrganizationsMePartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
