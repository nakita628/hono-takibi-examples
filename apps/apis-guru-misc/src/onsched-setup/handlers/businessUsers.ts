import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1BusinessusersIdRoute,
  getSetupV1BusinessusersEmailCompaniesRoute,
  getSetupV1BusinessusersIdRoute,
  getSetupV1BusinessusersPermissionsRoute,
  getSetupV1BusinessusersRoute,
  postSetupV1BusinessusersRoute,
  putSetupV1BusinessusersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessUsersHandler = app
  .openapi(getSetupV1BusinessusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1BusinessusersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersEmailCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1BusinessusersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1BusinessusersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1BusinessusersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
