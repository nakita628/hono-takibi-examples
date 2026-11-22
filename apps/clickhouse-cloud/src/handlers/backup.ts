import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdBackupsRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdBackupConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdBackupBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
