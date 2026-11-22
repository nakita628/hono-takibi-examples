import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getToolsLogLevelDicomRoute,
  getToolsLogLevelGenericRoute,
  getToolsLogLevelHttpRoute,
  getToolsLogLevelJobsRoute,
  getToolsLogLevelLuaRoute,
  getToolsLogLevelPluginsRoute,
  getToolsLogLevelRoute,
  getToolsLogLevelSqliteRoute,
  putToolsLogLevelDicomRoute,
  putToolsLogLevelGenericRoute,
  putToolsLogLevelHttpRoute,
  putToolsLogLevelJobsRoute,
  putToolsLogLevelLuaRoute,
  putToolsLogLevelPluginsRoute,
  putToolsLogLevelRoute,
  putToolsLogLevelSqliteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getToolsLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelDicomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelDicomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelGenericRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelGenericRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelHttpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelHttpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelLuaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelLuaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getToolsLogLevelSqliteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putToolsLogLevelSqliteRoute, (c) => {
    throw new Error('Not implemented')
  })
