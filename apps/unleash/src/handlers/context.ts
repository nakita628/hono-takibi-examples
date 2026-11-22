import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminContextContextFieldLegalValuesLegalValueRoute,
  deleteApiAdminContextContextFieldRoute,
  deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueRoute,
  deleteApiAdminProjectsProjectIdContextContextFieldRoute,
  getApiAdminContextContextFieldRoute,
  getApiAdminContextRoute,
  getApiAdminProjectsProjectIdContextContextFieldRoute,
  getApiAdminProjectsProjectIdContextRoute,
  postApiAdminContextContextFieldLegalValuesRoute,
  postApiAdminContextRoute,
  postApiAdminContextValidateRoute,
  postApiAdminProjectsProjectIdContextContextFieldLegalValuesRoute,
  postApiAdminProjectsProjectIdContextRoute,
  postApiAdminProjectsProjectIdContextValidateRoute,
  putApiAdminContextContextFieldRoute,
  putApiAdminProjectsProjectIdContextContextFieldRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextHandler = app
  .openapi(getApiAdminContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminContextContextFieldLegalValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminContextContextFieldLegalValuesLegalValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminContextValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdContextContextFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdContextContextFieldLegalValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdContextValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
