import { OpenAPIHono } from '@hono/zod-openapi'
import { getMasterRoute, postMasterDisassociateRoute, postMasterRoute } from '../routes'

const app = new OpenAPIHono()

export const masterHandler = app
  .openapi(postMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMasterDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
