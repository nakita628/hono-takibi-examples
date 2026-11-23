import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSearchScrollRoute,
  deleteSearchScrollScrollIdRoute,
  getSearchRoute,
  getSearchScrollRoute,
  getSearchScrollScrollIdRoute,
  getSearchTemplateRoute,
  postSearchRoute,
  postSearchScrollRoute,
  postSearchScrollScrollIdRoute,
  postSearchTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchScrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSearchScrollScrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
