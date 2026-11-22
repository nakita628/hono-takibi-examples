import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVariationSetIdRoute,
  getVariationSetAnalyzeIdRoute,
  getVariationSetArchiveYearMonthDayRoute,
  getVariationSetIdRoute,
  getVariationSetIndexRoute,
  postVariationSetIndexRoute,
  putVariationSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variationSetHandler = app
  .openapi(getVariationSetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVariationSetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariationSetAnalyzeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariationSetArchiveYearMonthDayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVariationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVariationSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
