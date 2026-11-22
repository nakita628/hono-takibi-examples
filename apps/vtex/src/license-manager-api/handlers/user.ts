import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLicenseManagerSitePvtLoginsListPagedRoute,
  getApiLicenseManagerUsersUserIdRoute,
  postApiLicenseManagerUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getApiLicenseManagerSitePvtLoginsListPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseManagerUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseManagerUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
