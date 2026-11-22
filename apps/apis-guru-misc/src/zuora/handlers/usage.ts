import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectUsageIdRoute,
  getV1ObjectUsageIdRoute,
  getV1UsageAccountsAccountKeyRoute,
  postV1ObjectUsageRoute,
  postV1UsageRoute,
  putV1ObjectUsageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app
  .openapi(postV1ObjectUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsageAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
