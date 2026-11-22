import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVerifiedAccessTrustProviderRoute,
  postActionDeleteVerifiedAccessTrustProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteVerifiedAccessTrustProviderHandler = app
  .openapi(getActionDeleteVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVerifiedAccessTrustProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
