import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpItemIdRoute,
  getUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpRoute,
  postUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpRoute,
  putUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipHandler = app
  .openapi(getUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
