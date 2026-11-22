import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCssGroupIdCssesCssDomainIdRoute,
  getCssGroupIdCssesRoute,
  postCssGroupIdCssesCssDomainIdUpdatelabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cssesHandler = app
  .openapi(getCssGroupIdCssesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCssGroupIdCssesCssDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCssGroupIdCssesCssDomainIdUpdatelabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
