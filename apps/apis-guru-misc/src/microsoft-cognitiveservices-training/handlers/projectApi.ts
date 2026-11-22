import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdIterationsIterationIdPublishRoute,
  deleteProjectsProjectIdIterationsIterationIdRoute,
  deleteProjectsProjectIdRoute,
  getProjectsProjectIdExportRoute,
  getProjectsProjectIdIterationsIterationIdExportRoute,
  getProjectsProjectIdIterationsIterationIdPerformanceImagesCountRoute,
  getProjectsProjectIdIterationsIterationIdPerformanceImagesRoute,
  getProjectsProjectIdIterationsIterationIdPerformanceRoute,
  getProjectsProjectIdIterationsIterationIdRoute,
  getProjectsProjectIdIterationsRoute,
  getProjectsProjectIdRoute,
  getProjectsRoute,
  patchProjectsProjectIdIterationsIterationIdRoute,
  patchProjectsProjectIdRoute,
  postProjectsImportRoute,
  postProjectsProjectIdIterationsIterationIdExportRoute,
  postProjectsProjectIdIterationsIterationIdPublishRoute,
  postProjectsProjectIdTrainRoute,
  postProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectApiHandler = app
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
  .openapi(postProjectsProjectIdTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
