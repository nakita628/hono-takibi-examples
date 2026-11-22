import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1SourcesSourceIdRoute,
  getPublicV1SourcesRoute,
  getPublicV1SourcesSourceIdRoute,
  patchPublicV1SourcesSourceIdRoute,
  postPublicV1SourcesInitiateOAuthRoute,
  postPublicV1SourcesRoute,
  putPublicV1SourcesSourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicSourcesHandler = app
  .openapi(getPublicV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1SourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1SourcesInitiateOAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
