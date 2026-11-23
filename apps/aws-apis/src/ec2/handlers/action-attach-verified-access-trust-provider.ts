import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAttachVerifiedAccessTrustProviderRoute,
  postActionAttachVerifiedAccessTrustProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAttachVerifiedAccessTrustProviderHandler = app
  .openapi(getActionAttachVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
