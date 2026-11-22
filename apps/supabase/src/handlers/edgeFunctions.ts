import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefFunctionsFunctionSlugRoute,
  deleteV1ProjectsRefFunctionsRoute,
  getV1ProjectsRefFunctionsFunctionSlugBodyRoute,
  getV1ProjectsRefFunctionsFunctionSlugRoute,
  getV1ProjectsRefFunctionsRoute,
  patchV1ProjectsRefFunctionsFunctionSlugRoute,
  postV1ProjectsRefFunctionsDeployRoute,
  postV1ProjectsRefFunctionsRoute,
  putV1ProjectsRefFunctionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeFunctionsHandler = app
  .openapi(getV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefFunctionsDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefFunctionsFunctionSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefFunctionsFunctionSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefFunctionsFunctionSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefFunctionsFunctionSlugBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
