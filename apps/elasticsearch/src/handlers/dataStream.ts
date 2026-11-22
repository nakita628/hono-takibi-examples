import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataStreamNameOptionsRoute,
  deleteDataStreamNameRoute,
  getDataStreamNameLifecycleRoute,
  getDataStreamNameMappingsRoute,
  getDataStreamNameOptionsRoute,
  getDataStreamNameRoute,
  getDataStreamNameSettingsRoute,
  getDataStreamNameStatsRoute,
  getDataStreamRoute,
  getDataStreamStatsRoute,
  getIndexLifecycleExplainRoute,
  getLifecycleStatsRoute,
  postDataStreamMigrateNameRoute,
  postDataStreamModifyRoute,
  postDataStreamPromoteNameRoute,
  postIndexDownsampleTargetIndexRoute,
  putDataStreamNameLifecycleRoute,
  putDataStreamNameMappingsRoute,
  putDataStreamNameOptionsRoute,
  putDataStreamNameRoute,
  putDataStreamNameSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataStreamHandler = app
  .openapi(getDataStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStreamNameLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStreamNameOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataStreamNameOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDownsampleTargetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexLifecycleExplainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStreamNameMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStreamNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataStreamMigrateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataStreamModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataStreamPromoteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
