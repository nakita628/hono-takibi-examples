import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeTotpDeviceListRoute,
  postAppidAppIdRecipeTotpDeviceRemoveRoute,
  postAppidAppIdRecipeTotpDeviceRoute,
  postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute,
  postAppidAppIdTenantIdRecipeTotpVerifyRoute,
  postRecipeTotpDeviceImportRoute,
  putAppidAppIdRecipeTotpDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const totpRecipeHandler = app
  .openapi(postAppidAppIdRecipeTotpDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeTotpDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeTotpDeviceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeTotpDeviceImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeTotpDeviceRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeTotpVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
