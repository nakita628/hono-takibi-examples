import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute,
  deleteApiV2ProjectsProjectKeyViewsViewKeyRoute,
  getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyRoute,
  getApiV2ProjectsProjectKeyViewsRoute,
  getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeRoute,
  getApiV2ProjectsProjectKeyViewsViewKeyRoute,
  patchApiV2ProjectsProjectKeyViewsViewKeyRoute,
  postApiV2ProjectsProjectKeyViewsRoute,
  postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const viewsHandler = app
  .openapi(getApiV2ProjectsProjectKeyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyViewsViewKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewsViewKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProjectsProjectKeyViewsViewKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProjectsProjectKeyViewsViewKeyLinkResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewsViewKeyLinkedResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProjectsProjectKeyViewAssociationsResourceTypeResourceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
