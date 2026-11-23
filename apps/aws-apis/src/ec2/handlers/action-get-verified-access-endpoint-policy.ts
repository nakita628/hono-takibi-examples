import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetVerifiedAccessEndpointPolicyRoute,
  postActionGetVerifiedAccessEndpointPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetVerifiedAccessEndpointPolicyHandler = app
  .openapi(getActionGetVerifiedAccessEndpointPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetVerifiedAccessEndpointPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
