import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModelsFullNameRoute,
  deleteModelsFullNameVersionsVersionRoute,
  getModelsFullNameRoute,
  getModelsFullNameVersionsRoute,
  getModelsFullNameVersionsVersionRoute,
  getModelsRoute,
  patchModelsFullNameRoute,
  patchModelsFullNameVersionsVersionFinalizeRoute,
  patchModelsFullNameVersionsVersionRoute,
  postModelsRoute,
  postModelsVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(postModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModelsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsFullNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsFullNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsFullNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsFullNameVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModelsFullNameVersionsVersionFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
