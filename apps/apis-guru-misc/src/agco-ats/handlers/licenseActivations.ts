import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV2LicenseActivationsRegisterEDTLiteRoute,
  postApiV2LicenseActivationsRoute,
  putApiV2LicenseActivationsIDConfirmRoute,
  putApiV2LicenseActivationsIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseActivationsHandler = app
  .openapi(postApiV2LicenseActivationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LicenseActivationsRegisterEDTLiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LicenseActivationsIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LicenseActivationsIDConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
