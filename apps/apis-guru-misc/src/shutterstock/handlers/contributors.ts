import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ContributorsContributorIdCollectionsIdItemsRoute,
  getV2ContributorsContributorIdCollectionsIdRoute,
  getV2ContributorsContributorIdCollectionsRoute,
  getV2ContributorsContributorIdRoute,
  getV2ContributorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contributorsHandler = app
  .openapi(getV2ContributorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ContributorsContributorIdCollectionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
