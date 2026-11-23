import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesIdRoute,
  getPoliciesIdRoute,
  getPoliciesRoute,
  patchPoliciesIdRoute,
  postPoliciesRoute,
  putPoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(deletePoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
