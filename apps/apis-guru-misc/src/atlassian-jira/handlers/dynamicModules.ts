import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestAtlassianConnect1AppModuleDynamicRoute,
  getRestAtlassianConnect1AppModuleDynamicRoute,
  postRestAtlassianConnect1AppModuleDynamicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicModulesHandler = app
  .openapi(deleteRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
