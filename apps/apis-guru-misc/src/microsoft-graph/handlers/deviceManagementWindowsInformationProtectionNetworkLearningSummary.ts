import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementWindowsInformationProtectionNetworkLearningSummariesWindowsInformationProtectionNetworkLearningSummaryIdRoute,
  getDeviceManagementWindowsInformationProtectionNetworkLearningSummariesRoute,
  getDeviceManagementWindowsInformationProtectionNetworkLearningSummariesWindowsInformationProtectionNetworkLearningSummaryIdRoute,
  patchDeviceManagementWindowsInformationProtectionNetworkLearningSummariesWindowsInformationProtectionNetworkLearningSummaryIdRoute,
  postDeviceManagementWindowsInformationProtectionNetworkLearningSummariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementWindowsInformationProtectionNetworkLearningSummaryHandler = app
  .openapi(getDeviceManagementWindowsInformationProtectionNetworkLearningSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementWindowsInformationProtectionNetworkLearningSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementWindowsInformationProtectionNetworkLearningSummariesWindowsInformationProtectionNetworkLearningSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementWindowsInformationProtectionNetworkLearningSummariesWindowsInformationProtectionNetworkLearningSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementWindowsInformationProtectionNetworkLearningSummariesWindowsInformationProtectionNetworkLearningSummaryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
