import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVerifiedAccessTrustProviderRoute,
  postActionCreateVerifiedAccessTrustProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVerifiedAccessTrustProviderHandler = app
  .openapi(getActionCreateVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
