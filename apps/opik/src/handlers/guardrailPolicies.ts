import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateGuardrailsPoliciesIdRoute,
  getV1PrivateGuardrailsPoliciesIdRoute,
  getV1PrivateGuardrailsPoliciesRoute,
  postV1PrivateGuardrailsPoliciesRoute,
  putV1PrivateGuardrailsPoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guardrailPoliciesHandler = app
  .openapi(getV1PrivateGuardrailsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateGuardrailsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateGuardrailsPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateGuardrailsPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateGuardrailsPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
