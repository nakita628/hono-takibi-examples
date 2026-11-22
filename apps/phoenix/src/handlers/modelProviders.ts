import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomModelProvidersRoute, getV1ModelProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const modelProvidersHandler = app
  .openapi(getV1ModelProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomModelProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
