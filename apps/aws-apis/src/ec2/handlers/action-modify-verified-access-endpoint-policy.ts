import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessEndpointPolicyRoute,
  postActionModifyVerifiedAccessEndpointPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyVerifiedAccessEndpointPolicyHandler = app
  .openapi(getActionModifyVerifiedAccessEndpointPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessEndpointPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
