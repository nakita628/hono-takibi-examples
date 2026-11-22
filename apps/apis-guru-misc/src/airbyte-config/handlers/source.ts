import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SourcesCheckConnectionForUpdateRoute,
  postV1SourcesCheckConnectionRoute,
  postV1SourcesCloneRoute,
  postV1SourcesCreateRoute,
  postV1SourcesDeleteRoute,
  postV1SourcesDiscoverSchemaRoute,
  postV1SourcesGetRoute,
  postV1SourcesListRoute,
  postV1SourcesMostRecentSourceActorCatalogRoute,
  postV1SourcesSearchRoute,
  postV1SourcesUpdateRoute,
  postV1SourcesWriteDiscoverCatalogResultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceHandler = app
  .openapi(postV1SourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesMostRecentSourceActorCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesWriteDiscoverCatalogResultRoute, (c) => {
    throw new Error('Not implemented')
  })
