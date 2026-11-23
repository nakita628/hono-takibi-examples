import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getParameterExamplesParam1Param2Route,
  patchParameterExamplesParam1Param2Route,
  putParameterExamplesParam1Param2Route,
} from '../routes'

const app = new OpenAPIHono()

export const parameterExamplesHandler = app
  .openapi(getParameterExamplesParam1Param2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchParameterExamplesParam1Param2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putParameterExamplesParam1Param2Route, (c) => {
    throw new Error('Not implemented')
  })
