import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiClassesIndexLevelsClassLevelFeaturesRoute,
  getApiClassesIndexLevelsClassLevelRoute,
  getApiClassesIndexLevelsRoute,
  getApiClassesIndexLevelsSpellLevelSpellsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classLevelsHandler = app
  .openapi(getApiClassesIndexLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexLevelsClassLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexLevelsClassLevelFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexLevelsSpellLevelSpellsRoute, (c) => {
    throw new Error('Not implemented')
  })
