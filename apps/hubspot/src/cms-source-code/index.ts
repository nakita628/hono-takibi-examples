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
} from './routes'
import {
  deleteCmsSourceCode202609EnvironmentContentPathRouteHandler,
  getCmsSourceCode202609EnvironmentContentPathRouteHandler,
  getCmsSourceCode202609EnvironmentMetadataPathRouteHandler,
  getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusRouteHandler,
  postCmsSourceCode202609EnvironmentContentPathRouteHandler,
  postCmsSourceCode202609EnvironmentValidatePathRouteHandler,
  postCmsSourceCode202609ExtractAsyncRouteHandler,
  putCmsSourceCode202609EnvironmentContentPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postCmsSourceCode202609ExtractAsyncRoute,
    postCmsSourceCode202609ExtractAsyncRouteHandler,
  )
  .openapi(
    getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusRoute,
    getCmsSourceCode202609ExtractAsyncTasksTaskIdStatusRouteHandler,
  )
  .openapi(
    getCmsSourceCode202609EnvironmentContentPathRoute,
    getCmsSourceCode202609EnvironmentContentPathRouteHandler,
  )
  .openapi(
    putCmsSourceCode202609EnvironmentContentPathRoute,
    putCmsSourceCode202609EnvironmentContentPathRouteHandler,
  )
  .openapi(
    postCmsSourceCode202609EnvironmentContentPathRoute,
    postCmsSourceCode202609EnvironmentContentPathRouteHandler,
  )
  .openapi(
    deleteCmsSourceCode202609EnvironmentContentPathRoute,
    deleteCmsSourceCode202609EnvironmentContentPathRouteHandler,
  )
  .openapi(
    getCmsSourceCode202609EnvironmentMetadataPathRoute,
    getCmsSourceCode202609EnvironmentMetadataPathRouteHandler,
  )
  .openapi(
    postCmsSourceCode202609EnvironmentValidatePathRoute,
    postCmsSourceCode202609EnvironmentValidatePathRouteHandler,
  )

export default app
