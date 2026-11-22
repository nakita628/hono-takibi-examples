import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersProviderIdEmailtemplatesEmailTemplateIdRoute,
  getProvidersProviderIdEmailtemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailtemplatesHandler = app
  .openapi(getProvidersProviderIdEmailtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdEmailtemplatesEmailTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
