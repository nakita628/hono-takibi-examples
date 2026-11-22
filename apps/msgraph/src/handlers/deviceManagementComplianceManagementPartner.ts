import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementComplianceManagementPartnersComplianceManagementPartnerIdRoute,
  getDeviceManagementComplianceManagementPartnersComplianceManagementPartnerIdRoute,
  getDeviceManagementComplianceManagementPartnersCountRoute,
  getDeviceManagementComplianceManagementPartnersRoute,
  patchDeviceManagementComplianceManagementPartnersComplianceManagementPartnerIdRoute,
  postDeviceManagementComplianceManagementPartnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementComplianceManagementPartnerHandler = app
  .openapi(getDeviceManagementComplianceManagementPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementComplianceManagementPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementComplianceManagementPartnersComplianceManagementPartnerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementComplianceManagementPartnersComplianceManagementPartnerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementComplianceManagementPartnersComplianceManagementPartnerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementComplianceManagementPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
