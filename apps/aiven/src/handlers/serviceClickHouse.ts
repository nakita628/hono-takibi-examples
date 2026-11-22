import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectServiceServiceNameClickhouseDbDatabaseRoute,
  deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuidRoute,
  deleteProjectProjectServiceServiceNameClickhouseUserUserUuidRoute,
  getProjectProjectServiceServiceNameClickhouseDbRoute,
  getProjectProjectServiceServiceNameClickhouseQueryRoute,
  getProjectProjectServiceServiceNameClickhouseQueryStatsRoute,
  getProjectProjectServiceServiceNameClickhouseRoleRoute,
  getProjectProjectServiceServiceNameClickhouseTieredStorageSummaryRoute,
  getProjectProjectServiceServiceNameClickhouseUserRoute,
  postProjectProjectServiceServiceNameClickhouseDbRoute,
  postProjectProjectServiceServiceNameClickhouseQueryRoute,
  postProjectProjectServiceServiceNameClickhouseUserRoute,
  putProjectProjectServiceServiceNameClickhouseUserUserUuidPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceClickHouseHandler = app
  .openapi(getProjectProjectServiceServiceNameClickhouseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameClickhouseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameClickhouseDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseDbRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameClickhouseDbDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameClickhouseUserUserUuidPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseQueryStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameClickhouseRoleRoleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseTieredStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameClickhouseUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameClickhouseUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameClickhouseUserUserUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
