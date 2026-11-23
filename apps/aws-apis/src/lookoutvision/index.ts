import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20201120ProjectsProjectNameDatasetsDatasetTypeRoute,
  delete20201120ProjectsProjectNameModelsModelVersionRoute,
  delete20201120ProjectsProjectNameRoute,
  delete20201120TagsResourceArnTagKeysRoute,
  get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRoute,
  get20201120ProjectsProjectNameDatasetsDatasetTypeRoute,
  get20201120ProjectsProjectNameModelpackagingjobsJobNameRoute,
  get20201120ProjectsProjectNameModelpackagingjobsRoute,
  get20201120ProjectsProjectNameModelsModelVersionRoute,
  get20201120ProjectsProjectNameModelsRoute,
  get20201120ProjectsProjectNameRoute,
  get20201120ProjectsRoute,
  get20201120TagsResourceArnRoute,
  patch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRoute,
  post20201120ProjectsProjectNameDatasetsRoute,
  post20201120ProjectsProjectNameModelpackagingjobsRoute,
  post20201120ProjectsProjectNameModelsModelVersionDetectContentTypeRoute,
  post20201120ProjectsProjectNameModelsModelVersionStartRoute,
  post20201120ProjectsProjectNameModelsModelVersionStopRoute,
  post20201120ProjectsProjectNameModelsRoute,
  post20201120ProjectsRoute,
  post20201120TagsResourceArnRoute,
} from './routes'
import {
  delete20201120ProjectsProjectNameDatasetsDatasetTypeRouteHandler,
  delete20201120ProjectsProjectNameModelsModelVersionRouteHandler,
  delete20201120ProjectsProjectNameRouteHandler,
  delete20201120TagsResourceArnTagKeysRouteHandler,
  get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRouteHandler,
  get20201120ProjectsProjectNameDatasetsDatasetTypeRouteHandler,
  get20201120ProjectsProjectNameModelpackagingjobsJobNameRouteHandler,
  get20201120ProjectsProjectNameModelpackagingjobsRouteHandler,
  get20201120ProjectsProjectNameModelsModelVersionRouteHandler,
  get20201120ProjectsProjectNameModelsRouteHandler,
  get20201120ProjectsProjectNameRouteHandler,
  get20201120ProjectsRouteHandler,
  get20201120TagsResourceArnRouteHandler,
  patch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRouteHandler,
  post20201120ProjectsProjectNameDatasetsRouteHandler,
  post20201120ProjectsProjectNameModelpackagingjobsRouteHandler,
  post20201120ProjectsProjectNameModelsModelVersionDetectContentTypeRouteHandler,
  post20201120ProjectsProjectNameModelsModelVersionStartRouteHandler,
  post20201120ProjectsProjectNameModelsModelVersionStopRouteHandler,
  post20201120ProjectsProjectNameModelsRouteHandler,
  post20201120ProjectsRouteHandler,
  post20201120TagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    post20201120ProjectsProjectNameDatasetsRoute,
    post20201120ProjectsProjectNameDatasetsRouteHandler,
  )
  .openapi(
    post20201120ProjectsProjectNameModelsRoute,
    post20201120ProjectsProjectNameModelsRouteHandler,
  )
  .openapi(
    get20201120ProjectsProjectNameModelsRoute,
    get20201120ProjectsProjectNameModelsRouteHandler,
  )
  .openapi(post20201120ProjectsRoute, post20201120ProjectsRouteHandler)
  .openapi(get20201120ProjectsRoute, get20201120ProjectsRouteHandler)
  .openapi(
    delete20201120ProjectsProjectNameDatasetsDatasetTypeRoute,
    delete20201120ProjectsProjectNameDatasetsDatasetTypeRouteHandler,
  )
  .openapi(
    get20201120ProjectsProjectNameDatasetsDatasetTypeRoute,
    get20201120ProjectsProjectNameDatasetsDatasetTypeRouteHandler,
  )
  .openapi(
    delete20201120ProjectsProjectNameModelsModelVersionRoute,
    delete20201120ProjectsProjectNameModelsModelVersionRouteHandler,
  )
  .openapi(
    get20201120ProjectsProjectNameModelsModelVersionRoute,
    get20201120ProjectsProjectNameModelsModelVersionRouteHandler,
  )
  .openapi(delete20201120ProjectsProjectNameRoute, delete20201120ProjectsProjectNameRouteHandler)
  .openapi(get20201120ProjectsProjectNameRoute, get20201120ProjectsProjectNameRouteHandler)
  .openapi(
    get20201120ProjectsProjectNameModelpackagingjobsJobNameRoute,
    get20201120ProjectsProjectNameModelpackagingjobsJobNameRouteHandler,
  )
  .openapi(
    post20201120ProjectsProjectNameModelsModelVersionDetectContentTypeRoute,
    post20201120ProjectsProjectNameModelsModelVersionDetectContentTypeRouteHandler,
  )
  .openapi(
    get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRoute,
    get20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRouteHandler,
  )
  .openapi(
    patch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRoute,
    patch20201120ProjectsProjectNameDatasetsDatasetTypeEntriesRouteHandler,
  )
  .openapi(
    get20201120ProjectsProjectNameModelpackagingjobsRoute,
    get20201120ProjectsProjectNameModelpackagingjobsRouteHandler,
  )
  .openapi(
    post20201120ProjectsProjectNameModelpackagingjobsRoute,
    post20201120ProjectsProjectNameModelpackagingjobsRouteHandler,
  )
  .openapi(get20201120TagsResourceArnRoute, get20201120TagsResourceArnRouteHandler)
  .openapi(post20201120TagsResourceArnRoute, post20201120TagsResourceArnRouteHandler)
  .openapi(
    post20201120ProjectsProjectNameModelsModelVersionStartRoute,
    post20201120ProjectsProjectNameModelsModelVersionStartRouteHandler,
  )
  .openapi(
    post20201120ProjectsProjectNameModelsModelVersionStopRoute,
    post20201120ProjectsProjectNameModelsModelVersionStopRouteHandler,
  )
  .openapi(
    delete20201120TagsResourceArnTagKeysRoute,
    delete20201120TagsResourceArnTagKeysRouteHandler,
  )

export default app
