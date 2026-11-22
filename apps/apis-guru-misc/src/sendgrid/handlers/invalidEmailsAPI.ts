import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuppressionInvalidEmailsEmailRoute,
  deleteSuppressionInvalidEmailsRoute,
  getSuppressionInvalidEmailsEmailRoute,
  getSuppressionInvalidEmailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invalidEmailsAPIHandler = app
  .openapi(deleteSuppressionInvalidEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionInvalidEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionInvalidEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionInvalidEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
