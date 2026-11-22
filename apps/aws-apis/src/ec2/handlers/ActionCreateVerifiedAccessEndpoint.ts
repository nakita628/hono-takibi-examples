import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateVerifiedAccessEndpointRoute,
  postActionCreateVerifiedAccessEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateVerifiedAccessEndpointHandler = app
  .openapi(getActionCreateVerifiedAccessEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateVerifiedAccessEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
