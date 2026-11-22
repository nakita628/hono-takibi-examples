import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintTaskDefinitionsPrintTaskDefinitionIdRoute,
  deletePrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute,
  getPrintTaskDefinitionsCountRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdDefinitionRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdTriggerRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute,
  getPrintTaskDefinitionsRoute,
  patchPrintTaskDefinitionsPrintTaskDefinitionIdRoute,
  patchPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute,
  postPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute,
  postPrintTaskDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrintTaskDefinitionHandler = app
  .openapi(getPrintTaskDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintTaskDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintTaskDefinitionsPrintTaskDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintTaskDefinitionsPrintTaskDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintTaskDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
