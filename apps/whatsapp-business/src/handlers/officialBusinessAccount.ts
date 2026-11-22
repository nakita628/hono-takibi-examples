import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionPhoneNumberIDOfficialBusinessAccountRoute,
  postVersionPhoneNumberIDOfficialBusinessAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const officialBusinessAccountHandler = app
  .openapi(getVersionPhoneNumberIDOfficialBusinessAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDOfficialBusinessAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
