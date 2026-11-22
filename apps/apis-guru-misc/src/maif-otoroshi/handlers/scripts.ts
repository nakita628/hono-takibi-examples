import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiScriptsScriptIdRoute,
  getApiScriptsRoute,
  getApiScriptsScriptIdRoute,
  patchApiScriptsScriptIdRoute,
  postApiScriptsCompileRoute,
  postApiScriptsRoute,
  putApiScriptsScriptIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app
  .openapi(getApiScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScriptsCompileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
