import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrandingConfigurationRoute,
  getBrandingCssCssRoute,
  getBrandingCssRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandingHandler = app
  .openapi(getBrandingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingCssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrandingCssCssRoute, (c) => {
    throw new Error('Not implemented')
  })
