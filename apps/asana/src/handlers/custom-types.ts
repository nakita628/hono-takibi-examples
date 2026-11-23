import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomTypesCustomTypeGidRoute, getCustomTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const customTypesHandler = app
  .openapi(getCustomTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomTypesCustomTypeGidRoute, (c) => {
    throw new Error('Not implemented')
  })
