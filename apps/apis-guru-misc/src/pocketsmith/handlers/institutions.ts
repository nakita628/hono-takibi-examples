import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInstitutionsIdRoute,
  getInstitutionsIdAccountsRoute,
  getInstitutionsIdRoute,
  putInstitutionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const institutionsHandler = app
  .openapi(deleteInstitutionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstitutionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstitutionsIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
