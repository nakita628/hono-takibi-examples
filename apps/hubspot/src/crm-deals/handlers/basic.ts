import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects20260903DealIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects20260903DealIdAssociationsToObjectTypeRoute,
  getCrmObjects20260903DealIdRoute,
  getCrmObjects20260903Route,
  patchCrmObjects20260903DealIdRoute,
  postCrmObjects20260903Route,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects20260903Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects20260903Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects20260903DealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects20260903DealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects20260903DealIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects20260903DealIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
