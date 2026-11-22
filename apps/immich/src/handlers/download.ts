import { OpenAPIHono } from '@hono/zod-openapi'
import { postDownloadArchiveRoute, postDownloadInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const downloadHandler = app
  .openapi(postDownloadArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDownloadInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
