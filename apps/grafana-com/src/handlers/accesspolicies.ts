import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccesspoliciesIdRoute,
  getV1AccesspoliciesConfigRoute,
  getV1AccesspoliciesIdRoute,
  getV1AccesspoliciesRoute,
  postV1AccesspoliciesIdRoute,
  postV1AccesspoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accesspoliciesHandler = app
  .openapi(getV1AccesspoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccesspoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccesspoliciesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccesspoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccesspoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccesspoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
