import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  getOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  getOrganizationsOrganizationIdDataProvidersRoute,
  postOrganizationsOrganizationIdConnectedAccountsSlugRoute,
  putOrganizationsOrganizationIdConnectedAccountsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsDataProvidersHandler = app
  .openapi(getOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdConnectedAccountsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdDataProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
