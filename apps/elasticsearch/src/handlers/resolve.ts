import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResolveClusterNameRoute,
  getResolveClusterRoute,
  getResolveIndexNameRoute,
  postResolveIndexNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resolveHandler = app
  .openapi(getResolveClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResolveClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResolveIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResolveIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
