import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModelsModelIdDataBundlesDataBundleIdRoute,
  deleteModelsModelIdRoute,
  getModelsModelIdDataBundlesRoute,
  getModelsModelIdRoute,
  getModelsModelIdTrainingsRoute,
  getModelsRoute,
  optionsModelsModelIdDataBundlesDataBundleIdRoute,
  optionsModelsModelIdDataBundlesRoute,
  optionsModelsModelIdRoute,
  optionsModelsModelIdTrainingsRoute,
  optionsModelsModelIdTrainingsTrainingIdRoute,
  optionsModelsRoute,
  patchModelsModelIdDataBundlesDataBundleIdRoute,
  patchModelsModelIdRoute,
  patchModelsModelIdTrainingsTrainingIdRoute,
  postModelsModelIdDataBundlesRoute,
  postModelsModelIdTrainingsRoute,
  postModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelIdDataBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsModelsModelIdDataBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsModelIdDataBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsModelIdDataBundlesDataBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsModelsModelIdDataBundlesDataBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsModelIdDataBundlesDataBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelIdTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsModelsModelIdTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsModelIdTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsModelsModelIdTrainingsTrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsModelIdTrainingsTrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
