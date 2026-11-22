import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveFromGlobalClusterRoute,
  postActionRemoveFromGlobalClusterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRemoveFromGlobalClusterHandler = app
  .openapi(getActionRemoveFromGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveFromGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
