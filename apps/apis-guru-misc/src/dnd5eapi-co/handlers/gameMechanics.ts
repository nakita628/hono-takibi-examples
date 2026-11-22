import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiConditionsIndexRoute,
  getApiDamageTypesIndexRoute,
  getApiMagicSchoolsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gameMechanicsHandler = app
  .openapi(getApiConditionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDamageTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMagicSchoolsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
