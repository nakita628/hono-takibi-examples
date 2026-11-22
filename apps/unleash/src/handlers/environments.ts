import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminEnvironmentsNameRoute,
  getApiAdminEnvironmentsProjectProjectIdRoute,
  getApiAdminEnvironmentsRoute,
  postApiAdminEnvironmentsNameOffRoute,
  postApiAdminEnvironmentsNameOnRoute,
  putApiAdminEnvironmentsSortOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getApiAdminEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminEnvironmentsProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminEnvironmentsSortOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminEnvironmentsNameOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminEnvironmentsNameOffRoute, (c) => {
    throw new Error('Not implemented')
  })
