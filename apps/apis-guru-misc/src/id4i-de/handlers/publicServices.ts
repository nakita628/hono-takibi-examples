import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRoute,
  getApiV1PublicDocumentsId4nOrganizationIdFileNameRoute,
  getApiV1PublicDocumentsId4nRoute,
  getApiV1PublicHistoryId4nRoute,
  getApiV1PublicOrganizationsOrganizationIdRoute,
  getApiV1PublicRoutesId4nRoute,
  getGoGuidRoute,
  getWhoisId4nRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicServicesHandler = app
  .openapi(getApiV1PublicDocumentsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicDocumentsId4nOrganizationIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicHistoryId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicRoutesId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWhoisId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
