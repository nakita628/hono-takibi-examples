import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2VariablesVariableKeyRoute,
  getApiV2VariablesRoute,
  getApiV2VariablesVariableKeyRoute,
  patchApiV2VariablesRoute,
  patchApiV2VariablesVariableKeyRoute,
  postApiV2VariablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variableHandler = app
  .openapi(deleteApiV2VariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2VariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2VariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
