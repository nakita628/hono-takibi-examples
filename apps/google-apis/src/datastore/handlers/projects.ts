import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1beta1ProjectsProjectIdExportRoute,
  postV1beta1ProjectsProjectIdImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1beta1ProjectsProjectIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ProjectsProjectIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
