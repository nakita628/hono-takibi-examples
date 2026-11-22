import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHrisCompaniesIdRoute,
  getHrisCompaniesIdRoute,
  getHrisCompaniesRoute,
  patchHrisCompaniesIdRoute,
  postHrisCompaniesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getHrisCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
