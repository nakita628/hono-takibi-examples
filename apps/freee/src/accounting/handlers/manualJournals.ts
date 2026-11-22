import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ManualJournalsIdRoute,
  getApi1ManualJournalsIdRoute,
  getApi1ManualJournalsRoute,
  postApi1ManualJournalsRoute,
  putApi1ManualJournalsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manualJournalsHandler = app
  .openapi(getApi1ManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ManualJournalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ManualJournalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ManualJournalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ManualJournalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
