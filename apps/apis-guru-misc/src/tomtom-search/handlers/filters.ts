import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchVersionNumberGeometryFilterExtRoute,
  getSearchVersionNumberRoutedFilterPositionHeadingExtRoute,
  postSearchVersionNumberGeometryFilterExtRoute,
  postSearchVersionNumberRoutedFilterPositionHeadingExtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filtersHandler = app
  .openapi(getSearchVersionNumberGeometryFilterExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchVersionNumberGeometryFilterExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchVersionNumberRoutedFilterPositionHeadingExtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchVersionNumberRoutedFilterPositionHeadingExtRoute, (c) => {
    throw new Error('Not implemented')
  })
