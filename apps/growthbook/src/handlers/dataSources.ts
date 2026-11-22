import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DataSourcesIdRoute,
  getV1DataSourcesDataSourceIdInformationSchemaRoute,
  getV1DataSourcesIdRoute,
  getV1DataSourcesRoute,
  getV1InformationSchemaTablesTableIdRoute,
  postV1DataSourcesIdInformationSchemaRefreshRoute,
  postV1DataSourcesIdRoute,
  postV1DataSourcesIdSqlPreviewValuesRoute,
  postV1DataSourcesIdSqlRunQueryRoute,
  postV1DataSourcesIdSqlSearchTablesRoute,
  postV1DataSourcesIdSqlTableSchemaRoute,
  postV1DataSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataSourcesHandler = app
  .openapi(getV1DataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DataSourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesDataSourceIdInformationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdInformationSchemaRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlSearchTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlTableSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlPreviewValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataSourcesIdSqlRunQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InformationSchemaTablesTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
