import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdRoute,
  deleteContactsContactIdCompaniesCompanyIdRoute,
  getCompaniesCompanyIdContactsRoute,
  getCompaniesCompanyIdRoute,
  getCompaniesCompanyIdSegmentsRoute,
  getCompaniesRoute,
  getCompaniesScrollRoute,
  postCompaniesListRoute,
  postCompaniesRoute,
  postCompaniesSearchRoute,
  postContactsContactIdCompaniesRoute,
  putCompaniesCompanyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(postCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsContactIdCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
