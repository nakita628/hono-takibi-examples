import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609MeetingsMeetingIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRoute,
  getCrmObjects202609MeetingsMeetingIdRoute,
  getCrmObjects202609MeetingsRoute,
  patchCrmObjects202609MeetingsMeetingIdRoute,
  postCrmObjects202609MeetingsBatchArchiveRoute,
  postCrmObjects202609MeetingsBatchCreateRoute,
  postCrmObjects202609MeetingsBatchReadRoute,
  postCrmObjects202609MeetingsBatchUpdateRoute,
  postCrmObjects202609MeetingsBatchUpsertRoute,
  postCrmObjects202609MeetingsGdprDeleteRoute,
  postCrmObjects202609MeetingsMergeRoute,
  postCrmObjects202609MeetingsRoute,
  postCrmObjects202609MeetingsSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609MeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609MeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609MeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609MeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
