import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOndemandPagesOndemandIdPicturesPosterIdRoute,
  getOndemandPagesOndemandIdPicturesRoute,
  patchOndemandPagesOndemandIdPicturesPosterIdRoute,
  postOndemandPagesOndemandIdPicturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandPostersHandler = app
  .openapi(getOndemandPagesOndemandIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOndemandPagesOndemandIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdPicturesPosterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOndemandPagesOndemandIdPicturesPosterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
