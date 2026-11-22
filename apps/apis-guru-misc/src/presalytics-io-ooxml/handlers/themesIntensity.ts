import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getThemesIntensityIdRoute,
  getThemesIntensityRoute,
  getThemesIntensityTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const themesIntensityHandler = app
  .openapi(getThemesIntensityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIntensityTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThemesIntensityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
