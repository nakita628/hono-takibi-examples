import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminViewsEntityConfigurationsIdRoute,
  getAdminViewsEntitiesRoute,
  getAdminViewsEntityColumnsRoute,
  getAdminViewsEntityConfigurationsActiveRoute,
  getAdminViewsEntityConfigurationsIdRoute,
  getAdminViewsEntityConfigurationsRoute,
  postAdminViewsEntityConfigurationsActiveRoute,
  postAdminViewsEntityConfigurationsIdRoute,
  postAdminViewsEntityConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(getAdminViewsEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminViewsEntityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityConfigurationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminViewsEntityConfigurationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminViewsEntityConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminViewsEntityConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
