import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BannersIdRoute,
  getApiV1BannersRoute,
  postApiV1BannersDismissRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bannersHandler = app
  .openapi(getApiV1BannersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BannersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BannersDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
