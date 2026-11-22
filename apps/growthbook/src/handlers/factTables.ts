import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1FactTablesFactTableIdFiltersIdRoute,
  deleteV1FactTablesFactTableIdVirtualColumnsIdRoute,
  deleteV1FactTablesIdRoute,
  getV1FactTablesFactTableIdFiltersIdRoute,
  getV1FactTablesFactTableIdFiltersRoute,
  getV1FactTablesIdAggregatedTablesRoute,
  getV1FactTablesIdAggregatedTablesRunsRoute,
  getV1FactTablesIdAggregatedTablesRunsRunIdRoute,
  getV1FactTablesIdRoute,
  getV1FactTablesRoute,
  postV1BulkImportFactsRoute,
  postV1FactTablesFactTableIdFiltersIdRoute,
  postV1FactTablesFactTableIdFiltersRoute,
  postV1FactTablesFactTableIdVirtualColumnsIdRoute,
  postV1FactTablesFactTableIdVirtualColumnsRoute,
  postV1FactTablesIdAggregatedTablesRefreshRoute,
  postV1FactTablesIdRoute,
  postV1FactTablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const factTablesHandler = app
  .openapi(getV1FactTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactTablesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesFactTableIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesFactTableIdFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactTablesFactTableIdFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdVirtualColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesFactTableIdVirtualColumnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FactTablesFactTableIdVirtualColumnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdAggregatedTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FactTablesIdAggregatedTablesRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdAggregatedTablesRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FactTablesIdAggregatedTablesRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BulkImportFactsRoute, (c) => {
    throw new Error('Not implemented')
  })
