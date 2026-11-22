import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuppressionBlocksEmailRoute,
  deleteSuppressionBlocksRoute,
  getSuppressionBlocksEmailRoute,
  getSuppressionBlocksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocksAPIHandler = app
  .openapi(deleteSuppressionBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionBlocksEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBlocksEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
