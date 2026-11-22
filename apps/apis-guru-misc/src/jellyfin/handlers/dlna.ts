import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDlnaProfilesProfileIdRoute,
  getDlnaProfileInfosRoute,
  getDlnaProfilesDefaultRoute,
  getDlnaProfilesProfileIdRoute,
  postDlnaProfilesProfileIdRoute,
  postDlnaProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlnaHandler = app
  .openapi(getDlnaProfileInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaProfilesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDlnaProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDlnaProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDlnaProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
