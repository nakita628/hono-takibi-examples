import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentDocumentSchemasRoute,
  getV1ParentRuleSetsRoute,
  getV1ParentSynonymSetsRoute,
  patchV1NameRoute,
  postV1LocationInitializeRoute,
  postV1NameDeleteRoute,
  postV1NameGetRoute,
  postV1NameLockRoute,
  postV1ParentDocumentLinksRoute,
  postV1ParentDocumentSchemasRoute,
  postV1ParentDocumentsRoute,
  postV1ParentDocumentsSearchRoute,
  postV1ParentLinkedSourcesRoute,
  postV1ParentLinkedTargetsRoute,
  postV1ParentRuleSetsRoute,
  postV1ParentSynonymSetsRoute,
  postV1ResourceFetchAclRoute,
  postV1ResourceSetAclRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentDocumentSchemasRouteHandler,
  getV1ParentRuleSetsRouteHandler,
  getV1ParentSynonymSetsRouteHandler,
  patchV1NameRouteHandler,
  postV1LocationInitializeRouteHandler,
  postV1NameDeleteRouteHandler,
  postV1NameGetRouteHandler,
  postV1NameLockRouteHandler,
  postV1ParentDocumentLinksRouteHandler,
  postV1ParentDocumentSchemasRouteHandler,
  postV1ParentDocumentsRouteHandler,
  postV1ParentDocumentsSearchRouteHandler,
  postV1ParentLinkedSourcesRouteHandler,
  postV1ParentLinkedTargetsRouteHandler,
  postV1ParentRuleSetsRouteHandler,
  postV1ParentSynonymSetsRouteHandler,
  postV1ResourceFetchAclRouteHandler,
  postV1ResourceSetAclRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1LocationInitializeRoute, postV1LocationInitializeRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameDeleteRoute, postV1NameDeleteRouteHandler)
  .openapi(postV1NameGetRoute, postV1NameGetRouteHandler)
  .openapi(postV1NameLockRoute, postV1NameLockRouteHandler)
  .openapi(postV1ParentDocumentLinksRoute, postV1ParentDocumentLinksRouteHandler)
  .openapi(getV1ParentDocumentSchemasRoute, getV1ParentDocumentSchemasRouteHandler)
  .openapi(postV1ParentDocumentSchemasRoute, postV1ParentDocumentSchemasRouteHandler)
  .openapi(postV1ParentDocumentsRoute, postV1ParentDocumentsRouteHandler)
  .openapi(postV1ParentDocumentsSearchRoute, postV1ParentDocumentsSearchRouteHandler)
  .openapi(postV1ParentLinkedSourcesRoute, postV1ParentLinkedSourcesRouteHandler)
  .openapi(postV1ParentLinkedTargetsRoute, postV1ParentLinkedTargetsRouteHandler)
  .openapi(getV1ParentRuleSetsRoute, getV1ParentRuleSetsRouteHandler)
  .openapi(postV1ParentRuleSetsRoute, postV1ParentRuleSetsRouteHandler)
  .openapi(getV1ParentSynonymSetsRoute, getV1ParentSynonymSetsRouteHandler)
  .openapi(postV1ParentSynonymSetsRoute, postV1ParentSynonymSetsRouteHandler)
  .openapi(postV1ResourceFetchAclRoute, postV1ResourceFetchAclRouteHandler)
  .openapi(postV1ResourceSetAclRoute, postV1ResourceSetAclRouteHandler)

export default app
