import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiJobsIdAnnotationsIndexRoute,
  deleteApiJobsIdRoute,
  getApiJobsIdAnnotationsIndexRoute,
  getApiJobsIdDataMetaRoute,
  getApiJobsIdDataRoute,
  getApiJobsIdPreviewRoute,
  getApiJobsIdRoute,
  getApiJobsIdValidationLayoutRoute,
  getApiJobsRoute,
  patchApiJobsIdAnnotationsIndexRoute,
  patchApiJobsIdDataMetaRoute,
  patchApiJobsIdRoute,
  patchApiJobsIdValidationLayoutRoute,
  postApiJobsIdAnnotationsIndexRoute,
  postApiJobsIdDatasetExportRoute,
  postApiJobsRoute,
  putApiJobsIdAnnotationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiJobsIdAnnotationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdDataMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiJobsIdDatasetExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiJobsIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiJobsIdValidationLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
