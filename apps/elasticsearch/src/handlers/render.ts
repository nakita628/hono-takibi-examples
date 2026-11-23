import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRenderTemplateIdRoute,
  getRenderTemplateRoute,
  postRenderTemplateIdRoute,
  postRenderTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const renderHandler = app
  .openapi(getRenderTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRenderTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRenderTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRenderTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
