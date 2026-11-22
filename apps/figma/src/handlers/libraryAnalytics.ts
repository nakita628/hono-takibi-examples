import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AnalyticsLibrariesFileKeyComponentActionsRoute,
  getV1AnalyticsLibrariesFileKeyComponentUsagesRoute,
  getV1AnalyticsLibrariesFileKeyStyleActionsRoute,
  getV1AnalyticsLibrariesFileKeyStyleUsagesRoute,
  getV1AnalyticsLibrariesFileKeyVariableActionsRoute,
  getV1AnalyticsLibrariesFileKeyVariableUsagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const libraryAnalyticsHandler = app
  .openapi(getV1AnalyticsLibrariesFileKeyComponentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyComponentUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyStyleActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyStyleUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyVariableActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLibrariesFileKeyVariableUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
