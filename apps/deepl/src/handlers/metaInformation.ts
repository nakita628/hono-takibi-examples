import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2LanguagesRoute,
  getV2UsageRoute,
  getV3LanguagesResourcesRoute,
  getV3LanguagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metaInformationHandler = app
  .openapi(getV2UsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LanguagesResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
