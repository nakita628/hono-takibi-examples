import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV3SourceAccountsSourceAccountIdRoute, postV2FundingAccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const fundingManagerPrivateHandler = app
  .openapi(postV2FundingAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3SourceAccountsSourceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
