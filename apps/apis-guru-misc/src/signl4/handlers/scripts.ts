import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScriptsInstancesInstanceIdRoute,
  getScriptsInstancesInstanceIdRoute,
  getScriptsInstancesRoute,
  getScriptsInventoryParsedRoute,
  getScriptsInventoryParsedScriptIdRoute,
  getScriptsInventoryRoute,
  postScriptsInstancesInstanceIdDisableRoute,
  postScriptsInstancesInstanceIdEnableRoute,
  postScriptsInstancesRoute,
  putScriptsInstancesInstanceIdDataRoute,
  putScriptsInstancesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app
  .openapi(getScriptsInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScriptsInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsInstancesInstanceIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsInstancesInstanceIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsInstancesInstanceIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsInventoryParsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsInventoryParsedScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
