import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609UsersUserIdRoute,
  getCrmObjects202609UsersRoute,
  getCrmObjects202609UsersUserIdAssociationsToObjectTypeRoute,
  getCrmObjects202609UsersUserIdRoute,
  patchCrmObjects202609UsersUserIdRoute,
  postCrmObjects202609UsersRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609UsersUserIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
