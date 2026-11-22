import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVarPathRoute,
  getVarPathRoute,
  getVarsRoute,
  postVarPathRoute,
  putVarPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variablesHandler = app
  .openapi(deleteVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVarPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
