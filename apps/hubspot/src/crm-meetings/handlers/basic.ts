import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609MeetingsMeetingIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609MeetingsMeetingIdAssociationsToObjectTypeRoute,
  getCrmObjects202609MeetingsMeetingIdRoute,
  getCrmObjects202609MeetingsRoute,
  patchCrmObjects202609MeetingsMeetingIdRoute,
  postCrmObjects202609MeetingsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609MeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
