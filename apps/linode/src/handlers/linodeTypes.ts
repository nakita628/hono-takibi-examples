import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLinodeTypesRoute, getApiVersionLinodeTypesTypeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const linodeTypesHandler = app
  .openapi(getApiVersionLinodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
