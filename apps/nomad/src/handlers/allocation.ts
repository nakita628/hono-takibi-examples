import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAllocationAllocIDRoute,
  getAllocationAllocIDServicesRoute,
  postAllocationAllocIDStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allocationHandler = app
  .openapi(getAllocationAllocIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAllocationAllocIDServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllocationAllocIDStopRoute, (c) => {
    throw new Error('Not implemented')
  })
