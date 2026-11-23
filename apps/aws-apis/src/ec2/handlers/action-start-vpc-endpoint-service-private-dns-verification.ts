import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStartVpcEndpointServicePrivateDnsVerificationRoute,
  postActionStartVpcEndpointServicePrivateDnsVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionStartVpcEndpointServicePrivateDnsVerificationHandler = app
  .openapi(getActionStartVpcEndpointServicePrivateDnsVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartVpcEndpointServicePrivateDnsVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
