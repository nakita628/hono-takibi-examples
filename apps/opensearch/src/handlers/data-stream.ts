import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataStreamNameRoute,
  getDataStreamNameRoute,
  getDataStreamNameStatsRoute,
  getDataStreamRoute,
  getDataStreamStatsRoute,
  putDataStreamNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataStreamHandler = app
  .openapi(getDataStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDataStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataStreamNameStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
