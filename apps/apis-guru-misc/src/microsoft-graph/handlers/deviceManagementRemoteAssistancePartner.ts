import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdRoute,
  getDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdRoute,
  getDeviceManagementRemoteAssistancePartnersRoute,
  patchDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdRoute,
  postDeviceManagementRemoteAssistancePartnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementRemoteAssistancePartnerHandler = app
  .openapi(getDeviceManagementRemoteAssistancePartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementRemoteAssistancePartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
