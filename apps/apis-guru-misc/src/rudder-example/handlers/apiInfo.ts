import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfoDetailsEndpointNameRoute, getInfoRoute, getInfoSectionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const apiInfoHandler = app
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoDetailsEndpointNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoSectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
