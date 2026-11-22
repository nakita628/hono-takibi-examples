import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute,
  getAutomationActions202609AppIdDefinitionIdRevisionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app
  .openapi(getAutomationActions202609AppIdDefinitionIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
