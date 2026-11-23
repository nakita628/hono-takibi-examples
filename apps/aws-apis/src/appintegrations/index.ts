import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataIntegrationsIdentifierRoute,
  deleteEventIntegrationsNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getDataIntegrationsIdentifierAssociationsRoute,
  getDataIntegrationsIdentifierRoute,
  getDataIntegrationsRoute,
  getEventIntegrationsNameAssociationsRoute,
  getEventIntegrationsNameRoute,
  getEventIntegrationsRoute,
  getTagsResourceArnRoute,
  patchDataIntegrationsIdentifierRoute,
  patchEventIntegrationsNameRoute,
  postDataIntegrationsRoute,
  postEventIntegrationsRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteDataIntegrationsIdentifierRouteHandler,
  deleteEventIntegrationsNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getDataIntegrationsIdentifierAssociationsRouteHandler,
  getDataIntegrationsIdentifierRouteHandler,
  getDataIntegrationsRouteHandler,
  getEventIntegrationsNameAssociationsRouteHandler,
  getEventIntegrationsNameRouteHandler,
  getEventIntegrationsRouteHandler,
  getTagsResourceArnRouteHandler,
  patchDataIntegrationsIdentifierRouteHandler,
  patchEventIntegrationsNameRouteHandler,
  postDataIntegrationsRouteHandler,
  postEventIntegrationsRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDataIntegrationsRoute, postDataIntegrationsRouteHandler)
  .openapi(getDataIntegrationsRoute, getDataIntegrationsRouteHandler)
  .openapi(postEventIntegrationsRoute, postEventIntegrationsRouteHandler)
  .openapi(getEventIntegrationsRoute, getEventIntegrationsRouteHandler)
  .openapi(deleteDataIntegrationsIdentifierRoute, deleteDataIntegrationsIdentifierRouteHandler)
  .openapi(getDataIntegrationsIdentifierRoute, getDataIntegrationsIdentifierRouteHandler)
  .openapi(patchDataIntegrationsIdentifierRoute, patchDataIntegrationsIdentifierRouteHandler)
  .openapi(deleteEventIntegrationsNameRoute, deleteEventIntegrationsNameRouteHandler)
  .openapi(getEventIntegrationsNameRoute, getEventIntegrationsNameRouteHandler)
  .openapi(patchEventIntegrationsNameRoute, patchEventIntegrationsNameRouteHandler)
  .openapi(
    getDataIntegrationsIdentifierAssociationsRoute,
    getDataIntegrationsIdentifierAssociationsRouteHandler,
  )
  .openapi(
    getEventIntegrationsNameAssociationsRoute,
    getEventIntegrationsNameAssociationsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
