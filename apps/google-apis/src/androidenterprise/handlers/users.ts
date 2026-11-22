import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRoute,
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
