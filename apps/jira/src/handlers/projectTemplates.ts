import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectTemplateRemoveTemplateRoute,
  getRestApi3ProjectTemplateLiveTemplateRoute,
  postRestApi3ProjectTemplateRoute,
  postRestApi3ProjectTemplateSaveTemplateRoute,
  putRestApi3ProjectTemplateEditTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectTemplatesHandler = app
  .openapi(postRestApi3ProjectTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectTemplateEditTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTemplateLiveTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectTemplateRemoveTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectTemplateSaveTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
