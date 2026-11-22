import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DocumentsId4nOrganizationIdFileNameRoute,
  getApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
  getApiV1DocumentsId4nOrganizationIdFileNameRoute,
  getApiV1DocumentsId4nOrganizationIdRoute,
  getApiV1DocumentsId4nRoute,
  getApiV1MicrostorageId4nOrganizationRoute,
  patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
  postApiV1DocumentsId4nOrganizationIdRoute,
  putApiV1DocumentsId4nOrganizationIdRoute,
  putApiV1MicrostorageId4nOrganizationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageHandler = app
  .openapi(getApiV1DocumentsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DocumentsId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DocumentsId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DocumentsId4nOrganizationIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nOrganizationIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MicrostorageId4nOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MicrostorageId4nOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
