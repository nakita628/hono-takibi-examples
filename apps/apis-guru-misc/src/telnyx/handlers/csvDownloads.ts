import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumbersCsvDownloadsIdRoute,
  getPhoneNumbersCsvDownloadsRoute,
  postPhoneNumbersCsvDownloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csvDownloadsHandler = app
  .openapi(getPhoneNumbersCsvDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersCsvDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersCsvDownloadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
