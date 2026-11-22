import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchVersionNumberGeocodeQueryExtRoute,
  getSearchVersionNumberStructuredGeocodeExtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geocodingHandler = app
  .openapi(getSearchVersionNumberGeocodeQueryExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberStructuredGeocodeExtRoute, (c) => {
    throw new Error('Not implemented')
  })
