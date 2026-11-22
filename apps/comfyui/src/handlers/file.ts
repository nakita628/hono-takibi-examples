import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAssetsIdRoute,
  deleteApiAssetsIdTagsRoute,
  getApiAssetsIdContentRoute,
  getApiAssetsIdRoute,
  getApiAssetsRoute,
  getApiAssetsTagsRefineRoute,
  getApiExperimentModelsFolderRoute,
  getApiExperimentModelsRoute,
  getApiFilesMaskLayersRoute,
  getApiTagsRoute,
  getApiVhsQueryvideoRoute,
  getApiViewRoute,
  headApiAssetsHashHashRoute,
  postApiAssetsFromHashRoute,
  postApiAssetsIdTagsRoute,
  postApiAssetsRoute,
  postApiUploadImageRoute,
  postApiUploadMaskRoute,
  putApiAssetsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileHandler = app
  .openapi(getApiAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAssetsIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsFromHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiAssetsHashHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsTagsRefineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExperimentModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExperimentModelsFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFilesMaskLayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUploadMaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVhsQueryvideoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiViewRoute, (c) => {
    throw new Error('Not implemented')
  })
