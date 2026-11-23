import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdImagesRegionsRoute,
  deleteProjectsProjectIdImagesRoute,
  deleteProjectsProjectIdImagesTagsRoute,
  deleteProjectsProjectIdIterationsIterationIdPublishRoute,
  deleteProjectsProjectIdIterationsIterationIdRoute,
  deleteProjectsProjectIdPredictionsRoute,
  deleteProjectsProjectIdRoute,
  deleteProjectsProjectIdTagsTagIdRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  getProjectsProjectIdExportRoute,
  getProjectsProjectIdImagesIdRoute,
  getProjectsProjectIdImagesTaggedCountRoute,
  getProjectsProjectIdImagesTaggedRoute,
  getProjectsProjectIdImagesUntaggedCountRoute,
  getProjectsProjectIdImagesUntaggedRoute,
  getProjectsProjectIdIterationsIterationIdExportRoute,
  getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRoute,
  getProjectsProjectIdIterationsIterationIdPerformanceImagesRoute,
  getProjectsProjectIdIterationsIterationIdPerformanceRoute,
  getProjectsProjectIdIterationsIterationIdRoute,
  getProjectsProjectIdIterationsRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdTagsRoute,
  getProjectsProjectIdTagsTagIdRoute,
  getProjectsRoute,
  patchProjectsProjectIdIterationsIterationIdRoute,
  patchProjectsProjectIdRoute,
  patchProjectsProjectIdTagsTagIdRoute,
  postProjectsImportRoute,
  postProjectsProjectIdImagesFilesRoute,
  postProjectsProjectIdImagesImageIdRegionproposalsRoute,
  postProjectsProjectIdImagesPredictionsRoute,
  postProjectsProjectIdImagesRegionsRoute,
  postProjectsProjectIdImagesRoute,
  postProjectsProjectIdImagesSuggestedCountRoute,
  postProjectsProjectIdImagesSuggestedRoute,
  postProjectsProjectIdImagesTagsRoute,
  postProjectsProjectIdImagesUrlsRoute,
  postProjectsProjectIdIterationsIterationIdExportRoute,
  postProjectsProjectIdIterationsIterationIdPublishRoute,
  postProjectsProjectIdPredictionsQueryRoute,
  postProjectsProjectIdQuicktestImageRoute,
  postProjectsProjectIdQuicktestUrlRoute,
  postProjectsProjectIdTagsandregionsSuggestionsRoute,
  postProjectsProjectIdTagsRoute,
  postProjectsProjectIdTrainRoute,
  postProjectsRoute,
} from './routes'
import {
  deleteProjectsProjectIdImagesRegionsRouteHandler,
  deleteProjectsProjectIdImagesRouteHandler,
  deleteProjectsProjectIdImagesTagsRouteHandler,
  deleteProjectsProjectIdIterationsIterationIdPublishRouteHandler,
  deleteProjectsProjectIdIterationsIterationIdRouteHandler,
  deleteProjectsProjectIdPredictionsRouteHandler,
  deleteProjectsProjectIdRouteHandler,
  deleteProjectsProjectIdTagsTagIdRouteHandler,
  getDomainsDomainIdRouteHandler,
  getDomainsRouteHandler,
  getProjectsProjectIdExportRouteHandler,
  getProjectsProjectIdImagesIdRouteHandler,
  getProjectsProjectIdImagesTaggedCountRouteHandler,
  getProjectsProjectIdImagesTaggedRouteHandler,
  getProjectsProjectIdImagesUntaggedCountRouteHandler,
  getProjectsProjectIdImagesUntaggedRouteHandler,
  getProjectsProjectIdIterationsIterationIdExportRouteHandler,
  getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRouteHandler,
  getProjectsProjectIdIterationsIterationIdPerformanceImagesRouteHandler,
  getProjectsProjectIdIterationsIterationIdPerformanceRouteHandler,
  getProjectsProjectIdIterationsIterationIdRouteHandler,
  getProjectsProjectIdIterationsRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsProjectIdTagsRouteHandler,
  getProjectsProjectIdTagsTagIdRouteHandler,
  getProjectsRouteHandler,
  patchProjectsProjectIdIterationsIterationIdRouteHandler,
  patchProjectsProjectIdRouteHandler,
  patchProjectsProjectIdTagsTagIdRouteHandler,
  postProjectsImportRouteHandler,
  postProjectsProjectIdImagesFilesRouteHandler,
  postProjectsProjectIdImagesImageIdRegionproposalsRouteHandler,
  postProjectsProjectIdImagesPredictionsRouteHandler,
  postProjectsProjectIdImagesRegionsRouteHandler,
  postProjectsProjectIdImagesRouteHandler,
  postProjectsProjectIdImagesSuggestedCountRouteHandler,
  postProjectsProjectIdImagesSuggestedRouteHandler,
  postProjectsProjectIdImagesTagsRouteHandler,
  postProjectsProjectIdImagesUrlsRouteHandler,
  postProjectsProjectIdIterationsIterationIdExportRouteHandler,
  postProjectsProjectIdIterationsIterationIdPublishRouteHandler,
  postProjectsProjectIdPredictionsQueryRouteHandler,
  postProjectsProjectIdQuicktestImageRouteHandler,
  postProjectsProjectIdQuicktestUrlRouteHandler,
  postProjectsProjectIdTagsandregionsSuggestionsRouteHandler,
  postProjectsProjectIdTagsRouteHandler,
  postProjectsProjectIdTrainRouteHandler,
  postProjectsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(getDomainsDomainIdRoute, getDomainsDomainIdRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(postProjectsImportRoute, postProjectsImportRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(patchProjectsProjectIdRoute, patchProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdExportRoute, getProjectsProjectIdExportRouteHandler)
  .openapi(deleteProjectsProjectIdImagesRoute, deleteProjectsProjectIdImagesRouteHandler)
  .openapi(postProjectsProjectIdImagesRoute, postProjectsProjectIdImagesRouteHandler)
  .openapi(postProjectsProjectIdImagesFilesRoute, postProjectsProjectIdImagesFilesRouteHandler)
  .openapi(getProjectsProjectIdImagesIdRoute, getProjectsProjectIdImagesIdRouteHandler)
  .openapi(
    postProjectsProjectIdImagesPredictionsRoute,
    postProjectsProjectIdImagesPredictionsRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdImagesRegionsRoute,
    deleteProjectsProjectIdImagesRegionsRouteHandler,
  )
  .openapi(postProjectsProjectIdImagesRegionsRoute, postProjectsProjectIdImagesRegionsRouteHandler)
  .openapi(
    postProjectsProjectIdImagesSuggestedRoute,
    postProjectsProjectIdImagesSuggestedRouteHandler,
  )
  .openapi(
    postProjectsProjectIdImagesSuggestedCountRoute,
    postProjectsProjectIdImagesSuggestedCountRouteHandler,
  )
  .openapi(getProjectsProjectIdImagesTaggedRoute, getProjectsProjectIdImagesTaggedRouteHandler)
  .openapi(
    getProjectsProjectIdImagesTaggedCountRoute,
    getProjectsProjectIdImagesTaggedCountRouteHandler,
  )
  .openapi(deleteProjectsProjectIdImagesTagsRoute, deleteProjectsProjectIdImagesTagsRouteHandler)
  .openapi(postProjectsProjectIdImagesTagsRoute, postProjectsProjectIdImagesTagsRouteHandler)
  .openapi(getProjectsProjectIdImagesUntaggedRoute, getProjectsProjectIdImagesUntaggedRouteHandler)
  .openapi(
    getProjectsProjectIdImagesUntaggedCountRoute,
    getProjectsProjectIdImagesUntaggedCountRouteHandler,
  )
  .openapi(postProjectsProjectIdImagesUrlsRoute, postProjectsProjectIdImagesUrlsRouteHandler)
  .openapi(
    postProjectsProjectIdImagesImageIdRegionproposalsRoute,
    postProjectsProjectIdImagesImageIdRegionproposalsRouteHandler,
  )
  .openapi(getProjectsProjectIdIterationsRoute, getProjectsProjectIdIterationsRouteHandler)
  .openapi(
    deleteProjectsProjectIdIterationsIterationIdRoute,
    deleteProjectsProjectIdIterationsIterationIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdIterationsIterationIdRoute,
    getProjectsProjectIdIterationsIterationIdRouteHandler,
  )
  .openapi(
    patchProjectsProjectIdIterationsIterationIdRoute,
    patchProjectsProjectIdIterationsIterationIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdIterationsIterationIdExportRoute,
    getProjectsProjectIdIterationsIterationIdExportRouteHandler,
  )
  .openapi(
    postProjectsProjectIdIterationsIterationIdExportRoute,
    postProjectsProjectIdIterationsIterationIdExportRouteHandler,
  )
  .openapi(
    getProjectsProjectIdIterationsIterationIdPerformanceRoute,
    getProjectsProjectIdIterationsIterationIdPerformanceRouteHandler,
  )
  .openapi(
    getProjectsProjectIdIterationsIterationIdPerformanceImagesRoute,
    getProjectsProjectIdIterationsIterationIdPerformanceImagesRouteHandler,
  )
  .openapi(
    getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRoute,
    getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRouteHandler,
  )
  .openapi(
    deleteProjectsProjectIdIterationsIterationIdPublishRoute,
    deleteProjectsProjectIdIterationsIterationIdPublishRouteHandler,
  )
  .openapi(
    postProjectsProjectIdIterationsIterationIdPublishRoute,
    postProjectsProjectIdIterationsIterationIdPublishRouteHandler,
  )
  .openapi(deleteProjectsProjectIdPredictionsRoute, deleteProjectsProjectIdPredictionsRouteHandler)
  .openapi(
    postProjectsProjectIdPredictionsQueryRoute,
    postProjectsProjectIdPredictionsQueryRouteHandler,
  )
  .openapi(
    postProjectsProjectIdQuicktestImageRoute,
    postProjectsProjectIdQuicktestImageRouteHandler,
  )
  .openapi(postProjectsProjectIdQuicktestUrlRoute, postProjectsProjectIdQuicktestUrlRouteHandler)
  .openapi(getProjectsProjectIdTagsRoute, getProjectsProjectIdTagsRouteHandler)
  .openapi(postProjectsProjectIdTagsRoute, postProjectsProjectIdTagsRouteHandler)
  .openapi(deleteProjectsProjectIdTagsTagIdRoute, deleteProjectsProjectIdTagsTagIdRouteHandler)
  .openapi(getProjectsProjectIdTagsTagIdRoute, getProjectsProjectIdTagsTagIdRouteHandler)
  .openapi(patchProjectsProjectIdTagsTagIdRoute, patchProjectsProjectIdTagsTagIdRouteHandler)
  .openapi(
    postProjectsProjectIdTagsandregionsSuggestionsRoute,
    postProjectsProjectIdTagsandregionsSuggestionsRouteHandler,
  )
  .openapi(postProjectsProjectIdTrainRoute, postProjectsProjectIdTrainRouteHandler)

export default app
