import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAllocationAllocIDRoute,
  getAllocationAllocIDServicesRoute,
  getAllocationsRoute,
  postAllocationAllocIDStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allocationsHandler = app
  .openapi(getAllocationAllocIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAllocationAllocIDServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllocationAllocIDStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
