import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLinodeKernelsKernelIdRoute, getApiVersionLinodeKernelsRoute } from '../routes'

const app = new OpenAPIHono()

export const kernelsHandler = app
  .openapi(getApiVersionLinodeKernelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeKernelsKernelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
