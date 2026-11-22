import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVerifiedAccessTrustProvidersRoute,
  postActionDescribeVerifiedAccessTrustProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVerifiedAccessTrustProvidersHandler = app
  .openapi(getActionDescribeVerifiedAccessTrustProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVerifiedAccessTrustProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
