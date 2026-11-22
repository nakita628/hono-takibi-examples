import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameRoute,
  getPublicV1OrganizationsRoute,
  putPublicV1OrganizationsOrganizationIdOauthCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicOrganizationsHandler = app
  .openapi(getPublicV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1OrganizationsOrganizationIdOauthCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1OrganizationsOrganizationIdOauthCredentialsActorTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
