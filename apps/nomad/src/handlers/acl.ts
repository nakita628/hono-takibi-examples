import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAclPolicyPolicyNameRoute,
  deleteAclTokenTokenAccessorRoute,
  getAclPoliciesRoute,
  getAclPolicyPolicyNameRoute,
  getAclTokenRoute,
  getAclTokensRoute,
  getAclTokenTokenAccessorRoute,
  postAclBootstrapRoute,
  postAclPolicyPolicyNameRoute,
  postAclTokenOnetimeExchangeRoute,
  postAclTokenOnetimeRoute,
  postAclTokenTokenAccessorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aclHandler = app
  .openapi(postAclBootstrapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAclPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAclPolicyPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAclPolicyPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAclPolicyPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAclTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAclTokenTokenAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAclTokenTokenAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAclTokenTokenAccessorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAclTokenOnetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAclTokenOnetimeExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAclTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
