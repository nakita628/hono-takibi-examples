import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ForgotHealthIdAadhaarGenerateOtpRoute,
  postV1ForgotHealthIdAadhaarRoute,
  postV1ForgotHealthIdMobileGenerateOtpRoute,
  postV1ForgotHealthIdMobileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const forgotHealthIdNumberHandler = app
  .openapi(postV1ForgotHealthIdAadhaarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForgotHealthIdAadhaarGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForgotHealthIdMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForgotHealthIdMobileGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
