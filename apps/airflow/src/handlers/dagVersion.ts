import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2DagsDagIdDagVersionsDiffRoute,
  getApiV2DagsDagIdDagVersionsRoute,
  getApiV2DagsDagIdDagVersionsVersionNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dagVersionHandler = app
  .openapi(getApiV2DagsDagIdDagVersionsDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagVersionsVersionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DagsDagIdDagVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
