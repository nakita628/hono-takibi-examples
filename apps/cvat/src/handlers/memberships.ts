import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiMembershipsIdRoute,
  getApiMembershipsIdRoute,
  getApiMembershipsRoute,
  patchApiMembershipsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membershipsHandler = app
  .openapi(getApiMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMembershipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
