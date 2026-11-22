import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotHandler = app
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdSnapshotConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
