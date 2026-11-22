import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609MeetingsBatchArchiveRoute,
  postCrmObjects202609MeetingsBatchCreateRoute,
  postCrmObjects202609MeetingsBatchReadRoute,
  postCrmObjects202609MeetingsBatchUpdateRoute,
  postCrmObjects202609MeetingsBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
