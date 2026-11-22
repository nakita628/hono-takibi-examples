import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdAdvertisersIdRoute,
  getUserprofilesProfileIdAdvertisersRoute,
  patchUserprofilesProfileIdAdvertisersRoute,
  postUserprofilesProfileIdAdvertisersRoute,
  putUserprofilesProfileIdAdvertisersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advertisersHandler = app
  .openapi(getUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdAdvertisersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdAdvertisersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
