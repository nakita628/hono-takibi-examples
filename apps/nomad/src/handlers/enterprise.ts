import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuotaSpecNameRoute,
  getQuotaSpecNameRoute,
  getQuotasRoute,
  postQuotaRoute,
  postQuotaSpecNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterpriseHandler = app
  .openapi(postQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuotaSpecNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotaSpecNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuotaSpecNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
