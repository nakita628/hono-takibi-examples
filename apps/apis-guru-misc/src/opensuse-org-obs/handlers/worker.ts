import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkerArchitectureNameWorkerIdRoute, getWorkerStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const workerHandler = app
  .openapi(getWorkerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkerArchitectureNameWorkerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
