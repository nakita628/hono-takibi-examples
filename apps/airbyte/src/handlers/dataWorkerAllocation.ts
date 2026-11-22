import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DataWorkerAllocationAddCapacityRoute,
  postV1DataWorkerAllocationGetRoute,
  postV1DataWorkerAllocationListRoute,
  postV1DataWorkerAllocationReallocateRoute,
  postV1DataWorkerAllocationRemoveCapacityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataWorkerAllocationHandler = app
  .openapi(postV1DataWorkerAllocationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationReallocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationAddCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DataWorkerAllocationRemoveCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
