import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuotaSpecNameRoute,
  getQuotaSpecNameRoute,
  postQuotaRoute,
  postQuotaSpecNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quotaHandler = app
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
