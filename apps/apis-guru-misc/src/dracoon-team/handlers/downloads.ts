import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4DownloadsAvatarUserIdUuidRoute,
  getV4DownloadsTokenRoute,
  getV4DownloadsZipTokenRoute,
  headV4DownloadsTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadsHandler = app
  .openapi(getV4DownloadsAvatarUserIdUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DownloadsZipTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4DownloadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV4DownloadsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
