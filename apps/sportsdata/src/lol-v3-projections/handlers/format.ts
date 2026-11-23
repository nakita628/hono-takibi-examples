import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDfsSlatesByDateDateRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatDfsSlatesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
