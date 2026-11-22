import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdAgentVariablesVariableIdRoute,
  getV1ProjectsProjectIdAgentVariablesRoute,
  getV1ProjectsProjectIdAgentVariablesVariableIdRoute,
  patchV1ProjectsProjectIdAgentVariablesVariableIdRoute,
  postV1ProjectsProjectIdAgentVariablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variablesHandler = app
  .openapi(postV1ProjectsProjectIdAgentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectIdAgentVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdAgentVariablesVariableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
