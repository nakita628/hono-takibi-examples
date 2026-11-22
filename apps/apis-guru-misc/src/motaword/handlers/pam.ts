import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPamProfilesClientClientIdRoute,
  getPamProjectsProjectIdCompletionReportRoute,
  postPamChatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pamHandler = app
  .openapi(postPamChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPamProfilesClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPamProjectsProjectIdCompletionReportRoute, (c) => {
    throw new Error('Not implemented')
  })
