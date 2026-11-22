import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuppressionBouncesEmailRoute,
  deleteSuppressionBouncesRoute,
  getSuppressionBouncesEmailRoute,
  getSuppressionBouncesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bouncesAPIHandler = app
  .openapi(deleteSuppressionBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionBouncesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBouncesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
