import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBlogNamespaceSlugResourceGroupRoute,
  postApiBlogNamespaceSlugResourceGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blogsHandler = app
  .openapi(getApiBlogNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBlogNamespaceSlugResourceGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
