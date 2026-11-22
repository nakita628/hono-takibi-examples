import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609EmailsEmailIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRoute,
  getCrmObjects202609EmailsEmailIdRoute,
  getCrmObjects202609EmailsRoute,
  patchCrmObjects202609EmailsEmailIdRoute,
  postCrmObjects202609EmailsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609EmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609EmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609EmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609EmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609EmailsEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609EmailsEmailIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
