import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementTelecomExpenseManagementPartnersTelecomExpenseManagementPartnerIdRoute,
  getDeviceManagementTelecomExpenseManagementPartnersRoute,
  getDeviceManagementTelecomExpenseManagementPartnersTelecomExpenseManagementPartnerIdRoute,
  patchDeviceManagementTelecomExpenseManagementPartnersTelecomExpenseManagementPartnerIdRoute,
  postDeviceManagementTelecomExpenseManagementPartnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementTelecomExpenseManagementPartnerHandler = app
  .openapi(getDeviceManagementTelecomExpenseManagementPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementTelecomExpenseManagementPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceManagementTelecomExpenseManagementPartnersTelecomExpenseManagementPartnerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementTelecomExpenseManagementPartnersTelecomExpenseManagementPartnerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementTelecomExpenseManagementPartnersTelecomExpenseManagementPartnerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
