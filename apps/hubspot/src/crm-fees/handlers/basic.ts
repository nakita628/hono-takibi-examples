import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609FeesFeeIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRoute,
  getCrmObjects202609FeesFeeIdRoute,
  getCrmObjects202609FeesRoute,
  patchCrmObjects202609FeesFeeIdRoute,
  postCrmObjects202609FeesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609FeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609FeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609FeesFeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609FeesFeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609FeesFeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609FeesFeeIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
