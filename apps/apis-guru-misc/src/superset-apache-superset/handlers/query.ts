import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQueryDistinctColumnNameRoute,
  getQueryIndexRoute,
  getQueryPkRoute,
  getQueryRelatedColumnNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(getQueryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryDistinctColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryPkRoute, (c) => {
    throw new Error('Not implemented')
  })
