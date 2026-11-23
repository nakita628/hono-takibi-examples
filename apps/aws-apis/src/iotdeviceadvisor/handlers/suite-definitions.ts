import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuiteDefinitionsSuiteDefinitionIdRoute,
  getSuiteDefinitionsRoute,
  getSuiteDefinitionsSuiteDefinitionIdRoute,
  getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRoute,
  getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRoute,
  patchSuiteDefinitionsSuiteDefinitionIdRoute,
  postSuiteDefinitionsRoute,
  postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRoute,
  postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suiteDefinitionsHandler = app
  .openapi(postSuiteDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuiteDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuiteDefinitionsSuiteDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuiteDefinitionsSuiteDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSuiteDefinitionsSuiteDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
