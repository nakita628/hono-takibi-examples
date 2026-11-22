import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2beta1NameOperationsRoute, getV2beta1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV2beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
