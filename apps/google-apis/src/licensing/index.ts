import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
  getAppsLicensingV1ProductProductIdSkuSkuIdUsersRoute,
  getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
  getAppsLicensingV1ProductProductIdUsersRoute,
  patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
  postAppsLicensingV1ProductProductIdSkuSkuIdUserRoute,
  putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
} from './routes'
import {
  deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  getAppsLicensingV1ProductProductIdSkuSkuIdUsersRouteHandler,
  getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  getAppsLicensingV1ProductProductIdUsersRouteHandler,
  patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  postAppsLicensingV1ProductProductIdSkuSkuIdUserRouteHandler,
  putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAppsLicensingV1ProductProductIdSkuSkuIdUserRoute,
    postAppsLicensingV1ProductProductIdSkuSkuIdUserRouteHandler,
  )
  .openapi(
    deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
    deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  )
  .openapi(
    getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
    getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  )
  .openapi(
    patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
    patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  )
  .openapi(
    putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute,
    putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRouteHandler,
  )
  .openapi(
    getAppsLicensingV1ProductProductIdSkuSkuIdUsersRoute,
    getAppsLicensingV1ProductProductIdSkuSkuIdUsersRouteHandler,
  )
  .openapi(
    getAppsLicensingV1ProductProductIdUsersRoute,
    getAppsLicensingV1ProductProductIdUsersRouteHandler,
  )

export default app
