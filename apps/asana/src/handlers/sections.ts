import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSectionsSectionGidRoute,
  getProjectsProjectGidSectionsRoute,
  getSectionsSectionGidRoute,
  postProjectsProjectGidSectionsInsertRoute,
  postProjectsProjectGidSectionsRoute,
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
  .openapi(getProjectsProjectGidSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSectionsSectionGidAddTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidSectionsInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
