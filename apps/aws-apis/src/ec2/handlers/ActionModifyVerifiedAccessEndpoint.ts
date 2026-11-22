import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyVerifiedAccessEndpointRoute,
  postActionModifyVerifiedAccessEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyVerifiedAccessEndpointHandler = app
  .openapi(getActionModifyVerifiedAccessEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyVerifiedAccessEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
