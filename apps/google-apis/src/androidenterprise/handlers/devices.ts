import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
