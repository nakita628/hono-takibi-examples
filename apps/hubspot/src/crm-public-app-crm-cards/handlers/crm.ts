import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsCardsDev202609AppIdCardIdRoute,
  getCrmExtensionsCardsDev202609AppIdCardIdRoute,
  getCrmExtensionsCardsDev202609AppIdRoute,
  getCrmExtensionsCardsDev202609SampleResponseRoute,
  patchCrmExtensionsCardsDev202609AppIdCardIdRoute,
  postCrmExtensionsCardsDev202609AppIdRoute,
  postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmExtensionsCardsDev202609SampleResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExtensionsCardsDev202609AppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCardsDev202609AppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCardsDev202609AppIdViewsMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExtensionsCardsDev202609AppIdCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmExtensionsCardsDev202609AppIdCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmExtensionsCardsDev202609AppIdCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
