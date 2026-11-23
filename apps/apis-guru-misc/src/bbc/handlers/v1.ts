import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BrandsPidFranchisesIndexRoute,
  getV1BrandsPidRoute,
  getV1EpisodesPidAncestorsIndexRoute,
  getV1EpisodesPidFormatsIndexRoute,
  getV1EpisodesPidGenreGroupsIndexRoute,
  getV1EpisodesPidRoute,
  getV1ImagesPidRoute,
  getV1MasterBrandsMbidRoute,
  getV1PromotionsPidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1BrandsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BrandsPidFranchisesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EpisodesPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EpisodesPidAncestorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EpisodesPidFormatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EpisodesPidGenreGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ImagesPidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MasterBrandsMbidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PromotionsPidRoute, (c) => {
    throw new Error('Not implemented')
  })
