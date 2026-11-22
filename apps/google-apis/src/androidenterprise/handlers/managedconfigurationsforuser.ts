import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedconfigurationsforuserHandler = app
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
