import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationActions202609AppIdDefinitionIdRoute,
  getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
  getAutomationActions202609AppIdDefinitionIdRoute,
  getAutomationActions202609AppIdRoute,
  patchAutomationActions202609AppIdDefinitionIdRoute,
  postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute,
  postAutomationActions202609AppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const definitionsHandler = app
  .openapi(getAutomationActions202609AppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActions202609AppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationActions202609AppIdDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAutomationActions202609AppIdDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationActions202609AppIdDefinitionIdRequiresObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActions202609AppIdDefinitionIdRequiresObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
