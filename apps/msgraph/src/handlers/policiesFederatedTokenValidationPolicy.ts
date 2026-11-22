import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesFederatedTokenValidationPolicyRoute,
  getPoliciesFederatedTokenValidationPolicyRoute,
  patchPoliciesFederatedTokenValidationPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesFederatedTokenValidationPolicyHandler = app
  .openapi(getPoliciesFederatedTokenValidationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesFederatedTokenValidationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesFederatedTokenValidationPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
