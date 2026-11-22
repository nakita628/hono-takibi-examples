import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609LeadsLeadsIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRoute,
  getCrmObjects202609LeadsLeadsIdRoute,
  getCrmObjects202609LeadsRoute,
  patchCrmObjects202609LeadsLeadsIdRoute,
  postCrmObjects202609LeadsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609LeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609LeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609LeadsLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609LeadsLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609LeadsLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609LeadsLeadsIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
