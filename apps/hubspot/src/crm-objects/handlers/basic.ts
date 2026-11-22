import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeObjectIdRoute,
  getCrmObjects202609ObjectTypeRoute,
  patchCrmObjects202609ObjectTypeObjectIdRoute,
  postCrmObjects202609ObjectTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ObjectTypeObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
