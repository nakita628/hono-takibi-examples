import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRoute,
  getOcsV2PhpAppsFilesApiV1TemplatesRoute,
  postOcsV2PhpAppsFilesApiV1TemplatesCreateRoute,
  postOcsV2PhpAppsFilesApiV1TemplatesPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateHandler = app
  .openapi(getOcsV2PhpAppsFilesApiV1TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TemplatesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TemplatesPathRoute, (c) => {
    throw new Error('Not implemented')
  })
