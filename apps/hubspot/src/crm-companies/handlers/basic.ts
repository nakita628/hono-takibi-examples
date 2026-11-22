import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609CompaniesCompanyIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRoute,
  getCrmObjects202609CompaniesCompanyIdRoute,
  getCrmObjects202609CompaniesRoute,
  patchCrmObjects202609CompaniesCompanyIdRoute,
  postCrmObjects202609CompaniesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609CompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609CompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609CompaniesCompanyIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
