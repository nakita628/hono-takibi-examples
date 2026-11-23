import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterpriseLicenseLicenseUuidIndexRoute,
  getEnterpriseLicenseIndexRoute,
  getEnterpriseLicenseInstallIdIndexRoute,
  getEnterpriseLicenseLicenseUuidIndexRoute,
  getEnterpriseLicenseLicenseUuidUsedByIndexRoute,
  getEnterpriseLicenseSummaryIndexRoute,
  getEnterpriseLicenseUserCountsIndexRoute,
  patchEnterpriseLicenseLicenseUuidIndexRoute,
  postEnterpriseLicenseIndexRoute,
  putEnterpriseLicenseLicenseUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterpriseHandler = app
  .openapi(getEnterpriseLicenseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterpriseLicenseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseLicenseLicenseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterpriseLicenseLicenseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterpriseLicenseLicenseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterpriseLicenseLicenseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseLicenseLicenseUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseLicenseInstallIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseLicenseSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterpriseLicenseUserCountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
