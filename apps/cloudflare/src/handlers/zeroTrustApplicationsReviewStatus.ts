import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdGatewayAppsReviewStatusRoute,
  putAccountsAccountIdGatewayAppsReviewStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustApplicationsReviewStatusHandler = app
  .openapi(getAccountsAccountIdGatewayAppsReviewStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdGatewayAppsReviewStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
