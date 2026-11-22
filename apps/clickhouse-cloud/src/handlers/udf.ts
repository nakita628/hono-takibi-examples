import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute,
  deleteV1OrganizationsOrganizationIdUdfsFunctionNameRoute,
  deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameRoute,
  getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute,
  getV1OrganizationsOrganizationIdUdfsRoute,
  postV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute,
  postV1OrganizationsOrganizationIdUdfsRoute,
  postV1OrganizationsOrganizationIdUdfUploadsUrlRoute,
  putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const udfHandler = app
  .openapi(postV1OrganizationsOrganizationIdUdfUploadsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdUdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdUdfsFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrganizationsOrganizationIdUdfsFunctionNameAttachmentsServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdUdfsFunctionNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdUdfsFunctionNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
