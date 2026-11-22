import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStaticStreamingPlaylistsHlsFilenameRoute,
  getStaticStreamingPlaylistsHlsPrivateFilenameRoute,
  getStaticWebseedFilenameRoute,
  getStaticWebseedPrivateFilenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const staticVideoFilesHandler = app
  .openapi(getStaticStreamingPlaylistsHlsPrivateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaticStreamingPlaylistsHlsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaticWebseedPrivateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaticWebseedFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
