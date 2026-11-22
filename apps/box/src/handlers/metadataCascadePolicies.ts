import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
  getMetadataCascadePoliciesMetadataCascadePolicyIdRoute,
  getMetadataCascadePoliciesRoute,
  postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRoute,
  postMetadataCascadePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataCascadePoliciesHandler = app
  .openapi(getMetadataCascadePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataCascadePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataCascadePoliciesMetadataCascadePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataCascadePoliciesMetadataCascadePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataCascadePoliciesMetadataCascadePolicyIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
