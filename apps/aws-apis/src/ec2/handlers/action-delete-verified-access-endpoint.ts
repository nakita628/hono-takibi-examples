import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteVerifiedAccessEndpointRoute,
  postActionDeleteVerifiedAccessEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteVerifiedAccessEndpointHandler = app
  .openapi(getActionDeleteVerifiedAccessEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVerifiedAccessEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
