import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ConfigFieldschemesFieldsParametersRoute,
  deleteRestApi3ConfigFieldschemesFieldsRoute,
  deleteRestApi3ConfigFieldschemesIdRoute,
  getRestApi3ConfigFieldschemesIdFieldsFieldIdParametersRoute,
  getRestApi3ConfigFieldschemesIdFieldsRoute,
  getRestApi3ConfigFieldschemesIdProjectsRoute,
  getRestApi3ConfigFieldschemesIdRoute,
  getRestApi3ConfigFieldschemesProjectsRoute,
  getRestApi3ConfigFieldschemesRoute,
  postRestApi3ConfigFieldschemesIdCloneRoute,
  postRestApi3ConfigFieldschemesRoute,
  putRestApi3ConfigFieldschemesFieldsParametersRoute,
  putRestApi3ConfigFieldschemesFieldsRoute,
  putRestApi3ConfigFieldschemesIdRoute,
  putRestApi3ConfigFieldschemesProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fieldSchemesHandler = app
  .openapi(getRestApi3ConfigFieldschemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ConfigFieldschemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ConfigFieldschemesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigFieldschemesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ConfigFieldschemesFieldsParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigFieldschemesFieldsParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigFieldschemesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigFieldschemesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ConfigFieldschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigFieldschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ConfigFieldschemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ConfigFieldschemesIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigFieldschemesIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigFieldschemesIdFieldsFieldIdParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ConfigFieldschemesIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
