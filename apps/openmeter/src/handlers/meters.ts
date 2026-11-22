import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MetersMeterIdOrSlugRoute,
  getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRoute,
  getApiV1MetersMeterIdOrSlugQueryRoute,
  getApiV1MetersMeterIdOrSlugRoute,
  getApiV1MetersMeterIdOrSlugSubjectsRoute,
  getApiV1MetersRoute,
  postApiV1MetersMeterIdOrSlugQueryRoute,
  postApiV1MetersRoute,
  putApiV1MetersMeterIdOrSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metersHandler = app
  .openapi(getApiV1MetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MetersMeterIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MetersMeterIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetersMeterIdOrSlugQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
