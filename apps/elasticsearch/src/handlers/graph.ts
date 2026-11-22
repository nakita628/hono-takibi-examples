import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexGraphExploreRoute, postIndexGraphExploreRoute } from '../routes'

const app = new OpenAPIHono()

export const graphHandler = app
  .openapi(getIndexGraphExploreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexGraphExploreRoute, (c) => {
    throw new Error('Not implemented')
  })
