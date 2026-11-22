import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceaccountkeysHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
