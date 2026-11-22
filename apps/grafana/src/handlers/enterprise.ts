import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDatasourcesDataSourceUIDCacheRoute,
  getDatasourcesUidUidLbacTeamsRoute,
  postDatasourcesDataSourceUIDCacheCleanRoute,
  postDatasourcesDataSourceUIDCacheDisableRoute,
  postDatasourcesDataSourceUIDCacheEnableRoute,
  postDatasourcesDataSourceUIDCacheRoute,
  putDatasourcesUidUidLbacTeamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterpriseHandler = app
  .openapi(getDatasourcesUidUidLbacTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasourcesUidUidLbacTeamsRoute, (c) => {
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
