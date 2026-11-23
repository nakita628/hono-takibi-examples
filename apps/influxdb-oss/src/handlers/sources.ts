import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSourcesSourceIDRoute,
  getSourcesRoute,
  getSourcesSourceIDBucketsRoute,
  getSourcesSourceIDHealthRoute,
  getSourcesSourceIDRoute,
  patchSourcesSourceIDRoute,
  postSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(postSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSourcesSourceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSourcesSourceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSourceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSourceIDHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSourcesSourceIDBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
