import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CartsCartIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CartsCartIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CartsCartIdRoute,
  getCrmObjects202609CartsRoute,
  patchCrmObjects202609CartsCartIdRoute,
  postCrmObjects202609CartsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609CartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CartsCartIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
