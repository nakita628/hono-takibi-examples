import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
  getRestAtlassianConnect1AddonsAddonKeyPropertiesRoute,
  putRestAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyRoute,
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
