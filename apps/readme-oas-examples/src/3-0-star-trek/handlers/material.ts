import { OpenAPIHono } from '@hono/zod-openapi'
import { getMaterialRoute, getMaterialSearchRoute, postMaterialSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const materialHandler = app
  .openapi(getMaterialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMaterialSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMaterialSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
