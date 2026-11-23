import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesAcronymDocumentsIdRoute,
  deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
  getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute,
  getApiDataentitiesAcronymDocumentsIdRoute,
  getApiDataentitiesAcronymDocumentsIdVersionsRoute,
  getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
  getApiDataentitiesAcronymRoute,
  getApiDataentitiesAcronymScrollRoute,
  getApiDataentitiesAcronymSearchRoute,
  getApiDataentitiesRoute,
  patchApiDataentitiesAcronymDocumentsIdRoute,
  patchApiDataentitiesAcronymDocumentsRoute,
  postApiDataentitiesAcronymDocumentsIdClustersRoute,
  postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute,
  postApiDataentitiesAcronymDocumentsRoute,
  putApiDataentitiesAcronymDocumentsIdRoute,
  putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
  putApiDataentitiesAcronymDocumentsIdScoreRoute,
  putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
  putApiDataentitiesAcronymDocumentsRoute,
} from './routes'
import {
  deleteApiDataentitiesAcronymDocumentsIdRouteHandler,
  deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRouteHandler,
  getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRouteHandler,
  getApiDataentitiesAcronymDocumentsIdRouteHandler,
  getApiDataentitiesAcronymDocumentsIdVersionsRouteHandler,
  getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRouteHandler,
  getApiDataentitiesAcronymRouteHandler,
  getApiDataentitiesAcronymScrollRouteHandler,
  getApiDataentitiesAcronymSearchRouteHandler,
  getApiDataentitiesRouteHandler,
  patchApiDataentitiesAcronymDocumentsIdRouteHandler,
  patchApiDataentitiesAcronymDocumentsRouteHandler,
  postApiDataentitiesAcronymDocumentsIdClustersRouteHandler,
  postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRouteHandler,
  postApiDataentitiesAcronymDocumentsRouteHandler,
  putApiDataentitiesAcronymDocumentsIdRouteHandler,
  putApiDataentitiesAcronymDocumentsIdScoreFieldNameRouteHandler,
  putApiDataentitiesAcronymDocumentsIdScoreRouteHandler,
  putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRouteHandler,
  putApiDataentitiesAcronymDocumentsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiDataentitiesRoute, getApiDataentitiesRouteHandler)
  .openapi(getApiDataentitiesAcronymRoute, getApiDataentitiesAcronymRouteHandler)
  .openapi(
    patchApiDataentitiesAcronymDocumentsRoute,
    patchApiDataentitiesAcronymDocumentsRouteHandler,
  )
  .openapi(
    postApiDataentitiesAcronymDocumentsRoute,
    postApiDataentitiesAcronymDocumentsRouteHandler,
  )
  .openapi(putApiDataentitiesAcronymDocumentsRoute, putApiDataentitiesAcronymDocumentsRouteHandler)
  .openapi(
    deleteApiDataentitiesAcronymDocumentsIdRoute,
    deleteApiDataentitiesAcronymDocumentsIdRouteHandler,
  )
  .openapi(
    getApiDataentitiesAcronymDocumentsIdRoute,
    getApiDataentitiesAcronymDocumentsIdRouteHandler,
  )
  .openapi(
    patchApiDataentitiesAcronymDocumentsIdRoute,
    patchApiDataentitiesAcronymDocumentsIdRouteHandler,
  )
  .openapi(
    putApiDataentitiesAcronymDocumentsIdRoute,
    putApiDataentitiesAcronymDocumentsIdRouteHandler,
  )
  .openapi(
    postApiDataentitiesAcronymDocumentsIdClustersRoute,
    postApiDataentitiesAcronymDocumentsIdClustersRouteHandler,
  )
  .openapi(
    putApiDataentitiesAcronymDocumentsIdScoreRoute,
    putApiDataentitiesAcronymDocumentsIdScoreRouteHandler,
  )
  .openapi(
    deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
    deleteApiDataentitiesAcronymDocumentsIdScoreFieldNameRouteHandler,
  )
  .openapi(
    putApiDataentitiesAcronymDocumentsIdScoreFieldNameRoute,
    putApiDataentitiesAcronymDocumentsIdScoreFieldNameRouteHandler,
  )
  .openapi(
    getApiDataentitiesAcronymDocumentsIdVersionsRoute,
    getApiDataentitiesAcronymDocumentsIdVersionsRouteHandler,
  )
  .openapi(
    getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
    getApiDataentitiesAcronymDocumentsIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRoute,
    putApiDataentitiesAcronymDocumentsIdVersionsVersionIdRouteHandler,
  )
  .openapi(
    postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRoute,
    postApiDataentitiesAcronymDocumentsIdFieldAttachmentsRouteHandler,
  )
  .openapi(
    getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRoute,
    getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameRouteHandler,
  )
  .openapi(getApiDataentitiesAcronymScrollRoute, getApiDataentitiesAcronymScrollRouteHandler)
  .openapi(getApiDataentitiesAcronymSearchRoute, getApiDataentitiesAcronymSearchRouteHandler)

export default app
