import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppCatalogsRoute, patchAppCatalogsRoute } from '../routes'

const app = new OpenAPIHono()

export const appCatalogsAppCatalogsHandler = app
  .openapi(getAppCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppCatalogsRoute, (c) => {
    throw new Error('Not implemented')
  })
