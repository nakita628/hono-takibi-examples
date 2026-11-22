import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2EditorialCategoriesRoute,
  getV2EditorialIdRoute,
  getV2EditorialImagesCategoriesRoute,
  getV2EditorialImagesIdRoute,
  getV2EditorialImagesLicensesRoute,
  getV2EditorialImagesLivefeedsIdItemsRoute,
  getV2EditorialImagesLivefeedsIdRoute,
  getV2EditorialImagesLivefeedsRoute,
  getV2EditorialImagesSearchRoute,
  getV2EditorialImagesUpdatedRoute,
  getV2EditorialLivefeedsIdItemsRoute,
  getV2EditorialLivefeedsIdRoute,
  getV2EditorialLivefeedsRoute,
  getV2EditorialSearchRoute,
  getV2EditorialUpdatedRoute,
  postV2EditorialImagesLicensesRoute,
  postV2EditorialLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const editorialImagesHandler = app
  .openapi(getV2EditorialCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EditorialImagesLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLivefeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLivefeedsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesLivefeedsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialImagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EditorialLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialLivefeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialLivefeedsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialLivefeedsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EditorialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
