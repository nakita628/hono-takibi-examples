import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScriptsIdRoute,
  getScriptContextRoute,
  getScriptLanguageRoute,
  getScriptsIdRoute,
  getScriptsPainlessExecuteRoute,
  postScriptsIdContextRoute,
  postScriptsIdRoute,
  postScriptsPainlessExecuteRoute,
  putScriptsIdContextRoute,
  putScriptsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptHandler = app
  .openapi(getScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScriptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsPainlessExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsPainlessExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
