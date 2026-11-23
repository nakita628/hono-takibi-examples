import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveFromGlobalClusterRoute,
  postActionRemoveFromGlobalClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveFromGlobalClusterHandler = app
  .openapi(getActionRemoveFromGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveFromGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
