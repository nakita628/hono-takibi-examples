import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscoveryIdentifiersRoute,
  postDiscoveryExistsRoute,
  postDiscoveryReceivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoveryHandler = app
  .openapi(postDiscoveryExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDiscoveryReceivesRoute, (c) => {
    throw new Error('Not implemented')
  })
