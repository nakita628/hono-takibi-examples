import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStudyStudyIdChapterIdRoute,
  getApiStudyByUsernameExportPgnRoute,
  getApiStudyByUsernameRoute,
  getApiStudyStudyIdChapterIdPgnRoute,
  getApiStudyStudyIdPgnRoute,
  headApiStudyStudyIdPgnRoute,
  postApiStudyRoute,
  postApiStudyStudyIdChapterIdMovesRoute,
  postApiStudyStudyIdChapterIdTagsRoute,
  postApiStudyStudyIdImportPgnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const studiesHandler = app
  .openapi(getApiStudyStudyIdChapterIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyStudyIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiStudyStudyIdPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyStudyIdImportPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyStudyIdChapterIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStudyStudyIdChapterIdMovesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyByUsernameExportPgnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStudyByUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStudyStudyIdChapterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
