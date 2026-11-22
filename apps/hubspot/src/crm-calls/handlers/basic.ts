import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CallsCallIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CallsCallIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CallsCallIdRoute,
  getCrmObjects202609CallsRoute,
  patchCrmObjects202609CallsCallIdRoute,
  postCrmObjects202609CallsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609CallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CallsCallIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
