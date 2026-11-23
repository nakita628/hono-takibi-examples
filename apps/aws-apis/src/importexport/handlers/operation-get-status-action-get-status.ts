import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOperationGetStatusActionGetStatusRoute,
  postOperationGetStatusActionGetStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationGetStatusActionGetStatusHandler = app
  .openapi(getOperationGetStatusActionGetStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperationGetStatusActionGetStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
