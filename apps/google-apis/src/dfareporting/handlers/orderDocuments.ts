import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRoute,
  getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderDocumentsHandler = app
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
