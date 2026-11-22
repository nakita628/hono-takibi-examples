import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsageAttributionTypesCodeRoute,
  getUsageAttributionTypesCodeRoute,
  getUsageAttributionTypesRoute,
  postUsageAttributionTypesRoute,
  putUsageAttributionTypesCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageAttributionTypesHandler = app
  .openapi(postUsageAttributionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageAttributionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsageAttributionTypesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageAttributionTypesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsageAttributionTypesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
