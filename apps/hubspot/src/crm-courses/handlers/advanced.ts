import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CoursesGdprDeleteRoute,
  postCrmObjects202609CoursesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609CoursesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CoursesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
