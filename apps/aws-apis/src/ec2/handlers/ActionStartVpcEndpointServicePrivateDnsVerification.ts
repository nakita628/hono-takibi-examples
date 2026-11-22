import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStartVpcEndpointServicePrivateDnsVerificationRoute,
  postActionStartVpcEndpointServicePrivateDnsVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionStartVpcEndpointServicePrivateDnsVerificationHandler = app
  .openapi(getActionStartVpcEndpointServicePrivateDnsVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartVpcEndpointServicePrivateDnsVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
