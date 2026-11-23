import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddonLinkersLinkerKeyValuesRoute,
  deleteAddonLinkersLinkerKeyValuesValueIdRoute,
  deleteAddonRoute,
  getAddonLinkersLinkerKeyRoute,
  getAddonLinkersLinkerKeyValuesRoute,
  getAddonLinkersLinkerKeyValuesValueIdRoute,
  getAddonLinkersRoute,
  postAddonLinkersLinkerKeyValuesRoute,
  putAddonLinkersLinkerKeyValuesRoute,
  putAddonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addonHandler = app
  .openapi(deleteAddonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAddonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonLinkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonLinkersLinkerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddonLinkersLinkerKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonLinkersLinkerKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddonLinkersLinkerKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAddonLinkersLinkerKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddonLinkersLinkerKeyValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddonLinkersLinkerKeyValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
