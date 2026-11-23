import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSectionsSectionGidRoute,
  getSectionsSectionGidRoute,
  getSectionsSectionGidTasksRoute,
  postSectionsSectionGidAddTaskRoute,
  putSectionsSectionGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sectionsHandler = app
  .openapi(getSectionsSectionGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSectionsSectionGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSectionsSectionGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSectionsSectionGidAddTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSectionsSectionGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
