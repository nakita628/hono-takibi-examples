import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestAtlassianConnect1AppModuleDynamicRoute,
  getWikiRestAtlassianConnect1AppModuleDynamicRoute,
  postWikiRestAtlassianConnect1AppModuleDynamicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicModulesHandler = app
  .openapi(getWikiRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWikiRestAtlassianConnect1AppModuleDynamicRoute, (c) => {
    throw new Error('Not implemented')
  })
