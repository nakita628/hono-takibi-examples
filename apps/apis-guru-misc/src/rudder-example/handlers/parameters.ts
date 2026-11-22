import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteParametersParameterIdRoute,
  getParametersParameterIdRoute,
  getParametersRoute,
  postParametersParameterIdRoute,
  putParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const parametersHandler = app
  .openapi(getParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteParametersParameterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getParametersParameterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParametersParameterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
