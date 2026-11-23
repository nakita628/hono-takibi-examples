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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdImagesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesSuggestedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesSuggestedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdImagesTaggedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdImagesTaggedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdImagesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdImagesUntaggedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdImagesUntaggedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdImagesImageIdRegionproposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIterationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdIterationsIterationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIterationsIterationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdIterationsIterationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIterationsIterationIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdIterationsIterationIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIterationsIterationIdPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIterationsIterationIdPerformanceImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdIterationsIterationIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdIterationsIterationIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdPredictionsQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdQuicktestImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdQuicktestUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTagsandregionsSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
