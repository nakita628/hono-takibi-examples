import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationUuidImportStatusImportUuidRoute,
  getOrganizationsOrganizationUuidImportStatusRoute,
  postOrganizationsOrganizationUuidImportV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const importHandler = app
  .openapi(getOrganizationsOrganizationUuidImportStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidImportStatusImportUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidImportV2Route, (c) => {
    throw new Error('Not implemented')
  })
