import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplateNameRoute,
  getTemplateNameRoute,
  getTemplateRoute,
  headTemplateNameRoute,
  postTemplateNameRoute,
  putTemplateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateHandler = app
  .openapi(getTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
