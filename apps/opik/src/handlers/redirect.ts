import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SessionRedirectDatasetsRoute,
  getV1SessionRedirectExperimentsRoute,
  getV1SessionRedirectOptimizationsRoute,
  getV1SessionRedirectProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const redirectHandler = app
  .openapi(getV1SessionRedirectDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectOptimizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SessionRedirectProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
