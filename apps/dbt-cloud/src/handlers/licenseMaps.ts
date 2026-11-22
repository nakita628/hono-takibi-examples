import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdLicenseMapsIdIndexRoute,
  getApiV3AccountsAccountIdLicenseMapsIdIndexRoute,
  getApiV3AccountsAccountIdLicenseMapsIndexRoute,
  postApiV3AccountsAccountIdLicenseMapsIdIndexRoute,
  postApiV3AccountsAccountIdLicenseMapsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseMapsHandler = app
  .openapi(getApiV3AccountsAccountIdLicenseMapsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdLicenseMapsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdLicenseMapsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdLicenseMapsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdLicenseMapsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
