import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AutomationsAutomationIdRoute,
  deleteApiV2AutomationsDestroyManyRoute,
  getApiV2AutomationsActiveRoute,
  getApiV2AutomationsAutomationIdRoute,
  getApiV2AutomationsRoute,
  getApiV2AutomationsSearchRoute,
  postApiV2AutomationsRoute,
  putApiV2AutomationsAutomationIdRoute,
  putApiV2AutomationsUpdateManyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationsHandler = app
  .openapi(getApiV2AutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AutomationsAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AutomationsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AutomationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AutomationsUpdateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
