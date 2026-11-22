import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webappsHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
