import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnrichPolicyNameRoute,
  getEnrichPolicyNameRoute,
  getEnrichPolicyRoute,
  getEnrichStatsRoute,
  putEnrichPolicyNameExecuteRoute,
  putEnrichPolicyNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enrichHandler = app
  .openapi(getEnrichPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnrichPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnrichPolicyNameExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnrichStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
