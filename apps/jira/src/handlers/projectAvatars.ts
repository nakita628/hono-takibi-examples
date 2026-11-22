import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectProjectIdOrKeyAvatarIdRoute,
  getRestApi3ProjectProjectIdOrKeyAvatarsRoute,
  postRestApi3ProjectProjectIdOrKeyAvatar2Route,
  putRestApi3ProjectProjectIdOrKeyAvatarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectAvatarsHandler = app
  .openapi(putRestApi3ProjectProjectIdOrKeyAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyAvatarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyAvatar2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyAvatarsRoute, (c) => {
    throw new Error('Not implemented')
  })
