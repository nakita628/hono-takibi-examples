import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiClassesIndexMultiClassingRoute,
  getApiClassesIndexRoute,
  getApiClassesIndexSpellcastingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classHandler = app
  .openapi(getApiClassesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexMultiClassingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClassesIndexSpellcastingRoute, (c) => {
    throw new Error('Not implemented')
  })
