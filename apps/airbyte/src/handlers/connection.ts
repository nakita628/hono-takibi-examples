import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConnectionsApplySchemaChangesRoute,
  postV1ConnectionsAutoDisableRoute,
  postV1ConnectionsClearRoute,
  postV1ConnectionsClearStreamRoute,
  postV1ConnectionsCreateRoute,
  postV1ConnectionsDeleteRoute,
  postV1ConnectionsEventsBackfillRoute,
  postV1ConnectionsEventsGetRoute,
  postV1ConnectionsEventsListForJobRoute,
  postV1ConnectionsEventsListMinimalRoute,
  postV1ConnectionsEventsListRoute,
  postV1ConnectionsGetContextRoute,
  postV1ConnectionsGetForJobRoute,
  postV1ConnectionsGetRoute,
  postV1ConnectionsHistoryDataRoute,
  postV1ConnectionsHistoryUptimeRoute,
  postV1ConnectionsLastJobPerStreamRoute,
  postV1ConnectionsListAllRoute,
  postV1ConnectionsListByActorDefinitionRoute,
  postV1ConnectionsListPaginatedRoute,
  postV1ConnectionsListRoute,
  postV1ConnectionsPostprocessDiscoveredCatalogRoute,
  postV1ConnectionsRefreshRoute,
  postV1ConnectionsResetRoute,
  postV1ConnectionsResetStreamRoute,
  postV1ConnectionsSearchRoute,
  postV1ConnectionsStatusRoute,
  postV1ConnectionsStreamHistoryRoute,
  postV1ConnectionsSyncProgressRoute,
  postV1ConnectionsSyncRoute,
  postV1ConnectionsUpdateRoute,
  postV1ConnectionsUpdateWithReasonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionHandler = app
  .openapi(postV1ConnectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsUpdateWithReasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSyncProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsHistoryUptimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsHistoryDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsStreamHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsListMinimalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsBackfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsEventsListForJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsLastJobPerStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetForJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsListByActorDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsApplySchemaChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsPostprocessDiscoveredCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsAutoDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsClearStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsResetStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
