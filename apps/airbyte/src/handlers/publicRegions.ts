import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1RegionsRegionIdRoute,
  getPublicV1RegionsRegionIdRoute,
  getPublicV1RegionsRoute,
  patchPublicV1RegionsRegionIdRoute,
  postPublicV1RegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicRegionsHandler = app
  .openapi(getPublicV1RegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1RegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1RegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1RegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1RegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
