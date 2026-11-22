import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609ProjectsProjectIdRoute,
  getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute,
  getCrmObjects202609ProjectsProjectIdRoute,
  getCrmObjects202609ProjectsRoute,
  patchCrmObjects202609ProjectsProjectIdRoute,
  postCrmObjects202609ProjectsRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609ProjectsProjectIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )
