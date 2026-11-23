import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDetachVerifiedAccessTrustProviderRoute,
  postActionDetachVerifiedAccessTrustProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDetachVerifiedAccessTrustProviderHandler = app
  .openapi(getActionDetachVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
