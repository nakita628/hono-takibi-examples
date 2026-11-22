import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  deleteServicesCustomFieldsFieldIdRoute,
  getServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  getServicesCustomFieldsFieldIdFieldOptionsRoute,
  getServicesCustomFieldsFieldIdRoute,
  getServicesCustomFieldsRoute,
  postServicesCustomFieldsFieldIdFieldOptionsRoute,
  postServicesCustomFieldsRoute,
  putServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  putServicesCustomFieldsFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceCustomFieldsHandler = app
  .openapi(postServicesCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
