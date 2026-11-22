import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdGlossariesGlossaryIdRoute,
  getGlossaryRoute,
  getProjectsProjectIdGlossariesGlossaryIdDownloadRoute,
  getProjectsProjectIdGlossariesGlossaryIdRoute,
  getProjectsProjectIdGlossariesRoute,
  postGlossaryRoute,
  postProjectsProjectIdGlossariesRoute,
  putProjectsProjectIdGlossariesGlossaryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const glossaryHandler = app
  .openapi(getGlossaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGlossaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdGlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdGlossariesGlossaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGlossariesGlossaryIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
