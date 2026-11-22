import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUserprofilesProfileIdConversionsBatchinsertRoute,
  postUserprofilesProfileIdConversionsBatchupdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionsHandler = app
  .openapi(postUserprofilesProfileIdConversionsBatchinsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdConversionsBatchupdateRoute, (c) => {
    throw new Error('Not implemented')
  })
