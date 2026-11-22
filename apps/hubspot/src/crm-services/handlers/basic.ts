import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects2026090162ServiceIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects2026090162Route,
  getCrmObjects2026090162ServiceIdRoute,
  getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRoute,
  patchCrmObjects2026090162ServiceIdRoute,
  postCrmObjects2026090162Route,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects2026090162Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects2026090162Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects2026090162ServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects2026090162ServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects2026090162ServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ServicesServiceIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
