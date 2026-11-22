import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmProperties202609ObjectTypeBatchArchiveRoute,
  postCrmProperties202609ObjectTypeBatchCreateRoute,
  postCrmProperties202609ObjectTypeBatchReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(postCrmProperties202609ObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
