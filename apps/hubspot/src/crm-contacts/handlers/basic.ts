import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ContactsContactIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ContactsContactIdRoute,
  getCrmObjects202609ContactsRoute,
  patchCrmObjects202609ContactsContactIdRoute,
  postCrmObjects202609ContactsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609ContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ContactsContactIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
