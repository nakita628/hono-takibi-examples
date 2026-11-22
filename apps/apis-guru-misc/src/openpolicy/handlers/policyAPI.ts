import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PoliciesIdRoute,
  getV1PoliciesIdRoute,
  getV1PoliciesRoute,
  putV1PoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policyAPIHandler = app
  .openapi(getV1PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
