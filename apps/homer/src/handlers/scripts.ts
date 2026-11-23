import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScriptsScriptIdRoute,
  getScriptsRoute,
  getScriptsScriptIdRoute,
  postScriptsRoute,
  putScriptsScriptIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app
  .openapi(getScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
