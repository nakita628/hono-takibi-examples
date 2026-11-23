import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScriptsIdRoute,
  getScriptsIdRoute,
  getScriptsPainlessExecuteRoute,
  postScriptsIdContextRoute,
  postScriptsIdRoute,
  postScriptsPainlessExecuteRoute,
  putScriptsIdContextRoute,
  putScriptsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app
  .openapi(deleteScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsPainlessExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsPainlessExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
