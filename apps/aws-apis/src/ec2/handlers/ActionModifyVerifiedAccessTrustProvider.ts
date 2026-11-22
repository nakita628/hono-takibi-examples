import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessTrustProviderRoute,
  postActionModifyVerifiedAccessTrustProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVerifiedAccessTrustProviderHandler = app
  .openapi(getActionModifyVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
