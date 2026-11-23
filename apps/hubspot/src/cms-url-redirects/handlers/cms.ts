import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsUrlRedirects202609UrlMappingsIdRoute,
  deleteCmsUrlRedirects202609UrlRedirectIdRoute,
  getCmsUrlRedirects202609Route,
  getCmsUrlRedirects202609UrlMappingsIdRoute,
  getCmsUrlRedirects202609UrlMappingsRoute,
  getCmsUrlRedirects202609UrlRedirectIdRoute,
  patchCmsUrlRedirects202609UrlRedirectIdRoute,
  postCmsUrlRedirects202609Route,
  postCmsUrlRedirects202609UrlMappingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsUrlRedirects202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsUrlRedirects202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsUrlRedirects202609UrlMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCmsUrlRedirects202609UrlMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsUrlRedirects202609UrlMappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsUrlRedirects202609UrlMappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsUrlRedirects202609UrlRedirectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsUrlRedirects202609UrlRedirectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCmsUrlRedirects202609UrlRedirectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
