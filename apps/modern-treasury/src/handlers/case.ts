import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCasesIdRoute,
  getApiCasesRoute,
  patchApiSimulationsCasesIdResolveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseHandler = app
  .openapi(getApiCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSimulationsCasesIdResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
