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
} from './routes'
import {
  getV2ActionsRouteHandler,
  getV2TasksRouteHandler,
  getV2TasksTaskIdEventsRouteHandler,
  getV2TasksTaskIdRouteHandler,
  getV2TemplatesNamespaceKindNameParameterSchemaRouteHandler,
  getV2TemplatingExtensionsRouteHandler,
  postV2AutocompleteProviderResourceRouteHandler,
  postV2DryRunRouteHandler,
  postV2TasksRouteHandler,
  postV2TasksTaskIdCancelRouteHandler,
  postV2TasksTaskIdRetryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV2TemplatesNamespaceKindNameParameterSchemaRoute,
    getV2TemplatesNamespaceKindNameParameterSchemaRouteHandler,
  )
  .openapi(getV2ActionsRoute, getV2ActionsRouteHandler)
  .openapi(getV2TasksRoute, getV2TasksRouteHandler)
  .openapi(postV2TasksRoute, postV2TasksRouteHandler)
  .openapi(getV2TasksTaskIdRoute, getV2TasksTaskIdRouteHandler)
  .openapi(postV2TasksTaskIdCancelRoute, postV2TasksTaskIdCancelRouteHandler)
  .openapi(postV2TasksTaskIdRetryRoute, postV2TasksTaskIdRetryRouteHandler)
  .openapi(getV2TasksTaskIdEventsRoute, getV2TasksTaskIdEventsRouteHandler)
  .openapi(postV2DryRunRoute, postV2DryRunRouteHandler)
  .openapi(postV2AutocompleteProviderResourceRoute, postV2AutocompleteProviderResourceRouteHandler)
  .openapi(getV2TemplatingExtensionsRoute, getV2TemplatingExtensionsRouteHandler)

export default app
