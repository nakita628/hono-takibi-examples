import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicOrganizationsMembershipsRoute,
  deleteApiPublicProjectsProjectIdMembershipsRoute,
  getApiPublicOrganizationsApiKeysRoute,
  getApiPublicOrganizationsMembershipsRoute,
  getApiPublicOrganizationsProjectsRoute,
  getApiPublicProjectsProjectIdMembershipsRoute,
  putApiPublicOrganizationsMembershipsRoute,
  putApiPublicProjectsProjectIdMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiPublicOrganizationsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicOrganizationsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicOrganizationsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
