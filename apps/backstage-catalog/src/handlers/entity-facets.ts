import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntityFacetsRoute, postEntityFacetsRoute } from '../routes'

const app = new OpenAPIHono()

export const entityFacetsHandler = app
  .openapi(getEntityFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntityFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
