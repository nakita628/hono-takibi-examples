import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitlementsHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
