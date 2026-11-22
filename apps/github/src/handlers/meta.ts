import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetaRoute, getOctocatRoute, getRoute, getVersionsRoute, getZenRoute } from '../routes'

const app = new OpenAPIHono()

export const metaHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOctocatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZenRoute, (c) => {
    throw new Error('Not implemented')
  })
