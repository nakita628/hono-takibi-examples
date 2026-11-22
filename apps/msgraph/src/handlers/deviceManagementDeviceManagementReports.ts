import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute,
  deleteDeviceManagementReportsRoute,
  getDeviceManagementReportsExportJobsCountRoute,
  getDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute,
  getDeviceManagementReportsExportJobsRoute,
  getDeviceManagementReportsRoute,
  patchDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute,
  patchDeviceManagementReportsRoute,
  postDeviceManagementReportsExportJobsRoute,
  postDeviceManagementReportsGetCachedReportRoute,
  postDeviceManagementReportsGetCompliancePolicyNonComplianceReportRoute,
  postDeviceManagementReportsGetCompliancePolicyNonComplianceSummaryReportRoute,
  postDeviceManagementReportsGetComplianceSettingNonComplianceReportRoute,
  postDeviceManagementReportsGetConfigurationPolicyNonComplianceReportRoute,
  postDeviceManagementReportsGetConfigurationPolicyNonComplianceSummaryReportRoute,
  postDeviceManagementReportsGetConfigurationSettingNonComplianceReportRoute,
  postDeviceManagementReportsGetDeviceManagementIntentPerSettingContributingProfilesRoute,
  postDeviceManagementReportsGetDeviceManagementIntentSettingsReportRoute,
  postDeviceManagementReportsGetDeviceNonComplianceReportRoute,
  postDeviceManagementReportsGetDevicesWithoutCompliancePolicyReportRoute,
  postDeviceManagementReportsGetHistoricalReportRoute,
  postDeviceManagementReportsGetNoncompliantDevicesAndSettingsReportRoute,
  postDeviceManagementReportsGetPolicyNonComplianceMetadataRoute,
  postDeviceManagementReportsGetPolicyNonComplianceReportRoute,
  postDeviceManagementReportsGetPolicyNonComplianceSummaryReportRoute,
  postDeviceManagementReportsGetReportFiltersRoute,
  postDeviceManagementReportsGetSettingNonComplianceReportRoute,
  postDeviceManagementReportsRetrieveDeviceAppInstallationStatusReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementReportsHandler = app
  .openapi(getDeviceManagementReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsExportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsExportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementReportsExportJobsDeviceManagementExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsExportJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetCachedReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetCompliancePolicyNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetCompliancePolicyNonComplianceSummaryReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetComplianceSettingNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetConfigurationPolicyNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementReportsGetConfigurationPolicyNonComplianceSummaryReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsGetConfigurationSettingNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementReportsGetDeviceManagementIntentPerSettingContributingProfilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsGetDeviceManagementIntentSettingsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetDeviceNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetDevicesWithoutCompliancePolicyReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetHistoricalReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetNoncompliantDevicesAndSettingsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetPolicyNonComplianceMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetPolicyNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetPolicyNonComplianceSummaryReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetReportFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsGetSettingNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsRetrieveDeviceAppInstallationStatusReportRoute, (c) => {
    throw new Error('Not implemented')
  })
