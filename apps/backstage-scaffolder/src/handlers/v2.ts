import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ActionsRoute,
  getV2TasksRoute,
  getV2TasksTaskIdEventsRoute,
  getV2TasksTaskIdRoute,
  getV2TemplatesNamespaceKindNameParameterSchemaRoute,
  getV2TemplatingExtensionsRoute,
  postV2AutocompleteProviderResourceRoute,
  postV2DryRunRoute,
  postV2TasksRoute,
  postV2TasksTaskIdCancelRoute,
  postV2TasksTaskIdRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2TemplatesNamespaceKindNameParameterSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2TasksTaskIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TasksTaskIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AutocompleteProviderResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TemplatingExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
