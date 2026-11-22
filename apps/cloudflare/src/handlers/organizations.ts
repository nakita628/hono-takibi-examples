import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdAccountsRoute,
  getOrganizationsOrganizationIdProfileRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  postOrganizationsRoute,
  putOrganizationsOrganizationIdInvitesMemberCodeRoute,
  putOrganizationsOrganizationIdProfileRoute,
  putOrganizationsOrganizationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdInvitesMemberCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
