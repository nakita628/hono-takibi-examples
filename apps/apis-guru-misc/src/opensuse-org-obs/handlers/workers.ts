import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkerArchitectureNameWorkerIdRoute,
  getWorkerStatusRoute,
  postWorkerCmdCheckconstraintsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersHandler = app
  .openapi(getWorkerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkerArchitectureNameWorkerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkerCmdCheckconstraintsRoute, (c) => {
    throw new Error('Not implemented')
  })
