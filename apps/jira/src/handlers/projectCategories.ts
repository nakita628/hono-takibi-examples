import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectCategoryIdRoute,
  getRestApi3ProjectCategoryIdRoute,
  getRestApi3ProjectCategoryRoute,
  postRestApi3ProjectCategoryRoute,
  putRestApi3ProjectCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectCategoriesHandler = app
  .openapi(getRestApi3ProjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
