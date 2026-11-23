import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteComponentTemplateNameRoute,
  getComponentTemplateNameRoute,
  getComponentTemplateRoute,
  headComponentTemplateNameRoute,
  postComponentTemplateNameRoute,
  putComponentTemplateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const componentTemplateHandler = app
  .openapi(getComponentTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
