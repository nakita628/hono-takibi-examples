import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicenseRoute,
  getLicenseBasicStatusRoute,
  getLicenseRoute,
  getLicenseTrialStatusRoute,
  postLicenseRoute,
  postLicenseStartBasicRoute,
  postLicenseStartTrialRoute,
  putLicenseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseHandler = app
  .openapi(getLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicenseBasicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicenseTrialStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseStartBasicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseStartTrialRoute, (c) => {
    throw new Error('Not implemented')
  })
