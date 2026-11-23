import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminFileIndexRoute,
  getAdminAppsIndexRoute,
  getAdminFileIndexRoute,
  getAdminFileUsedByIndexRoute,
  getAdminModelsIndexRoute,
  getAdminSettingsIndexRoute,
  getAdminSystemIndexRoute,
  getAdminVersionHistoryIdIndexRoute,
  getAdminVersionHistoryIndexRoute,
  getAdminVersionIndexRoute,
  patchAdminSettingsIndexRoute,
  postAdminFileIndexRoute,
  postAdminSystemIndexRoute,
  putAdminSettingsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminAppsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminFileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFileUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminModelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminSettingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSystemIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSystemIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminVersionHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminVersionHistoryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
