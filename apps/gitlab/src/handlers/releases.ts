import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdReleasesTagNameAssetsLinksLinkIdRoute,
  deleteApiV4ProjectsIdReleasesTagNameRoute,
  getApiV4GroupsIdReleasesRoute,
  getApiV4ProjectsIdReleasesPermalinkLatestRoute,
  getApiV4ProjectsIdReleasesPermalinkLatestSuffixPathRoute,
  getApiV4ProjectsIdReleasesRoute,
  getApiV4ProjectsIdReleasesTagNameAssetsLinksLinkIdRoute,
  getApiV4ProjectsIdReleasesTagNameAssetsLinksRoute,
  getApiV4ProjectsIdReleasesTagNameDownloadsDirectAssetPathRoute,
  getApiV4ProjectsIdReleasesTagNameRoute,
  postApiV4ProjectsIdReleasesRoute,
  postApiV4ProjectsIdReleasesTagNameAssetsLinksRoute,
  postApiV4ProjectsIdReleasesTagNameEvidenceRoute,
  putApiV4ProjectsIdReleasesTagNameAssetsLinksLinkIdRoute,
  putApiV4ProjectsIdReleasesTagNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releasesHandler = app
  .openapi(getApiV4ProjectsIdReleasesTagNameAssetsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdReleasesTagNameAssetsLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdReleasesTagNameAssetsLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdReleasesTagNameAssetsLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdReleasesTagNameAssetsLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdReleasesTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdReleasesTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdReleasesTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdReleasesTagNameDownloadsDirectAssetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdReleasesPermalinkLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdReleasesPermalinkLatestSuffixPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdReleasesTagNameEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
