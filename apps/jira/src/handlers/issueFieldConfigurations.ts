import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FieldconfigurationIdRoute,
  deleteRestApi3FieldconfigurationschemeIdRoute,
  getRestApi3FieldconfigurationIdFieldsRoute,
  getRestApi3FieldconfigurationRoute,
  getRestApi3FieldconfigurationschemeMappingRoute,
  getRestApi3FieldconfigurationschemeProjectRoute,
  getRestApi3FieldconfigurationschemeRoute,
  postRestApi3FieldconfigurationRoute,
  postRestApi3FieldconfigurationschemeIdMappingDeleteRoute,
  postRestApi3FieldconfigurationschemeRoute,
  putRestApi3FieldconfigurationIdFieldsRoute,
  putRestApi3FieldconfigurationIdRoute,
  putRestApi3FieldconfigurationschemeIdMappingRoute,
  putRestApi3FieldconfigurationschemeIdRoute,
  putRestApi3FieldconfigurationschemeProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueFieldConfigurationsHandler = app
  .openapi(getRestApi3FieldconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldconfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldconfigurationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationschemeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldconfigurationschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldconfigurationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldconfigurationschemeIdMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldconfigurationschemeIdMappingDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
