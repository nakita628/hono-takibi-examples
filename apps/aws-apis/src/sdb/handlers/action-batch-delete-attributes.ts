import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchDeleteAttributesRoute,
  postActionBatchDeleteAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionBatchDeleteAttributesHandler = app
  .openapi(getActionBatchDeleteAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchDeleteAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
