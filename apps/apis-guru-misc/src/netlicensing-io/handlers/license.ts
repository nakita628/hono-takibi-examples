import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicenseLicenseNumberRoute,
  getLicenseLicenseNumberRoute,
  getLicenseRoute,
  postLicenseLicenseNumberRoute,
  postLicenseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseHandler = app
  .openapi(getLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLicenseLicenseNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicenseLicenseNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseLicenseNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
