import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuiteDefinitionsSuiteDefinitionIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getEndpointRoute,
  getSuiteDefinitionsRoute,
  getSuiteDefinitionsSuiteDefinitionIdRoute,
  getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRoute,
  getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRoute,
  getSuiteRunsRoute,
  getTagsResourceArnRoute,
  patchSuiteDefinitionsSuiteDefinitionIdRoute,
  postSuiteDefinitionsRoute,
  postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRoute,
  postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteSuiteDefinitionsSuiteDefinitionIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getEndpointRouteHandler,
  getSuiteDefinitionsRouteHandler,
  getSuiteDefinitionsSuiteDefinitionIdRouteHandler,
  getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRouteHandler,
  getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRouteHandler,
  getSuiteRunsRouteHandler,
  getTagsResourceArnRouteHandler,
  patchSuiteDefinitionsSuiteDefinitionIdRouteHandler,
  postSuiteDefinitionsRouteHandler,
  postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRouteHandler,
  postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSuiteDefinitionsRoute, postSuiteDefinitionsRouteHandler)
  .openapi(getSuiteDefinitionsRoute, getSuiteDefinitionsRouteHandler)
  .openapi(
    deleteSuiteDefinitionsSuiteDefinitionIdRoute,
    deleteSuiteDefinitionsSuiteDefinitionIdRouteHandler,
  )
  .openapi(
    getSuiteDefinitionsSuiteDefinitionIdRoute,
    getSuiteDefinitionsSuiteDefinitionIdRouteHandler,
  )
  .openapi(
    patchSuiteDefinitionsSuiteDefinitionIdRoute,
    patchSuiteDefinitionsSuiteDefinitionIdRouteHandler,
  )
  .openapi(getEndpointRoute, getEndpointRouteHandler)
  .openapi(
    getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRoute,
    getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRouteHandler,
  )
  .openapi(
    getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRoute,
    getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRouteHandler,
  )
  .openapi(getSuiteRunsRoute, getSuiteRunsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRoute,
    postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRouteHandler,
  )
  .openapi(
    postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRoute,
    postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
