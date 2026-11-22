import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrgSlugOrIdRoute,
  deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRoute,
  getOrganizationOrgSlugOrIdRoute,
  getOrganizationOrgSlugOrIdUrlOrbAllowListRoute,
  postOrganizationOrgSlugOrIdUrlOrbAllowListRoute,
  postOrganizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrgSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrgSlugOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrgSlugOrIdUrlOrbAllowListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationOrgSlugOrIdUrlOrbAllowListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrgSlugOrIdUrlOrbAllowListAllowListEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
