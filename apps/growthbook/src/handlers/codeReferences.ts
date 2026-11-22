import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CodeRefsIdRoute, getV1CodeRefsRoute, postV1CodeRefsRoute } from '../routes'

const app = new OpenAPIHono()

export const codeReferencesHandler = app
  .openapi(postV1CodeRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CodeRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CodeRefsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
