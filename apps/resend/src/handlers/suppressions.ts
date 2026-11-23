import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuppressionsSuppressionRoute,
  getSuppressionsRoute,
  getSuppressionsSuppressionRoute,
  postSuppressionsBatchAddRoute,
  postSuppressionsBatchRemoveRoute,
  postSuppressionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppressionsHandler = app
  .openapi(postSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuppressionsBatchAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuppressionsBatchRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionsSuppressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionsSuppressionRoute, (c) => {
    throw new Error('Not implemented')
  })
