import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const installsHandler = app
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
