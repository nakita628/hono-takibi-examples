import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1HealthFacilityGetSvgCardRoute,
  postV1HealthFacilityAuthenticateRoute,
  postV1HealthFacilityChangePasswordRoute,
  postV1HealthFacilityCreateHealthIdWithPreVerifiedRoute,
  postV1HealthFacilityGenerateOtpRoute,
  postV1HealthFacilityGeneratePasswordRoute,
  postV1HealthFacilityResetPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const healthFacilityHandler = app
  .openapi(postV1HealthFacilityAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityCreateHealthIdWithPreVerifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityGeneratePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HealthFacilityGetSvgCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
