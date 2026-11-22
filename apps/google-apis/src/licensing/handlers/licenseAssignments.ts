import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
  getAppsLicensingV1ProductProductIdSkuSkuIdUsersRoute,
  getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
  getAppsLicensingV1ProductProductIdUsersRoute,
  patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
  postAppsLicensingV1ProductProductIdSkuSkuIdUserRoute,
  putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseAssignmentsHandler = app
  .openapi(postAppsLicensingV1ProductProductIdSkuSkuIdUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsLicensingV1ProductProductIdSkuSkuIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsLicensingV1ProductProductIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
