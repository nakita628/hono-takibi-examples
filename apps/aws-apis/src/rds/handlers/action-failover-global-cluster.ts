import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionFailoverGlobalClusterRoute,
  postActionFailoverGlobalClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionFailoverGlobalClusterHandler = app
  .openapi(getActionFailoverGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionFailoverGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
