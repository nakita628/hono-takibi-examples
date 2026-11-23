import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountRoute,
  getAccountUsageYearMonthTypeRoute,
  postAccountRoute,
  putAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountUsageYearMonthTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
