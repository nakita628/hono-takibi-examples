import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiClassesIndexFeaturesRoute,
  getApiClassesIndexProficienciesRoute,
  getApiClassesIndexSpellsRoute,
  getApiClassesIndexSubclassesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classResourceListsHandler = app
  .openapi(getApiClassesIndexFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexProficienciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexSpellsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexSubclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
