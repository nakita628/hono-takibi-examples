import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShuttlePathMappingsShuttlePathMappingIdRoute,
  getShuttlePathMappingsRoute,
  getShuttlePathMappingsShuttlePathMappingIdRoute,
  postShuttlePathMappingsRoute,
  putShuttlePathMappingsShuttlePathMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttlePathMappingsHandler = app
  .openapi(getShuttlePathMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttlePathMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttlePathMappingsShuttlePathMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttlePathMappingsShuttlePathMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttlePathMappingsShuttlePathMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
