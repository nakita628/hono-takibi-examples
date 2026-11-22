import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAiAvatarsAvatarIdRoute,
  getAiAvatarsRoute,
  patchAiAvatarsAvatarIdRoute,
  postAiAvatarsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const avatarsHandler = app
  .openapi(getAiAvatarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiAvatarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiAvatarsAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiAvatarsAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
