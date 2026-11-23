import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFunctionsNameRoute,
  getFunctionsNameRoute,
  getFunctionsRoute,
  patchFunctionsNameRoute,
  postFunctionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsHandler = app
  .openapi(postFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
