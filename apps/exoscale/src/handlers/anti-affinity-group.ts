import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAntiAffinityGroupIdRoute,
  getAntiAffinityGroupIdRoute,
  getAntiAffinityGroupRoute,
  postAntiAffinityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const antiAffinityGroupHandler = app
  .openapi(getAntiAffinityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAntiAffinityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAntiAffinityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAntiAffinityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
