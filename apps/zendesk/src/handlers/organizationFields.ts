import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrganizationFieldsOrganizationFieldIdRoute,
  getApiV2OrganizationFieldsOrganizationFieldIdRoute,
  getApiV2OrganizationFieldsRoute,
  postApiV2OrganizationFieldsRoute,
  putApiV2OrganizationFieldsOrganizationFieldIdRoute,
  putApiV2OrganizationFieldsReorderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationFieldsHandler = app
  .openapi(getApiV2OrganizationFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrganizationFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OrganizationFieldsOrganizationFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationFieldsOrganizationFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrganizationFieldsOrganizationFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OrganizationFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
