import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminTsdbCleanTombstonesRoute,
  postAdminTsdbDeleteSeriesRoute,
  postAdminTsdbSnapshotRoute,
  putAdminTsdbCleanTombstonesRoute,
  putAdminTsdbDeleteSeriesRoute,
  putAdminTsdbSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(putAdminTsdbDeleteSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTsdbDeleteSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminTsdbCleanTombstonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTsdbCleanTombstonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminTsdbSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTsdbSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
