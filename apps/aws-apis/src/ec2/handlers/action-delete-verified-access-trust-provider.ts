import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVerifiedAccessTrustProviderRoute,
  postActionDeleteVerifiedAccessTrustProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVerifiedAccessTrustProviderHandler = app
  .openapi(getActionDeleteVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
