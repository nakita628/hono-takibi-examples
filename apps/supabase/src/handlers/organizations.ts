import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsRoute,
  getV1OrganizationsSlugEntitlementsRoute,
  getV1OrganizationsSlugMembersRoute,
  getV1OrganizationsSlugProjectClaimTokenRoute,
  getV1OrganizationsSlugRoute,
  postV1OrganizationsRoute,
  postV1OrganizationsSlugProjectClaimTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsSlugProjectClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsSlugProjectClaimTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
