import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchRequestBodyRoute,
  postRequestBodyPrimitiveExampleRoute,
  putParameterExamplesParam1Param2Route,
  putRequestBodyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const singleExampleHandler = app
  .openapi(putParameterExamplesParam1Param2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestBodyPrimitiveExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
