import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateOptimizationsIdRoute,
  getV1PrivateOptimizationsRoute,
  getV1PrivateOptimizationsStudioIdLogsRoute,
  postV1PrivateOptimizationsDeleteRoute,
  postV1PrivateOptimizationsRoute,
  putV1PrivateOptimizationsIdRoute,
  putV1PrivateOptimizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const optimizationsHandler = app
  .openapi(getV1PrivateOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateOptimizationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateOptimizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateOptimizationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateOptimizationsStudioIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
