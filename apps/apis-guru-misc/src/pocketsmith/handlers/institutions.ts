import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInstitutionsIdRoute,
  getInstitutionsIdRoute,
  getUsersIdInstitutionsRoute,
  postUsersIdInstitutionsRoute,
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
  .openapi(getUsersIdInstitutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdInstitutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
