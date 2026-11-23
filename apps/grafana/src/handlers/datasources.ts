import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatasourcesNameNameRoute,
  deleteDatasourcesProxyUidUidDatasourceProxyRouteRoute,
  deleteDatasourcesUidUidCorrelationsCorrelationUIDRoute,
  deleteDatasourcesUidUidRoute,
  getDatasourcesCorrelationsRoute,
  getDatasourcesDataSourceUIDCacheRoute,
  getDatasourcesIdNameRoute,
  getDatasourcesNameNameRoute,
  getDatasourcesProxyUidUidDatasourceProxyRouteRoute,
  getDatasourcesRoute,
  getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute,
  getDatasourcesUidSourceUIDCorrelationsRoute,
  getDatasourcesUidUidHealthRoute,
  getDatasourcesUidUidLbacTeamsRoute,
  getDatasourcesUidUidResourcesDatasourceProxyRouteRoute,
  getDatasourcesUidUidRoute,
  patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute,
  postDatasourcesDataSourceUIDCacheCleanRoute,
  postDatasourcesDataSourceUIDCacheDisableRoute,
  postDatasourcesDataSourceUIDCacheEnableRoute,
  postDatasourcesDataSourceUIDCacheRoute,
  postDatasourcesProxyUidUidDatasourceProxyRouteRoute,
  postDatasourcesRoute,
  postDatasourcesUidSourceUIDCorrelationsRoute,
  putDatasourcesUidUidLbacTeamsRoute,
  putDatasourcesUidUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasourcesHandler = app
  .openapi(getDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesCorrelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasourcesNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasourcesProxyUidUidDatasourceProxyRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesProxyUidUidDatasourceProxyRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesProxyUidUidDatasourceProxyRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesUidSourceUIDCorrelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesUidSourceUIDCorrelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatasourcesUidSourceUIDCorrelationsCorrelationUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasourcesUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasourcesUidUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatasourcesUidUidCorrelationsCorrelationUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesUidUidHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesUidUidLbacTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasourcesUidUidLbacTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesUidUidResourcesDatasourceProxyRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasourcesDataSourceUIDCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesDataSourceUIDCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesDataSourceUIDCacheCleanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesDataSourceUIDCacheDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasourcesDataSourceUIDCacheEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
