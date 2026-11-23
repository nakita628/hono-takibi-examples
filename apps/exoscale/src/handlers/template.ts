import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplateIdRoute,
  getTemplateIdRoute,
  getTemplateRoute,
  postTemplateIdRoute,
  postTemplateRoute,
  putTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateHandler = app
  .openapi(deleteTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
