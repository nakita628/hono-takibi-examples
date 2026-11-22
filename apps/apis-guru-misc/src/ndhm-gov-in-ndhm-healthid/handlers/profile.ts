import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountProfileRoute,
  getV1AccountBenefitsRoute,
  getV1AccountChangePasswdGenerateAadhaarOTPRoute,
  getV1AccountChangePasswdGenerateMobileOTPRoute,
  getV1AccountGetCardRoute,
  getV1AccountGetPngCardRoute,
  getV1AccountGetSvgCardRoute,
  getV1AccountProfileRoute,
  getV1AccountQrCodeRoute,
  postV1AccountAadhaarGenerateOTPRoute,
  postV1AccountAadhaarVerifyOTPRoute,
  postV1AccountChangePasswdByAadhaarRoute,
  postV1AccountChangePasswdByMobileRoute,
  postV1AccountChangePasswordRoute,
  postV1AccountProfileRoute,
  postV1AccountTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(postV1AccountAadhaarGenerateOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountAadhaarVerifyOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountBenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountChangePasswdByAadhaarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountChangePasswdByMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountChangePasswdGenerateAadhaarOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountChangePasswdGenerateMobileOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountGetCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountGetPngCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountGetSvgCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountQrCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
