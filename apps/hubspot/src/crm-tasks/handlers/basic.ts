import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609TasksTaskIdRoute,
  getCrmObjects202609TasksRoute,
  getCrmObjects202609TasksTaskIdAssociationsToObjectTypeRoute,
  getCrmObjects202609TasksTaskIdRoute,
  patchCrmObjects202609TasksTaskIdRoute,
  postCrmObjects202609TasksRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609TasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609TasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609TasksTaskIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
