import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1StatsIndexNameRoute,
  getV1StatsIndexRoute,
  getV1StatsQueryNameRoute,
  getV1StatsQueryRoute,
  getV1StatsSearchapplicationRoute,
  getV1StatsSessionNameRoute,
  getV1StatsSessionRoute,
  getV1StatsUserNameRoute,
  getV1StatsUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app
  .openapi(getV1StatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsQueryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsSearchapplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsSessionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatsUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
