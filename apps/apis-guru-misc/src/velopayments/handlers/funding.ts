import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DeltasFundingsRoute,
  getV1FundingsFundingIdRoute,
  getV2FundingAccountsFundingAccountIdRoute,
  getV2FundingAccountsRoute,
  postV2SourceAccountsSourceAccountIdFundingRequestRoute,
  postV3SourceAccountsSourceAccountIdFundingRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fundingHandler = app
  .openapi(getV1DeltasFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FundingsFundingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FundingAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FundingAccountsFundingAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SourceAccountsSourceAccountIdFundingRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SourceAccountsSourceAccountIdFundingRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
