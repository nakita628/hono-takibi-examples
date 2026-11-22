import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysKeyLicenseesLicenseeRoute,
  getKeysKeyLicenseesLicenseeRoute,
  getKeysKeyLicenseesRoute,
  postKeysKeyLicenseesRoute,
  putKeysKeyLicenseesLicenseeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseesHandler = app
  .openapi(getKeysKeyLicenseesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysKeyLicenseesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysKeyLicenseesLicenseeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyLicenseesLicenseeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKeysKeyLicenseesLicenseeRoute, (c) => {
    throw new Error('Not implemented')
  })
