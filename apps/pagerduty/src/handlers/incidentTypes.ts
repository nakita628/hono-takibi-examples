import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute,
  getIncidentsTypesRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsRoute,
  getIncidentsTypesTypeIdOrNameRoute,
  postIncidentsTypesRoute,
  postIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute,
  postIncidentsTypesTypeIdOrNameCustomFieldsRoute,
  putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute,
  putIncidentsTypesTypeIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incidentTypesHandler = app
  .openapi(getIncidentsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsTypesTypeIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsTypesTypeIdOrNameCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
