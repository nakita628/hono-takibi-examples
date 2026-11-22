import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdImagesRegionsRoute,
  deleteProjectsProjectIdImagesRoute,
  deleteProjectsProjectIdImagesTagsRoute,
  getProjectsProjectIdImagesIdRoute,
  getProjectsProjectIdImagesTaggedCountRoute,
  getProjectsProjectIdImagesTaggedRoute,
  getProjectsProjectIdImagesUntaggedCountRoute,
  getProjectsProjectIdImagesUntaggedRoute,
  postProjectsProjectIdImagesFilesRoute,
  postProjectsProjectIdImagesPredictionsRoute,
  postProjectsProjectIdImagesRegionsRoute,
  postProjectsProjectIdImagesRoute,
  postProjectsProjectIdImagesSuggestedCountRoute,
  postProjectsProjectIdImagesSuggestedRoute,
  postProjectsProjectIdImagesTagsRoute,
  postProjectsProjectIdImagesUrlsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imageApiHandler = app
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
