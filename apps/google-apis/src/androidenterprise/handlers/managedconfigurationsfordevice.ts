import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedconfigurationsfordeviceHandler = app
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
