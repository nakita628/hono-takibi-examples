import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAllocationsAllocationGidRoute,
  getAllocationsAllocationGidRoute,
  getAllocationsRoute,
  postAllocationsRoute,
  putAllocationsAllocationGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allocationsHandler = app
  .openapi(getAllocationsAllocationGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAllocationsAllocationGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAllocationsAllocationGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
