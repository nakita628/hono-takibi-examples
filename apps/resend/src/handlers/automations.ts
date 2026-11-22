import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationsAutomationIdRoute,
  getAutomationsAutomationIdRoute,
  getAutomationsAutomationIdRunsRoute,
  getAutomationsAutomationIdRunsRunIdRoute,
  getAutomationsRoute,
  patchAutomationsAutomationIdRoute,
  postAutomationsAutomationIdDuplicateRoute,
  postAutomationsAutomationIdRunsRunIdCancelRoute,
  postAutomationsAutomationIdStopRoute,
  postAutomationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationsHandler = app
  .openapi(postAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsAutomationIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsAutomationIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsAutomationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsAutomationIdRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsAutomationIdRunsRunIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
