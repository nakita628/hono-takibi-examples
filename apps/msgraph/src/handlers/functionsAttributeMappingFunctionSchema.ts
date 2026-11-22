import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFunctionsAttributeMappingFunctionSchemaIdRoute,
  getFunctionsAttributeMappingFunctionSchemaIdRoute,
  getFunctionsCountRoute,
  getFunctionsRoute,
  patchFunctionsAttributeMappingFunctionSchemaIdRoute,
  postFunctionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const functionsAttributeMappingFunctionSchemaHandler = app
  .openapi(getFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsAttributeMappingFunctionSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFunctionsAttributeMappingFunctionSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFunctionsAttributeMappingFunctionSchemaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFunctionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
