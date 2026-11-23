import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeysKeyConfigsConfigRoute,
  deleteKeysKeyLicenseesLicenseeRoute,
  getKeysKeyConfigsConfigRoute,
  getKeysKeyConfigsRoute,
  getKeysKeyDetailsRoute,
  getKeysKeyLicenseesLicenseeRoute,
  getKeysKeyLicenseesRoute,
  getKeysKeyLookupsRoute,
  getKeysKeyRoute,
  getKeysKeyUsageRoute,
  postKeysKeyConfigsConfigRoute,
  postKeysKeyConfigsRoute,
  postKeysKeyLicenseesRoute,
  putKeysKeyLicenseesLicenseeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysKeyConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeysKeyConfigsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyConfigsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeysKeyConfigsConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getKeysKeyLookupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeysKeyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
