import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMatrixRoute,
  getMatrixSolutionJobIdRoute,
  postMatrixCalculateRoute,
  postMatrixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matrixHandler = app
  .openapi(getMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMatrixCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMatrixSolutionJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
