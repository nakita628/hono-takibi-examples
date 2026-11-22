import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwayAsRoute, getGetXrefListRoute } from '../routes'

const app = new OpenAPIHono()

export const downloadHandler = app
  .openapi(getGetPathwayAsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetXrefListRoute, (c) => {
    throw new Error('Not implemented')
  })
