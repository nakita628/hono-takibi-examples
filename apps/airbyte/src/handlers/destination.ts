import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DestinationsCheckConnectionForUpdateRoute,
  postV1DestinationsCheckConnectionRoute,
  postV1DestinationsCreateRoute,
  postV1DestinationsDeleteRoute,
  postV1DestinationsDiscoverSchemaRoute,
  postV1DestinationsGetCatalogForConnectionRoute,
  postV1DestinationsGetRoute,
  postV1DestinationsListPaginatedRoute,
  postV1DestinationsListRoute,
  postV1DestinationsPartialUpdateRoute,
  postV1DestinationsSearchRoute,
  postV1DestinationsUpdateRoute,
  postV1DestinationsUpgradeVersionRoute,
  postV1DestinationsWriteDiscoverCatalogResultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationHandler = app
  .openapi(postV1DestinationsWriteDiscoverCatalogResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsPartialUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsUpgradeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDiscoverSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsGetCatalogForConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsCheckConnectionForUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
