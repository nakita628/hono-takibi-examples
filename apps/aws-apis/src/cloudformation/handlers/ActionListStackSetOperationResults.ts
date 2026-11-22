import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListStackSetOperationResultsRoute,
  postActionListStackSetOperationResultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListStackSetOperationResultsHandler = app
  .openapi(getActionListStackSetOperationResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackSetOperationResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
