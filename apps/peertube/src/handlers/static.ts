import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStaticStreamingPlaylistsHlsFilenameRoute,
  getStaticStreamingPlaylistsHlsPrivateFilenameRoute,
  getStaticWebVideosFilenameRoute,
  getStaticWebVideosPrivateFilenameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const staticHandler = app
  .openapi(getStaticWebVideosFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaticWebVideosPrivateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaticStreamingPlaylistsHlsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStaticStreamingPlaylistsHlsPrivateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
