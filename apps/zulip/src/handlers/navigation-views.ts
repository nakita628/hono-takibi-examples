import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNavigationViewsFragmentRoute,
  getNavigationViewsRoute,
  patchNavigationViewsFragmentRoute,
  postNavigationViewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const navigationViewsHandler = app
  .openapi(getNavigationViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNavigationViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNavigationViewsFragmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNavigationViewsFragmentRoute, (c) => {
    throw new Error('Not implemented')
  })
