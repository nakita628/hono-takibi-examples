import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1DataplanesDataplaneIdRoute,
  getPublicV1DataplanesDataplaneIdRoute,
  getPublicV1DataplanesRoute,
  patchPublicV1DataplanesDataplaneIdRoute,
  postPublicV1DataplanesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicDataplanesHandler = app
  .openapi(getPublicV1DataplanesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1DataplanesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1DataplanesDataplaneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1DataplanesDataplaneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1DataplanesDataplaneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
