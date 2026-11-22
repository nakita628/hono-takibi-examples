import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdSpacesIntegrateStatusRoute,
  postOrganizationsOrganizationIdSpacesIntegrationRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacesHandler = app
  .openapi(getOrganizationsOrganizationIdSpacesIntegrateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSpacesIntegrationRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
