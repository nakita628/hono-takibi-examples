import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVariablesVariableIDLabelsLabelIDRoute,
  deleteVariablesVariableIDRoute,
  getVariablesRoute,
  getVariablesVariableIDLabelsRoute,
  getVariablesVariableIDRoute,
  patchVariablesVariableIDRoute,
  postVariablesRoute,
  postVariablesVariableIDLabelsRoute,
  putVariablesVariableIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variablesHandler = app
  .openapi(getVariablesVariableIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVariablesVariableIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVariablesVariableIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariablesVariableIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVariablesVariableIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVariablesVariableIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVariablesVariableIDRoute, (c) => {
    throw new Error('Not implemented')
  })
