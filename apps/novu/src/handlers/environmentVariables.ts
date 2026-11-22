import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvironmentVariablesVariableKeyRoute,
  getV1EnvironmentVariablesRoute,
  getV1EnvironmentVariablesVariableKeyRoute,
  getV1EnvironmentVariablesVariableKeyUsageRoute,
  patchV1EnvironmentVariablesVariableKeyRoute,
  postV1EnvironmentVariablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentVariablesHandler = app
  .openapi(getV1EnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentVariablesVariableKeyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1EnvironmentVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentVariablesVariableKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
