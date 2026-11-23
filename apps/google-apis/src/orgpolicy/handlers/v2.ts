import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameGetEffectivePolicyRoute,
  getV2NameRoute,
  getV2ParentConstraintsRoute,
  getV2ParentCustomConstraintsRoute,
  getV2ParentPoliciesRoute,
  patchV2NameRoute,
  postV2ParentCustomConstraintsRoute,
  postV2ParentPoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameGetEffectivePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentConstraintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentCustomConstraintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentCustomConstraintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
