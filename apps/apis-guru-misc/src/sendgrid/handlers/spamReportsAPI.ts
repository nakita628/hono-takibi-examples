import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuppressionSpamReportsEmailRoute,
  deleteSuppressionSpamReportsRoute,
  getSuppressionSpamReportsEmailRoute,
  getSuppressionSpamReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spamReportsAPIHandler = app
  .openapi(deleteSuppressionSpamReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionSpamReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionSpamReportsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionSpamReportsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
