import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesIdRoute,
  deleteCrmAttributesIdRoute,
  getCompaniesIdRoute,
  getCompaniesRoute,
  getCrmAttributesCompaniesRoute,
  patchCompaniesIdRoute,
  patchCompaniesLinkUnlinkIdRoute,
  patchCrmAttributesIdRoute,
  postCompaniesImportRoute,
  postCompaniesRoute,
  postCrmAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesLinkUnlinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmAttributesCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
