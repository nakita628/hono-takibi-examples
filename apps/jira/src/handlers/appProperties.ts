import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  deleteRestForge1AppPropertiesPropertyKeyRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute,
  getRestForge1AppPropertiesPropertyKeyRoute,
  getRestForge1AppPropertiesRoute,
  putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  putRestForge1AppPropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPropertiesHandler = app
  .openapi(getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestForge1AppPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestForge1AppPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestForge1AppPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestForge1AppPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
