import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumberBlocksJobsIdRoute,
  getPhoneNumberBlocksJobsRoute,
  postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberBlocksHandler = app
  .openapi(getPhoneNumberBlocksJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumberBlocksJobsDeletePhoneNumberBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumberBlocksJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
