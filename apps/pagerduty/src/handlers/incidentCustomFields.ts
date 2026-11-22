import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  deleteIncidentsCustomFieldsFieldIdRoute,
  getIncidentsCustomFieldsFieldIdFieldOptionsRoute,
  getIncidentsCustomFieldsFieldIdRoute,
  getIncidentsCustomFieldsRoute,
  postIncidentsCustomFieldsFieldIdFieldOptionsRoute,
  postIncidentsCustomFieldsRoute,
  putIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  putIncidentsCustomFieldsFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incidentCustomFieldsHandler = app
  .openapi(postIncidentsCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
