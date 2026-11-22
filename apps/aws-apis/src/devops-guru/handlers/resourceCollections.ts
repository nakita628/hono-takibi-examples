import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourceCollectionsResourceCollectionTypeRoute,
  putResourceCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceCollectionsHandler = app
  .openapi(getResourceCollectionsResourceCollectionTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putResourceCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
