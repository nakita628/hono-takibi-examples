import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CompaniesIdRoute,
  getApiV1CompaniesCreateRoute,
  getApiV1CompaniesIdEditRoute,
  getApiV1CompaniesIdRoute,
  getApiV1CompaniesRoute,
  postApiV1CompaniesCompanyDefaultRoute,
  postApiV1CompaniesCurrentRoute,
  postApiV1CompaniesIdUploadRoute,
  postApiV1CompaniesRoute,
  putApiV1CompaniesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getApiV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesCompanyDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompaniesCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
