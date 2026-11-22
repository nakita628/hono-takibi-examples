import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProfileIdFileRoute,
  getProfileRoute,
  patchProfileEmailRoute,
  patchProfileMobileRoute,
  patchProfileRoute,
  postProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProfileEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProfileMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
