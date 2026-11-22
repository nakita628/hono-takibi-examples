import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLambdaRequestsIdRoute,
  getApiLambdaFunctionsFuncIdRoute,
  getApiLambdaFunctionsRoute,
  getApiLambdaRequestsIdRoute,
  getApiLambdaRequestsRoute,
  postApiLambdaFunctionsFuncIdRoute,
  postApiLambdaRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lambdaHandler = app
  .openapi(getApiLambdaFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaFunctionsFuncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaFunctionsFuncIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLambdaRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLambdaRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLambdaRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
