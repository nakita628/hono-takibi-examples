import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPoliciesOwnerlessGroupPolicyRoute,
  patchPoliciesOwnerlessGroupPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesOwnerlessGroupPolicyHandler = app
  .openapi(getPoliciesOwnerlessGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesOwnerlessGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
