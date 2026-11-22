import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTaskTemplatesTaskTemplateGidRoute,
  getTaskTemplatesRoute,
  getTaskTemplatesTaskTemplateGidRoute,
  postTaskTemplatesTaskTemplateGidInstantiateTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskTemplatesHandler = app
  .openapi(getTaskTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskTemplatesTaskTemplateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaskTemplatesTaskTemplateGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskTemplatesTaskTemplateGidInstantiateTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
