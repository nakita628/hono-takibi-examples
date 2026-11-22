import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdItContactsContactIdRoute,
  getOrganizationsOrganizationIdItContactsRoute,
  postOrganizationsOrganizationIdItContactsContactIdInviteRoute,
  postOrganizationsOrganizationIdItContactsContactIdRevokeRoute,
  postOrganizationsOrganizationIdItContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsItContactsHandler = app
  .openapi(getOrganizationsOrganizationIdItContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdItContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdItContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdItContactsContactIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdItContactsContactIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
