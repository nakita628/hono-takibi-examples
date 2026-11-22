import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SourcesApplySchemaChangesRoute,
  postV1SourcesCheckConnectionForUpdateRoute,
  postV1SourcesCheckConnectionRoute,
  postV1SourcesCreateRoute,
  postV1SourcesDeleteRoute,
  postV1SourcesDiscoverSchemaRoute,
  postV1SourcesGetRoute,
  postV1SourcesGetWithMetadataRoute,
  postV1SourcesListPaginatedRoute,
  postV1SourcesListRoute,
  postV1SourcesMostRecentSourceActorCatalogRoute,
  postV1SourcesPartialUpdateRoute,
  postV1SourcesSearchRoute,
  postV1SourcesUpdateRoute,
  postV1SourcesUpgradeVersionRoute,
  postV1SourcesWriteDiscoverCatalogResultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourceHandler = app
  .openapi(postV1SourcesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesPartialUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesUpgradeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesGetWithMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesMostRecentSourceActorCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesApplySchemaChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SourcesWriteDiscoverCatalogResultRoute, (c) => {
    throw new Error('Not implemented')
  })
