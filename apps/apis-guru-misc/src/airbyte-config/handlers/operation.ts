import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1OperationsCheckRoute,
  postV1OperationsCreateRoute,
  postV1OperationsDeleteRoute,
  postV1OperationsGetRoute,
  postV1OperationsListRoute,
  postV1OperationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationHandler = app
  .openapi(postV1OperationsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OperationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
