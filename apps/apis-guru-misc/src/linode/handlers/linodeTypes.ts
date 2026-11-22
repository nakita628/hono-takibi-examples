import { OpenAPIHono } from '@hono/zod-openapi'
import { getLinodeTypesRoute, getLinodeTypesTypeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const linodeTypesHandler = app
  .openapi(getLinodeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinodeTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
