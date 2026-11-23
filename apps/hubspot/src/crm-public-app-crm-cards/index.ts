import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsCardsDev202609AppIdCardIdRoute,
  getCrmExtensionsCardsDev202609AppIdCardIdRoute,
  getCrmExtensionsCardsDev202609AppIdRoute,
  getCrmExtensionsCardsDev202609SampleResponseRoute,
  patchCrmExtensionsCardsDev202609AppIdCardIdRoute,
  postCrmExtensionsCardsDev202609AppIdRoute,
  postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute,
} from './routes'
import {
  deleteCrmExtensionsCardsDev202609AppIdCardIdRouteHandler,
  getCrmExtensionsCardsDev202609AppIdCardIdRouteHandler,
  getCrmExtensionsCardsDev202609AppIdRouteHandler,
  getCrmExtensionsCardsDev202609SampleResponseRouteHandler,
  patchCrmExtensionsCardsDev202609AppIdCardIdRouteHandler,
  postCrmExtensionsCardsDev202609AppIdRouteHandler,
  postCrmExtensionsCardsDev202609AppIdViewsMigrateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmExtensionsCardsDev202609SampleResponseRoute,
    getCrmExtensionsCardsDev202609SampleResponseRouteHandler,
  )
  .openapi(
    getCrmExtensionsCardsDev202609AppIdRoute,
    getCrmExtensionsCardsDev202609AppIdRouteHandler,
  )
  .openapi(
    postCrmExtensionsCardsDev202609AppIdRoute,
    postCrmExtensionsCardsDev202609AppIdRouteHandler,
  )
  .openapi(
    postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute,
    postCrmExtensionsCardsDev202609AppIdViewsMigrateRouteHandler,
  )
  .openapi(
    getCrmExtensionsCardsDev202609AppIdCardIdRoute,
    getCrmExtensionsCardsDev202609AppIdCardIdRouteHandler,
  )
  .openapi(
    deleteCrmExtensionsCardsDev202609AppIdCardIdRoute,
    deleteCrmExtensionsCardsDev202609AppIdCardIdRouteHandler,
  )
  .openapi(
    patchCrmExtensionsCardsDev202609AppIdCardIdRoute,
    patchCrmExtensionsCardsDev202609AppIdCardIdRouteHandler,
  )

export default app
