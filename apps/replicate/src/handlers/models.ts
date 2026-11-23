import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModelsModelOwnerModelNameRoute,
  deleteModelsModelOwnerModelNameVersionsVersionIdRoute,
  getModelsModelOwnerModelNameExamplesRoute,
  getModelsModelOwnerModelNameReadmeRoute,
  getModelsModelOwnerModelNameRoute,
  getModelsModelOwnerModelNameVersionsRoute,
  getModelsModelOwnerModelNameVersionsVersionIdRoute,
  getModelsRoute,
  patchModelsModelOwnerModelNameRoute,
  postModelsModelOwnerModelNamePredictionsRoute,
  postModelsModelOwnerModelNameVersionsVersionIdTrainingsRoute,
  postModelsRoute,
  queryModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(queryModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsModelOwnerModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelOwnerModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsModelOwnerModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelOwnerModelNameExamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsModelOwnerModelNamePredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelOwnerModelNameReadmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelOwnerModelNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsModelOwnerModelNameVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelOwnerModelNameVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsModelOwnerModelNameVersionsVersionIdTrainingsRoute, (c) => {
    throw new Error('Not implemented')
  })
