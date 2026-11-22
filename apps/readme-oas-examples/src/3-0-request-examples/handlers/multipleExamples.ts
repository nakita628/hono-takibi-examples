import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getParameterExamplesParam1Param2Route,
  patchParameterExamplesParam1Param2Route,
  patchRequestBodyPrimitiveExampleRoute,
  postRequestBodyRoute,
  putRequestBodyPrimitiveExampleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multipleExamplesHandler = app
  .openapi(getParameterExamplesParam1Param2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchParameterExamplesParam1Param2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestBodyPrimitiveExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestBodyPrimitiveExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
