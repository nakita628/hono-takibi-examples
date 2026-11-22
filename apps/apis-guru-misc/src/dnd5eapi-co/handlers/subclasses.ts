import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiSubclassesIndexFeaturesRoute,
  getApiSubclassesIndexLevelsRoute,
  getApiSubclassesIndexLevelsSubclassLevelFeaturesRoute,
  getApiSubclassesIndexLevelsSubclassLevelRoute,
  getApiSubclassesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subclassesHandler = app
  .openapi(getApiSubclassesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubclassesIndexFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubclassesIndexLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubclassesIndexLevelsSubclassLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubclassesIndexLevelsSubclassLevelFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
