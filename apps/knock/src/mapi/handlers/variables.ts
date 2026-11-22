import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1VariablesKeyRoute,
  getV1VariablesKeyRoute,
  getV1VariablesRoute,
  putV1VariablesKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variablesHandler = app
  .openapi(deleteV1VariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1VariablesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
