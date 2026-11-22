import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganisationsPartyIdRolesRoleIdRoute,
  getOrganisationsPartyIdRolesRoleIdRoute,
  getOrganisationsPartyIdRolesRoute,
  postOrganisationsPartyIdRolesRoute,
  putOrganisationsPartyIdRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationsRolesHandler = app
  .openapi(getOrganisationsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganisationsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganisationsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganisationsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganisationsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
