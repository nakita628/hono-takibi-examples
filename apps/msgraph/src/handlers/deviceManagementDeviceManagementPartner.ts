import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdRoute,
  getDeviceManagementDeviceManagementPartnersCountRoute,
  getDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdRoute,
  getDeviceManagementDeviceManagementPartnersRoute,
  patchDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdRoute,
  postDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdTerminateRoute,
  postDeviceManagementDeviceManagementPartnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceManagementPartnerHandler = app
  .openapi(getDeviceManagementDeviceManagementPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceManagementPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdTerminateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceManagementPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
