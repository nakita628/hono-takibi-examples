import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmCompaniesIdRoute,
  getCrmCompaniesIdRoute,
  getCrmCompaniesRoute,
  patchCrmCompaniesIdRoute,
  postCrmCompaniesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCrmCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
