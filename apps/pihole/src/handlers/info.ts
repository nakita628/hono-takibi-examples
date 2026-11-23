import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInfoMessagesMessageIdRoute,
  getInfoClientRoute,
  getInfoDatabaseRoute,
  getInfoFtlRoute,
  getInfoHostRoute,
  getInfoLoginRoute,
  getInfoMessagesCountRoute,
  getInfoMessagesRoute,
  getInfoMetricsRoute,
  getInfoSensorsRoute,
  getInfoSystemRoute,
  getInfoVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app
  .openapi(getInfoClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoFtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoSensorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInfoMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoMessagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
