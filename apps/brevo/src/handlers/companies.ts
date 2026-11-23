import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesIdRoute,
  getCompaniesIdRoute,
  getCompaniesRoute,
  patchCompaniesIdRoute,
  patchCompaniesLinkUnlinkIdRoute,
  postCompaniesImportRoute,
  postCompaniesRoute,
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
