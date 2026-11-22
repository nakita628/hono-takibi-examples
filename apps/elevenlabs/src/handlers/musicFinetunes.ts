import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MusicFinetunesFinetuneIdRoute,
  getV1MusicFinetunesFinetuneIdRoute,
  getV1MusicFinetunesRoute,
  patchV1MusicFinetunesFinetuneIdRoute,
  postV1MusicFinetunesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const musicFinetunesHandler = app
  .openapi(getV1MusicFinetunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MusicFinetunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MusicFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1MusicFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MusicFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
