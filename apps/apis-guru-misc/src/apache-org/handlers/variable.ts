import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVariablesVariableKeyRoute,
  getVariablesRoute,
  getVariablesVariableKeyRoute,
  patchVariablesVariableKeyRoute,
  postVariablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variableHandler = app
  .openapi(getVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
