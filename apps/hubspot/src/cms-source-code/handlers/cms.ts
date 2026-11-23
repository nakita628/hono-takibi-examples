import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsSourceCode202609EnvironmentContentPathRoute,
  getCmsSourceCode202609EnvironmentContentPathRoute,
  getCmsSourceCode202609EnvironmentMetadataPathRoute,
  getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusRoute,
  postCmsSourceCode202609EnvironmentContentPathRoute,
  postCmsSourceCode202609EnvironmentValidatePathRoute,
  postCmsSourceCode202609ExtractAsyncRoute,
  putCmsSourceCode202609EnvironmentContentPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(postCmsSourceCode202609ExtractAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsSourceCode202609EnvironmentContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCmsSourceCode202609EnvironmentContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsSourceCode202609EnvironmentContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsSourceCode202609EnvironmentContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsSourceCode202609EnvironmentMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsSourceCode202609EnvironmentValidatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
