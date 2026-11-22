import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementWindowsInformationProtectionAppLearningSummariesWindowsInformationProtectionAppLearningSummaryIdRoute,
  getDeviceManagementWindowsInformationProtectionAppLearningSummariesRoute,
  getDeviceManagementWindowsInformationProtectionAppLearningSummariesWindowsInformationProtectionAppLearningSummaryIdRoute,
  patchDeviceManagementWindowsInformationProtectionAppLearningSummariesWindowsInformationProtectionAppLearningSummaryIdRoute,
  postDeviceManagementWindowsInformationProtectionAppLearningSummariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementWindowsInformationProtectionAppLearningSummaryHandler = app
  .openapi(getDeviceManagementWindowsInformationProtectionAppLearningSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementWindowsInformationProtectionAppLearningSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementWindowsInformationProtectionAppLearningSummariesWindowsInformationProtectionAppLearningSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementWindowsInformationProtectionAppLearningSummariesWindowsInformationProtectionAppLearningSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementWindowsInformationProtectionAppLearningSummariesWindowsInformationProtectionAppLearningSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
