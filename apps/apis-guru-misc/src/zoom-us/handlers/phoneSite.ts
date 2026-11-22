import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneSitesSiteIdRoute,
  getPhoneSitesRoute,
  getPhoneSitesSiteIdRoute,
  patchPhoneSitesSiteIdRoute,
  postPhoneSitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneSiteHandler = app
  .openapi(getPhoneSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
